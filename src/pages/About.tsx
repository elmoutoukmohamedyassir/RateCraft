import React from 'react';
import { Link }   from 'react-router-dom';
import { motion } from 'motion/react';
import { SEO }    from '../components/SEO';

/* ── Shared prose styles ───────────────────────────────────────── */
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

/* ── About ─────────────────────────────────────────────────────── */
export default function About() {
  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO
        title="About RateCrafts — Free Freelance Rate Calculator"
        description="RateCrafts is a free, independent tool built to help freelancers calculate a sustainable hourly rate. No ads, no tracking, no signup."
      />

      <main
        style={{
          maxWidth: '720px',
          margin:   '0 auto',
          padding:  '5rem 1.5rem 6rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
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
            About RateCrafts
          </h1>

          {/* Brass rule */}
          <div
            style={{
              width:        '3rem',
              height:       '1px',
              background:   'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))',
              marginBottom: '2.5rem',
            }}
          />

          <p style={BODY}>
            RateCrafts is a free, independent tool built by a developer who was
            tired of watching freelancers — friends included — consistently
            undercharge for their work. Not because they lacked skill, but because
            they had no clear way to calculate a rate that actually made sense.
          </p>

          <p style={BODY}>
            When you go freelance, you become the CEO, the HR department, and the
            IT support. You cover your own taxes, your own equipment, and your own
            slow months. Your rate has to carry all of that. Most "calculators" out
            there forget most of it.
          </p>

          <h2 style={H2}>What RateCrafts does differently</h2>

          <p style={BODY}>
            The formula behind RateCrafts works backwards from what you need —
            not forwards from what the market charges. It accounts for your tax
            rate, your real business expenses, a profit margin buffer, and a
            realistic count of billable hours (not the optimistic number most
            people use). The result is a rate you can actually defend, to yourself
            and to clients.
          </p>

          <h2 style={H2}>Why it's free</h2>

          <p style={BODY}>
            Financial literacy should be accessible to everyone trying to build a
            sustainable freelance business. There are no ads, no paywalls, no
            premium tier, and no email capture. Every calculation runs entirely in
            your browser — nothing is ever sent anywhere.
          </p>

          <p style={BODY}>
            This is an independent project, not a company. It is maintained because
            it is useful, and because undercharging is one of the most common and
            most fixable problems in freelancing.
          </p>

          {/* CTA */}
          <div
            style={{
              marginTop:   '3rem',
              padding:     '1.75rem',
              background:  'var(--color-ink-900)',
              border:      '1px solid var(--color-ink-800)',
              borderLeft:  '2px solid var(--color-brass-500)',
              display:     'flex',
              flexDirection:'column',
              gap:         '1rem',
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
              Ready to find out what your rate should actually be?
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
                Calculate your rate →
              </Link>
              <Link
                to="/contact"
                style={{
                  fontFamily:     'var(--font-mono)',
                  fontSize:       '0.72rem',
                  letterSpacing:  '0.1em',
                  textTransform:  'uppercase',
                  color:          'var(--color-ink-500)',
                  textDecoration: 'none',
                  padding:        '0.7rem 0',
                }}
              >
                Get in touch
              </Link>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}