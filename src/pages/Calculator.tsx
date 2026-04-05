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
        title="Freelance Hourly Rate Calculator | RateCrafts"
        description="Use RateCrafts' free freelance hourly rate calculator to work out what you should charge based on your income goals, taxes, expenses, billable hours, and profit margin."
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
            Determine exactly what you need to charge per hour to cover your taxes, expenses,
            and desired take-home pay.
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

            <section className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 space-y-10">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  How This Freelance Rate Calculator Works
                </h2>
                <p className="text-slate-700 leading-7 mb-4">
                  This calculator helps you estimate a realistic hourly rate based on your income goals,
                  taxes, business expenses, and available billable time. Instead of guessing what to
                  charge, it gives you a more practical number based on what your freelance business
                  actually needs to earn.
                </p>
                <p className="text-slate-700 leading-7 mb-4">It takes into account:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Your desired monthly income</li>
                  <li>Estimated tax percentage</li>
                  <li>Monthly business expenses</li>
                  <li>Weekly billable hours</li>
                  <li>Working weeks per month</li>
                  <li>Your desired profit margin</li>
                </ul>
                <p className="text-slate-700 leading-7 mt-4">
                  Based on these inputs, the calculator estimates a recommended hourly rate and day rate
                  that can help you price your services more confidently.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Example Calculation</h2>
                <p className="text-slate-700 leading-7 mb-4">
                  Let’s say you want to earn <strong>$3,000 per month</strong> after covering expenses
                  and taxes.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Monthly income goal: $3,000</li>
                  <li>Tax rate: 20%</li>
                  <li>Business expenses: $500</li>
                  <li>Billable hours: 25 hours per week</li>
                  <li>Weeks worked per month: 4</li>
                </ul>
                <p className="text-slate-700 leading-7 mt-4">
                  In this situation, your recommended hourly rate will usually be much higher than a
                  simple guess, because it includes taxes, real costs, and the fact that not every hour
                  you work is billable.
                </p>
                <p className="text-slate-700 leading-7 mt-2">
                  This is exactly why many freelancers undercharge at the start. A structured
                  calculation helps you avoid that mistake.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Who This Calculator Is For</h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Freelancers starting their career</li>
                  <li>Consultants setting pricing strategies</li>
                  <li>Designers and developers</li>
                  <li>Digital marketers</li>
                  <li>Coaches and service providers</li>
                  <li>Small business owners selling time-based services</li>
                </ul>
                <p className="text-slate-700 leading-7 mt-4">
                  If you sell your time, expertise, or services, this calculator gives you a stronger
                  foundation than copying a competitor’s rates or making rough guesses.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  Common Freelance Pricing Mistakes
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>Ignoring taxes when setting rates</li>
                  <li>Forgetting business expenses</li>
                  <li>Assuming all working hours are billable</li>
                  <li>Copying competitors without doing the math</li>
                  <li>Leaving no room for profit</li>
                </ul>
                <p className="text-slate-700 leading-7 mt-4">
                  These mistakes often lead to underpricing, unstable income, and burnout. This
                  calculator helps you avoid them by giving you a more realistic number to work from.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                  Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      How do I know if my hourly rate is too low?
                    </h3>
                    <p className="text-slate-700 leading-7">
                      If your current rate does not cover taxes, expenses, savings, and profit, it is
                      probably too low. Many freelancers only realize this after a few months of
                      inconsistent income.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Should I charge hourly or by project?
                    </h3>
                    <p className="text-slate-700 leading-7">
                      Hourly pricing is useful when starting out or when scope is unclear. Project
                      pricing often becomes a better option as your experience grows and you get better
                      at estimating outcomes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      How many billable hours should I expect per week?
                    </h3>
                    <p className="text-slate-700 leading-7">
                      Many freelancers average between 20 and 30 billable hours per week, depending on
                      admin work, sales, revisions, and client communication.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Does this calculator include taxes and expenses?
                    </h3>
                    <p className="text-slate-700 leading-7">
                      Yes. It is designed to include both so your suggested rate is more realistic and
                      more useful for real business decisions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Can beginners use this calculator?
                    </h3>
                    <p className="text-slate-700 leading-7">
                      Absolutely. In fact, beginners benefit the most because this helps prevent
                      underpricing from the start.
                    </p>
                  </div>
                </div>
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