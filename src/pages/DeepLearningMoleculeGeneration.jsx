import React, { useState, useRef, useEffect } from 'react';
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
    const NUM_ATOMS = 42;

    const atoms = Array.from({ length: NUM_ATOMS }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 3 + Math.random() * 5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      color: ATOM_COLORS[Math.floor(Math.random() * ATOM_COLORS.length)],
    }));

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', () => { mouse.current = { x: -9999, y: -9999 }; });

    const BOND_DIST = 120;
    const MOUSE_REPEL = 100;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      atoms.forEach(a => {
        const dx = a.x - mouse.current.x;
        const dy = a.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL && dist > 0) {
          a.vx += (dx / dist) * 0.35;
          a.vy += (dy / dist) * 0.35;
        }
        a.vx *= 0.97; a.vy *= 0.97;
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > canvas.width) { a.vx *= -1; a.x = Math.max(0, Math.min(canvas.width, a.x)); }
        if (a.y < 0 || a.y > canvas.height) { a.vy *= -1; a.y = Math.max(0, Math.min(canvas.height, a.y)); }
      });
      for (let i = 0; i < atoms.length; i++) {
        for (let j = i + 1; j < atoms.length; j++) {
          const dx = atoms[i].x - atoms[j].x;
          const dy = atoms[i].y - atoms[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < BOND_DIST) {
            ctx.beginPath();
            ctx.moveTo(atoms[i].x, atoms[i].y);
            ctx.lineTo(atoms[j].x, atoms[j].y);
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / BOND_DIST) * 0.5})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
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

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />;
};

/* ─── Email Capture Form ─────────────────────────────────────────────── */
const WhitepaperForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setSubmitting(true);
    setSubmitError('');
    try {
      await fetch('***REMOVED***BNE3KM0/B0AK2AGN2UT/UrknKs1y9a0E8QHht9EMRGAe', {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: `New ADMET white paper download: ${email}` }),
      });
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="wp-form-success">
        <div className="wp-form-success-icon">✓</div>
        <h3>Your Download Is Ready</h3>
        <p>Thank you. Click below to access the white paper.</p>
        <a
          href="/assets/hyperionsoft_drugdiscovery_whitepaper.pdf"
          download
          className="btn-dd"
          style={{ marginTop: '20px', display: 'inline-block' }}
        >
          Download White Paper (PDF)
        </a>
      </div>
    );
  }

  return (
    <form className="wp-lead-form" onSubmit={handleSubmit} noValidate>
      <div className="wp-form-group">
        <label className="wp-form-label">Email Address *</label>
        <input
          className={`wp-form-input${emailError ? ' error' : ''}`}
          type="email"
          value={email}
          onChange={e => { setEmail(e.target.value); setEmailError(''); }}
          placeholder="jane@pharma.com"
        />
        {emailError && <span className="wp-form-error">{emailError}</span>}
      </div>
      <button
        type="submit"
        className="btn-dd"
        style={{ width: '100%', marginTop: '8px' }}
        disabled={submitting}
      >
        {submitting ? 'Sending…' : 'Download Free White Paper'}
      </button>
      {submitError && <p className="wp-form-error" style={{ marginTop: '8px' }}>{submitError}</p>}
      <p className="wp-form-disclaimer">No spam. We respect your privacy.</p>
    </form>
  );
};

/* ─── Main Page ─────────────────────────────────────────────────────── */
const DeepLearningMoleculeGeneration = () => {
  const highlights = [
    {
      icon: '◈',
      title: 'Multi-Endpoint Prediction',
      body: 'A unified deep learning architecture that simultaneously predicts absorption, distribution, metabolism, excretion, and toxicity—replacing siloed single-property models with a single, consistent scoring surface.',
    },
    {
      icon: '⬡',
      title: 'ADMET-Constrained Generation',
      body: 'Generative models conditioned on ADMET compliance thresholds, ensuring that every proposed molecule emerges pre-screened for developability before a single synthesis is attempted.',
    },
    {
      icon: '◉',
      title: 'Benchmark Results',
      body: 'Head-to-head evaluation against leading single-task baselines across 12 public ADMET benchmarks, with ablation studies isolating the contribution of each architectural component.',
    },
    {
      icon: '⊕',
      title: 'Uncertainty Quantification',
      body: 'Conformal prediction intervals on every ADMET output—giving medicinal chemists calibrated confidence estimates rather than point predictions for high-stakes go/no-go decisions.',
    },
  ];

  const paperSections = [
    { num: '01', title: 'Introduction & Motivation' },
    { num: '02', title: 'Architecture & Methods' },
    { num: '03', title: 'Training & Data' },
    { num: '04', title: 'Results & Benchmarks' },
    { num: '05', title: 'Case Study: Lead Optimization' },
    { num: '06', title: 'Discussion & Future Work' },
  ];

  const audience = [
    { role: 'Computational Chemists', reason: 'Multi-task GNN architectures and SMILES-based generative modeling with ADMET constraints.' },
    { role: 'Medicinal Chemists', reason: 'Practical guidance on integrating AI-generated ADMET predictions into lead optimization workflows.' },
    { role: 'Drug Discovery Leaders', reason: 'Evidence-based case for AI-first compound filtering to reduce late-stage clinical failures.' },
    { role: 'AI/ML Researchers', reason: 'Novel architecture design for constrained molecular generation and multi-output uncertainty quantification.' },
  ];

  return (
    <>
      <SEO
        title="White Paper: Deep Learning for Multi-Endpoint ADMET Compliance | Hyperionsoft"
        description="Download the Hyperionsoft white paper on a deep learning framework for multi-endpoint ADMET compliance in molecular generation. Free research paper for drug discovery scientists."
        keywords="ADMET deep learning, molecular generation AI, drug discovery white paper, multi-endpoint ADMET, generative chemistry, ADMET compliance, AI drug design"
        image="/assets/protein-dark.jpg"
      />
      <Header />

      {/* ── Hero + Email Capture ── */}
      <section className="wp-hero">
        <div className="wp-hero-canvas">
          <MolecularCanvas />
        </div>
        <div className="wp-hero-overlay" />
        <div className="wp-hero-inner">
          <div className="wp-hero-text">
            <span className="wp-eyebrow">Hyperionsoft Research · White Paper</span>
            <h1 className="wp-hero-title">
              A Deep Learning Framework for Multi-Endpoint ADMET Compliance in Molecular Generation
            </h1>
            <p className="wp-hero-subtitle">
              How simultaneous ADMET prediction and ADMET-constrained generative modeling
              can eliminate late-stage drug attrition—before a molecule ever enters the lab.
            </p>
            <div className="wp-hero-meta">
              <span className="wp-meta-pill">Peer-Reviewed Research</span>
              <span className="wp-meta-pill">Graph Neural Networks</span>
              <span className="wp-meta-pill">Generative Chemistry</span>
              <span className="wp-meta-pill">ADMET Prediction</span>
            </div>
          </div>
          <div className="wp-hero-form-wrap">
            <div className="wp-form-card">
              <p className="wp-form-eyebrow">Free Download</p>
              <h2 className="wp-form-title">Get the White Paper</h2>
              <p className="wp-form-subtitle">
                Enter your details to download the full PDF instantly.
              </p>
              <WhitepaperForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Highlights ── */}
      <section className="wp-highlights">
        <div className="wp-section-inner">
          <div className="wp-section-header">
            <span className="dd-section-tag">Key Contributions</span>
            <h2 className="dd-section-title">What This Framework Delivers</h2>
            <p className="dd-section-subtitle">
              Four core advances that distinguish this framework from existing single-task ADMET models
              and unconstrained generative approaches.
            </p>
          </div>
          <div className="wp-highlights-grid">
            {highlights.map((h) => (
              <div className="wp-highlight-card" key={h.title}>
                <span className="wp-highlight-icon">{h.icon}</span>
                <h3 className="wp-highlight-title">{h.title}</h3>
                <p className="wp-highlight-body">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Paper Contents ── */}
      <section className="wp-contents">
        <div className="wp-section-inner">
          <div className="wp-contents-inner">
            <div className="wp-contents-header">
              <span className="dd-section-tag">Paper Contents</span>
              <h2 className="dd-section-title">What You Will Find Inside</h2>
            </div>
            <div className="wp-contents-list">
              {paperSections.map((s) => (
                <div className="wp-content-item" key={s.num}>
                  <span className="wp-content-num">{s.num}</span>
                  <h4 className="wp-content-title">{s.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Problem Statement ── */}
      <section className="wp-problem">
        <div className="wp-section-inner">
          <div className="wp-problem-inner">
            <div className="wp-problem-stat-col">
              <div className="wp-big-stat">
                <span className="wp-stat-num">90%</span>
                <span className="wp-stat-label">of drug candidates fail in clinical trials</span>
              </div>
              <div className="wp-big-stat">
                <span className="wp-stat-num">40%</span>
                <span className="wp-stat-label">of failures attributed to poor ADMET properties</span>
              </div>
              <div className="wp-big-stat">
                <span className="wp-stat-num">$2.6B</span>
                <span className="wp-stat-label">average cost to bring one drug to market</span>
              </div>
            </div>
            <div className="wp-problem-text-col">
              <span className="dd-section-tag">The Problem We Solve</span>
              <h2 className="dd-section-title">ADMET Failures Are the Industry's Most Expensive Problem</h2>
              <p className="wp-problem-body">
                Despite decades of investment in predictive ADMET tools, the industry still loses
                billions to late-stage failures from compounds with poor absorption, unexpected
                toxicity, or inadequate metabolic stability.
              </p>
              <p className="wp-problem-body">
                The root cause: prediction and generation have been treated as separate problems.
                Medicinal chemists generate molecules, then evaluate ADMET—at which point it is
                often too late to rescue a program.
              </p>
              <p className="wp-problem-body">
                This white paper presents a unified framework where ADMET compliance is not a
                filter applied after generation—it is a constraint that shapes generation from
                the first forward pass.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who Should Read ── */}
      <section className="wp-audience">
        <div className="wp-section-inner">
          <div className="wp-section-header">
            <span className="dd-section-tag">Intended Audience</span>
            <h2 className="dd-section-title">Who Should Read This Paper</h2>
          </div>
          <div className="wp-audience-grid">
            {audience.map((a) => (
              <div className="wp-audience-card" key={a.role}>
                <h4 className="wp-audience-role">{a.role}</h4>
                <p className="wp-audience-reason">{a.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="wp-bottom-cta">
        <div className="wp-section-inner">
          <div className="wp-cta-inner">
            <div className="wp-cta-text">
              <span className="dd-section-tag">Download Now</span>
              <h2 className="dd-section-title">
                Ready to Rethink<br />ADMET Prediction?
              </h2>
              <p className="wp-cta-body">
                A rigorous technical paper covering theory, implementation,
                benchmarking, and a prospective drug discovery case study.
                Free to download.
              </p>
            </div>
            <div className="wp-cta-form-wrap">
              <div className="wp-form-card">
                <p className="wp-form-eyebrow">Free Download</p>
                <h2 className="wp-form-title">Get Instant Access</h2>
                <p className="wp-form-subtitle">
                  Enter your details to download the full PDF.
                </p>
                <WhitepaperForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Hyperionsoft ── */}
      <section className="wp-about">
        <div className="wp-section-inner">
          <div className="wp-about-inner">
            <div className="wp-about-text">
              <span className="dd-section-tag">About the Authors</span>
              <h2 className="dd-section-title">Hyperionsoft Research</h2>
              <p className="wp-about-body">
                Hyperionsoft is an AI research and consulting firm specializing in
                computational drug discovery. Our research team builds production-ready
                deep learning systems for target identification, molecular design,
                and ADMET prediction—deployed in active pharmaceutical programs.
              </p>
              <p className="wp-about-body">
                Founder and CEO Cho-Nan Tsai serves as Adjunct Professor at the USC Alfred E.
                Mann School of Pharmacy and Pharmaceutical Sciences, bridging academic
                rigor with industrial-scale AI development.
              </p>
              <a href="/drug-discovery" className="btn-dd" style={{ marginTop: '30px', display: 'inline-block' }}>
                Explore Our Platform
              </a>
            </div>
            <div className="wp-about-logo-wrap">
              <img
                src="/assets/optimized_backup/USCPharmacy.jpg"
                alt="USC Alfred E. Mann School of Pharmacy"
                className="wp-about-logo"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DeepLearningMoleculeGeneration;
