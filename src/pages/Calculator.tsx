import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';
import { InputField } from '../components/InputField';
import { ResultsDisplay } from '../components/ResultsDisplay';
import { CalculatorState, CalculationResults } from '../types';
import { calculateRate } from '../utils/calculator';
import { Sparkles } from 'lucide-react';

const initialValues: CalculatorState = {
  desiredMonthlyIncome: 6000,
  estimatedTaxPercentage: 25,
  monthlyBusinessExpenses: 1000,
  weeklyBillableHours: 25,
  weeksWorkedPerMonth: 4,
  desiredProfitMarginPercentage: 10,
};

export default function CalculatorPage() {
  const [state, setState] = useState<CalculatorState>(initialValues);
  const [results, setResults] = useState<CalculationResults>(calculateRate(initialValues));

  useEffect(() => {
    setResults(calculateRate(state));
  }, [state]);

  const handleInputChange = (name: keyof CalculatorState, value: number) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Hourly Rate Calculator | RateCraft" 
        description="Use our free freelance hourly rate calculator to determine exactly what you should charge clients to reach your income goals."
      />
      
      <header className="pt-16 pb-12 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-semibold mb-6">
            <Sparkles className="w-3 h-3" />
            <span>Professional Grade Calculator</span>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Freelance Hourly Rate Calculator
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Determine exactly what you need to charge per hour to cover your taxes, expenses, and desired take-home pay.
          </p>
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-8">
            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50">
              <h2 className="text-xl font-bold mb-6">1. Financial Goals</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  label="Desired Monthly Income (Net)"
                  name="desiredMonthlyIncome"
                  value={state.desiredMonthlyIncome}
                  onChange={handleInputChange}
                  prefix="$"
                  tooltip="How much you want to take home each month after taxes and expenses."
                />
                <InputField
                  label="Monthly Business Expenses"
                  name="monthlyBusinessExpenses"
                  value={state.monthlyBusinessExpenses}
                  onChange={handleInputChange}
                  prefix="$"
                  tooltip="Software, insurance, office space, marketing, etc."
                />
                <InputField
                  label="Estimated Tax Percentage"
                  name="estimatedTaxPercentage"
                  value={state.estimatedTaxPercentage}
                  onChange={handleInputChange}
                  suffix="%"
                  type="range"
                  min={0}
                  max={60}
                  tooltip="Self-employment tax, income tax, etc."
                />
                <InputField
                  label="Desired Profit Margin"
                  name="desiredProfitMarginPercentage"
                  value={state.desiredProfitMarginPercentage}
                  onChange={handleInputChange}
                  suffix="%"
                  type="range"
                  min={0}
                  max={50}
                  tooltip="Extra buffer for savings, growth, or unexpected costs."
                />
              </div>

              <div className="my-8 border-t border-slate-100" />

              <h2 className="text-xl font-bold mb-6">2. Availability</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <InputField
                  label="Weekly Billable Hours"
                  name="weeklyBillableHours"
                  value={state.weeklyBillableHours}
                  onChange={handleInputChange}
                  suffix="hrs"
                  max={168}
                  tooltip="Actual hours spent on client work per week."
                />
                <InputField
                  label="Weeks Worked Per Month"
                  name="weeksWorkedPerMonth"
                  value={state.weeksWorkedPerMonth}
                  onChange={handleInputChange}
                  suffix="weeks"
                  min={1}
                  max={4.33}
                  step={0.1}
                  tooltip="Average number of weeks you work in a month."
                />
              </div>
            </section>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <ResultsDisplay results={results} />
          </div>
        </div>
      </main>
    </div>
  );
}
