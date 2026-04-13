import React from 'react';
import { SEO } from '../components/SEO';

/* ── Shared prose styles ───────────────────────────────────────── */
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

const codeStyle: React.CSSProperties = {
  fontFamily:  'var(--font-mono)',
  fontSize:    '0.82rem',
  color:       'var(--color-brass-300)',
  background:  'rgba(212, 160, 23, 0.08)',
  padding:     '0.1em 0.4em',
  border:      '1px solid rgba(212, 160, 23, 0.18)',
};

/* ── Privacy Policy ────────────────────────────────────────────── */
export default function Privacy() {
  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO title="Privacy Policy | RateCraft" />

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
            width:         '3rem',
            height:        '1px',
            background:    'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))',
            marginBottom:  '2.5rem',
          }}
        />

        <p style={bodyStyle}>
          At RateCraft, we take your privacy seriously.
          This policy explains how we handle your data.
        </p>

        <h2 style={heading2Style}>1. Data Collection &amp; Privacy</h2>
        <p style={bodyStyle}>
          RateCraft is built as a{' '}
          <strong style={{ color: 'var(--color-ink-100)', fontWeight: 500 }}>
            privacy-first, client-side application
          </strong>
          . We believe that your financial goals, business expenses, and income
          targets are your business alone.
        </p>
        <p style={bodyStyle}>
          All calculations happen directly in your browser's memory. When you
          enter your desired monthly income or business expenses, that data is
          never transmitted to our servers, never stored in a database, and
          never sold to third parties.
        </p>

        <h2 style={heading2Style}>2. Cookies &amp; Tracking</h2>
        <p style={bodyStyle}>
          We do not use tracking cookies, cross-site trackers, or invasive
          analytics. We may use standard web server logs to monitor site health
          and performance, but these do not contain personally identifiable
          information.
        </p>
        <p style={bodyStyle}>
          We may use your browser's{' '}
          <code style={codeStyle}>localStorage</code> to temporarily save your
          calculator inputs so you don't have to re-enter them on refresh.
          This data remains strictly on your device and is never accessed by us.
        </p>

        <h2 style={heading2Style}>3. Third-Party Integrations</h2>
        <p style={bodyStyle}>
          RateCraft does not integrate with third-party advertising networks.
          Our blog may contain links to external resources that we believe are
          helpful for freelancers. We are not responsible for the privacy
          practices of those external sites.
        </p>

        <h2 style={heading2Style}>4. Your Control</h2>
        <p style={bodyStyle}>
          Because we don't store your data, you have total control. If you want
          to "delete" your data from RateCraft, simply clear your browser's
          cache or local storage.
        </p>
      </main>
    </div>
  );
}