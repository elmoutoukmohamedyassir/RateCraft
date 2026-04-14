import React, { useState, useEffect } from 'react';
import { Link }                       from 'react-router-dom';
import { motion }                     from 'motion/react';
import { SEO }                        from '../components/SEO';
import { InputField }                 from '../components/InputField';
import { ResultsDisplay }             from '../components/ResultsDisplay';
import { CalculatorState, CalculationResults } from '../types';
import { calculateRate }              from '../utils/calculator';

/* ── Default state ─────────────────────────────────────────────── */
const INITIAL_STATE: CalculatorState = {
  desiredMonthlyIncome:          6000,
  estimatedTaxPercentage:        25,
  monthlyBusinessExpenses:       1000,
  weeklyBillableHours:           25,
  weeksWorkedPerMonth:           4,
  desiredProfitMarginPercentage: 10,
};

/* ── Related blog posts ────────────────────────────────────────── */
const RELATED_POSTS = [
  { id: 'how-to-calculate-freelance-rate',   label: 'How to calculate your freelance rate'           },
  { id: 'billable-hours-guide',              label: 'How many billable hours are realistic?'          },
  { id: 'hidden-costs-of-freelancing',       label: '7 hidden costs of freelancing'                  },
  { id: 'profit-margin-for-freelancers',     label: 'Why freelancers need a profit margin'           },
];

/* ── Calculator page ───────────────────────────────────────────── */
export default function CalculatorPage() {
  const [state,   setState]   = useState<CalculatorState>(INITIAL_STATE);
  const [results, setResults] = useState<CalculationResults>(calculateRate(INITIAL_STATE));

  useEffect(() => {
    setResults(calculateRate(state));
  }, [state]);

  const handleChange = (name: keyof CalculatorState, value: number) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO
        title="Freelance Rate Calculator — Find Your Hourly Rate | RateCrafts"
        description="Calculate your freelance hourly rate based on your income goal, tax rate, business expenses, and billable hours. Free, no signup required."
      />

      {/* ── Page header ────────────────────────────────────── */}
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
          <p className="mono-label" style={{ marginBottom: '1.25rem' }}>Rate Calculator</p>

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
            Calculate your
            <br />
            <em style={{ color: 'var(--color-brass-300)', fontStyle: 'italic' }}>
              real hourly rate.
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
            Enter your income goal, taxes, expenses, and available hours.
            Your rate updates live as you type.
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

      {/* ── Main two-column layout ──────────────────────────── */}
      <main
        style={{
          maxWidth: '1280px',
          margin:   '0 auto',
          padding:  '3rem 1.5rem 6rem',
          display:  'grid',
          gap:      '2rem',
          alignItems:'start',
        }}
        className="lg:grid-cols-12"
      >

        {/* ── Left: Input sections ──────────────────────── */}
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
          className="lg:col-span-7"
        >

          {/* Section 1 */}
          <InputSection label="01 — Financial Goals">
            <div
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap:                 '1.5rem',
              }}
            >
              <InputField
                label="Desired Monthly Income"
                name="desiredMonthlyIncome"
                value={state.desiredMonthlyIncome}
                onChange={handleChange}
                prefix="$"
                tooltip="How much you want to take home each month after taxes and expenses."
              />
              <InputField
                label="Monthly Business Expenses"
                name="monthlyBusinessExpenses"
                value={state.monthlyBusinessExpenses}
                onChange={handleChange}
                prefix="$"
                tooltip="Software, insurance, tools, subscriptions, marketing — everything it costs to run your business."
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
                tooltip="Self-employment tax + income tax combined. Not sure? 25–30% is a safe starting point for most freelancers."
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
                tooltip="A buffer above your costs — for slow months, growth, savings, and unexpected expenses. 10–15% is a solid minimum."
              />
            </div>
          </InputSection>

          {/* Section 2 */}
          <InputSection label="02 — Availability">
            <div
              style={{
                display:             'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap:                 '1.5rem',
              }}
            >
              <InputField
                label="Weekly Billable Hours"
                name="weeklyBillableHours"
                value={state.weeklyBillableHours}
                onChange={handleChange}
                suffix="hrs"
                max={80}
                tooltip="Actual paid client hours per week — not total working hours. Admin, sales, and comms don't count. Most freelancers average 20–30."
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
                tooltip="Working weeks in a typical month. Use 4.0–4.3 for full-time freelancing."
              />
            </div>
          </InputSection>

          {/* Section 3: Explainer */}
          <InputSection label="How It Works">
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
              This calculator works backwards from what you need to earn — not
              forwards from what others charge. It factors in taxes, real expenses,
              profit margin, and realistic billable hours to give you a rate your
              business can actually sustain.
            </p>

            {/* Formula */}
            <div
              style={{
                fontFamily:   'var(--font-mono)',
                fontSize:     '0.82rem',
                background:   'var(--color-ink-800)',
                border:       '1px solid var(--color-ink-700)',
                color:        'var(--color-ink-200)',
                padding:      '1rem 1.25rem',
                lineHeight:   1.7,
                marginBottom: '2rem',
              }}
            >
              (Net income + expenses + taxes + profit) ÷ billable hours = hourly rate
            </div>

            {/* Common mistakes */}
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
              Why most freelancers undercharge
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
                'Ignoring taxes when setting rates',
                'Forgetting monthly business expenses',
                'Assuming all working hours are billable',
                'Copying competitors without doing the math',
                'Setting no profit margin — breaking even at best',
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

            {/* FAQ */}
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
              Frequently Asked Questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                {
                  q: 'How do I know if my rate is too low?',
                  a: "If your rate doesn't cover taxes, expenses, savings, and profit — it's too low. Many freelancers only realise this after months of inconsistent income.",
                },
                {
                  q: 'Should I charge hourly or by project?',
                  a: 'Hourly works well when starting out or when scope is unclear. Project pricing becomes stronger once you can estimate reliably.',
                },
                {
                  q: 'How many billable hours per week is realistic?',
                  a: 'Most freelancers average 20–30 billable hours once admin, sales, and revisions are accounted for. 40 is rarely achievable.',
                },
                {
                  q: 'Does this calculator include taxes and expenses?',
                  a: 'Yes — both are baked into the calculation so the result reflects your real financial situation, not just your income goal.',
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

            {/* Related reading */}
            <div
              style={{
                marginTop:   '2.5rem',
                paddingTop:  '2rem',
                borderTop:   '1px solid var(--color-ink-800)',
              }}
            >
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
            </div>
          </InputSection>
        </div>

        {/* ── Right: Sticky results ─────────────────────── */}
        <div className="lg:col-span-5" style={{ position: 'sticky', top: '5.5rem' }}>
          <ResultsDisplay results={results} />
        </div>
      </main>
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
      >
        {label}
      </p>
      {children}
    </div>
  );
}