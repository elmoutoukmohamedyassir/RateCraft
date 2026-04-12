import React from 'react';
import { SEO } from '../components/SEO';

const S = {
  page: { background: 'var(--color-ink-950)', minHeight: '100vh' },
  wrap: { maxWidth: '720px', margin: '0 auto', padding: '5rem 1.5rem 6rem' },
  label: { fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--color-brass-500)', display: 'block', marginBottom: '1.25rem' },
  h1: { fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: 'var(--color-ink-50)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '0.75rem' },
  date: { fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.08em', color: 'var(--color-ink-700)', marginBottom: '3rem', display: 'block' },
  divider: { width: '2.5rem', height: '1px', background: 'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))', margin: '0 0 3rem' },
  h2: { fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-ink-100)', letterSpacing: '-0.01em', marginTop: '3rem', marginBottom: '0.75rem' },
  p: { fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--color-ink-400)', lineHeight: 1.8, marginBottom: '1rem' },
  warning: { background: 'rgba(184,134,11,0.06)', border: '1px solid rgba(184,134,11,0.2)', borderLeft: '2px solid var(--color-brass-500)', padding: '1.25rem 1.5rem', marginBottom: '2.5rem' },
  warningText: { fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 400, color: 'var(--color-brass-200)', lineHeight: 1.7, margin: 0 },
};

export default function Disclaimer() {
  return (
    <div style={S.page}>
      <SEO title="Disclaimer | RateCraft" />
      <main style={S.wrap}>
        <span style={S.label}>Legal</span>
        <h1 style={S.h1}>Disclaimer</h1>
        <span style={S.date}>Last updated: April 3, 2026</span>
        <div style={S.divider} />

        <div style={S.warning}>
          <p style={S.warningText}>
            RateCraft is a tool designed to help freelancers estimate their rates. It is not a substitute for professional financial, tax, or legal advice.
          </p>
        </div>

        <h2 style={S.h2}>1. Not Financial Advice</h2>
        <p style={S.p}>
          The calculations provided by RateCraft are based on the data you input and general mathematical formulas. They do not account for your specific tax situation, local laws, or individual business needs. Always consult with a qualified accountant or financial advisor before making significant business decisions.
        </p>

        <h2 style={S.h2}>2. Accuracy of Information</h2>
        <p style={S.p}>
          While we strive to keep the calculator accurate and up-to-date, we make no guarantees regarding the completeness or reliability of the results. Market conditions and tax laws change frequently, and RateCraft may not reflect the most current information.
        </p>

        <h2 style={S.h2}>3. Limitation of Liability</h2>
        <p style={S.p}>
          By using RateCraft, you acknowledge that you are doing so at your own risk. We will not be liable for any losses or damages arising from your use of this tool or reliance on its results.
        </p>

        <h2 style={S.h2}>4. External Links</h2>
        <p style={S.p}>
          Our blog and resources may contain links to external websites. We do not control or endorse the content of these sites and are not responsible for their accuracy or privacy practices.
        </p>
      </main>
    </div>
  );
}