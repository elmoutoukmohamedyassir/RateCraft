import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { InputField } from '../components/InputField';
import { ResultsDisplay } from '../components/ResultsDisplay';
import { CalculatorState, CalculationResults } from '../types';
import { calculateRate } from '../utils/calculator';

const initialValues: CalculatorState = {
  desiredMonthlyIncome: 6000,
  estimatedTaxPercentage: 25,
  monthlyBusinessExpenses: 1000,
  weeklyBillableHours: 25,
  weeksWorkedPerMonth: 4,
  desiredProfitMarginPercentage: 10,
};

const S = {
  sectionLabel: { fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--color-brass-500)', marginBottom: '1.25rem', display: 'block' },
  sectionCard: { background: 'var(--color-ink-900)', border: '1px solid var(--color-ink-800)', padding: '2rem' },
  prose: { fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--color-ink-400)', lineHeight: 1.75 },
  proseH: { fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-ink-100)', letterSpacing: '-0.01em', marginBottom: '0.75rem', marginTop: '2rem' },
};

export default function CalculatorPage() {
  const [state, setState] = useState<CalculatorState>(initialValues);
  const [results, setResults] = useState<CalculationResults>(calculateRate(initialValues));

  useEffect(() => { setResults(calculateRate(state)); }, [state]);

  const handleInputChange = (name: keyof CalculatorState, value: number) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO title="Freelance Hourly Rate Calculator | RateCraft" description="Calculate your freelance hourly rate based on income goals, taxes, expenses, billable hours, and profit margin." />

      {/* Header */}
      <header style={{ padding: '5rem 1.5rem 3.5rem', borderBottom: '1px solid var(--color-ink-800)' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-3xl">
          <span style={S.sectionLabel}>Rate Calculator</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--color-ink-50)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '1rem' }}>
            What should you<br /><em style={{ color: 'var(--color-brass-400)', fontStyle: 'italic' }}>actually charge?</em>
          </h1>
          <p style={{ ...S.prose, fontSize: '1rem', maxWidth: '480px' }}>
            Enter your financial goals and availability. Your recommended hourly rate updates in real time.
          </p>
        </motion.div>
      </header>

      {/* Main grid */}
      <main className="max-w-7xl mx-auto" style={{ padding: '3rem 1.5rem 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', alignItems: 'start' }} className="lg:grid-cols-12">

          {/* Left: inputs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="lg:col-span-7">

            {/* Financial Goals */}
            <div style={S.sectionCard}>
              <span style={S.sectionLabel}>01 — Financial Goals</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <InputField label="Desired Monthly Income (Net)" name="desiredMonthlyIncome" value={state.desiredMonthlyIncome} onChange={handleInputChange} prefix="$" tooltip="How much you want to take home each month after taxes and expenses." />
                <InputField label="Monthly Business Expenses" name="monthlyBusinessExpenses" value={state.monthlyBusinessExpenses} onChange={handleInputChange} prefix="$" tooltip="Software, insurance, office space, marketing, etc." />
                <InputField label="Estimated Tax Percentage" name="estimatedTaxPercentage" value={state.estimatedTaxPercentage} onChange={handleInputChange} suffix="%" type="range" min={0} max={60} tooltip="Self-employment tax, income tax, etc." />
                <InputField label="Desired Profit Margin" name="desiredProfitMarginPercentage" value={state.desiredProfitMarginPercentage} onChange={handleInputChange} suffix="%" type="range" min={0} max={50} tooltip="Extra buffer for savings, growth, or unexpected costs." />
              </div>
            </div>

            {/* Availability */}
            <div style={S.sectionCard}>
              <span style={S.sectionLabel}>02 — Availability</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <InputField label="Weekly Billable Hours" name="weeklyBillableHours" value={state.weeklyBillableHours} onChange={handleInputChange} suffix="hrs" max={168} tooltip="Actual hours spent on client work per week." />
                <InputField label="Weeks Worked Per Month" name="weeksWorkedPerMonth" value={state.weeksWorkedPerMonth} onChange={handleInputChange} suffix="wks" min={1} max={4.33} step={0.1} tooltip="Average number of working weeks per month." />
              </div>
            </div>

            {/* Explainer content */}
            <div style={{ ...S.sectionCard, paddingTop: '2.5rem' }}>
              <span style={S.sectionLabel}>How This Works</span>
              <p style={S.prose}>This calculator derives your minimum viable hourly rate from six inputs: desired take-home pay, tax rate, business expenses, profit margin, weekly billable hours, and working weeks per month. It works backwards from what you need to earn — not forwards from what others charge.</p>

              <h2 style={S.proseH}>The calculation logic</h2>
              <p style={S.prose}>First it calculates the gross monthly revenue required to yield your desired net income after taxes. It adds your monthly business expenses, then applies your profit margin buffer on top. This total is divided by your monthly billable hours to arrive at a rate.</p>

              <h2 style={S.proseH}>Common freelance pricing mistakes</h2>
              <ul style={{ ...S.prose, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {['Ignoring taxes when setting rates', 'Forgetting business expenses', 'Assuming all working hours are billable', 'Copying competitors without doing the math', 'Leaving no room for profit or savings'].map((item) => <li key={item}>{item}</li>)}
              </ul>

              <h2 style={S.proseH}>Frequently Asked Questions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { q: 'How do I know if my hourly rate is too low?', a: "If your rate doesn't cover taxes, expenses, savings, and profit — it's probably too low. Many freelancers only realize this after months of inconsistent income." },
                  { q: 'Should I charge hourly or by project?', a: 'Hourly pricing is useful when starting out or when scope is unclear. Project pricing often becomes better as experience grows.' },
                  { q: 'How many billable hours should I expect per week?', a: 'Most freelancers average 20–30 billable hours, depending on admin work, sales, revisions, and client communication.' },
                  { q: 'Does this include taxes and expenses?', a: 'Yes. Both are baked into the calculation so your suggested rate is grounded in reality.' },
                ].map(({ q, a }) => (
                  <div key={q}>
                    <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: 'var(--color-ink-200)', marginBottom: '0.35rem' }}>{q}</p>
                    <p style={S.prose}>{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: results — sticky */}
          <div className="lg:col-span-5" style={{ position: 'sticky', top: '5.5rem' }}>
            <ResultsDisplay results={results} />
          </div>
        </div>
      </main>
    </div>
  );
}