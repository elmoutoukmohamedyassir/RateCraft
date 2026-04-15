import React, { useState, useEffect, useCallback } from 'react';
import { Link }                                     from 'react-router-dom';
import { motion }                                   from 'motion/react';
import { SEO }                                      from '../components/SEO';

/* ── Types ─────────────────────────────────────────────────────── */
interface ProjectState {
  hourlyRate:            number;
  estimatedHours:        number;
  revisionRounds:        number;
  hoursPerRevision:      number;
  bufferPercentage:      number;
  taxPercentage:         number;
  profitMarginPercentage:number;
}

interface ProjectResults {
  baseProjectCost:    number;
  revisionCost:       number;
  subtotalWithBuffer: number;
  bufferAmount:       number;
  taxAmount:          number;
  profitAmount:       number;
  finalPrice:         number;
}

/* ── Default state ─────────────────────────────────────────────── */
const INITIAL_STATE: ProjectState = {
  hourlyRate:             75,
  estimatedHours:         40,
  revisionRounds:         2,
  hoursPerRevision:       3,
  bufferPercentage:       20,
  taxPercentage:          25,
  profitMarginPercentage: 15,
};

/* ── Calculation logic ─────────────────────────────────────────── */
function calculateProject(s: ProjectState): ProjectResults {
  const baseProjectCost    = s.hourlyRate * s.estimatedHours;
  const revisionCost       = s.hourlyRate * s.revisionRounds * s.hoursPerRevision;
  const subtotalRaw        = baseProjectCost + revisionCost;
  const bufferAmount       = subtotalRaw * (s.bufferPercentage / 100);
  const subtotalWithBuffer = subtotalRaw + bufferAmount;
  const taxAmount          = subtotalWithBuffer * (s.taxPercentage / 100);
  const profitAmount       = subtotalWithBuffer * (s.profitMarginPercentage / 100);
  const finalPrice         = subtotalWithBuffer + taxAmount + profitAmount;

  return {
    baseProjectCost,
    revisionCost,
    subtotalWithBuffer,
    bufferAmount,
    taxAmount,
    profitAmount,
    finalPrice,
  };
}

/* ── Related reading ───────────────────────────────────────────── */
const RELATED_POSTS = [
  { id: 'quote-a-project-profitably',        label: 'How to quote a project without underpricing'     },
  { id: 'hourly-vs-project-pricing',         label: 'Hourly vs project pricing: which model is better' },
  { id: 'how-to-calculate-freelance-rate',   label: 'How to calculate your freelance hourly rate'      },
  { id: 'profit-margin-for-freelancers',     label: 'Why freelancers need a profit margin'             },
];

/* ── Common mistakes data ──────────────────────────────────────── */
const MISTAKES = [
  {
    n:    '01',
    title:'Forgetting revision rounds',
    desc: 'Every round of changes takes real time. Price revisions explicitly rather than absorbing them into the base estimate — or you will always end up working extra hours for free.',
  },
  {
    n:    '02',
    title:'No scope buffer',
    desc: 'Projects almost always take longer than planned. A 15–25% buffer absorbs scope creep, unclear briefs, and client-side delays without destroying your margin.',
  },
  {
    n:    '03',
    title:'Ignoring tax on project income',
    desc: 'A project that looks profitable before tax may not be after. Calculate the tax component upfront and build it into the price you present to clients.',
  },
  {
    n:    '04',
    title:'No profit margin',
    desc: 'A rate that covers costs is a rate that breaks even. A project quote without profit margin leaves nothing for growth, savings, or the unexpected.',
  },
  {
    n:    '05',
    title:'Using an hourly rate that is already too low',
    desc: "If your hourly floor isn't covering your actual costs, every project quote will also be wrong. Set your floor correctly first using the hourly rate calculator.",
  },
];

/* ── ProjectCalculatorPage ─────────────────────────────────────── */
export default function ProjectCalculatorPage() {
  const [state,   setState]   = useState<ProjectState>(INITIAL_STATE);
  const [results, setResults] = useState<ProjectResults>(calculateProject(INITIAL_STATE));

  useEffect(() => {
    setResults(calculateProject(state));
  }, [state]);

  const handleChange = useCallback(
    (name: keyof ProjectState, value: number) => {
      setState((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO
        title="Project Pricing Calculator | RateCrafts"
        description="Estimate how much to charge for a freelance project using your hourly rate, revisions, taxes, and profit margin. Free tool, no signup required."
      />

      {/* ── Page header ────────────────────────────────── */}
      <header
        style={{
          padding:      '5rem 1.5rem 3.5rem',
          borderBottom: '1px solid var(--color-ink-800)',
          position:     'relative',
          overflow:     'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position:        'absolute',
            inset:           0,
            backgroundImage: 'linear-gradient(var(--color-ink-800) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-800) 1px, transparent 1px)',
            backgroundSize:  '40px 40px',
            opacity:         0.2,
            pointerEvents:   'none',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ maxWidth: '640px', position: 'relative', zIndex: 1 }}
        >
          {/* Breadcrumb */}
          <div
            style={{
              display:      'flex',
              alignItems:   'center',
              gap:          '0.5rem',
              marginBottom: '1.5rem',
            }}
          >
            <Link
              to="/calculator"
              style={{
                fontFamily:     'var(--font-mono)',
                fontSize:       '0.6rem',
                letterSpacing:  '0.1em',
                textTransform:  'uppercase',
                color:          'var(--color-ink-600)',
                textDecoration: 'none',
              }}
            >
              Hourly Rate Calculator
            </Link>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize:   '0.6rem',
                color:      'var(--color-ink-700)',
              }}
            >
              /
            </span>
            <span
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.6rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         'var(--color-brass-500)',
              }}
            >
              Project Pricing
            </span>
          </div>

          <p className="mono-label" style={{ marginBottom: '1.25rem' }}>Project Pricing Calculator</p>

          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2rem, 5vw, 3.5rem)',
              fontWeight:    900,
              color:         'var(--color-ink-50)',
              letterSpacing: '-0.03em',
              lineHeight:    1.05,
              marginBottom:  '1rem',
            }}
          >
            Price your next project
            <br />
            <em style={{ color: 'var(--color-brass-300)', fontStyle: 'italic' }}>
              without guessing.
            </em>
          </h1>

          <p
            style={{
              fontFamily:   'var(--font-sans)',
              fontSize:     '1rem',
              fontWeight:   300,
              color:        'var(--color-ink-300)',
              lineHeight:   1.75,
              maxWidth:     '460px',
              marginBottom: '1.25rem',
            }}
          >
            Enter your hourly rate, estimated hours, revision rounds, and margin.
            Get a final project price that actually covers everything.
          </p>

          {/* Trust signals */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['Free tool', 'No signup required', '100% private'].map((t) => (
              <span
                key={t}
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '0.6rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color:         'var(--color-ink-600)',
                  display:       'flex',
                  alignItems:    'center',
                  gap:           '0.35rem',
                }}
              >
                <span style={{ color: 'var(--color-brass-600)', fontSize: '0.55rem' }}>✓</span>
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </header>

      {/* ── Main two-column layout ──────────────────────── */}
      <main
        style={{
          maxWidth:   '1280px',
          margin:     '0 auto',
          padding:    '3rem 1.5rem 6rem',
          display:    'grid',
          gap:        '2rem',
          alignItems: 'start',
        }}
        className="lg:grid-cols-12"
      >

        {/* ── Left: Input sections ─────────────────────── */}
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
          className="lg:col-span-7"
        >

          {/* Section 1: Your Rate & Scope */}
          <InputSection label="01 — Your Rate &amp; Scope">
            <div
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap:                 '1.5rem',
              }}
            >
              <ProjectInputField
                label="Your Hourly Rate"
                name="hourlyRate"
                value={state.hourlyRate}
                onChange={handleChange}
                prefix="$"
                tooltip="Your minimum viable hourly rate. Don't have one? Use the hourly rate calculator to find it first."
              />
              <ProjectInputField
                label="Estimated Project Hours"
                name="estimatedHours"
                value={state.estimatedHours}
                onChange={handleChange}
                suffix="hrs"
                tooltip="Your honest estimate of the total hours required to deliver the project. Be realistic — most projects take 20–30% longer than expected."
              />
            </div>
          </InputSection>

          {/* Section 2: Revisions */}
          <InputSection label="02 — Revision Rounds">
            <div
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap:                 '1.5rem',
              }}
            >
              <ProjectInputField
                label="Number of Revision Rounds"
                name="revisionRounds"
                value={state.revisionRounds}
                onChange={handleChange}
                suffix="rounds"
                tooltip="How many rounds of client feedback and changes are included in the project scope. Typically 2–3 for most projects."
              />
              <ProjectInputField
                label="Hours per Revision Round"
                name="hoursPerRevision"
                value={state.hoursPerRevision}
                onChange={handleChange}
                suffix="hrs"
                tooltip="How many hours each revision round typically takes. Factor in the call, the changes, and any back-and-forth."
              />
            </div>
            <div
              style={{
                marginTop:  '1.25rem',
                padding:    '1rem 1.25rem',
                background: 'var(--color-ink-800)',
                border:     '1px solid var(--color-ink-700)',
              }}
            >
              <p
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '0.62rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color:         'var(--color-ink-500)',
                  marginBottom:  '0.25rem',
                }}
              >
                Total revision hours
              </p>
              <p
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      '1.3rem',
                  fontWeight:    700,
                  color:         'var(--color-ink-100)',
                  letterSpacing: '-0.02em',
                }}
              >
                {(state.revisionRounds * state.hoursPerRevision).toFixed(1)} hrs
                <span
                  style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '0.72rem',
                    color:         'var(--color-ink-500)',
                    fontWeight:    400,
                    marginLeft:    '0.5rem',
                    letterSpacing: '0.02em',
                  }}
                >
                  = ${(state.hourlyRate * state.revisionRounds * state.hoursPerRevision).toLocaleString('en-US', { maximumFractionDigits: 0 })} at your rate
                </span>
              </p>
            </div>
          </InputSection>

          {/* Section 3: Margin & Tax */}
          <InputSection label="03 — Buffer, Tax &amp; Margin">
            <div
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap:                 '1.5rem',
              }}
            >
              <RangeField
                label="Project Buffer"
                name="bufferPercentage"
                value={state.bufferPercentage}
                onChange={handleChange}
                suffix="%"
                min={0}
                max={50}
                tooltip="A percentage added on top of your base + revision estimate to absorb scope creep, unclear briefs, and unexpected delays. 15–25% is typical."
              />
              <RangeField
                label="Tax Percentage"
                name="taxPercentage"
                value={state.taxPercentage}
                onChange={handleChange}
                suffix="%"
                min={0}
                max={60}
                tooltip="Self-employment tax + income tax. Include this so the price you charge actually leaves the right amount in your pocket after tax."
              />
              <RangeField
                label="Profit Margin"
                name="profitMarginPercentage"
                value={state.profitMarginPercentage}
                onChange={handleChange}
                suffix="%"
                min={0}
                max={50}
                tooltip="Profit on top of costs. Without margin, you are breaking even at best. 10–20% is a healthy target for most freelancers."
              />
            </div>
          </InputSection>

          {/* Section 4: Explainer content */}
          <InputSection label="Why Project Pricing Matters">
            <p
              style={{
                fontFamily:   'var(--font-sans)',
                fontSize:     '0.9rem',
                fontWeight:   300,
                color:        'var(--color-ink-300)',
                lineHeight:   1.8,
                marginBottom: '1.5rem',
              }}
            >
              Hourly pricing works well for ongoing work. But for defined projects
              with a deliverable, a project price is cleaner for clients and more
              profitable for you — if you build it correctly. Most freelancers
              quote too low because they forget revisions, buffer, and margin.
            </p>

            {/* Formula */}
            <div
              style={{
                fontFamily:   'var(--font-mono)',
                fontSize:     '0.8rem',
                background:   'var(--color-ink-800)',
                border:       '1px solid var(--color-ink-700)',
                color:        'var(--color-ink-200)',
                padding:      '1rem 1.25rem',
                lineHeight:   1.9,
                marginBottom: '2rem',
              }}
            >
              base cost + revision cost = subtotal
              <br />
              subtotal × (1 + buffer%) = buffered subtotal
              <br />
              buffered subtotal × tax% = tax amount
              <br />
              buffered subtotal × margin% = profit
              <br />
              <span style={{ color: 'var(--color-brass-400)' }}>
                buffered subtotal + tax + profit = final price
              </span>
            </div>

            {/* Common mistakes */}
            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      '1.1rem',
                fontWeight:    700,
                color:         'var(--color-ink-50)',
                letterSpacing: '-0.015em',
                marginBottom:  '1.25rem',
              }}
            >
              5 common project pricing mistakes
            </h2>

            <div
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap:                 '2px',
                background:          'var(--color-ink-800)',
                marginBottom:        '2rem',
              }}
            >
              {MISTAKES.map((m) => (
                <div
                  key={m.n}
                  style={{
                    background: 'var(--color-ink-950)',
                    padding:    '1.5rem',
                  }}
                >
                  <p
                    style={{
                      fontFamily:   'var(--font-mono)',
                      fontSize:     '0.6rem',
                      color:        'var(--color-ink-700)',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {m.n}
                  </p>
                  <p
                    style={{
                      fontFamily:    'var(--font-display)',
                      fontSize:      '0.95rem',
                      fontWeight:    700,
                      color:         'var(--color-ink-100)',
                      marginBottom:  '0.5rem',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {m.title}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize:   '0.8rem',
                      fontWeight: 300,
                      color:      'var(--color-ink-400)',
                      lineHeight: 1.65,
                    }}
                  >
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Cross-link to hourly calculator */}
            <div
              style={{
                padding:     '1.5rem',
                background:  'var(--color-ink-900)',
                border:      '1px solid var(--color-ink-800)',
                borderLeft:  '2px solid var(--color-brass-500)',
                marginBottom:'2rem',
              }}
            >
              <p
                style={{
                  fontFamily:   'var(--font-sans)',
                  fontSize:     '0.875rem',
                  fontWeight:   300,
                  color:        'var(--color-ink-300)',
                  lineHeight:   1.7,
                  marginBottom: '0.85rem',
                }}
              >
                Your project price is only as good as the hourly rate behind it.
                If you haven't calculated your real hourly floor yet, do that first.
              </p>
              <Link
                to="/calculator"
                style={{
                  fontFamily:     'var(--font-mono)',
                  fontSize:       '0.68rem',
                  letterSpacing:  '0.1em',
                  textTransform:  'uppercase',
                  color:          'var(--color-brass-300)',
                  textDecoration: 'none',
                }}
              >
                → Calculate your hourly rate first
              </Link>
            </div>

            {/* Related reading */}
            <p
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.62rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color:         'var(--color-ink-600)',
                marginBottom:  '1rem',
              }}
            >
              Related reading
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {RELATED_POSTS.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  style={{
                    fontFamily:     'var(--font-sans)',
                    fontSize:       '0.875rem',
                    fontWeight:     300,
                    color:          'var(--color-brass-400)',
                    textDecoration: 'none',
                    display:        'flex',
                    alignItems:     'center',
                    gap:            '0.5rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize:   '0.65rem',
                      color:      'var(--color-brass-600)',
                    }}
                  >
                    →
                  </span>
                  {post.label}
                </Link>
              ))}
            </div>
          </InputSection>
        </div>

        {/* ── Right: Sticky results panel ──────────────── */}
        <div className="lg:col-span-5" style={{ position: 'sticky', top: '5.5rem' }}>
          <ProjectResults results={results} state={state} />
        </div>
      </main>
    </div>
  );
}

/* ── ProjectResults panel ──────────────────────────────────────── */
function ProjectResults({
  results,
  state,
}: {
  results: ProjectResults;
  state:   ProjectState;
}) {
  const fmt = (v: number) =>
    new Intl.NumberFormat('en-US', {
      style:                 'currency',
      currency:              'USD',
      maximumFractionDigits: 0,
    }).format(v);

  const breakdownRows = [
    { label: 'Base project cost',  value: fmt(results.baseProjectCost),    note: `${state.estimatedHours} hrs × $${state.hourlyRate}` },
    { label: 'Revision cost',      value: fmt(results.revisionCost),       note: `${state.revisionRounds} rounds × ${state.hoursPerRevision} hrs` },
    { label: `Buffer (${state.bufferPercentage}%)`, value: fmt(results.bufferAmount), note: 'Scope creep protection' },
    { label: `Tax (${state.taxPercentage}%)`,       value: fmt(results.taxAmount),   note: 'Applied to buffered subtotal' },
    { label: `Profit (${state.profitMarginPercentage}%)`, value: fmt(results.profitAmount), note: 'Your business margin' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>

      {/* Hero final price */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        style={{
          background: 'var(--color-ink-900)',
          border:     '1px solid var(--color-ink-800)',
          padding:    '2rem',
          position:   'relative',
          overflow:   'hidden',
        }}
      >
        {/* Brass top bar */}
        <div
          style={{
            position:   'absolute',
            top:        0,
            left:       0,
            right:      0,
            height:     '2px',
            background: 'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))',
          }}
        />

        <p
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.62rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color:         'var(--color-brass-500)',
            marginBottom:  '0.5rem',
          }}
        >
          Recommended Project Price
        </p>

        <p
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      '3.5rem',
            fontWeight:    900,
            color:         'var(--color-ink-50)',
            lineHeight:    1,
            letterSpacing: '-0.03em',
            marginBottom:  '0.4rem',
          }}
        >
          {fmt(results.finalPrice)}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize:   '0.65rem',
            color:      'var(--color-ink-500)',
          }}
        >
          Total project price
        </p>
      </motion.div>

      {/* Buffered subtotal */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.07, duration: 0.35 }}
        style={{
          background: 'var(--color-ink-900)',
          border:     '1px solid var(--color-ink-800)',
          padding:    '1.4rem 2rem',
        }}
      >
        <p
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.6rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color:         'var(--color-ink-500)',
            marginBottom:  '0.3rem',
          }}
        >
          Buffered Subtotal (before tax &amp; profit)
        </p>
        <p
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      '1.75rem',
            fontWeight:    700,
            color:         'var(--color-ink-100)',
            letterSpacing: '-0.02em',
          }}
        >
          {fmt(results.subtotalWithBuffer)}
        </p>
      </motion.div>

      {/* Base + revisions side by side */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
        {[
          { label: 'Base Cost',     value: fmt(results.baseProjectCost) },
          { label: 'Revision Cost', value: fmt(results.revisionCost)    },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 + i * 0.06, duration: 0.3 }}
            style={{
              background: 'var(--color-ink-900)',
              border:     '1px solid var(--color-ink-800)',
              padding:    '1.25rem 1.5rem',
            }}
          >
            <p
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.58rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color:         'var(--color-ink-500)',
                marginBottom:  '0.35rem',
              }}
            >
              {card.label}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize:   '1.05rem',
                fontWeight: 500,
                color:      'var(--color-ink-200)',
              }}
            >
              {card.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Full breakdown */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.28, duration: 0.35 }}
        style={{
          background: 'var(--color-ink-900)',
          border:     '1px solid var(--color-ink-800)',
          padding:    '1.6rem 2rem',
        }}
      >
        <p
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.6rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color:         'var(--color-ink-500)',
            marginBottom:  '1.25rem',
            paddingBottom: '0.75rem',
            borderBottom:  '1px solid var(--color-ink-800)',
          }}
        >
          Full Breakdown
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
          {breakdownRows.map((row) => (
            <div
              key={row.label}
              style={{
                display:        'flex',
                justifyContent: 'space-between',
                alignItems:     'flex-start',
                gap:            '1rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily:  'var(--font-sans)',
                    fontSize:    '0.83rem',
                    fontWeight:  300,
                    color:       'var(--color-ink-400)',
                    display:     'block',
                  }}
                >
                  {row.label}
                </span>
                {row.note && (
                  <span
                    style={{
                      fontFamily:    'var(--font-mono)',
                      fontSize:      '0.6rem',
                      color:         'var(--color-ink-700)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {row.note}
                  </span>
                )}
              </div>
              <span
                style={{
                  fontFamily:  'var(--font-mono)',
                  fontSize:    '0.83rem',
                  color:       'var(--color-ink-200)',
                  whiteSpace:  'nowrap',
                }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* Total */}
        <div
          style={{
            marginTop:      '1.25rem',
            paddingTop:     '1.25rem',
            borderTop:      '1px solid var(--color-ink-800)',
            display:        'flex',
            justifyContent: 'space-between',
            alignItems:     'baseline',
          }}
        >
          <span
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.65rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         'var(--color-ink-400)',
            }}
          >
            Final Project Price
          </span>
          <span
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '1.3rem',
              fontWeight:    700,
              color:         'var(--color-brass-300)',
              letterSpacing: '-0.02em',
            }}
          >
            {fmt(results.finalPrice)}
          </span>
        </div>
      </motion.div>

      {/* Effective hourly rate */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.38, duration: 0.3 }}
        style={{
          background: 'var(--color-ink-900)',
          border:     '1px solid var(--color-ink-800)',
          padding:    '1.25rem 2rem',
          display:    'flex',
          alignItems: 'baseline',
          gap:        '1rem',
        }}
      >
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.58rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color:         'var(--color-ink-600)',
              marginBottom:  '0.25rem',
            }}
          >
            Effective hourly rate (after all costs)
          </p>
          <p
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '1rem',
              fontWeight:    500,
              color:         'var(--color-ink-300)',
            }}
          >
            {fmt(
              results.finalPrice /
                Math.max(
                  1,
                  state.estimatedHours + state.revisionRounds * state.hoursPerRevision,
                ),
            )} / hr
          </p>
        </div>
        <Link
          to="/calculator"
          style={{
            fontFamily:     'var(--font-mono)',
            fontSize:       '0.6rem',
            letterSpacing:  '0.08em',
            textTransform:  'uppercase',
            color:          'var(--color-brass-500)',
            textDecoration: 'none',
            whiteSpace:     'nowrap',
          }}
        >
          Adjust rate →
        </Link>
      </motion.div>

      <p
        style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '0.6rem',
          color:         'var(--color-ink-600)',
          lineHeight:    1.6,
          letterSpacing: '0.03em',
          padding:       '0.5rem 0',
        }}
      >
        Estimates only. Consult a financial advisor for business planning.
      </p>
    </div>
  );
}

/* ── InputSection wrapper ──────────────────────────────────────── */
function InputSection({
  label,
  children,
}: {
  label:    string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        background: 'var(--color-ink-900)',
        border:     '1px solid var(--color-ink-800)',
        padding:    '2rem',
      }}
    >
      <p
        style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '0.6rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color:         'var(--color-brass-500)',
          display:       'block',
          marginBottom:  '1.5rem',
        }}
        dangerouslySetInnerHTML={{ __html: label }}
      />
      {children}
    </div>
  );
}

/* ── Number input field ────────────────────────────────────────── */
function ProjectInputField({
  label,
  name,
  value,
  onChange,
  prefix,
  suffix,
  tooltip,
}: {
  label:    string;
  name:     keyof ProjectState;
  value:    number;
  onChange: (name: keyof ProjectState, value: number) => void;
  prefix?:  string;
  suffix?:  string;
  tooltip?: string;
}) {
  const [focused,     setFocused]     = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      <label
        style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '0.66rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color:         'var(--color-ink-400)',
          display:       'flex',
          alignItems:    'center',
          gap:           '0.4rem',
        }}
      >
        {label}
        {tooltip && (
          <span
            style={{ position: 'relative', display: 'inline-flex' }}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <span
              style={{
                width:          '14px',
                height:         '14px',
                border:         '1px solid var(--color-ink-600)',
                borderRadius:   '50%',
                display:        'inline-flex',
                alignItems:     'center',
                justifyContent: 'center',
                fontFamily:     'var(--font-mono)',
                fontSize:       '9px',
                color:          'var(--color-ink-500)',
                cursor:         'help',
              }}
            >
              ?
            </span>
            {showTooltip && (
              <div
                style={{
                  position:      'absolute',
                  bottom:        'calc(100% + 8px)',
                  left:          '50%',
                  transform:     'translateX(-50%)',
                  width:         '220px',
                  padding:       '0.65rem 0.85rem',
                  background:    'var(--color-ink-800)',
                  border:        '1px solid var(--color-ink-700)',
                  color:         'var(--color-ink-200)',
                  fontFamily:    'var(--font-sans)',
                  fontSize:      '0.78rem',
                  fontWeight:    300,
                  lineHeight:    1.55,
                  zIndex:        100,
                  pointerEvents: 'none',
                  textTransform: 'none',
                  letterSpacing: 'normal',
                }}
              >
                {tooltip}
              </div>
            )}
          </span>
        )}
      </label>

      <div style={{ position: 'relative' }}>
        {prefix && (
          <span
            style={{
              position:      'absolute',
              left:          '0.8rem',
              top:           '50%',
              transform:     'translateY(-50%)',
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.85rem',
              color:         'var(--color-ink-500)',
              pointerEvents: 'none',
              userSelect:    'none',
            }}
          >
            {prefix}
          </span>
        )}

        <input
          type="number"
          min={0}
          value={value}
          onChange={(e) => onChange(name, parseFloat(e.target.value) || 0)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width:        '100%',
            background:   'var(--color-ink-950)',
            border:       `1px solid ${focused ? 'var(--color-brass-500)' : 'var(--color-ink-700)'}`,
            boxShadow:    focused ? '0 0 0 3px rgba(212, 160, 23, 0.12)' : 'none',
            color:        'var(--color-ink-100)',
            fontFamily:   'var(--font-mono)',
            fontSize:     '0.9rem',
            padding:      `0.7rem ${suffix ? '2.5rem' : '0.8rem'} 0.7rem ${prefix ? '1.8rem' : '0.8rem'}`,
            outline:      'none',
            transition:   'border-color 0.2s, box-shadow 0.2s',
            borderRadius: 0,
          }}
        />

        {suffix && (
          <span
            style={{
              position:      'absolute',
              right:         '0.8rem',
              top:           '50%',
              transform:     'translateY(-50%)',
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.75rem',
              color:         'var(--color-ink-500)',
              pointerEvents: 'none',
              userSelect:    'none',
            }}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

/* ── Range slider field ────────────────────────────────────────── */
function RangeField({
  label,
  name,
  value,
  onChange,
  suffix,
  min,
  max,
  tooltip,
}: {
  label:    string;
  name:     keyof ProjectState;
  value:    number;
  onChange: (name: keyof ProjectState, value: number) => void;
  suffix?:  string;
  min?:     number;
  max?:     number;
  tooltip?: string;
}) {
  const [showTooltip, setShowTooltip] = useState(false);
  const fillPct = max ? Math.round((value / max) * 100) : 0;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <label
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.66rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color:         'var(--color-ink-400)',
            display:       'flex',
            alignItems:    'center',
            gap:           '0.4rem',
          }}
        >
          {label}
          {tooltip && (
            <span
              style={{ position: 'relative', display: 'inline-flex' }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <span
                style={{
                  width:          '14px',
                  height:         '14px',
                  border:         '1px solid var(--color-ink-600)',
                  borderRadius:   '50%',
                  display:        'inline-flex',
                  alignItems:     'center',
                  justifyContent: 'center',
                  fontFamily:     'var(--font-mono)',
                  fontSize:       '9px',
                  color:          'var(--color-ink-500)',
                  cursor:         'help',
                }}
              >
                ?
              </span>
              {showTooltip && (
                <div
                  style={{
                    position:      'absolute',
                    bottom:        'calc(100% + 8px)',
                    left:          '50%',
                    transform:     'translateX(-50%)',
                    width:         '220px',
                    padding:       '0.65rem 0.85rem',
                    background:    'var(--color-ink-800)',
                    border:        '1px solid var(--color-ink-700)',
                    color:         'var(--color-ink-200)',
                    fontFamily:    'var(--font-sans)',
                    fontSize:      '0.78rem',
                    fontWeight:    300,
                    lineHeight:    1.55,
                    zIndex:        100,
                    pointerEvents: 'none',
                    textTransform: 'none',
                    letterSpacing: 'normal',
                  }}
                >
                  {tooltip}
                </div>
              )}
            </span>
          )}
        </label>

        <span
          style={{
            fontFamily:  'var(--font-mono)',
            fontSize:    '0.78rem',
            fontWeight:  500,
            color:       'var(--color-brass-300)',
            background:  'rgba(212, 160, 23, 0.08)',
            border:      '1px solid rgba(212, 160, 23, 0.2)',
            padding:     '0.15rem 0.55rem',
          }}
        >
          {value}{suffix}
        </span>
      </div>

      <div style={{ paddingTop: '4px' }}>
        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={value}
          onChange={(e) => onChange(name, parseFloat(e.target.value) || 0)}
          style={{
            width:        '100%',
            height:       '2px',
            appearance:   'none',
            background:   `linear-gradient(90deg, var(--color-brass-500) ${fillPct}%, var(--color-ink-700) ${fillPct}%)`,
            borderRadius: '1px',
            cursor:       'pointer',
            outline:      'none',
          }}
        />
      </div>
    </div>
  );
}