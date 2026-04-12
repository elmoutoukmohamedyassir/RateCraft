import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

const S = {
  page: { background: 'var(--color-ink-950)', minHeight: '100vh' },
  wrap: { maxWidth: '720px', margin: '0 auto', padding: '5rem 1.5rem 6rem' },
  label: { fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--color-brass-500)', display: 'block', marginBottom: '1.25rem' },
  h1: { fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--color-ink-50)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '3rem' },
  h2: { fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-ink-100)', letterSpacing: '-0.01em', marginTop: '3.5rem', marginBottom: '0.9rem' },
  p: { fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 300, color: 'var(--color-ink-400)', lineHeight: 1.8, marginBottom: '1.25rem' },
  divider: { width: '2.5rem', height: '1px', background: 'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))', margin: '0 0 3rem' },
};

export default function About() {
  return (
    <div style={S.page}>
      <SEO title="About Us | RateCraft" />
      <main style={S.wrap}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <span style={S.label}>About</span>
          <h1 style={S.h1}>About RateCraft</h1>
          <div style={S.divider} />

          <p style={S.p}>
            RateCraft was born out of a simple observation: most freelancers are undercharging for their work.
            When you transition from a full-time job to freelancing, it's easy to forget that your hourly rate
            needs to cover more than just your time.
          </p>
          <p style={S.p}>
            You are now the CEO, the HR department, and the IT support. You have to pay for your own
            health insurance, your own laptop, and your own taxes. Your rate has to carry all of that.
          </p>

          <h2 style={S.h2}>Our Mission</h2>
          <p style={S.p}>
            Our mission is to provide freelancers, consultants, and small business owners with the tools
            they need to build sustainable and profitable businesses. We believe that when freelancers
            charge what they're worth, the entire industry benefits.
          </p>

          <h2 style={S.h2}>Why it's free</h2>
          <p style={S.p}>
            We believe financial literacy should be accessible to everyone. RateCraft is a free tool
            maintained by the community. We don't track you, we don't sell your data, and we don't
            require a login. Every calculation happens entirely in your browser.
          </p>
        </motion.div>
      </main>
    </div>
  );
}