import React, { useState, useEffect } from 'react';
import { Link }               from 'react-router-dom';
import { motion }             from 'motion/react';
import { SEO }                from '../components/SEO';
import { InputField }         from '../components/InputField';
import { ResultsDisplay }     from '../components/ResultsDisplay';
import { CalculatorState, CalculationResults } from '../types';
import { calculateRate }      from '../utils/calculator';

/* ── Initial state ─────────────────────────────────────────────── */
const INITIAL_STATE: CalculatorState = {
  desiredMonthlyIncome:         6000,
  estimatedTaxPercentage:       25,
  monthlyBusinessExpenses:      1000,
  weeklyBillableHours:          25,
  weeksWorkedPerMonth:          4,
  desiredProfitMarginPercentage:10,
};

/* ── CalculatorPage ────────────────────────────────────────────── */
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
        title="Freelance Hourly Rate Calculator | RateCraft"
        description="Calculate your freelance hourly rate based on income goals, taxes, expenses, billable hours, and profit margin."
      />

      {/* ── Page header ────────────────────────────────────── */}
      <header
        style={{
          padding:    '5rem 1.5rem 3.5rem',
          borderBottom:'1px solid var(--color-ink-800)',
          position:   'relative',
          overflow:   'hidden',
        }}
      >
        {/* Subtle grid bg */}
        <div
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
            What should you
            <br />
            <em style={{ color: 'var(--color-brass-300)', fontStyle: 'italic' }}>
              actually charge?
            </em>
          </h1>

          <p
            style={{
              fontFamily:  'var(--font-sans)',
              fontSize:    '1rem',
              fontWeight:  300,
              color:       'var(--color-ink-300)',
              lineHeight:  1.75,
              maxWidth:    '460px',
            }}
          >
            Enter your goals and availability. Your rate updates live as you type.
          </p>
        </motion.div>
      </header>

      {/* ── Main layout ────────────────────────────────────── */}
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

        {/* Left: Input sections */}
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
          className="lg:col-span-7"
        >

          {/* Section 1: Financial Goals */}
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
                tooltip="Software, insurance, office, tools, marketing, etc."
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
                tooltip="Self-employment + income tax combined estimate."
              />
              <InputField
                label="Desired Profit Margin"
                name="desiredProfitMarginPercentage"
                value={state.desiredProfitMarginPercentage}
                onChange={handleChange}
                suffix="%"
                type="range"
                min={0}
                max={50}
                tooltip="Extra buffer for savings, growth, and unexpected costs."
              />
            </div>
          </InputSection>

          {/* Section 2: Availability */}
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
                tooltip="Actual hours you can spend on paid client work per week."
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
                tooltip="Average working weeks in a month (typically 4.0–4.3)."
              />
            </div>
          </InputSection>

          {/* Section 3: Explainer content */}
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
              This calculator works backwards from what you need to earn,
              not forwards from what others charge. It factors in taxes, real
              expenses, profit margin, and realistic billable hours to give
              you a rate your business can actually sustain.
            </p>

            {/* Formula block */}
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
              Common pricing mistakes
            </h2>

            <ul
              style={{
                listStyle:    'none',
                padding:      0,
                marginBottom: '2rem',
                display:      'flex',
                flexDirection:'column',
                gap:          '0.5rem',
              }}
            >
              {[
                'Ignoring taxes when setting rates',
                'Forgetting monthly business expenses',
                'Assuming all working hours are billable',
                'Copying competitors without doing the math',
                'Leaving no room for profit or savings',
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
                  <span style={{ color: 'var(--color-brass-500)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', flexShrink: 0, marginTop: '0.1em' }}>—</span>
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
              Frequently Asked Questions
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                { q: 'How do I know if my rate is too low?',            a: "If your rate doesn't cover taxes, expenses, savings, and profit — it's too low. Many freelancers only realize this after months of inconsistent income."  },
                { q: 'Should I charge hourly or by project?',           a: 'Hourly works well when starting out. Project pricing becomes stronger once you can estimate scope with confidence.'                                        },
                { q: 'How many billable hours per week is realistic?',  a: 'Most freelancers average 20–30 billable hours once admin, sales, and revisions are accounted for.'                                                          },
                { q: 'Does this include taxes and expenses?',           a: 'Yes. Both are baked into the calculation so the result is grounded in your real financial situation.'                                                        },
              ].map(({ q, a }) => (
                <div key={q}>
                  <p
                    style={{
                      fontFamily:    'var(--font-display)',
                      fontSize:      '0.95rem',
                      fontWeight:    700,
                      color:         'var(--color-ink-100)',
                      marginBottom:  '0.35rem',
                    }}
                  >
                    {q}
                  </p>
                  <p
                    style={{
                      fontFamily:  'var(--font-sans)',
                      fontSize:    '0.875rem',
                      fontWeight:  300,
                      color:       'var(--color-ink-300)',
                      lineHeight:  1.8,
                    }}
                  >
                    {a}
                  </p>
                </div>
              ))}
            </div>

            {/* Link to blog */}
            <div
              style={{
                marginTop:   '2.5rem',
                padding:     '1.5rem',
                background:  'rgba(212,160,23,0.04)',
                border:      '1px solid rgba(212,160,23,0.15)',
                borderLeft:  '2px solid var(--color-brass-500)',
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
                Want to go deeper? Read the full guide on calculating your rate.
              </p>
              <Link
                to="/blog/how-to-calculate-freelance-rate"
                style={{
                  fontFamily:     'var(--font-mono)',
                  fontSize:       '0.68rem',
                  letterSpacing:  '0.1em',
                  textTransform:  'uppercase',
                  color:          'var(--color-brass-300)',
                  textDecoration: 'none',
                }}
              >
                Read the guide →
              </Link>
            </div>
          </InputSection>
        </div>

        {/* Right: Sticky results panel */}
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