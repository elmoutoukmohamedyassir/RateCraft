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
};

export default function Terms() {
  return (
    <div style={S.page}>
      <SEO title="Terms of Service | RateCraft" />
      <main style={S.wrap}>
        <span style={S.label}>Legal</span>
        <h1 style={S.h1}>Terms of Service</h1>
        <span style={S.date}>Last updated: April 3, 2026</span>
        <div style={S.divider} />

        <h2 style={S.h2}>1. Acceptance of Terms</h2>
        <p style={S.p}>
          By accessing and using RateCraft, you agree to be bound by these Terms of Service.
          If you do not agree, please do not use the service.
        </p>

        <h2 style={S.h2}>2. Use of the Service</h2>
        <p style={S.p}>
          RateCraft is provided as a free tool for freelancers and small business owners to estimate their
          hourly and daily rates. While we strive for accuracy, the results are estimates and should be used
          as a starting point for your pricing strategy.
        </p>

        <h2 style={S.h2}>3. Intellectual Property</h2>
        <p style={S.p}>
          The design, code, and content of RateCraft are protected by copyright laws. You may use the
          calculator for your own business planning, but you may not reproduce, redistribute, or
          sell the service as your own without our explicit permission.
        </p>

        <h2 style={S.h2}>4. Limitation of Liability</h2>
        <p style={S.p}>
          RateCraft is provided "as is" without any warranties. We are not responsible for any financial
          decisions or business outcomes resulting from the use of our calculator.
        </p>
      </main>
    </div>
  );
}