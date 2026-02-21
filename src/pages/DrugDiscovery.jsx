import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

/* ─── Molecular Canvas ──────────────────────────────────────────────── */
const MolecularCanvas = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const ATOM_COLORS = ['#ff4444', '#ffffff', '#8b939b', '#ff8844', '#44aaff'];
    const NUM_ATOMS = 38;

    const atoms = Array.from({ length: NUM_ATOMS }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 4 + Math.random() * 5,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      color: ATOM_COLORS[Math.floor(Math.random() * ATOM_COLORS.length)],
    }));

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', () => { mouse.current = { x: -9999, y: -9999 }; });

    const BOND_DIST = 110;
    const MOUSE_REPEL = 90;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update positions
      atoms.forEach(a => {
        const dx = a.x - mouse.current.x;
        const dy = a.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL && dist > 0) {
          a.vx += (dx / dist) * 0.4;
          a.vy += (dy / dist) * 0.4;
        }
        a.vx *= 0.97;
        a.vy *= 0.97;
        a.x += a.vx;
        a.y += a.vy;
        if (a.x < 0 || a.x > canvas.width) { a.vx *= -1; a.x = Math.max(0, Math.min(canvas.width, a.x)); }
        if (a.y < 0 || a.y > canvas.height) { a.vy *= -1; a.y = Math.max(0, Math.min(canvas.height, a.y)); }
      });

      // Draw bonds
      for (let i = 0; i < atoms.length; i++) {
        for (let j = i + 1; j < atoms.length; j++) {
          const dx = atoms[i].x - atoms[j].x;
          const dy = atoms[i].y - atoms[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < BOND_DIST) {
            const alpha = (1 - d / BOND_DIST) * 0.6;
            ctx.beginPath();
            ctx.moveTo(atoms[i].x, atoms[i].y);
            ctx.lineTo(atoms[j].x, atoms[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw atoms
      atoms.forEach(a => {
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = a.color;
        ctx.shadowColor = a.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animRef.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', height: '100%', display: 'block', cursor: 'crosshair' }}
    />
  );
};

/* ─── Lead Form ─────────────────────────────────────────────────────── */
const LeadForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.company.trim()) e.company = 'Required';
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitting(true);
    setSubmitError('');
    try {
      const res = await fetch('/.netlify/functions/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Server error');
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="dd-form-success">
        <div className="dd-form-success-icon">✓</div>
        <h3>Download Ready</h3>
        <p>Your capabilities brief is downloading now.</p>
        <a
          href="/assets/hyperionsoft-drug-discovery-capabilities.pdf"
          download
          className="btn-dd"
          style={{ marginTop: '20px', display: 'inline-block' }}
        >
          Download PDF
        </a>
      </div>
    );
  }

  return (
    <form className="dd-lead-form" onSubmit={handleSubmit} noValidate>
      <div className="dd-form-row">
        <div className="dd-form-group">
          <label className="dd-form-label">Full Name *</label>
          <input
            className={`dd-form-input${errors.name ? ' error' : ''}`}
            type="text"
            value={form.name}
            onChange={e => { setForm({ ...form, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
            placeholder="Dr. Jane Smith"
          />
          {errors.name && <span className="dd-form-error">{errors.name}</span>}
        </div>
        <div className="dd-form-group">
          <label className="dd-form-label">Work Email *</label>
          <input
            className={`dd-form-input${errors.email ? ' error' : ''}`}
            type="email"
            value={form.email}
            onChange={e => { setForm({ ...form, email: e.target.value }); setErrors({ ...errors, email: '' }); }}
            placeholder="jane@pharma.com"
          />
          {errors.email && <span className="dd-form-error">{errors.email}</span>}
        </div>
      </div>
      <div className="dd-form-row">
        <div className="dd-form-group">
          <label className="dd-form-label">Organization *</label>
          <input
            className={`dd-form-input${errors.company ? ' error' : ''}`}
            type="text"
            value={form.company}
            onChange={e => { setForm({ ...form, company: e.target.value }); setErrors({ ...errors, company: '' }); }}
            placeholder="Pharma Co."
          />
          {errors.company && <span className="dd-form-error">{errors.company}</span>}
        </div>
        <div className="dd-form-group">
          <label className="dd-form-label">Role</label>
          <select
            className="dd-form-input dd-form-select"
            value={form.role}
            onChange={e => setForm({ ...form, role: e.target.value })}
          >
            <option value="">Select role…</option>
            <option>Research Scientist</option>
            <option>Computational Chemist</option>
            <option>Business Development</option>
            <option>C-Suite / Executive</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <button type="submit" className="btn-dd" style={{ width: '100%', marginTop: '10px' }} disabled={submitting}>
        {submitting ? 'Sending…' : 'Download Capabilities Brief'}
      </button>
      {submitError && <p className="dd-form-error" style={{ marginTop: '8px' }}>{submitError}</p>}
      <p className="dd-form-disclaimer">
        We respect your privacy. No spam, ever.
      </p>
    </form>
  );
};

/* ─── Main Page ─────────────────────────────────────────────────────── */
const DrugDiscovery = () => {
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      number: '01',
      title: 'Target Identification & Validation',
      tag: 'Discovery',
      description:
        'We deploy graph neural networks and multi-omics integration to identify and prioritize novel disease targets from genomic, proteomic, and clinical data—cutting the target-hunting phase from years to months.',
      capabilities: [
        'Multi-omics data fusion (genomics, proteomics, metabolomics)',
        'Disease pathway network analysis',
        'CRISPR screen data interpretation',
        'Biomarker discovery and stratification',
        'Target druggability scoring',
      ],
      outcomes: '60–80% reduction in target validation time',
    },
    {
      number: '02',
      title: 'Molecular Design & Optimization',
      tag: 'Design',
      description:
        'Generative models trained on billions of chemical structures design novel molecules with specified ADMET properties, synthesizability constraints, and potency profiles—replacing months of wet-lab iteration.',
      capabilities: [
        'De novo molecular generation (diffusion / VAE / transformer)',
        'ADMET property prediction pipelines',
        'Scaffold hopping and lead optimization',
        'Retrosynthetic route planning',
        'Multi-parameter optimization (potency + selectivity + safety)',
      ],
      outcomes: '10× faster lead optimization cycles',
    },
    {
      number: '03',
      title: 'De Novo Drug Design',
      tag: 'Generation',
      description:
        'Our proprietary generative platform designs novel drug candidates from scratch—no template molecule required. Constrained by target geometry, ADMET profiles, and synthesizability, it explores chemical space no human chemist has charted.',
      capabilities: [
        'Structure-based generative design (diffusion models)',
        'Fragment-based & scaffold-free generation',
        'Multi-objective optimization (potency, selectivity, toxicity)',
        'Synthesizability scoring and route suggestion',
        'Automated virtual screening of generated libraries',
      ],
      outcomes: '50× larger explored chemical space per cycle',
    },
  ];

  const steps = [
    { label: 'Discovery Intake', detail: 'Understand the disease biology, existing data assets, and competitive landscape. Define success criteria and KPIs with your science team.' },
    { label: 'Data Audit & Prep', detail: 'Assess and harmonize proprietary data: assay results, genomic datasets, clinical records. Build feature pipelines and data governance frameworks.' },
    { label: 'Model Development', detail: 'Train and validate task-specific models—GNNs for target scoring, generative diffusion models for molecule design, survival models for trial endpoints.' },
    { label: 'Experimental Integration', detail: 'Close the loop between computation and wet-lab. Prioritized hits feed directly into synthesis queues; results retrain models in an active learning cycle.' },
    { label: 'Candidate Handoff', detail: 'Deliver a fully documented lead candidate package—synthesis routes, predicted ADMET profiles, selectivity data, and model uncertainty reports ready for your preclinical team.' },
    { label: 'Deployment & Scale', detail: 'Move validated models into production APIs your scientists use daily—integrated with ELN, LIMS, and pipeline management systems.' },
  ];

  return (
    <>
      <SEO
        title="AI Drug Discovery | Hyperionsoft"
        description="Accelerate drug discovery with AI and machine learning. Target identification, molecular design, and de novo drug design powered by Hyperionsoft's proprietary platform."
        keywords="AI drug discovery, de novo drug design, molecular design AI, target identification AI, computational drug discovery, generative chemistry, drug discovery platform"
        image="/assets/drug-discovery-hero.jpg"
      />
      <Header />

      {/* ── Hero ── */}
      <section className="dd-hero">
        <div className="dd-hero-canvas">
          <MolecularCanvas />
        </div>
        <div className="dd-hero-overlay" />
        <div className="dd-hero-content">
          <span className="dd-hero-tag">Proprietary Platform · AI · Machine Learning · Data</span>
          <h1 className="dd-hero-title">AI-Powered<br />Drug Discovery.<br />Built Different.</h1>
          <p className="dd-hero-subtitle">
            We bring AI, machine learning, and data management together in a proprietary platform
            engineered to compress the drug discovery timeline—from target identification
            to lead candidate, faster than any conventional approach.
          </p>
          <div className="dd-hero-actions">
            <a href="#pillars" className="btn-dd">Explore Our Platform</a>
            <a href="#capabilities" className="btn-dd btn-dd-outline">Get Capabilities Brief</a>
          </div>
          <div className="dd-hero-stats">
            <div className="dd-stat">
              <span className="dd-stat-number">10×</span>
              <span className="dd-stat-label">Faster Lead Optimization</span>
            </div>
            <div className="dd-stat-divider" />
            <div className="dd-stat">
              <span className="dd-stat-number">50×</span>
              <span className="dd-stat-label">Larger Chemical Space Explored</span>
            </div>
            <div className="dd-stat-divider" />
            <div className="dd-stat">
              <span className="dd-stat-number">60%</span>
              <span className="dd-stat-label">Reduction in Target Validation Time</span>
            </div>
          </div>
        </div>
        <a href="#pillars" className="scroll-arrow" aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* ── Three Pillars ── */}
      <section className="dd-pillars" id="pillars">
        <div className="dd-pillars-header">
          <span className="dd-section-tag">Three Pillars</span>
          <h2 className="dd-section-title">Where We Operate in Your Pipeline</h2>
          <p className="dd-section-subtitle">
            Hyperionsoft brings focused AI expertise to the three highest-leverage points in drug discovery—
            each pillar is a distinct capability, not a one-size-fits-all platform.
          </p>
        </div>
        <div className="dd-pillars-grid">
          {pillars.map((p) => (
            <div className="dd-pillar-card" key={p.number}>
              <div className="dd-pillar-top">
                <span className="dd-pillar-number">{p.number}</span>
                <span className="dd-pillar-tag">{p.tag}</span>
              </div>
              <h3 className="dd-pillar-title">{p.title}</h3>
              <p className="dd-pillar-desc">{p.description}</p>
              <ul className="dd-pillar-list">
                {p.capabilities.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
              <div className="dd-pillar-outcome">
                <span className="dd-pillar-outcome-label">Typical Outcome</span>
                <span className="dd-pillar-outcome-value">{p.outcomes}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Differentiators ── */}
      <section className="dd-diff">
        <div className="dd-diff-inner">
          <div className="dd-diff-text">
            <span className="dd-section-tag">Why Hyperionsoft</span>
            <h2 className="dd-section-title">We Are Not a Platform.<br />We Are Your Science Team's<br />AI Partner.</h2>
            <p className="dd-diff-body">
              Generic AI platforms provide tools. We embed with your scientists to build models
              trained on your proprietary data, tuned to your specific targets, and validated
              against your assay readouts. The difference is measurable in cycle time.
            </p>
            <div className="dd-diff-points">
              {[
                { icon: '⬡', title: 'Proprietary-Data First', body: 'Your internal assay data, hit libraries, and genomic datasets drive model training—not generic public corpora.' },
                { icon: '◈', title: 'Wet-Lab Closed Loop', body: 'Computational predictions feed directly into synthesis and screening queues. Experimental feedback continuously retrains models.' },
                { icon: '◉', title: 'Regulatory Fluency', body: 'We understand IND requirements and FDA\'s AI/ML guidance. Models come with uncertainty quantification and audit trails.' },
              ].map((d) => (
                <div className="dd-diff-point" key={d.title}>
                  <span className="dd-diff-icon">{d.icon}</span>
                  <div>
                    <h4 className="dd-diff-point-title">{d.title}</h4>
                    <p className="dd-diff-point-body">{d.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="dd-diff-visual">
            <div className="dd-rings">
              {['Target ID', 'Molecular Design', 'Clinical Opt.', 'Regulatory'].map((label, i) => (
                <div className="dd-ring" key={label} style={{ '--ring-i': i }}>
                  <span className="dd-ring-label">{label}</span>
                </div>
              ))}
              <div className="dd-rings-core">AI</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process / Methodology ── */}
      <section className="dd-process">
        <div className="dd-process-inner">
          <div className="dd-process-header">
            <span className="dd-section-tag">Methodology</span>
            <h2 className="dd-section-title">How an Engagement Works</h2>
            <p className="dd-section-subtitle">
              From first conversation to production models—a structured six-stage process
              designed around your existing workflows.
            </p>
          </div>
          <div className="dd-steps">
            {steps.map((s, i) => (
              <button
                key={i}
                className={`dd-step${activeStep === i ? ' active' : ''}`}
                onClick={() => setActiveStep(i)}
              >
                <div className="dd-step-left">
                  <span className="dd-step-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="dd-step-connector" />
                </div>
                <div className="dd-step-right">
                  <h4 className="dd-step-label">{s.label}</h4>
                  <p className={`dd-step-detail${activeStep === i ? ' visible' : ''}`}>{s.detail}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive Molecular Visualization ── */}
      <section className="dd-mol-section">
        <div className="dd-mol-inner">
          <div className="dd-mol-text">
            <span className="dd-section-tag">Interactive Demo</span>
            <h2 className="dd-section-title">Live Molecular<br />Network Simulation</h2>
            <p className="dd-mol-body">
              Move your cursor over the canvas to see how our models explore chemical space—
              atoms repel, bonds form and break, new configurations emerge. This is a simplified
              metaphor for the generative chemistry models we deploy in production.
            </p>
            <ul className="dd-mol-legend">
              <li><span className="dd-mol-dot" style={{ background: '#ff4444' }} /> Oxygen / Polar</li>
              <li><span className="dd-mol-dot" style={{ background: '#44aaff' }} /> Nitrogen</li>
              <li><span className="dd-mol-dot" style={{ background: '#ffffff' }} /> Carbon</li>
              <li><span className="dd-mol-dot" style={{ background: '#ff8844' }} /> Sulfur / Phosphorus</li>
              <li><span className="dd-mol-dot" style={{ background: '#8b939b' }} /> Other</li>
            </ul>
          </div>
          <div className="dd-mol-canvas-wrap">
            <MolecularCanvas />
          </div>
        </div>
      </section>

      {/* ── Capabilities PDF Gate ── */}
      <section className="dd-capabilities" id="capabilities">
        <div className="dd-capabilities-inner">
          <div className="dd-capabilities-text">
            <span className="dd-section-tag">Capabilities Brief</span>
            <h2 className="dd-section-title">Download Our<br />Drug Discovery AI<br />Capabilities Brief</h2>
            <p className="dd-cap-body">
              A detailed 12-page overview of our technical approach, benchmark results,
              case studies, and partnership models. Intended for research leads,
              CSOs, and business development teams evaluating AI partnerships.
            </p>
            <ul className="dd-cap-list">
              <li>Technical architecture and model benchmarks</li>
              <li>Three pharma case studies with quantified outcomes</li>
              <li>Data requirements and integration checklist</li>
              <li>Engagement models and timeline expectations</li>
            </ul>
          </div>
          <div className="dd-capabilities-form">
            <div className="dd-form-card">
              <h3 className="dd-form-title">Get Instant Access</h3>
              <p className="dd-form-subtitle">Complete the form to download the PDF immediately.</p>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="dd-cta">
        <div className="dd-cta-inner">
          <h2 className="dd-cta-title">Ready to Accelerate Your Pipeline?</h2>
          <p className="dd-cta-sub">
            Book a 30-minute discovery call with our computational biology team.
          </p>
          <Link to="/contact" className="btn-dd">Schedule a Discovery Call</Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DrugDiscovery;
