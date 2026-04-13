import React from 'react';
import { SEO } from '../components/SEO';

const heading2Style: React.CSSProperties = {
  fontFamily:    'var(--font-display)',
  fontSize:      '1.2rem',
  fontWeight:    700,
  color:         'var(--color-ink-50)',
  letterSpacing: '-0.015em',
  marginTop:     '3rem',
  marginBottom:  '0.75rem',
};

const bodyStyle: React.CSSProperties = {
  fontFamily:   'var(--font-sans)',
  fontSize:     '0.95rem',
  fontWeight:   300,
  color:        'var(--color-ink-200)',
  lineHeight:   1.85,
  marginBottom: '1rem',
};

export default function Terms() {
  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO title="Terms of Service | RateCraft" />

      <main
        style={{
          maxWidth: '720px',
          margin:   '0 auto',
          padding:  '5rem 1.5rem 6rem',
        }}
      >
        <p className="mono-label" style={{ marginBottom: '1.25rem' }}>Legal</p>

        <h1
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(2rem, 5vw, 3rem)',
            fontWeight:    900,
            color:         'var(--color-ink-50)',
            letterSpacing: '-0.03em',
            lineHeight:    1.05,
            marginBottom:  '0.75rem',
          }}
        >
          Terms of Service
        </h1>

        <p
          style={{
            fontFamily:    'var(--font-mono)',
            fontSize:      '0.65rem',
            letterSpacing: '0.08em',
            color:         'var(--color-ink-600)',
            marginBottom:  '2rem',
          }}
        >
          Last updated: April 3, 2026
        </p>

        <div
          style={{
            width:        '3rem',
            height:       '1px',
            background:   'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))',
            marginBottom: '2.5rem',
          }}
        />

        <h2 style={heading2Style}>1. Acceptance of Terms</h2>
        <p style={bodyStyle}>
          By accessing and using RateCraft, you agree to be bound by these
          Terms of Service. If you do not agree, please do not use the service.
        </p>

        <h2 style={heading2Style}>2. Use of the Service</h2>
        <p style={bodyStyle}>
          RateCraft is provided as a free tool for freelancers and small
          business owners to estimate their hourly and daily rates. While we
          strive for accuracy, the results are estimates and should be used as
          a starting point for your pricing strategy.
        </p>

        <h2 style={heading2Style}>3. Intellectual Property</h2>
        <p style={bodyStyle}>
          The design, code, and content of RateCraft are protected by copyright
          laws. You may use the calculator for your own business planning, but
          you may not reproduce, redistribute, or sell the service as your own
          without our explicit permission.
        </p>

        <h2 style={heading2Style}>4. Limitation of Liability</h2>
        <p style={bodyStyle}>
          RateCraft is provided "as is" without any warranties. We are not
          responsible for any financial decisions or business outcomes resulting
          from the use of our calculator.
        </p>
      </main>
    </div>
  );
}