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

export default function Disclaimer() {
  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO title="Disclaimer | RateCraft" />

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
          Disclaimer
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

        {/* Warning callout */}
        <div
          style={{
            background:   'rgba(212, 160, 23, 0.05)',
            border:       '1px solid rgba(212, 160, 23, 0.2)',
            borderLeft:   '2px solid var(--color-brass-500)',
            padding:      '1.25rem 1.5rem',
            marginBottom: '2.5rem',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize:   '0.875rem',
              fontWeight: 400,
              color:      'var(--color-brass-200)',
              lineHeight: 1.7,
              margin:     0,
            }}
          >
            RateCraft is a tool designed to help freelancers estimate their
            rates. It is not a substitute for professional financial, tax,
            or legal advice.
          </p>
        </div>

        <h2 style={heading2Style}>1. Not Financial Advice</h2>
        <p style={bodyStyle}>
          The calculations provided by RateCraft are based on the data you
          input and general mathematical formulas. They do not account for
          your specific tax situation, local laws, or individual business
          needs. Always consult with a qualified accountant or financial
          advisor before making significant business decisions.
        </p>

        <h2 style={heading2Style}>2. Accuracy of Information</h2>
        <p style={bodyStyle}>
          While we strive to keep the calculator accurate and up-to-date, we
          make no guarantees regarding the completeness or reliability of the
          results. Market conditions and tax laws change frequently, and
          RateCraft may not reflect the most current information.
        </p>

        <h2 style={heading2Style}>3. Limitation of Liability</h2>
        <p style={bodyStyle}>
          By using RateCraft, you acknowledge that you are doing so at your
          own risk. We will not be liable for any losses or damages arising
          from your use of this tool or reliance on its results.
        </p>

        <h2 style={heading2Style}>4. External Links</h2>
        <p style={bodyStyle}>
          Our blog and resources may contain links to external websites.
          We do not control or endorse the content of these sites and are
          not responsible for their accuracy or privacy practices.
        </p>
      </main>
    </div>
  );
}