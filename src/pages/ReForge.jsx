import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

/* ── Molecule grid data ───────────────────────────────────────── */
const CANDIDATES = [
  { score: '0.94', feas: 'green', label: 'Pyridine', top: true },
  { score: '0.91', feas: 'green', label: 'Imidazole', top: false },
  { score: '0.88', feas: 'amber', label: 'Thiophene', top: false },
  { score: '0.85', feas: 'green', label: 'Oxazole', top: false },
  { score: '0.81', feas: 'amber', label: 'Pyrimidine', top: false },
  { score: '0.77', feas: 'red', label: 'Quinoline', top: false },
];

/* ── Realistic heterocycle SVG renderer (viewBox 0 0 52 52) ──────── */
function MolSVG({ index }) {
  const c = '#ff4444';
  const sw = 1.5;
  switch (index) {
    case 0: return (<> {/* Pyridine — flat-top 6-membered ring, N at upper-right vertex */}
      <polygon points="19,14 33,14 40,26 33,38 19,38 12,26" fill="none" stroke={c} strokeWidth={sw}/>
      <circle cx="26" cy="26" r="6" fill="none" stroke={c} strokeWidth="0.7" opacity="0.4"/>
      <text x="34" y="12" fill={c} fontSize="11" fontFamily="monospace" textAnchor="middle">N</text>
    </>);
    case 1: return (<> {/* Imidazole — 5-membered ring, NH at 1, N at 3; double bonds C2=N3 and C4=C5 */}
      <polygon points="26,13 38,22 33,38 19,38 14,22" fill="none" stroke={c} strokeWidth={sw}/>
      <line x1="27" y1="16" x2="35" y2="23" stroke={c} strokeWidth="1" opacity="0.7"/>
      <line x1="21" y1="36" x2="31" y2="36" stroke={c} strokeWidth="1" opacity="0.7"/>
      <text x="10" y="21" fill={c} fontSize="8.5" fontFamily="monospace" textAnchor="middle">NH</text>
      <text x="42" y="21" fill={c} fontSize="11" fontFamily="monospace" textAnchor="middle">N</text>
    </>);
    case 2: return (<> {/* Thiophene — 5-membered ring, S at top; double bonds C2=C3 and C4=C5 */}
      <polygon points="26,15 38,24 33,40 19,40 14,24" fill="none" stroke={c} strokeWidth={sw}/>
      <line x1="35" y1="25" x2="32" y2="37" stroke={c} strokeWidth="1" opacity="0.7"/>
      <line x1="20" y1="37" x2="17" y2="25" stroke={c} strokeWidth="1" opacity="0.7"/>
      <text x="26" y="12" fill={c} fontSize="11" fontFamily="monospace" textAnchor="middle">S</text>
    </>);
    case 3: return (<> {/* Oxazole — 5-membered ring, O at 1, N at 3; double bonds C2=N3 and C4=C5 */}
      <polygon points="26,13 38,22 33,38 19,38 14,22" fill="none" stroke={c} strokeWidth={sw}/>
      <line x1="27" y1="16" x2="35" y2="23" stroke={c} strokeWidth="1" opacity="0.7"/>
      <line x1="21" y1="36" x2="31" y2="36" stroke={c} strokeWidth="1" opacity="0.7"/>
      <text x="10" y="21" fill={c} fontSize="11" fontFamily="monospace" textAnchor="middle">O</text>
      <text x="42" y="21" fill={c} fontSize="11" fontFamily="monospace" textAnchor="middle">N</text>
    </>);
    case 4: return (<> {/* Pyrimidine — flat-top 6-membered ring, N at positions 1 and 3 */}
      <polygon points="19,14 33,14 40,26 33,38 19,38 12,26" fill="none" stroke={c} strokeWidth={sw}/>
      <circle cx="26" cy="26" r="6" fill="none" stroke={c} strokeWidth="0.7" opacity="0.4"/>
      <text x="19" y="12" fill={c} fontSize="10" fontFamily="monospace" textAnchor="middle">N</text>
      <text x="33" y="12" fill={c} fontSize="10" fontFamily="monospace" textAnchor="middle">N</text>
    </>);
    default: return (<> {/* Quinoline — fused benzene + pyridine bicyclic with aromatic circles */}
      <polygon points="8,19 17,12 27,19 27,34 17,41 8,34" fill="none" stroke={c} strokeWidth={sw}/>
      <circle cx="17" cy="27" r="4.5" fill="none" stroke={c} strokeWidth="0.7" opacity="0.4"/>
      <polygon points="27,19 37,12 45,19 45,34 37,41 27,34" fill="none" stroke={c} strokeWidth={sw}/>
      <circle cx="36" cy="27" r="4.5" fill="none" stroke={c} strokeWidth="0.7" opacity="0.4"/>
      <text x="37" y="11" fill={c} fontSize="10" fontFamily="monospace" textAnchor="middle">N</text>
    </>);
  }
}

/* ── Process steps ────────────────────────────────────────────── */
const STEPS = [
  {
    label: 'Draw or Paste Your Compound',
    detail: 'Use the built-in structure editor to draw your lead compound, or paste a SMILES string directly. ReForge accepts both. No file formats, no conversions.',
    vizTitle: 'Step 1 — Draw or Paste',
  },
  {
    label: 'Click the Fragment to Replace',
    detail: 'Click directly on the ring or substituent you want to replace. ReForge highlights the selected fragment in red and extracts its 3D shape automatically.',
    vizTitle: 'Step 2 — Select Fragment',
  },
  {
    label: 'Set Constraints',
    detail: 'Set simple physicochemical constraints: maximum molecular weight, LogP range, hydrogen bond donors, required solubility. All visible controls, no coding.',
    vizTitle: 'Step 3 — Set Constraints',
  },
  {
    label: 'Review the Ranked Grid',
    detail: 'Within seconds, a visual grid of candidate replacements appears. Each shows the changed fragment highlighted, a similarity score, a synthetic feasibility signal, and where relevant, a commercial building block link.',
    vizTitle: 'Step 4 — Ranked Results',
  },
];

/* ── Agent terminal steps ─────────────────────────────────────── */
const AGENT_STEPS = [
  {
    type: 'user',
    text: 'Scaffold hop compound CC1=CC=C(C=C1)NC(=O)C2CCNCC2. Replace the piperidine ring. MW < 450, LogP < 4.5, avoid CYP3A4 inhibitors.',
    delay: 400,
  },
  {
    type: 'reason',
    lines: [
      'Parsing SMILES string — valid structure, MW 218.3.',
      'Identifying fragment to replace: piperidine ring (N-containing 6-membered saturated cycle) at atoms 7–12.',
      'The user wants bioisosteric replacements that preserve the basic amine character of piperidine while improving the ADMET profile.',
      'Constraint set: MW < 450 leaves ~232 Da headroom after the tolyl-amide core (MW 134). CYP3A4 flag is critical — piperidines are known 3A4 time-dependent inhibitors.',
    ],
    delay: 1100,
  },
  {
    type: 'tool',
    name: 'extract_fragment',
    params: [['smiles', '"CC1=CC=C(C=C1)NC(=O)C2CCNCC2"'], ['atom_indices', '[7, 8, 9, 10, 11, 12]'], ['conformer_method', '"ETKDG"']],
    result: { type: 'success', lines: ['✓ Fragment: piperidine-4-yl · MW 84.1 · clogP 1.2', '✓ 3D shape tensor: (128, 3) · ESP map generated', '✓ Pharmacophoric points: 2 HBD, 1 HBA, 1 positive ionizable'] },
    delay: 1100, progress: 1,
  },
  {
    type: 'reason',
    lines: [
      'Fragment extracted successfully. The piperidine has a positive ionizable center (basic N, pKa ~10.4).',
      'Key constraint: the NH must be preserved or mimicked — it likely forms a direct H-bond with the target.',
      'Good candidates: morpholine (lower pKa ~6.9), piperazine, THP, azetidine, pyrrolidine, oxetane hybrids.',
    ],
    delay: 1000,
  },
  {
    type: 'tool',
    name: 'search_scaffold_library',
    params: [['shape_tensor', '<Tensor 128×3>'], ['esp_map', '<ESP Surface>'], ['min_3d_similarity', '0.70'], ['library', '"Enamine REAL + ChEMBL bioisosteres"']],
    result: { type: 'info', lines: ['↳ 50,241,888 fragments searched · 1,204 candidates ≥ 0.70 sim', '↳ Top similarity: 0.96 (morpholine), 0.94 (piperazine), 0.91 (THP)', '↳ Diversity clusters: 14 distinct scaffold classes identified'] },
    delay: 1300, progress: 2,
  },
  {
    type: 'tool',
    name: 'predict_admet_batch',
    params: [['candidates', '1204'], ['endpoints', '["MW","LogP","HBD","HBA","Caco2","hERG","CYP3A4","Ames"]'], ['filter_passing_only', 'true']],
    result: { type: 'success', lines: ['✓ MW < 450:        812 / 1204 pass', '✓ LogP < 4.5:      634 / 812  pass', '✓ CYP3A4 safe:     291 / 634  pass', '✓ hERG safe:       247 / 291  pass', '→ 247 candidates pass all ADMET filters'] },
    delay: 1500, progress: 3,
  },
  {
    type: 'tool',
    name: 'check_patent_freedom',
    params: [['candidates', '247'], ['databases', '["USPTO","EPO","WIPO"]'], ['similarity_threshold', '0.85']],
    result: { type: 'success', lines: ['✓ 231 / 247 candidates in clear patent space', '⚠  16 flagged as close to granted claims (Tanimoto ≥ 0.85)'] },
    delay: 1100, progress: 4,
  },
  {
    type: 'tool',
    name: 'query_vendor_catalog',
    params: [['building_blocks', 'top_18_fragments'], ['vendors', '["Enamine","Sigma-Aldrich","Fluorochem"]'], ['max_delivery_weeks', '4']],
    result: { type: 'info', lines: ['↳ 14 / 18 available commercially', '↳ Avg. price: $280–420 / g · lead time: 1–3 weeks', '↳ 3 fragments require custom synthesis (flagged amber)', '↳ 1 fragment not commercially available (flagged red)'] },
    delay: 1100, progress: 5,
  },
  {
    type: 'done',
    text: '18 ranked candidates ready · 14 commercially available · 231 clear of patent · top hit: morpholine (sim 0.96, $310/g, Enamine)',
    delay: 500,
  },
];

const AGENT_FEATS = [
  { icon: '◈', label: 'Fragment Extraction', desc: 'Isolates the selected scaffold, generates its 3D conformation and electrostatic surface map.' },
  { icon: '⊕', label: 'Library Search', desc: 'Queries a 50M+ fragment library by 3D shape and pharmacophoric overlap, not 2D fingerprint.' },
  { icon: '◉', label: 'ADMET Prediction', desc: 'Runs a multi-endpoint neural network across all candidates simultaneously — MW, LogP, Caco-2, hERG, Ames.' },
  { icon: '⊘', label: 'Patent Freedom Check', desc: 'Cross-references shortlisted candidates against granted patents in real time.' },
  { icon: '◎', label: 'Vendor Catalog Lookup', desc: 'Surfaces commercially available building blocks from Enamine, Sigma-Aldrich, and others with live pricing.' },
];

/* ── Step Viz content ─────────────────────────────────────────── */
function StepViz({ stepIndex }) {
  if (stepIndex === 0) return (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <div style={{ display: 'inline-block', border: '1px dashed rgba(255,255,255,0.2)', padding: '24px 32px', marginBottom: 16 }}>
        <svg width="160" height="70" viewBox="0 0 160 70">
          <polygon points="30,10 55,10 67,30 55,50 30,50 18,30" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
          <line x1="67" y1="30" x2="85" y2="30" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
          <text x="80" y="27" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">N</text>
          <line x1="87" y1="30" x2="105" y2="20" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
          <line x1="105" y1="20" x2="123" y2="30" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
          <polygon points="123,20 138,15 152,20 152,38 138,43 123,38" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="3,2"/>
        </svg>
      </div>
      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#8b939b', border: '1px solid rgba(255,255,255,0.06)', padding: '8px 14px', display: 'inline-block' }}>CC1=CC=C(C=C1)NC(=O)C2...</div>
      <div style={{ fontSize: 10, color: '#8b939b', textTransform: 'uppercase', letterSpacing: 1, marginTop: 12 }}>Draw editor or SMILES paste</div>
    </div>
  );

  if (stepIndex === 1) return (
    <div style={{ textAlign: 'center', padding: '20px 0' }}>
      <svg width="200" height="90" viewBox="0 0 200 90" style={{ display: 'block', margin: '0 auto 12px' }}>
        <polygon points="30,15 55,15 67,35 55,55 30,55 18,35" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <line x1="67" y1="35" x2="85" y2="35" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <text x="80" y="32" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">N</text>
        <line x1="87" y1="35" x2="105" y2="25" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <line x1="105" y1="25" x2="123" y2="35" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <rect x="120" y="15" width="68" height="50" rx="2" fill="rgba(255,68,68,0.1)" stroke="#ff4444" strokeWidth="1.5" strokeDasharray="4,2"/>
        <polygon points="128,25 143,20 158,25 158,45 143,50 128,45" fill="none" stroke="#ff4444" strokeWidth="2"/>
        <text x="134" y="38" fill="#ff4444" fontSize="8" fontFamily="monospace">OH</text>
        <text x="121" y="14" fill="#ff4444" fontSize="8" fontFamily="monospace" fontWeight="bold">← selected</text>
        <circle cx="145" cy="62" r="3" fill="#ff4444" opacity="0.6"/>
        <text x="150" y="66" fill="#ff4444" fontSize="8" fontFamily="monospace">click</text>
      </svg>
      <div style={{ fontSize: 10, color: '#ff4444', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 700 }}>Fragment extracted · 3D shape captured</div>
    </div>
  );

  if (stepIndex === 2) return (
    <div style={{ padding: '8px 0' }}>
      {[['MW max', '450 Da'], ['LogP max', '4.5'], ['HBD max', '3'], ['Solubility', '> 50 μM']].map(([l, v]) => (
        <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.45)' }}>{l}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 100, height: 3, background: 'rgba(255,255,255,0.08)', position: 'relative' }}>
              <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '65%', background: '#ff4444' }}/>
              <div style={{ position: 'absolute', top: -5, left: '63%', width: 10, height: 10, background: '#fff', borderRadius: '50%', cursor: 'pointer' }}/>
            </div>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: '#fff', minWidth: 52, textAlign: 'right' }}>{v}</span>
          </div>
        </div>
      ))}
      <div style={{ marginTop: 16, textAlign: 'center' }}>
        <div style={{ fontSize: 10, color: '#8b939b', textTransform: 'uppercase', letterSpacing: 1 }}>Candidates passing filters</div>
        <div style={{ fontSize: 28, fontWeight: 700, color: '#fff' }}>18</div>
      </div>
    </div>
  );

  // Step 4
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
        {CANDIDATES.map((c, i) => (
          <div key={i} style={{ border: `1px solid ${c.top ? 'rgba(255,68,68,0.4)' : 'rgba(255,255,255,0.06)'}`, background: 'rgba(255,255,255,0.02)', padding: '10px 8px', textAlign: 'center' }}>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', letterSpacing: 1, marginBottom: 4 }}>#{i + 1}</div>
            <svg width="40" height="40" viewBox="0 0 52 52" style={{ display: 'block', margin: '0 auto 4px' }}>
              <MolSVG index={i}/>
            </svg>
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#ff4444' }}>{c.score}</div>
            <div style={{ fontSize: 8, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{c.label}</div>
            <div style={{ fontSize: 8, fontWeight: 700, padding: '1px 5px', marginTop: 4, display: 'inline-block', ...(c.feas === 'green' ? { color: '#4caf50', border: '1px solid rgba(76,175,80,0.3)' } : c.feas === 'amber' ? { color: '#ff9800', border: '1px solid rgba(255,152,0,0.3)' } : { color: '#ff4444', border: '1px solid rgba(255,68,68,0.3)' }) }}>
              {c.feas === 'green' ? '● Synth' : c.feas === 'amber' ? '◑ Mod' : '○ Cplx'}
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: 14, fontSize: 10, color: '#8b939b', textTransform: 'uppercase', letterSpacing: 1 }}>18 candidates · sorted by 3D similarity</div>
    </div>
  );
}

/* ── Agent Terminal ───────────────────────────────────────────── */
function AgentTerminal() {
  const [rows, setRows] = useState([]);
  const [progress, setProgress] = useState(0);
  const [toolCount, setToolCount] = useState(0);
  const [status, setStatus] = useState('running');
  const logRef = useRef(null);
  const timersRef = useRef([]);

  const clearTimers = () => {
    timersRef.current.forEach(t => clearTimeout(t));
    timersRef.current = [];
  };

  const start = () => {
    clearTimers();
    setRows([]);
    setProgress(0);
    setToolCount(0);
    setStatus('running');

    let cum = 300;
    AGENT_STEPS.forEach((step) => {
      cum += step.delay;
      const d = cum;
      const t = setTimeout(() => {
        setRows(prev => [...prev, step]);
        if (step.progress) {
          setProgress(step.progress);
          setToolCount(step.progress);
        }
        if (step.type === 'done') setStatus('complete');
        requestAnimationFrame(() => {
          if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
        });
      }, d);
      timersRef.current.push(t);
    });
  };

  // Auto-start on mount
  useEffect(() => {
    start();
    return () => clearTimers();
  }, []);

  return (
    <div>
      <div style={{ background: '#050505', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', fontFamily: "'IBM Plex Mono', monospace" }}>
        {/* toolbar */}
        <div style={{ background: '#0a0a0a', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff4444' }}/>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff9800' }}/>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4caf50' }}/>
          <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.3)', marginLeft: 6 }}>ReForge Agent</span>
          <span style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: status === 'running' ? '#4caf50' : 'rgba(255,255,255,0.3)' }}>
            {status === 'running' ? '● Running' : '● Complete'}
          </span>
        </div>
        {/* log body */}
        <div ref={logRef} className="rf-terminal-body">
          {rows.map((step, idx) => <AgentRow key={idx} step={step}/>)}
        </div>
        {/* progress bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1, height: 2, background: 'rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, height: '100%', background: '#ff4444', transition: 'width 0.6s ease', width: `${(progress / 5) * 100}%` }}/>
          </div>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: 1, whiteSpace: 'nowrap' }}>{toolCount} / 5 tools</span>
        </div>
      </div>
      <div style={{ marginTop: 12, textAlign: 'right' }}>
        <button onClick={start} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.4)', fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, padding: '6px 14px', cursor: 'pointer', transition: 'all 0.2s' }}
          onMouseOver={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
          onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; }}>
          ↺ Replay
        </button>
      </div>
    </div>
  );
}

function AgentRow({ step }) {
  if (step.type === 'user') return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 0 4px', borderBottom: '1px solid rgba(255,255,255,0.04)', marginBottom: 4 }}>
      <span style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.3)', flexShrink: 0, paddingTop: 1 }}>You</span>
      <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>{step.text}</span>
    </div>
  );

  if (step.type === 'reason') return (
    <div style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(255,255,255,0.06)', padding: '10px 14px', margin: '4px 0', fontSize: 11, lineHeight: 1.7, color: 'rgba(255,255,255,0.38)' }}>
      <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.2)', marginBottom: 7 }}>⟳ Reasoning</div>
      {step.lines.map((l, i) => (
        <div key={i} style={{ marginBottom: 5, paddingLeft: 10, borderLeft: '1px solid rgba(255,255,255,0.1)' }}>— {l}</div>
      ))}
    </div>
  );

  if (step.type === 'tool') return (
    <div style={{ margin: '6px 0', border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '7px 12px', background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ fontSize: 10 }}>⚡</span>
        <span style={{ fontSize: 11, fontWeight: 600, color: '#ff4444', letterSpacing: 0.5 }}>{step.name}()</span>
        <span style={{ marginLeft: 'auto', fontSize: 9, color: 'rgba(255,255,255,0.2)', letterSpacing: 1 }}>TOOL CALL</span>
      </div>
      <div style={{ padding: '8px 12px', fontSize: 11, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
        {step.params.map(([k, v], i) => (
          <div key={i}><span style={{ color: 'rgba(255,255,255,0.35)' }}>{k}</span>=<span style={{ color: '#a8d8a8' }}>{v}</span></div>
        ))}
      </div>
      <div style={{ padding: '8px 12px', borderTop: '1px solid rgba(255,255,255,0.05)', fontSize: 11, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, borderLeft: `2px solid ${step.result.type === 'success' ? '#4caf50' : '#2196f3'}` }}>
        {step.result.lines.map((l, i) => <div key={i}>{l}</div>)}
      </div>
    </div>
  );

  if (step.type === 'done') return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0 4px' }}>
      <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(76,175,80,0.15)', border: '1px solid rgba(76,175,80,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, flexShrink: 0 }}>✓</div>
      <div style={{ fontSize: 12, fontWeight: 600, color: '#4caf50' }}>{step.text}</div>
    </div>
  );

  return null;
}

/* ── Main Page ────────────────────────────────────────────────── */
export default function ReForge() {
  const [activeStep, setActiveStep] = useState(0);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'ReForge',
    applicationCategory: 'ScientificApplication',
    operatingSystem: 'Web',
    description: 'AI-powered scaffold hopping platform for medicinal chemists. Find structurally distinct alternatives to lead compounds using 3D shape matching, ADMET prediction, and patent freedom checking.',
    offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' },
    publisher: { '@type': 'Organization', name: 'Hyperionsoft', url: 'https://hyperionsoft.com' },
    featureList: [
      '3D shape and electrostatic scoring',
      'ADMET multi-endpoint prediction',
      'Patent freedom checking against USPTO, EPO, WIPO',
      'Vendor catalog lookup with live pricing',
      '50M+ fragment library search',
    ],
  };

  return (
    <>
      <SEO
        title="ReForge — Scaffold Hopping for Medicinal Chemists | Hyperionsoft"
        description="ReForge gives medicinal chemists a self-service scaffold hopping platform. Find structurally distinct lead compound alternatives with 3D scoring, ADMET prediction, and patent checks — in under 15 minutes."
        keywords="scaffold hopping, medicinal chemistry AI, bioisostere replacement, ADMET prediction, drug discovery platform, lead optimization, fragment replacement, patent freedom"
        structuredData={structuredData}
      />
      <Header />

      <style>{`
        @keyframes rfFadeInUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes rfFadeIn   { from { opacity:0; } to { opacity:1; } }
        @keyframes rfPulse    { 0%,100% { opacity:0.6; } 50% { opacity:1; } }
        @keyframes rfScanLine { from { transform:translateY(-100%); } to { transform:translateY(400%); } }
        @keyframes rfBounce   { 0%,100% { transform:translateX(-50%) translateY(0); } 50% { transform:translateX(-50%) translateY(-8px); } }

        .rf-btn {
          display: inline-block; padding: 14px 36px;
          border: 2px solid #fff; color: #fff;
          background: transparent; font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 1.5px; cursor: pointer; transition: all 0.3s ease;
          text-decoration: none;
        }
        .rf-btn:hover { background: #fff; color: #000; }
        .rf-btn-sm {
          display: inline-block; padding: 10px 22px; font-size: 12px; letter-spacing: 1px;
          border: 1px solid rgba(255,255,255,0.3); color: rgba(255,255,255,0.7);
          background: transparent; font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700; text-transform: uppercase; cursor: pointer;
          transition: all 0.3s ease; text-decoration: none;
        }
        .rf-btn-sm:hover { border-color: #fff; color: #fff; }
        .rf-nav-link:hover { color: #fff !important; }
        .rf-step:hover .rf-step-title { color: rgba(255,255,255,0.7) !important; }
        .rf-diff-card:hover { background: rgba(255,255,255,0.02) !important; }
        .rf-impact-card:hover { border-color: rgba(255,68,68,0.25) !important; transform: translateY(-4px); }
        .rf-mol-card:hover { border-color: rgba(255,255,255,0.2) !important; background: rgba(255,255,255,0.04) !important; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); }

        /* ── Layout utilities ── */
        .rf-hero-pad { padding: 140px 60px 80px; }
        .rf-section-inner { max-width: 1240px; margin: 0 auto; padding: 0 60px; }
        .rf-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .rf-stats-row { display: flex; margin-top: 52px; flex-wrap: wrap; gap: 0; }
        .rf-stat-divider { width: 1px; height: 44px; background: rgba(255,255,255,0.15); margin-right: 36px; align-self: center; }
        .rf-grid-3col { display: grid; grid-template-columns: repeat(3, 1fr); }
        .rf-grid-2col-80 { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; max-width: 1100px; margin: 0 auto; }
        .rf-grid-2col-72 { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; max-width: 1160px; margin: 0 auto; }
        .rf-grid-2col-who { display: grid; grid-template-columns: 1fr 1fr; max-width: 900px; margin: 0 auto; }
        .rf-impact-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .rf-sticky-panel { position: sticky; top: 100px; }
        .rf-terminal-body { padding: 18px 20px; min-height: 520px; max-height: 520px; overflow-y: auto; display: flex; flex-direction: column; gap: 0; }

        /* ── Tablet (≤ 1100px): collapse hero to single column, hide mockup ── */
        @media (max-width: 1100px) {
          .rf-hero-grid { grid-template-columns: 1fr; gap: 0; }
          .rf-hero-mockup { display: none; }
          .rf-grid-2col-80 { gap: 48px; }
          .rf-grid-2col-72 { gap: 48px; }
        }

        /* ── Mobile (≤ 768px) ── */
        @media (max-width: 768px) {
          .rf-hero-pad { padding: 100px 20px 60px; }
          .rf-section-inner { padding: 0 20px; }
          .rf-stats-row { flex-direction: column; gap: 20px; margin-top: 32px; }
          .rf-stat-divider { display: none; }
          .rf-grid-3col { grid-template-columns: 1fr; }
          .rf-grid-3col > * { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .rf-grid-3col > *:last-child { border-bottom: none; }
          .rf-grid-2col-80 { grid-template-columns: 1fr; gap: 40px; max-width: 100%; }
          .rf-grid-2col-72 { grid-template-columns: 1fr; gap: 40px; max-width: 100%; }
          .rf-grid-2col-who { grid-template-columns: 1fr; max-width: 100%; }
          .rf-grid-2col-who > *:first-child { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,0.06); }
          .rf-impact-grid { grid-template-columns: 1fr; }
          .rf-sticky-panel { position: static; }
          .rf-terminal-body { min-height: 320px; max-height: 380px; }
          .rf-btn { padding: 12px 24px; font-size: 12px; }
          .rf-btn-sm { padding: 12px 18px; font-size: 11px; }
        }

        /* ── Small mobile (≤ 480px) ── */
        @media (max-width: 480px) {
          .rf-hero-pad { padding: 90px 16px 48px; }
          .rf-section-inner { padding: 0 16px; }
          .rf-grid-3col > *, .rf-grid-2col-who > * { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>

      {/* HERO */}
      <section className="rf-hero-pad" style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'hidden', background: '#000' }}>
        {/* Background photo */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/terry-vlisidis-RflgrtzU3Cw-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.35 }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.82) 100%)' }}/>
        <div className="rf-hero-grid" style={{ maxWidth: 1240, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Left: copy */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,68,68,0.08)', border: '1px solid rgba(255,68,68,0.25)', padding: '6px 14px', marginBottom: 24, opacity: 0, animation: 'rfFadeInUp 0.7s ease forwards 0.2s' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#ff4444', animation: 'rfPulse 2s infinite', display: 'inline-block' }}/>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 4, color: '#ff4444' }}>AI Drug Discovery Platform</span>
            </div>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(42px,6vw,82px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, lineHeight: 1.02, marginBottom: 22, opacity: 0, animation: 'rfFadeInUp 0.8s ease forwards 0.4s' }}>
              Scaffold<br/>Hopping.<br/><span style={{ color: '#ff4444' }}>In Minutes.</span>
            </h1>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 17, lineHeight: 1.75, color: '#8b939b', maxWidth: 480, marginBottom: 36, opacity: 0, animation: 'rfFadeInUp 0.8s ease forwards 0.6s' }}>
              ReForge gives medicinal chemists a self-service platform to find structurally distinct alternatives to a lead compound — no computational chemist required. From a stuck scaffold to a ranked grid of candidates in under fifteen minutes.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', opacity: 0, animation: 'rfFadeInUp 0.8s ease forwards 0.8s' }}>
              <a className="rf-btn" href="#access">Request Access</a>
              <a className="rf-btn-sm" href="#how" style={{ padding: '14px 24px', fontSize: 13 }}>See How It Works</a>
            </div>
            {/* Stats */}
            <div className="rf-stats-row" style={{ opacity: 0, animation: 'rfFadeInUp 0.8s ease forwards 1s' }}>
              <div style={{ display: 'flex', flexDirection: 'column', paddingRight: 36 }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 36, fontWeight: 700, color: '#fff', lineHeight: 1 }}>&lt;15 min</span>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: '#8b939b', textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>From compound to candidates</span>
              </div>
              <div className="rf-stat-divider"/>
              <div style={{ display: 'flex', flexDirection: 'column', paddingRight: 36 }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 36, fontWeight: 700, color: '#fff', lineHeight: 1 }}>3D</span>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: '#8b939b', textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>Shape + electrostatic scoring</span>
              </div>
              <div className="rf-stat-divider"/>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 36, fontWeight: 700, color: '#fff', lineHeight: 1 }}>Zero</span>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, color: '#8b939b', textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>Computational expertise needed</span>
              </div>
            </div>
          </div>

          {/* Right: Molecule UI Mockup */}
          <div className="rf-hero-mockup" style={{ opacity: 0, animation: 'rfFadeIn 1s ease forwards 0.9s' }}>
            <div style={{ position: 'relative', background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', aspectRatio: '1 / 1.05' }}>
              {/* Scan line */}
              <div style={{ position: 'absolute', left: 0, right: 0, height: 2, background: 'linear-gradient(to right, transparent, rgba(255,68,68,0.4), transparent)', animation: 'rfScanLine 3s ease-in-out infinite', pointerEvents: 'none', zIndex: 2 }}/>
              {/* Toolbar */}
              <div style={{ background: '#0f0f0f', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff4444' }}/>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff9800' }}/>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4caf50' }}/>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.4)', marginLeft: 4 }}>ReForge — Scaffold Hopping</span>
                <span style={{ marginLeft: 'auto', fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#ff4444' }}>● Live</span>
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>Input Compound</div>
                <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 12px', border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', marginBottom: 14, position: 'relative' }}>
                  <span style={{ position: 'absolute', top: 6, left: 10, fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'rgba(255,255,255,0.25)' }}>Lead</span>
                  <svg width="220" height="90" viewBox="0 0 220 90">
                    {/* p-Tolyl (4-methylphenyl) ring — aromatic */}
                    <polygon points="55,20 75,20 85,37 75,54 55,54 45,37" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
                    <circle cx="65" cy="37" r="8" fill="none" stroke="rgba(255,255,255,0.28)" strokeWidth="0.8"/>
                    <line x1="65" y1="20" x2="65" y2="13" stroke="rgba(255,255,255,0.38)" strokeWidth="1.2"/>
                    <text x="65" y="10" fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="monospace" textAnchor="middle">Me</text>
                    {/* Amide linkage: –NH–C(=O)– */}
                    <line x1="85" y1="37" x2="100" y2="37" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
                    <text x="101" y="34" fill="rgba(255,255,255,0.55)" fontSize="11" fontFamily="monospace">N</text>
                    <text x="110" y="32" fill="rgba(255,255,255,0.35)" fontSize="9" fontFamily="monospace">H</text>
                    <line x1="116" y1="37" x2="127" y2="27" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
                    {/* C=O double bond branching upward */}
                    <line x1="127" y1="27" x2="121" y2="16" stroke="rgba(255,255,255,0.42)" strokeWidth="1.3"/>
                    <line x1="130" y1="28" x2="124" y2="17" stroke="rgba(255,255,255,0.42)" strokeWidth="1.3"/>
                    <text x="117" y="13" fill="rgba(255,255,255,0.45)" fontSize="10" fontFamily="monospace">O</text>
                    {/* Bond C to selected ring */}
                    <line x1="127" y1="27" x2="148" y2="37" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
                    {/* Selection highlight box */}
                    <rect x="149" y="19" width="63" height="46" rx="2" fill="rgba(255,68,68,0.08)" stroke="rgba(255,68,68,0.5)" strokeWidth="1" strokeDasharray="3,2"/>
                    {/* Phenol ring (selected fragment) — aromatic */}
                    <polygon points="156,28 169,23 182,28 182,46 169,51 156,46" fill="none" stroke="#ff4444" strokeWidth="1.5"/>
                    <circle cx="169" cy="37" r="5.5" fill="none" stroke="#ff4444" strokeWidth="0.7" opacity="0.45"/>
                    {/* OH at top vertex, F at right */}
                    <line x1="169" y1="23" x2="169" y2="15" stroke="#ff4444" strokeWidth="1.2"/>
                    <text x="169" y="12" fill="#ff4444" fontSize="11" fontFamily="monospace" textAnchor="middle">OH</text>
                    <line x1="182" y1="37" x2="197" y2="37" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5"/>
                    <text x="200" y="41" fill="rgba(255,255,255,0.35)" fontSize="10" fontFamily="monospace">F</text>
                    <text x="150" y="19" fill="#ff4444" fontSize="9" fontFamily="monospace" fontWeight="bold">selected</text>
                  </svg>
                  {/* Compound name and SMILES */}
                  <div style={{ marginTop: 10, paddingTop: 10, borderTop: '1px solid rgba(255,255,255,0.06)', width: '100%' }}>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.75)', fontWeight: 600, letterSpacing: 0.5, marginBottom: 4 }}>HPIOS-4221</div>
                    <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: '#8b939b', wordBreak: 'break-all', lineHeight: 1.5 }}>CC1=CC=C(C=C1)NC(=O)c2ccc(O)c(F)c2</div>
                  </div>
                </div>
                {/* Constraints row */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                  {[['MW max', '450 Da'], ['LogP max', '4.5'], ['HBD max', '3']].map(([l, v]) => (
                    <div key={l} style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', padding: '7px 10px' }}>
                      <div style={{ fontSize: 9, color: '#8b939b', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 3 }}>{l}</div>
                      <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: '#fff' }}>{v}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 10, color: '#ff4444', textTransform: 'uppercase', letterSpacing: 1, fontWeight: 700, marginBottom: 12, textAlign: 'center', animation: 'rfPulse 2s infinite' }}>
                  ↑ Fragment selected — 18 candidates ranked
                </div>
                <div style={{ fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>Ranked Candidates</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8 }}>
                  {CANDIDATES.map((c, i) => (
                    <div key={i} className="rf-mol-card" style={{ border: `1px solid ${c.top ? 'rgba(255,68,68,0.35)' : 'rgba(255,255,255,0.06)'}`, background: 'rgba(255,255,255,0.02)', padding: '10px 8px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, cursor: 'pointer', transition: 'border-color 0.2s, background 0.2s', position: 'relative' }}>
                      <span style={{ position: 'absolute', top: 4, left: 6, fontSize: 8, fontWeight: 700, color: 'rgba(255,255,255,0.25)', letterSpacing: 1 }}>#{i + 1}</span>
                      <svg width="52" height="52" viewBox="0 0 52 52">
                        <MolSVG index={i}/>
                        {c.top && <circle cx="26" cy="26" r="22" fill="none" stroke="rgba(255,68,68,0.15)" strokeWidth="0.5"/>}
                      </svg>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, color: '#ff4444', fontWeight: 600 }}>{c.score}</span>
                      <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 9, color: 'rgba(255,255,255,0.5)' }}>{c.label}</span>
                      <span style={{ fontSize: 8, fontWeight: 700, textTransform: 'uppercase', padding: '2px 6px', ...(c.feas === 'green' ? { color: '#4caf50', border: '1px solid rgba(76,175,80,0.3)', background: 'rgba(76,175,80,0.07)' } : c.feas === 'amber' ? { color: '#ff9800', border: '1px solid rgba(255,152,0,0.3)', background: 'rgba(255,152,0,0.07)' } : { color: '#ff4444', border: '1px solid rgba(255,68,68,0.3)', background: 'rgba(255,68,68,0.07)' }) }}>
                        {c.feas === 'green' ? '● Synth.' : c.feas === 'amber' ? '◑ Moderate' : '○ Complex'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll arrow */}
        <div style={{ position: 'absolute', bottom: 28, left: '50%', animation: 'rfBounce 2s infinite', zIndex: 3 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.4 }}>
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ background: '#0a0a0a', padding: '90px 0', borderTop: '1px solid rgba(255,255,255,0.06)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/omar-lopez-rincon-XkPNEqAhlaI-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08, filter: 'grayscale(100%)' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,10,0.65)' }}/>
        <div className="rf-section-inner" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 640, margin: '0 auto 56px', textAlign: 'center' }}>
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 4, color: '#ff4444', display: 'block', marginBottom: 14, fontFamily: "'Barlow Condensed', sans-serif" }}>The Problem</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(26px,3.8vw,50px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, lineHeight: 1.1 }}>Three reasons a lead compound stalls</h2>
          </div>
          <div className="rf-grid-3col" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              {
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 18, display: 'block' }}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
                title: 'Patent Block',
                body: "The scaffold is covered by a competitor's IP. You need a structurally distinct alternative with equivalent biological activity, and you need it before the next board meeting.",
              },
              {
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 18, display: 'block' }}><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>,
                title: 'Metabolic Liability',
                body: "Something in the scaffold keeps creating DMPK problems. Substituent tweaks aren't fixing it. The core structure itself needs to change — but to what?",
              },
              {
                icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ff4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 18, display: 'block' }}><path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3"/><path d="M12 8a4 4 0 0 0-4 4"/><circle cx="12" cy="5" r="3"/></svg>,
                title: 'Synthesis Bottleneck',
                body: "The scaffold is too synthetically complex to scale. Every route your chemistry team has tried is either low-yielding or requires reagents you can't source reliably.",
              },
            ].map((card, i) => (
              <div key={i} style={{ padding: '40px 32px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                {card.icon}
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 12 }}>{card.title}</h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, lineHeight: 1.75, color: '#8b939b' }}>{card.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 16, lineHeight: 1.75, color: '#8b939b', maxWidth: 620, margin: '0 auto' }}>
              In each case, the traditional answer is to queue a request to a computational chemist — a process that takes a week or more.{' '}
              <span style={{ color: '#fff', fontWeight: 600 }}>ReForge gives you a third option.</span>
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ background: '#000', padding: '100px 0' }}>
        <div className="rf-section-inner">
          <div className="rf-grid-2col-80">
            <div>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 4, color: '#ff4444', display: 'block', marginBottom: 16 }}>How It Works</span>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(26px,3.8vw,50px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, lineHeight: 1.1, marginBottom: 20 }}>Run the analysis yourself</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 16, lineHeight: 1.75, color: '#8b939b', marginBottom: 44, maxWidth: 440 }}>Four steps. No command line. No queue. No waiting for computational chemistry resources that are always stretched across five projects at once.</p>
              <div>
                {STEPS.map((s, i) => (
                  <div key={i} className="rf-step" onClick={() => setActiveStep(i)} style={{ display: 'flex', gap: 28, padding: '22px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', borderTop: i === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none', cursor: 'pointer' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 32 }}>
                      <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: 1, color: i === activeStep ? '#ff4444' : 'rgba(255,255,255,0.2)', transition: 'color 0.3s' }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {i < STEPS.length - 1 && <div style={{ flex: 1, width: 1, background: 'rgba(255,255,255,0.06)', minHeight: 14, marginTop: 4 }}/>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div className="rf-step-title" style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 15, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: i === activeStep ? '#fff' : 'rgba(255,255,255,0.4)', transition: 'color 0.3s', marginBottom: 0 }}>{s.label}</div>
                      <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#8b939b', lineHeight: 1.65, overflow: 'hidden', maxHeight: i === activeStep ? 80 : 0, opacity: i === activeStep ? 1 : 0, marginTop: i === activeStep ? 8 : 0, transition: 'max-height 0.4s ease, opacity 0.4s ease, margin-top 0.3s' }}>{s.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Visual panel */}
            <div className="rf-sticky-panel">
              <div style={{ background: '#0f0f0f', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden' }}>
                <div style={{ background: '#141414', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff4444' }}/>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff9800' }}/>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#4caf50' }}/>
                  <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: 'rgba(255,255,255,0.3)', marginLeft: 4 }}>{STEPS[activeStep].vizTitle}</span>
                </div>
                <div style={{ padding: 28, fontFamily: "'Barlow Condensed', sans-serif" }}>
                  <StepViz stepIndex={activeStep}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI AGENT IN ACTION */}
      <section id="agent" style={{ background: '#000', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="rf-section-inner">
          <div className="rf-grid-2col-72">
            {/* Left */}
            <div>
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 4, color: '#ff4444', display: 'block', marginBottom: 16 }}>Under the Hood</span>
              <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(26px,3.8vw,50px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, lineHeight: 1.1, marginBottom: 20 }}>An AI agent orchestrating the entire pipeline</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 16, lineHeight: 1.75, color: '#8b939b', maxWidth: 460, marginBottom: 28 }}>When you click Run, ReForge dispatches an AI agent that calls a sequence of specialized tools — each one an expert model for a different part of the problem. You see results. The agent handles the rest.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {AGENT_FEATS.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '10px 0', borderBottom: i < AGENT_FEATS.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}>
                    <div style={{ width: 32, height: 32, border: '1px solid rgba(255,68,68,0.25)', background: 'rgba(255,68,68,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <span style={{ color: '#ff4444', fontSize: 14 }}>{f.icon}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, color: '#fff', marginBottom: 3 }}>{f.label}</div>
                      <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#8b939b', lineHeight: 1.5 }}>{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: terminal */}
            <AgentTerminal/>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section style={{ background: '#0a0a0a', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="rf-section-inner">
          <div style={{ maxWidth: 640, margin: '0 auto 56px', textAlign: 'center' }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 4, color: '#ff4444', display: 'block', marginBottom: 14 }}>Why ReForge</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(26px,3.8vw,50px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, lineHeight: 1.1, marginBottom: 16 }}>More than a bioisostere lookup</h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, lineHeight: 1.75, color: '#8b939b', maxWidth: 520, margin: '0 auto' }}>Three scoring dimensions make every suggestion physically meaningful in the context of your specific compound — not in isolation.</p>
          </div>
          <div className="rf-grid-3col" style={{ border: '1px solid rgba(255,255,255,0.06)', maxWidth: 1100, margin: '0 auto' }}>
            {[
              { num: '01', tag: '3D Scoring', title: 'Shape + Electrostatic Match', body: "Every candidate is scored against the 3D shape and electrostatic character of the original fragment — not just its 2D fingerprint. A fragment that looks similar on paper but occupies the binding pocket differently gets ranked down." },
              { num: '02', tag: 'Context-Aware', title: 'Rebuilt in Full Chemical Context', body: "Suggestions are evaluated in the actual chemical context of your compound. A fragment that scores well in isolation but creates strained geometry or disrupts an adjacent pharmacophoric feature gets penalized before you ever see it." },
              { num: '03', tag: 'Synthesis-Ready', title: 'Feasibility Filtered Upfront', body: "Every result carries a green/amber/red synthetic feasibility indicator. Where key building blocks are commercially available from Enamine or Sigma, ReForge shows you that directly — with a link and approximate price." },
            ].map((card, i) => (
              <div key={i} className="rf-diff-card" style={{ padding: '44px 36px', borderRight: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none', transition: 'background 0.3s' }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 56, fontWeight: 700, color: 'rgba(255,255,255,0.04)', lineHeight: 1, marginBottom: 16 }}>{card.num}</div>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#ff4444', marginBottom: 12 }}>{card.tag}</div>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 17, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, color: '#fff', marginBottom: 12 }}>{card.title}</h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, lineHeight: 1.7, color: '#8b939b' }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ background: '#0a0a0a', padding: '100px clamp(20px, 5vw, 60px)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/omar-lopez-rincon-XkPNEqAhlaI-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.18, filter: 'grayscale(85%) brightness(0.6)' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.72) 50%, rgba(10,10,10,0.92) 100%)' }}/>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 200, color: 'rgba(255,255,255,0.03)', position: 'absolute', top: -20, left: 40, lineHeight: 1, pointerEvents: 'none' }}>"</div>
        <div style={{ maxWidth: 860, margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 'clamp(20px,2.5vw,30px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.6, color: '#fff', maxWidth: 820, position: 'relative', zIndex: 2, marginBottom: 28 }}>
            The most common reason a computational suggestion gets ignored is that the synthetic chemist takes one look at it and says it can't be made in a reasonable number of steps. ReForge filters for that upfront rather than leaving it to be discovered after the meeting.
          </p>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 14, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#8b939b' }}>— ReForge Design Principle</p>
        </div>
      </section>

      {/* VISUAL BANNER */}
      <div style={{ position: 'relative', height: 340, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/nastya-dulhiier-x2cooe_MaG8-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 40%' }}/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.75) 100%)' }}/>
        <div style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px' }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 4, color: '#ff4444', display: 'block', marginBottom: 16 }}>Drug Discovery, Accelerated</span>
          <p style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(22px,3vw,38px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#fff', maxWidth: 760, lineHeight: 1.2 }}>
            From 50 million fragments to 18 ranked candidates — in a single session.
          </p>
        </div>
      </div>

      {/* IMPACT */}
      <section id="impact" style={{ background: '#000', padding: '100px 0' }}>
        <div className="rf-section-inner">
          <div style={{ maxWidth: 640, margin: '0 auto 56px', textAlign: 'center' }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 4, color: '#ff4444', display: 'block', marginBottom: 14 }}>Impact</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(26px,3.8vw,50px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, lineHeight: 1.1, marginBottom: 16 }}>Three places it shows up</h2>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, lineHeight: 1.75, color: '#8b939b', maxWidth: 500, margin: '0 auto' }}>Measurable impact on the three bottlenecks that define the pace of every drug discovery program.</p>
          </div>
          <div className="rf-impact-grid">
            <div className="rf-impact-card" style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.06)', padding: '36px 30px', transition: 'border-color 0.3s, transform 0.3s' }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 48, fontWeight: 700, color: '#fff', lineHeight: 1, marginBottom: 8 }}>1 week<br/><span style={{ fontSize: 18, color: '#ff4444' }}>→ 1 session</span></div>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, margin: '16px 0 10px' }}>Time to New Direction</h3>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, lineHeight: 1.75, color: '#8b939b' }}>What previously required queuing a request, waiting for availability, receiving suggestions, and iterating becomes a session a medicinal chemist can run before the Friday project meeting.</p>
            </div>
            <div className="rf-impact-card" style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.06)', padding: '36px 30px', transition: 'border-color 0.3s, transform 0.3s' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 12 }}><path d="M3 3h18v18H3zM9 9h6v6H9z"/></svg>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>Earlier ADMET Fixes</h3>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, lineHeight: 1.75, color: '#8b939b' }}>Addressing scaffold liabilities early — when they're cheap to fix — rather than after expensive optimization campaigns have been built around a flawed core. Late-stage attrition is the industry's most expensive problem.</p>
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#8b939b' }}>Savings target</span>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', marginTop: 4 }}>Phase II attrition</div>
              </div>
            </div>
            <div className="rf-impact-card" style={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.06)', padding: '36px 30px', transition: 'border-color 0.3s, transform 0.3s' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 12 }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 10 }}>IP Navigation</h3>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, lineHeight: 1.75, color: '#8b939b' }}>Identifying novel chemotypes in clear patent space at the point in a project when that flexibility is most valuable — early, not after synthesis investment has already been made around a blocked scaffold.</p>
              <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#8b939b' }}>Best time to act</span>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 22, fontWeight: 700, color: '#fff', marginTop: 4 }}>Lead ID stage</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section id="pricing" style={{ background: '#0a0a0a', padding: '100px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="rf-section-inner">
          <div style={{ maxWidth: 640, margin: '0 auto 56px', textAlign: 'center' }}>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 4, color: '#ff4444', display: 'block', marginBottom: 14 }}>Who It's For</span>
            <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(26px,3.8vw,50px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, lineHeight: 1.1 }}>Built for small and mid-size biotechs</h2>
          </div>
          <div className="rf-grid-2col-who" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            {[
              {
                tag: 'Small Biotech',
                title: 'No Computational Chemist on Staff',
                body: "ReForge effectively gives the medicinal chemistry team a capability they couldn't previously afford or access. A full scaffold hopping workflow, available as a self-service tool, for the cost of a SaaS subscription.",
                bullets: ['No onboarding or training required', 'Results before the next project meeting', 'No methodology expertise needed'],
                border: true,
              },
              {
                tag: 'Mid-Size Biotech',
                title: 'Computational Resources Stretched Thin',
                body: "ReForge handles the routine scaffold hopping requests that would otherwise consume a disproportionate share of a computational chemist's time, freeing them for higher-complexity structural biology work.",
                bullets: ['Offload routine scaffold hopping', 'More design cycles per unit time', 'Compchems freed for complex work'],
                border: false,
              },
            ].map((col, i) => (
              <div key={i} style={{ padding: '44px 40px', borderRight: col.border ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2, color: '#ff4444', display: 'block', marginBottom: 18 }}>{col.tag}</span>
                <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 20, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 14 }}>{col.title}</h3>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, lineHeight: 1.75, color: '#8b939b', marginBottom: 24 }}>{col.body}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {col.bullets.map((b, j) => (
                    <li key={j} style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.65)', paddingLeft: 16, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#ff4444' }}>→</span>{b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, lineHeight: 1.75, color: '#8b939b', textAlign: 'center', marginTop: 32 }}>
            In both cases the result is the same:{' '}
            <span style={{ color: '#fff' }}>more design ideas evaluated per unit of time, with better filtering on what's actually worth synthesizing.</span>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="access" style={{ background: '#ff4444', padding: '100px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 4, color: 'rgba(255,255,255,0.7)', display: 'block', marginBottom: 16 }}>Get Started</span>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: 'clamp(28px,4vw,50px)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: '#fff', marginBottom: 16 }}>Run Your First Scaffold Hop Today</h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 18, color: 'rgba(255,255,255,0.8)', marginBottom: 40, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            ReForge is available now for medicinal chemistry teams at small and mid-size biotechs. Request access and we'll have you running analyses within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="rf-btn" style={{ borderColor: '#fff', color: '#fff', background: 'transparent' }}
              onMouseOver={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#ff4444'; }}
              onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fff'; }}>
              Request Access
            </Link>
            <a href="/assets/hyperionsoft_drugdiscovery_whitepaper.pdf" target="_blank" rel="noopener noreferrer" className="rf-btn" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'rgba(255,255,255,0.8)', background: 'transparent' }}
              onMouseOver={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff'; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}>
              Download White Paper
            </a>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
