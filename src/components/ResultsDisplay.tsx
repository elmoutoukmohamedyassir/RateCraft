import React from 'react';
import { CalculationResults } from '../types';
import { motion } from 'motion/react';
import { TrendingUp, Clock, Calendar, Wallet } from 'lucide-react';

interface ResultsDisplayProps {
  results: CalculationResults;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const formatCurrency = (val: number) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

  const cards = [
    {
      label: 'Recommended Hourly Rate',
      value: formatCurrency(results.recommendedHourlyRate),
      icon: Clock,
      color: 'text-brand-600',
      bg: 'bg-brand-50',
    },
    {
      label: 'Recommended Day Rate',
      value: formatCurrency(results.recommendedDayRate),
      icon: Calendar,
      color: 'text-emerald-600',
      bg: 'bg-emerald-50',
    },
    {
      label: 'Monthly Revenue Target',
      value: formatCurrency(results.monthlyRevenueTarget),
      icon: TrendingUp,
      color: 'text-violet-600',
      bg: 'bg-violet-50',
    },
    {
      label: 'Yearly Revenue Target',
      value: formatCurrency(results.yearlyRevenueTarget),
      icon: Wallet,
      color: 'text-amber-600',
      bg: 'bg-amber-50',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((card, idx) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-lg ${card.bg}`}>
                <card.icon className={`w-5 h-5 ${card.color}`} />
              </div>
              <span className="text-sm font-medium text-slate-500">{card.label}</span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{card.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-slate-900 text-white">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          Monthly Breakdown
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Billable Hours</span>
            <span className="font-mono">{Math.round(results.totalMonthlyBillableHours)} hrs</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Business Expenses</span>
            <span className="font-mono">{formatCurrency(results.monthlyExpensesAmount)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Estimated Taxes</span>
            <span className="font-mono">{formatCurrency(results.monthlyTaxAmount)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-slate-400">Profit Buffer</span>
            <span className="font-mono">{formatCurrency(results.monthlyProfitAmount)}</span>
          </div>
          <div className="pt-3 border-t border-slate-800 flex justify-between font-bold">
            <span>Monthly Revenue Target</span>
            <span className="text-brand-400">{formatCurrency(results.monthlyRevenueTarget)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
