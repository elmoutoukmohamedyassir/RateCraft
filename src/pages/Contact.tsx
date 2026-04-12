import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Mail, MessageSquare } from 'lucide-react';

const S = {
  page: { background: 'var(--color-ink-950)', minHeight: '100vh' },
  wrap: { maxWidth: '720px', margin: '0 auto', padding: '5rem 1.5rem 6rem', textAlign: 'center' as const },
  label: { fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--color-brass-500)', display: 'block', marginBottom: '1.25rem' },
  h1: { fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--color-ink-50)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '1rem' },
  sub: { fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 300, color: 'var(--color-ink-500)', lineHeight: 1.75, marginBottom: '3.5rem', maxWidth: '480px', margin: '0 auto 3.5rem' },
  card: { background: 'var(--color-ink-900)', border: '1px solid var(--color-ink-800)', padding: '2.25rem', display: 'flex', flexDirection: 'column' as const, alignItems: 'center', gap: '0.75rem' },
  cardTitle: { fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-ink-100)' },
  cardSub: { fontFamily: 'var(--font-sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--color-ink-500)' },
  cardLink: { fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.04em', color: 'var(--color-brass-400)', textDecoration: 'none', wordBreak: 'break-all' as const },
  iconWrap: { width: '44px', height: '44px', border: '1px solid var(--color-ink-700)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brass-500)' },
  quote: { background: 'var(--color-ink-900)', border: '1px solid var(--color-ink-800)', borderLeft: '2px solid var(--color-brass-600)', padding: '1.5rem 1.75rem', marginTop: '3rem', textAlign: 'left' as const },
  quoteText: { fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 300, fontStyle: 'italic', color: 'var(--color-ink-400)', lineHeight: 1.75 },
};

export default function Contact() {
  return (
    <div style={S.page}>
      <SEO title="Contact Us | RateCraft" description="Get in touch with the RateCraft team." />
      <main style={S.wrap}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <span style={S.label}>Contact</span>
          <h1 style={S.h1}>Get in Touch</h1>
          <p style={S.sub}>
            Have questions about the calculator? Want to suggest a feature?
            We're a small team and we love hearing from the freelance community.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1px', background: 'var(--color-ink-800)', marginBottom: '0' }}>
            <div style={S.card}>
              <div style={S.iconWrap}><Mail size={18} /></div>
              <p style={S.cardTitle}>Email Us</p>
              <p style={S.cardSub}>For general inquiries and support.</p>
              <a href="mailto:elmoutoukmohamedyassir@gmail.com" style={S.cardLink}>
                elmoutoukmohamedyassir@gmail.com
              </a>
            </div>
            <div style={S.card}>
              <div style={S.iconWrap}><MessageSquare size={18} /></div>
              <p style={S.cardTitle}>Feedback</p>
              <p style={S.cardSub}>Suggest a new feature or tool.</p>
              <a href="mailto:impact.me02@gmail.com" style={S.cardLink}>
                impact.me02@gmail.com
              </a>
            </div>
          </div>

          <div style={S.quote}>
            <p style={S.quoteText}>
              "We aim to respond to all inquiries within 24–48 business hours.
              Thank you for being part of our journey to help freelancers succeed."
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}