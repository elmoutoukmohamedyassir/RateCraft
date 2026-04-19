import React from 'react';
import { Link }   from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO }    from '../components/SEO';

const BODY: React.CSSProperties = {
  fontFamily:   'var(--font-sans)',
  fontSize:     '1rem',
  fontWeight:   300,
  color:        'var(--color-ink-200)',
  lineHeight:   1.85,
  marginBottom: '1.25rem',
};

const H2: React.CSSProperties = {
  fontFamily:    'var(--font-display)',
  fontSize:      '1.35rem',
  fontWeight:    700,
  color:         'var(--color-ink-50)',
  letterSpacing: '-0.015em',
  marginBottom:  '0.9rem',
  marginTop:     '3rem',
};

export default function About() {
  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO
        title="About RateCrafts | Free Freelance Rate Calculator"
        description="RateCrafts calculates your freelance hourly rate using taxes, expenses, profit margin, and realistic billable hours. Built by freelancers, free forever."
      />

      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '5rem 1.5rem 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <p className="mono-label" style={{ marginBottom: '1.25rem' }}>About</p>

          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight:    900,
              color:         'var(--color-ink-50)',
              letterSpacing: '-0.03em',
              lineHeight:    1.05,
              marginBottom:  '1.5rem',
            }}
          >
            Why we built<br />
            <em style={{ color: 'var(--color-brass-300)', fontStyle: 'italic' }}>RateCrafts</em>
          </h1>

          <div
            style={{
              width:        '3rem',
              height:       '1px',
              background:   'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))',
              marginBottom: '2.5rem',
            }}
          />

          <p style={BODY}>
            Most freelance rate calculators ask you one question: what salary do you want? Then they divide it by 52 weeks and 40 hours and call that your rate. That number is wrong in almost every case — because it ignores taxes, ignores the fact that you cannot bill 40 hours a week, ignores what it actually costs to run a freelance business, and builds in zero profit margin.
          </p>

          <p style={BODY}>
            RateCrafts was built to fix that. The formula works backwards from six real inputs: your target take-home income, your estimated tax rate, your monthly business expenses, your realistic weekly billable hours, your working weeks per month, and a profit margin buffer. The result is a rate you can actually defend to yourself and to clients — one that keeps the business alive when things go quiet.
          </p>

          <h2 style={H2}>The math most calculators skip</h2>

          <p style={BODY}>
            Consider a freelance developer who wants to earn $5,000/month after tax. Using a naive calculator: $5,000 ÷ 4.3 weeks ÷ 40 hours = $29/hr. Using RateCrafts with a 28% tax rate, $800/month in business expenses, 25 realistic billable hours per week, and a 15% profit margin: the correct floor is closer to <strong style={{ color: 'var(--color-ink-100)', fontWeight: 500 }}>$72/hr</strong>. That is not a coincidence — it is the difference between a rate that sustains a business and one that slowly drains it.
          </p>

          <p style={BODY}>
            The gap between those two numbers is where most freelancers lose money. They are billing $30/hr, doing the work, paying their tax bill, covering their software and insurance, and wondering why they cannot build savings. The rate was wrong from the start.
          </p>

          <h2 style={H2}>What makes this calculator different</h2>

          <p style={BODY}>
            Four things that most freelance rate calculators ignore — and that RateCrafts builds in by default:
          </p>

          <ul
            style={{
              listStyle:     'none',
              padding:       0,
              marginBottom:  '1.5rem',
              display:       'flex',
              flexDirection: 'column',
              gap:           '0.9rem',
            }}
          >
            {[
              ['Self-employment tax', 'In the US, this adds 15.3% on top of income tax for incomes under $160k. In the UK, Class 4 NI adds 9% on profits between £12,570 and £50,270. Neither shows up in naive salary-based calculators.'],
              ['Realistic billable hours', 'Admin, proposals, revisions, invoicing, and sales consume 30–40% of a freelancer\'s working week. Assuming 40 billable hours is almost never right. The default in RateCrafts is 25/week — still generous for most people.'],
              ['Business expenses', 'Figma, GitHub, Notion, Adobe, accounting software, business insurance, professional development, hardware replacement. These add up to $500–$2,000/month for most freelancers and must come out before you count income.'],
              ['Profit margin', 'A rate that covers costs is a break-even rate. Without a margin buffer, one slow month or one equipment failure puts you in deficit. RateCrafts adds this as a separate input — typically 10–20%.'],
            ].map(([title, body]) => (
              <li
                key={title as string}
                style={{
                  paddingLeft:  '1.25rem',
                  position:     'relative',
                  fontFamily:   'var(--font-sans)',
                  fontSize:     '0.95rem',
                  color:        'var(--color-ink-200)',
                  lineHeight:   1.75,
                }}
              >
                <span
                  style={{
                    position:   'absolute',
                    left:       0,
                    color:      'var(--color-brass-500)',
                    fontFamily: 'var(--font-mono)',
                    fontSize:   '0.75rem',
                    top:        '0.25em',
                  }}
                >
                  —
                </span>
                <strong style={{ color: 'var(--color-ink-50)', fontWeight: 500 }}>{title as string}:</strong>{' '}
                {body as string}
              </li>
            ))}
          </ul>

          <h2 style={H2}>The project calculator</h2>

          <p style={BODY}>
            Knowing your hourly floor is step one. Step two is converting that rate into accurate project quotes. The{' '}
            <Link
              to="/project-calculator"
              style={{ color: 'var(--color-brass-400)', textDecoration: 'none' }}
            >
              RateCrafts project pricing calculator
            </Link>{' '}
            adds revision rounds, a scope buffer, tax, and profit margin to produce a defensible fixed-price quote. It also shows you the effective hourly rate behind the project number — so you always know whether a quote actually works for your business.
          </p>

          <h2 style={H2}>Why it is free</h2>

          <p style={BODY}>
            There is no premium tier, no email capture on the calculators, no ads, and no investor money. Every calculation runs entirely in your browser — nothing is sent to any server. This is an independent project maintained because undercharging is one of the most common and most fixable problems in freelancing.
          </p>

          {/* CTA */}
          <div
            style={{
              marginTop:    '3rem',
              padding:      '1.75rem',
              background:   'var(--color-ink-900)',
              border:       '1px solid var(--color-ink-800)',
              borderLeft:   '2px solid var(--color-brass-500)',
              display:      'flex',
              flexDirection:'column',
              gap:          '1rem',
            }}
          >
            <p
              style={{
                fontFamily:   'var(--font-sans)',
                fontSize:     '0.9rem',
                fontWeight:   300,
                color:        'var(--color-ink-300)',
                lineHeight:   1.7,
              }}
            >
              See the difference a correct rate makes — takes under 90 seconds.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/calculator"
                style={{
                  fontFamily:     'var(--font-mono)',
                  fontSize:       '0.72rem',
                  letterSpacing:  '0.1em',
                  textTransform:  'uppercase',
                  padding:        '0.7rem 1.5rem',
                  background:     'var(--color-brass-500)',
                  color:          'var(--color-ink-950)',
                  textDecoration: 'none',
                  fontWeight:     500,
                }}
              >
                Calculate your real rate →
              </Link>
              <Link
                to="/project-calculator"
                style={{
                  fontFamily:     'var(--font-mono)',
                  fontSize:       '0.72rem',
                  letterSpacing:  '0.1em',
                  textTransform:  'uppercase',
                  color:          'var(--color-ink-400)',
                  textDecoration: 'none',
                  padding:        '0.7rem 0',
                }}
              >
                Price a project →
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}