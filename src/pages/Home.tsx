import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const faqs = [
  { question: 'Is this calculator really free?', answer: "Yes, 100% free. No hidden fees, no credit card required." },
  { question: 'How accurate are the calculations?', answer: "Based on your inputs, it provides a solid baseline. We recommend consulting a financial advisor for complex planning." },
  { question: 'Do you store my financial data?', answer: "No. All calculations happen locally in your browser. We don't store or see any numbers you enter." },
  { question: "What is a 'Profit Margin Buffer'?", answer: "An extra percentage added to your base rate for growth, unexpected expenses, and building wealth beyond break-even." },
];

const blogPosts = [
  { id: 'how-to-calculate-freelance-rate', title: 'How to Calculate Your Freelance Rate: The Math Behind Profitability', date: 'March 25, 2026', category: 'Strategy' },
  { id: 'hidden-costs-of-freelancing', title: 'Beyond the Laptop: 7 Hidden Costs of Running a Freelance Business', date: 'March 18, 2026', category: 'Finance' },
];

const S = {
  monoLabel: { fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase' as const, color: 'var(--color-brass-500)', marginBottom: '1rem', display: 'block' },
  displayH2: { fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--color-ink-50)', letterSpacing: '-0.02em', lineHeight: 1.1 },
  bodyText: { fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--color-ink-500)', lineHeight: 1.7 },
  gridDivider: { background: 'var(--color-ink-800)', gap: '1px', display: 'grid' },
  tile: { background: 'var(--color-ink-900)', padding: '1.75rem' },
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div>
      <SEO />

      {/* HERO */}
      <section style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '6rem 1.5rem 4rem' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--color-ink-800) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-800) 1px, transparent 1px)', backgroundSize: '60px 60px', opacity: 0.35 }} />
        <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(184,134,11,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ ...S.monoLabel, display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ display: 'inline-block', width: '2rem', height: '1px', background: 'var(--color-brass-500)' }} />
            Freelance Rate Calculator
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 7vw, 6rem)', fontWeight: 900, color: 'var(--color-ink-50)', lineHeight: 1.0, letterSpacing: '-0.03em', maxWidth: '900px', marginBottom: '2rem' }}>
            Stop guessing.<br />
            <em style={{ color: 'var(--color-brass-400)', fontStyle: 'italic' }}>Know your rate.</em>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }} style={{ ...S.bodyText, fontSize: '1.05rem', maxWidth: '500px', marginBottom: '3rem' }}>
            Factor in taxes, overhead, and profit margin to set a rate that actually sustains your business — not just covers your laptop.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.42 }} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/calculator" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.9rem 2rem', background: 'var(--color-brass-500)', color: 'var(--color-ink-950)', textDecoration: 'none', fontWeight: 500 }}>Open Calculator →</Link>
            <Link to="/blog" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.9rem 2rem', border: '1px solid var(--color-ink-700)', color: 'var(--color-ink-400)', textDecoration: 'none' }}>Read the Blog</Link>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }} style={{ marginTop: '5rem', paddingTop: '2.5rem', borderTop: '1px solid var(--color-ink-800)', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {[{ num: '6', unit: 'inputs', label: 'Financial variables' }, { num: '100%', unit: '', label: 'Client-side only' }, { num: '∞', unit: '', label: 'Recalculates live' }].map((stat, i) => (
              <div key={i} style={{ padding: '1.25rem 1.5rem', borderRight: i < 2 ? '1px solid var(--color-ink-800)' : 'none' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-ink-100)', lineHeight: 1, letterSpacing: '-0.02em' }}>{stat.num}{stat.unit && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-brass-500)', marginLeft: '0.3rem' }}>{stat.unit}</span>}</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.08em', color: 'var(--color-ink-600)', marginTop: '0.3rem', textTransform: 'uppercase' }}>{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--color-ink-900)', borderTop: '1px solid var(--color-ink-800)', borderBottom: '1px solid var(--color-ink-800)' }}>
        <div className="max-w-7xl mx-auto" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div>
            <span style={S.monoLabel}>Who it's for</span>
            <h2 style={{ ...S.displayH2, fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1.25rem' }}>If you sell your time, this tool is for you.</h2>
            <p style={{ ...S.bodyText, marginBottom: '2rem' }}>From solo developers to boutique agencies, RateCraft gives you a number grounded in your actual costs — not guesswork.</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {['Freelance Developers & Designers', 'Marketing Consultants & Copywriters', 'Virtual Assistants & Project Managers', 'Photographers & Creative Professionals', 'Small Service Business Owners'].map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontFamily: 'var(--font-sans)', fontSize: '0.875rem', color: 'var(--color-ink-300)' }}>
                  <span style={{ width: '4px', height: '4px', background: 'var(--color-brass-500)', flexShrink: 0 }} />{item}
                </li>
              ))}
            </ul>
          </div>
          <div style={{ ...S.gridDivider, gridTemplateColumns: '1fr 1fr', alignSelf: 'start' }}>
            {[{ num: '01', title: 'Privacy First', desc: 'All math happens in your browser. Zero data transmitted.' }, { num: '02', title: 'Profit Focused', desc: 'Goes beyond break-even to build actual margins.' }, { num: '03', title: 'Tax Aware', desc: "Bakes in self-employment tax so you're never blindsided." }, { num: '04', title: 'Time Realistic', desc: 'Accounts for admin, sales, and non-billable hours.' }].map((tile) => (
              <div key={tile.num} style={S.tile}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-ink-700)', marginBottom: '0.75rem' }}>{tile.num}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-ink-100)', marginBottom: '0.4rem' }}>{tile.title}</p>
                <p style={{ ...S.bodyText, fontSize: '0.8rem' }}>{tile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span style={S.monoLabel}>Process</span>
            <h2 style={{ ...S.displayH2, fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>Three inputs. One clear number.</h2>
          </div>
          <div style={{ ...S.gridDivider, gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
            {[{ step: 'I', title: 'Set Your Goals', desc: 'Enter your desired monthly income and estimated tax percentage.' }, { step: 'II', title: 'Add Your Costs', desc: 'Factor in monthly business expenses and your target profit margin.' }, { step: 'III', title: 'Define Availability', desc: 'Set your weekly billable hours and how many weeks per month you work.' }].map((step, i) => (
              <div key={i} style={{ background: 'var(--color-ink-950)', padding: '2.5rem 2rem' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 700, fontStyle: 'italic', color: 'var(--color-ink-800)', lineHeight: 1, marginBottom: '1.5rem' }}>{step.step}</p>
                <div style={{ width: '1.5rem', height: '1px', background: 'var(--color-brass-500)', marginBottom: '1rem' }} />
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-ink-100)', marginBottom: '0.5rem' }}>{step.title}</p>
                <p style={{ ...S.bodyText, fontSize: '0.85rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/calculator" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.9rem 2.5rem', border: '1px solid var(--color-brass-600)', color: 'var(--color-brass-400)', textDecoration: 'none', display: 'inline-block' }}>Try it free →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 1.5rem', background: 'var(--color-ink-900)', borderTop: '1px solid var(--color-ink-800)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <span style={{ ...S.monoLabel, textAlign: 'center', display: 'block' }}>FAQ</span>
          <h2 style={{ ...S.displayH2, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', textAlign: 'center', marginBottom: '3rem' }}>Questions & Answers</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderTop: '1px solid var(--color-ink-800)', borderBottom: i === faqs.length - 1 ? '1px solid var(--color-ink-800)' : 'none' }}>
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{ width: '100%', padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', textAlign: 'left' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-ink-100)', lineHeight: 1.4 }}>{faq.question}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', color: 'var(--color-brass-500)', flexShrink: 0, transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s' }}>+</span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
                    <p style={{ ...S.bodyText, paddingBottom: '1.25rem' }}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div className="max-w-7xl mx-auto">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <span style={S.monoLabel}>From the blog</span>
              <h2 style={{ ...S.displayH2, fontSize: '1.75rem' }}>Freelance finance, demystified.</h2>
            </div>
            <Link to="/blog" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brass-400)', textDecoration: 'none' }}>All articles →</Link>
          </div>
          <div style={{ ...S.gridDivider, gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/blog/${post.id}`} style={{ background: 'var(--color-ink-900)', padding: '2rem', textDecoration: 'none', display: 'block', transition: 'background 0.2s' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--color-ink-800)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--color-ink-900)')}>
                <span style={{ display: 'inline-block', fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-brass-500)', border: '1px solid rgba(184,134,11,0.3)', padding: '0.2rem 0.5rem', marginBottom: '1.25rem' }}>{post.category}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-ink-100)', lineHeight: 1.35, letterSpacing: '-0.01em', marginBottom: '1.25rem' }}>{post.title}</h3>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.06em', color: 'var(--color-ink-600)' }}>{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--color-ink-800)' }}>
        <div className="max-w-4xl mx-auto" style={{ textAlign: 'center' }}>
          <span style={S.monoLabel}>Get started</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--color-ink-50)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '2.5rem' }}>
            Your rate, calculated<br />
            <em style={{ color: 'var(--color-brass-400)', fontStyle: 'italic' }}>in under a minute.</em>
          </h2>
          <Link to="/calculator" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '1rem 2.5rem', background: 'var(--color-brass-500)', color: 'var(--color-ink-950)', textDecoration: 'none', display: 'inline-block', fontWeight: 500 }}>Open the Calculator →</Link>
        </div>
      </section>
    </div>
  );
}