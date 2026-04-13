import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO title="About Us | RateCraft" />

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
          {/* Label */}
          <p className="mono-label" style={{ marginBottom: '1.25rem' }}>About</p>

          {/* Title */}
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
            About RateCraft
          </h1>

          {/* Brass rule */}
          <div
            style={{
              width:         '3rem',
              height:        '1px',
              background:    'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))',
              marginBottom:  '2.5rem',
            }}
          />

          <p
            style={{
              fontFamily:   'var(--font-sans)',
              fontSize:     '1rem',
              fontWeight:   300,
              color:        'var(--color-ink-200)',
              lineHeight:   1.85,
              marginBottom: '1.25rem',
            }}
          >
            RateCraft was born out of a simple observation: most freelancers are
            undercharging for their work. When you transition from a full-time job
            to freelancing, it's easy to forget that your hourly rate needs to cover
            more than just your time.
          </p>

          <p
            style={{
              fontFamily:   'var(--font-sans)',
              fontSize:     '1rem',
              fontWeight:   300,
              color:        'var(--color-ink-200)',
              lineHeight:   1.85,
              marginBottom: '3rem',
            }}
          >
            You are now the CEO, the HR department, and the IT support. You have to
            pay for your own health insurance, your own laptop, and your own taxes.
            Your rate has to carry all of that.
          </p>

          {/* Our Mission */}
          <h2
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '1.35rem',
              fontWeight:    700,
              color:         'var(--color-ink-50)',
              letterSpacing: '-0.015em',
              marginBottom:  '0.9rem',
            }}
          >
            Our Mission
          </h2>

          <p
            style={{
              fontFamily:   'var(--font-sans)',
              fontSize:     '1rem',
              fontWeight:   300,
              color:        'var(--color-ink-200)',
              lineHeight:   1.85,
              marginBottom: '3rem',
            }}
          >
            Our mission is to provide freelancers, consultants, and small business
            owners with the tools they need to build sustainable and profitable
            businesses. We believe that when freelancers charge what they're worth,
            the entire industry benefits.
          </p>

          {/* Why it's free */}
          <h2
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '1.35rem',
              fontWeight:    700,
              color:         'var(--color-ink-50)',
              letterSpacing: '-0.015em',
              marginBottom:  '0.9rem',
            }}
          >
            Why it's free
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize:   '1rem',
              fontWeight: 300,
              color:      'var(--color-ink-200)',
              lineHeight: 1.85,
            }}
          >
            We believe financial literacy should be accessible to everyone. RateCraft
            is a free tool maintained by the community. We don't track you, we don't
            sell your data, and we don't require a login. Every calculation happens
            entirely in your browser.
          </p>
        </motion.div>
      </main>
    </div>
  );
}