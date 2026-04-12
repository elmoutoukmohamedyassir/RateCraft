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
  code: { fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-brass-300)', background: 'rgba(184,134,11,0.08)', padding: '0.1em 0.35em', border: '1px solid rgba(184,134,11,0.15)' },
};

export default function Privacy() {
  return (
    <div style={S.page}>
      <SEO title="Privacy Policy | RateCraft" />
      <main style={S.wrap}>
        <span style={S.label}>Legal</span>
        <h1 style={S.h1}>Privacy Policy</h1>
        <span style={S.date}>Last updated: April 3, 2026</span>
        <div style={S.divider} />

        <p style={S.p}>At RateCraft, we take your privacy seriously. This policy explains how we handle your data.</p>

        <h2 style={S.h2}>1. Data Collection & Privacy</h2>
        <p style={S.p}>
          RateCraft is built as a <strong style={{ color: 'var(--color-ink-200)', fontWeight: 500 }}>privacy-first, client-side application</strong>. We believe that your financial goals, business expenses, and income targets are your business alone.
        </p>
        <p style={S.p}>
          All calculations happen directly in your browser's memory. This means that when you enter your desired monthly income or business expenses, that data is never transmitted to our servers, never stored in a database, and never sold to third parties.
        </p>

        <h2 style={S.h2}>2. Cookies & Tracking</h2>
        <p style={S.p}>
          We do not use tracking cookies, cross-site trackers, or invasive analytics. We may use standard web server logs to monitor site health and performance, but these do not contain personally identifiable information.
        </p>
        <p style={S.p}>
          We may use your browser's <code style={S.code}>localStorage</code> to temporarily save your calculator inputs so you don't have to re-enter them on refresh. This data remains strictly on your device and is never accessed by us.
        </p>

        <h2 style={S.h2}>3. Third-Party Integrations</h2>
        <p style={S.p}>
          RateCraft does not integrate with third-party advertising networks. Our blog may contain links to external resources or tools that we believe are helpful for freelancers. We are not responsible for the privacy practices of those external sites.
        </p>

        <h2 style={S.h2}>4. Your Control</h2>
        <p style={S.p}>
          Because we don't store your data, you have total control. If you want to "delete" your data from RateCraft, simply clear your browser's cache or local storage.
        </p>
      </main>
    </div>
  );
}