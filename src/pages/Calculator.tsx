import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation }                          from 'react-router-dom';
import { motion }                                     from 'motion/react';
import { SEO }                                        from '../components/SEO';
import { InputField }                                 from '../components/InputField';
import { ResultsDisplay }                             from '../components/ResultsDisplay';
import { CalculatorState, CalculationResults }        from '../types';
import { calculateRate }                              from '../utils/calculator';

/* ── Default state ─────────────────────────────────────────────── */
const INITIAL_STATE: CalculatorState = {
  desiredMonthlyIncome:          6000,
  estimatedTaxPercentage:        25,
  monthlyBusinessExpenses:       1000,
  weeklyBillableHours:           25,
  weeksWorkedPerMonth:           4,
  desiredProfitMarginPercentage: 10,
};

/* ── Related posts ─────────────────────────────────────────────── */
const RELATED_POSTS = [
  { id: 'how-to-calculate-freelance-rate',     label: 'The full method behind this calculation'    },
  { id: 'billable-hours-guide',                label: 'How to estimate realistic billable hours'   },
  { id: 'hidden-costs-of-freelancing',         label: 'What to put in the expenses field'          },
  { id: 'profit-margin-for-freelancers',       label: 'Why the margin buffer is not optional'      },
  { id: 'freelance-rate-calculator-uk',        label: 'UK-specific tax rates and market context'   },
];

/* ── Query param helpers ───────────────────────────────────────── */
function parseQueryState(search: string): Partial<CalculatorState> {
  const p = new URLSearchParams(search);
  const n = (k: string) => { const v = p.get(k); return v !== null ? parseFloat(v) : undefined; };
  const out: Partial<CalculatorState> = {};
  const income  = n('income');  if (income  !== undefined) out.desiredMonthlyIncome          = income;
  const tax     = n('tax');     if (tax     !== undefined) out.estimatedTaxPercentage         = tax;
  const exp     = n('expenses');if (exp     !== undefined) out.monthlyBusinessExpenses        = exp;
  const hours   = n('hours');   if (hours   !== undefined) out.weeklyBillableHours            = hours;
  const weeks   = n('weeks');   if (weeks   !== undefined) out.weeksWorkedPerMonth            = weeks;
  const margin  = n('margin');  if (margin  !== undefined) out.desiredProfitMarginPercentage  = margin;
  return out;
}

function buildShareUrl(state: CalculatorState): string {
  if (typeof window === 'undefined') return '';
  const p = new URLSearchParams({
    income:   String(state.desiredMonthlyIncome),
    tax:      String(state.estimatedTaxPercentage),
    expenses: String(state.monthlyBusinessExpenses),
    hours:    String(state.weeklyBillableHours),
    weeks:    String(state.weeksWorkedPerMonth),
    margin:   String(state.desiredProfitMarginPercentage),
  });
  return `${window.location.origin}/calculator?${p.toString()}`;
}

/* ── CalculatorPage ────────────────────────────────────────────── */
export default function CalculatorPage() {
  const location = useLocation();
  const [state, setState] = useState<CalculatorState>(() => ({
    ...INITIAL_STATE,
    ...parseQueryState(location.search),
  }));
  const [results, setResults] = useState<CalculationResults>(calculateRate({
    ...INITIAL_STATE,
    ...parseQueryState(location.search),
  }));
  const [copied, setCopied] = useState(false);

  useEffect(() => { setResults(calculateRate(state)); }, [state]);

  const handleChange = useCallback((name: keyof CalculatorState, value: number) => {
    setState((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleCopyShare = () => {
    navigator.clipboard.writeText(buildShareUrl(state)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO
        title="Freelance Hourly Rate Calculator | RateCrafts"
        description="Calculate your freelance hourly rate in 90 seconds. Enter your income goal, tax rate, expenses, and billable hours — get a rate you can actually defend."
      />

      {/* ── Header ─────────────────────────────────────────────── */}
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
          <p className="mono-label" style={{ marginBottom: '1.25rem' }}>Hourly Rate Calculator</p>

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
            How much should you
            <br />
            <em style={{ color: 'var(--color-brass-300)', fontStyle: 'italic' }}>
              actually charge?
            </em>
          </h1>

          <p
            style={{
              fontFamily:   'var(--font-sans)',
              fontSize:     '1rem',
              fontWeight:   300,
              color:        'var(--color-ink-300)',
              lineHeight:   1.75,
              maxWidth:     '480px',
              marginBottom: '1.5rem',
            }}
          >
            Enter your income goal, taxes, expenses, and available hours.
            Your rate recalculates in real time — no guesswork, no copying competitors.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {['Free', 'No account', '100% private'].map((t) => (
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
            <button
              onClick={handleCopyShare}
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.6rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         copied ? 'var(--color-brass-400)' : 'var(--color-ink-500)',
                background:    'none',
                border:        '1px solid var(--color-ink-700)',
                padding:       '0.3rem 0.75rem',
                cursor:        'pointer',
                transition:    'all 0.2s',
              }}
            >
              {copied ? '✓ Copied' : '⎘ Copy share link'}
            </button>
          </div>
        </motion.div>
      </header>

      {/* ── Main layout ────────────────────────────────────────── */}
      <main
        style={{
          maxWidth:    '1280px',
          margin:      '0 auto',
          padding:     '3rem 1.5rem 6rem',
          display:     'grid',
          gap:         '2rem',
          alignItems:  'start',
        }}
        className="lg:grid-cols-12"
      >
        {/* Left: inputs + explainer */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }} className="lg:col-span-7">

          {/* Section 01 */}
          <InputSection label="01 — Financial Goals">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <InputField
                label="Desired Monthly Income"
                name="desiredMonthlyIncome"
                value={state.desiredMonthlyIncome}
                onChange={handleChange}
                prefix="$"
                tooltip="Your target take-home after all costs — what you need to live, save, and grow. Not your revenue goal, your income goal."
              />
              <InputField
                label="Monthly Business Expenses"
                name="monthlyBusinessExpenses"
                value={state.monthlyBusinessExpenses}
                onChange={handleChange}
                prefix="$"
                tooltip="Software, hardware amortisation, internet, business insurance, accounting, tools, and any other running costs. Be honest — most freelancers undercount here."
              />
              <InputField
                label="Estimated Tax Rate"
                name="estimatedTaxPercentage"
                value={state.estimatedTaxPercentage}
                onChange={handleChange}
                suffix="%"
                type="range"
                min={0}
                max={60}
                tooltip="Your combined self-employment and income tax rate. US freelancers: 28–35% is typical. UK: 28–32% inc. NI. Unsure? Use 30% — it is better to overprovision."
              />
              <InputField
                label="Profit Margin"
                name="desiredProfitMarginPercentage"
                value={state.desiredProfitMarginPercentage}
                onChange={handleChange}
                suffix="%"
                type="range"
                min={0}
                max={50}
                tooltip="The buffer above break-even. This is what funds your savings, your slow months, and your future. 10–15% is a reasonable minimum for most solo practices."
              />
            </div>
          </InputSection>

          {/* Section 02 */}
          <InputSection label="02 — Availability">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <InputField
                label="Weekly Billable Hours"
                name="weeklyBillableHours"
                value={state.weeklyBillableHours}
                onChange={handleChange}
                suffix="hrs"
                max={80}
                tooltip="Hours you actually bill clients — not total hours worked. Admin, proposals, sales, and revisions are real work that does not get billed. Typical range: 20–28."
              />
              <InputField
                label="Weeks Worked Per Month"
                name="weeksWorkedPerMonth"
                value={state.weeksWorkedPerMonth}
                onChange={handleChange}
                suffix="wks"
                min={1}
                max={4.33}
                step={0.1}
                tooltip="Full-time freelancers working all month: 4.33. If you take time off or have holidays built in, reduce this accordingly."
              />
            </div>
          </InputSection>

          {/* Section 03: Explainer */}
          <InputSection label="How This Works">
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
              Most freelance rate calculators divide an income goal by hours and call it done.
              That produces a number that looks right but ignores the three things that will
              quietly destroy your margin: taxes, business overhead, and the unrealistic
              assumption that every working hour is a billable one.
            </p>

            <div
              style={{
                fontFamily:   'var(--font-mono)',
                fontSize:     '0.82rem',
                background:   'var(--color-ink-800)',
                border:       '1px solid var(--color-ink-700)',
                color:        'var(--color-ink-200)',
                padding:      '1rem 1.25rem',
                lineHeight:   1.75,
                marginBottom: '2rem',
              }}
            >
              (income goal + expenses + taxes + profit) ÷ billable hours = your rate
            </div>

            {/* Why the result matters */}
            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      '1.1rem',
                fontWeight:    700,
                color:         'var(--color-ink-50)',
                letterSpacing: '-0.015em',
                marginBottom:  '0.85rem',
              }}
            >
              Why the number you are charging now is probably wrong
            </h2>

            <div
              style={{
                background:   'var(--color-ink-900)',
                border:       '1px solid var(--color-ink-800)',
                padding:      '1.5rem',
                marginBottom: '2rem',
              }}
            >
              <p
                style={{
                  fontFamily:   'var(--font-sans)',
                  fontSize:     '0.875rem',
                  fontWeight:   300,
                  color:        'var(--color-ink-300)',
                  lineHeight:   1.75,
                  marginBottom: '0.85rem',
                }}
              >
                A freelancer targeting $5,000/month take-home with 25% tax, $800/month expenses,
                and 25 billable hours/week needs{' '}
                <strong style={{ color: 'var(--color-ink-100)', fontWeight: 500 }}>$64/hr</strong>{' '}
                — not the{' '}
                <strong style={{ color: 'var(--color-ink-100)', fontWeight: 500 }}>$29/hr</strong>{' '}
                a naive salary ÷ hours formula produces. Add a 15% profit margin and the correct
                floor is{' '}
                <strong style={{ color: 'var(--color-brass-300)', fontWeight: 500 }}>$74/hr</strong>.
              </p>
              <p
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '0.62rem',
                  letterSpacing: '0.08em',
                  color:         'var(--color-ink-600)',
                  textTransform: 'uppercase',
                }}
              >
                That $45/hr gap is real money lost every working week.
              </p>
            </div>

            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      '1.1rem',
                fontWeight:    700,
                color:         'var(--color-ink-50)',
                letterSpacing: '-0.015em',
                marginBottom:  '0.75rem',
              }}
            >
              The five most expensive pricing mistakes
            </h2>
            <ul
              style={{
                listStyle:     'none',
                padding:       0,
                marginBottom:  '2rem',
                display:       'flex',
                flexDirection: 'column',
                gap:           '0.5rem',
              }}
            >
              {[
                'Setting your rate based on what competitors charge, not what you need',
                'Treating tax as something to deal with later rather than building it in',
                'Forgetting monthly overhead — the subscriptions, hardware, insurance',
                'Assuming you will bill 40 hours a week, every week',
                'Setting a rate that covers survival but not growth',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display:    'flex',
                    gap:        '0.75rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize:   '0.875rem',
                    fontWeight: 300,
                    color:      'var(--color-ink-300)',
                    lineHeight: 1.6,
                  }}
                >
                  <span
                    style={{
                      color:      'var(--color-brass-500)',
                      fontFamily: 'var(--font-mono)',
                      fontSize:   '0.75rem',
                      flexShrink: 0,
                      marginTop:  '0.1em',
                    }}
                  >
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>

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
              Common questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {[
                {
                  q: 'How do I know which expenses to include?',
                  a: 'Include anything you pay for because you work freelance: software subscriptions, internet, business insurance, accountant fees, hardware replacement costs, and any tools specific to your work. Personal living costs go in the income field — not expenses.',
                },
                {
                  q: 'What tax rate should I actually use?',
                  a: 'Your combined marginal rate including self-employment tax (US) or National Insurance (UK). If you are in the US and unsure, 30% is a reasonable estimate for most income levels. UK freelancers on standard rate: around 29–32% depending on income.',
                },
                {
                  q: 'Should my rate change for different types of projects?',
                  a: 'Your calculated rate is your floor — a minimum that keeps the business viable. You can charge more for specialised, high-stakes, or short-deadline work. Never less, unless you are deliberately building a portfolio.',
                },
                {
                  q: 'I charge by the project, not by the hour — is this still useful?',
                  a: 'Yes. Your hourly rate is the foundation of every project quote. Use it internally to price work, then present a fixed total to clients. The project pricing calculator helps build the quote from there.',
                },
              ].map(({ q, a }) => (
                <div key={q}>
                  <p
                    style={{
                      fontFamily:   'var(--font-display)',
                      fontSize:     '0.95rem',
                      fontWeight:   700,
                      color:        'var(--color-ink-100)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {q}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize:   '0.875rem',
                      fontWeight: 300,
                      color:      'var(--color-ink-300)',
                      lineHeight: 1.8,
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>

            {/* Cross-link to project calculator */}
            <div
              style={{
                padding:      '1.5rem',
                background:   'var(--color-ink-800)',
                border:       '1px solid var(--color-ink-700)',
                marginBottom: '2rem',
              }}
            >
              <p
                style={{
                  fontFamily:   'var(--font-display)',
                  fontSize:     '0.95rem',
                  fontWeight:   700,
                  color:        'var(--color-ink-100)',
                  marginBottom: '0.4rem',
                }}
              >
                Quoting a fixed-price project?
              </p>
              <p
                style={{
                  fontFamily:   'var(--font-sans)',
                  fontSize:     '0.82rem',
                  fontWeight:   300,
                  color:        'var(--color-ink-400)',
                  lineHeight:   1.65,
                  marginBottom: '0.85rem',
                }}
              >
                The project pricing calculator takes your hourly rate and builds a full quote
                — including revision rounds, scope buffer, tax, and profit margin.
              </p>
              <Link
                to="/project-calculator"
                style={{
                  fontFamily:     'var(--font-mono)',
                  fontSize:       '0.68rem',
                  letterSpacing:  '0.1em',
                  textTransform:  'uppercase',
                  color:          'var(--color-brass-300)',
                  textDecoration: 'none',
                }}
              >
                → Open project pricing calculator
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
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-brass-600)' }}>→</span>
                  {post.label}
                </Link>
              ))}
            </div>
          </InputSection>
        </div>

        {/* Right: sticky results */}
        <div className="lg:col-span-5" style={{ position: 'sticky', top: '5.5rem' }}>
          <ResultsDisplay results={results} />
        </div>
      </main>
    </div>
  );
}

/* ── InputSection ──────────────────────────────────────────────── */
function InputSection({ label, children }: { label: string; children: React.ReactNode }) {
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
      >
        {label}
      </p>
      {children}
    </div>
  );
}