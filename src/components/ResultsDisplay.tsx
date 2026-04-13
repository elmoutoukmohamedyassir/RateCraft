import React from 'react';
import { CalculationResults } from '../types';
import { motion } from 'motion/react';

/* ── Types ─────────────────────────────────────────────────────── */
interface ResultsDisplayProps {
  results: CalculationResults;
}

/* ── Helpers ───────────────────────────────────────────────────── */
const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style:                 'currency',
    currency:              'USD',
    maximumFractionDigits: 0,
  }).format(value);

/* ── ResultsDisplay ────────────────────────────────────────────── */
export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results }) => {
  const {
    recommendedHourlyRate,
    recommendedDayRate,
    monthlyRevenueTarget,
    yearlyRevenueTarget,
    totalMonthlyBillableHours,
    monthlyExpensesAmount,
    monthlyTaxAmount,
    monthlyProfitAmount,
  } = results;

  const breakdownRows = [
    { label: 'Billable hours',    value: `${Math.round(totalMonthlyBillableHours)} hrs` },
    { label: 'Business expenses', value: formatCurrency(monthlyExpensesAmount)          },
    { label: 'Estimated taxes',   value: formatCurrency(monthlyTaxAmount)               },
    { label: 'Profit buffer',     value: formatCurrency(monthlyProfitAmount)            },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>

      {/* ── Hero rate card ─────────────────────────────────── */}
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
        {/* Top brass accent bar */}
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
          Recommended Hourly Rate
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
          {formatCurrency(recommendedHourlyRate)}
        </p>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize:   '0.65rem',
            color:      'var(--color-ink-500)',
          }}
        >
          per hour
        </p>
      </motion.div>

      {/* ── Day rate card ──────────────────────────────────── */}
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
          Day Rate
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
          {formatCurrency(recommendedDayRate)}
        </p>
      </motion.div>

      {/* ── Monthly & yearly targets ───────────────────────── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
        {[
          { label: 'Monthly Target', value: formatCurrency(monthlyRevenueTarget) },
          { label: 'Yearly Target',  value: formatCurrency(yearlyRevenueTarget)  },
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

      {/* ── Monthly breakdown ──────────────────────────────── */}
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
          Monthly Breakdown
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {breakdownRows.map((row) => (
            <div
              key={row.label}
              style={{
                display:        'flex',
                justifyContent: 'space-between',
                alignItems:     'baseline',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize:   '0.83rem',
                  fontWeight: 300,
                  color:      'var(--color-ink-400)',
                }}
              >
                {row.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize:   '0.83rem',
                  color:      'var(--color-ink-200)',
                }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>

        {/* Total row */}
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
            Revenue Target
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
            {formatCurrency(monthlyRevenueTarget)}
          </span>
        </div>
      </motion.div>

      {/* Disclaimer */}
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
};