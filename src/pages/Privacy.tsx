import React from 'react';
import { SEO } from '../components/SEO';

const H2: React.CSSProperties = {
  fontFamily:    'var(--font-display)',
  fontSize:      '1.2rem',
  fontWeight:    700,
  color:         'var(--color-ink-50)',
  letterSpacing: '-0.015em',
  marginTop:     '3rem',
  marginBottom:  '0.75rem',
};

const BODY: React.CSSProperties = {
  fontFamily:   'var(--font-sans)',
  fontSize:     '0.95rem',
  fontWeight:   300,
  color:        'var(--color-ink-200)',
  lineHeight:   1.85,
  marginBottom: '1rem',
};

const CODE: React.CSSProperties = {
  fontFamily:  'var(--font-mono)',
  fontSize:    '0.82rem',
  color:       'var(--color-brass-300)',
  background:  'rgba(212, 160, 23, 0.08)',
  padding:     '0.1em 0.4em',
  border:      '1px solid rgba(212, 160, 23, 0.18)',
};

export default function Privacy() {
  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO
        title="Privacy Policy | RateCrafts"
        description="RateCrafts is a privacy-first tool. All calculations run in your browser. No data is collected, stored, or sold."
      />

      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '5rem 1.5rem 6rem' }}>
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
          Privacy Policy
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

        <p style={BODY}>
          RateCrafts takes your privacy seriously. This policy explains how we handle your data.
        </p>

        <h2 style={H2}>1. Data Collection &amp; Privacy</h2>
        <p style={BODY}>
          RateCrafts is built as a{' '}
          <strong style={{ color: 'var(--color-ink-100)', fontWeight: 500 }}>
            privacy-first, client-side application
          </strong>
          . Your financial goals, business expenses, and income targets are your
          business alone.
        </p>
        <p style={BODY}>
          All calculations happen directly in your browser's memory. When you enter
          your monthly income or expenses, that data is never transmitted to any
          server, never stored in a database, and never sold to third parties.
        </p>

        <h2 style={H2}>2. Cookies &amp; Tracking</h2>
        <p style={BODY}>
          We use Google Analytics (anonymised) to understand which pages are useful.
          We do not use cross-site trackers or invasive third-party analytics.
        </p>
        <p style={BODY}>
          We may use your browser's{' '}
          <code style={CODE}>localStorage</code>{' '}
          to temporarily save your calculator inputs between sessions. This data
          stays strictly on your device and is never accessed by us.
        </p>

        <h2 style={H2}>3. Third-Party Integrations</h2>
        <p style={BODY}>
          RateCrafts does not integrate with advertising networks. Our blog may link
          to external resources we consider helpful — we are not responsible for
          the privacy practices of those external sites.
        </p>

        <h2 style={H2}>4. Your Control</h2>
        <p style={BODY}>
          Because we don't store your data, you have total control. To remove any
          saved calculator state, simply clear your browser's local storage or use
          private/incognito mode.
        </p>
      </main>
    </div>
  );
}