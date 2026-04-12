import React from 'react';
import { CalculationResults } from '../types';
import { motion } from 'motion/react';

interface ResultsDisplayProps {
  results: CalculationResults;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const fmt = (val: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);

  const primaryCards = [
    {
      label: 'Hourly Rate',
      value: fmt(results.recommendedHourlyRate),
      tag: 'RECOMMENDED',
      accent: true,
    },
    {
      label: 'Day Rate',
      value: fmt(results.recommendedDayRate),
      tag: 'PER DAY',
      accent: false,
    },
  ];

  const secondaryCards = [
    {
      label: 'Monthly Target',
      value: fmt(results.monthlyRevenueTarget),
    },
    {
      label: 'Yearly Target',
      value: fmt(results.yearlyRevenueTarget),
    },
  ];

  const breakdownRows = [
    { label: 'Billable hours / mo', value: `${Math.round(results.totalMonthlyBillableHours)} hrs` },
    { label: 'Business expenses', value: fmt(results.monthlyExpensesAmount) },
    { label: 'Estimated taxes', value: fmt(results.monthlyTaxAmount) },
    { label: 'Profit buffer', value: fmt(results.monthlyProfitAmount) },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

      {/* Primary rate cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--color-ink-800)' }}>
        {primaryCards.map((card, idx) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.35, ease: 'easeOut' }}
            style={{
              background: card.accent ? 'var(--color-ink-900)' : 'var(--color-ink-950)',
              padding: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {card.accent && (
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))',
                }}
              />
            )}
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: card.accent ? 'var(--color-brass-500)' : 'var(--color-ink-600)',
                marginBottom: '0.5rem',
              }}
            >
              {card.tag}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: card.accent ? 'var(--color-ink-50)' : 'var(--color-ink-300)',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}
            >
              {card.value}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--color-ink-600)',
                marginTop: '0.4rem',
              }}
            >
              {card.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Secondary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--color-ink-800)' }}>
        {secondaryCards.map((card, idx) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 + idx * 0.08, duration: 0.35, ease: 'easeOut' }}
            style={{
              background: 'var(--color-ink-900)',
              padding: '1.1rem 1.25rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--color-ink-600)',
                marginBottom: '0.3rem',
                letterSpacing: '0.06em',
              }}
            >
              {card.label}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.1rem',
                color: 'var(--color-ink-200)',
                fontWeight: 500,
              }}
            >
              {card.value}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Monthly breakdown */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        style={{
          background: 'var(--color-ink-900)',
          border: '1px solid var(--color-ink-800)',
          padding: '1.5rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--color-ink-600)',
            marginBottom: '1.25rem',
            paddingBottom: '0.75rem',
            borderBottom: '1px solid var(--color-ink-800)',
          }}
        >
          Monthly Breakdown
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {breakdownRows.map((row) => (
            <div
              key={row.label}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8rem',
                  color: 'var(--color-ink-500)',
                }}
              >
                {row.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  color: 'var(--color-ink-300)',
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
            marginTop: '1rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--color-ink-800)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--color-ink-400)',
            }}
          >
            Revenue Target
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--color-brass-400)',
              letterSpacing: '-0.01em',
            }}
          >
            {fmt(results.monthlyRevenueTarget)}
          </span>
        </div>
      </motion.div>

      {/* Disclaimer */}
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          color: 'var(--color-ink-700)',
          lineHeight: 1.6,
          letterSpacing: '0.03em',
        }}
      >
        Estimates only. Consult a financial advisor for business planning.
      </p>
    </div>
  );
};