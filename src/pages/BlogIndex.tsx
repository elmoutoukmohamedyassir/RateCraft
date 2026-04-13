import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

const posts = [
  { id: 'how-to-calculate-freelance-rate', title: 'How to Calculate Your Freelance Rate: A Step-by-Step Guide', excerpt: 'Learn how to calculate a sustainable freelance hourly rate using income goals, taxes, expenses, billable hours, and profit margin.', date: 'April 5, 2026', readTime: '10 min', category: 'Strategy' },
  { id: 'hourly-vs-project-pricing', title: 'Hourly vs Project Pricing: Which Model Is Better for Freelancers?', excerpt: 'Compare hourly and project pricing to see which model works better for your freelance services, client type, and profit goals.', date: 'April 4, 2026', readTime: '9 min', category: 'Pricing' },
  { id: 'hidden-costs-of-freelancing', title: '7 Hidden Costs of Freelancing That Destroy Profit Margins', excerpt: 'From taxes to software bloat and non-billable time, discover the hidden costs freelancers often forget when setting rates.', date: 'April 2, 2026', readTime: '8 min', category: 'Finance' },
  { id: 'freelance-pricing-mistakes', title: '5 Freelance Pricing Mistakes That Keep You Underpaid', excerpt: 'These common pricing mistakes quietly destroy freelance income. Learn how to spot them and build a stronger pricing strategy.', date: 'April 1, 2026', readTime: '7 min', category: 'Pricing' },
  { id: 'beginner-freelancer-rate', title: 'How Much Should a Beginner Freelancer Charge?', excerpt: 'A practical guide to setting your first freelance rate without guessing, panicking, or underpricing your work.', date: 'March 30, 2026', readTime: '8 min', category: 'Beginner' },
  { id: 'raising-your-rates', title: 'How to Raise Your Freelance Rates Without Losing Good Clients', excerpt: 'Raise your freelance prices professionally, communicate value clearly, and keep strong client relationships intact.', date: 'March 28, 2026', readTime: '8 min', category: 'Business' },
  { id: 'daily-rate-calculation', title: 'How to Convert an Hourly Rate Into a Professional Day Rate', excerpt: 'Learn how to turn your hourly baseline into a clean, client-friendly day rate for consulting and freelance services.', date: 'March 27, 2026', readTime: '6 min', category: 'Pricing' },
  { id: 'profit-margin-for-freelancers', title: 'Why Freelancers Need a Profit Margin, Not Just Income', excerpt: 'Freelancers who ignore profit margin often stay busy but financially fragile. Here is why margin matters.', date: 'March 24, 2026', readTime: '7 min', category: 'Finance' },
  { id: 'billable-hours-guide', title: 'How Many Billable Hours Can a Freelancer Realistically Work?', excerpt: 'Stop overestimating billable time. Learn what a realistic weekly billable-hour range looks like for freelancers.', date: 'March 21, 2026', readTime: '7 min', category: 'Productivity' },
  { id: 'quote-a-project-profitably', title: 'How to Quote a Freelance Project Without Underpricing It', excerpt: 'Build better project quotes using a strong pricing foundation, realistic scope, and your true hourly floor.', date: 'March 19, 2026', readTime: '8 min', category: 'Business' },
  { id: 'freelance-rate-too-low', title: 'How to Know If Your Freelance Rate Is Too Low', excerpt: 'If you feel busy but still broke, your rate may be the problem. Here are the clearest signs you are undercharging.', date: 'March 16, 2026', readTime: '6 min', category: 'Strategy' },
];

const allCategories = ['All', ...Array.from(new Set(posts.map(p => p.category)))];

const categoryColor: Record<string, string> = {
  Strategy: 'var(--color-brass-500)',
  Pricing: 'var(--color-verdigris-light)',
  Finance: '#c084fc',
  Beginner: '#60a5fa',
  Business: '#f87171',
  Productivity: '#34d399',
};

export default function BlogIndex() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active);

  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO title="Blog | RateCraft" description="Practical guides on freelance pricing, billable hours, profitability, and business strategy." />

      {/* Header */}
      <header style={{ padding: '5rem 1.5rem 4rem', borderBottom: '1px solid var(--color-ink-800)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(var(--color-ink-800) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-800) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.2 }} />
        <div className="max-w-7xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-brass-500)', display: 'block', marginBottom: '1.25rem' }}>Journal</span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: 'var(--color-ink-50)', letterSpacing: '-0.03em', lineHeight: 1.0, marginBottom: '1rem' }}>
              The RateCraft<br /><em style={{ color: 'var(--color-brass-400)', fontStyle: 'italic' }}>Journal</em>
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 300, color: 'var(--color-ink-500)', maxWidth: '480px', lineHeight: 1.7 }}>
              Practical guides on freelance pricing, billable hours, profitability, and building a business that lasts.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Filter bar */}
      <div style={{ borderBottom: '1px solid var(--color-ink-800)', background: 'var(--color-ink-900)', padding: '0 1.5rem', position: 'sticky', top: '64px', zIndex: 40 }}>
        <div className="max-w-7xl mx-auto" style={{ display: 'flex', gap: '0', overflowX: 'auto' }}>
          {allCategories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '1rem 1.25rem', background: 'none', border: 'none', borderBottom: active === cat ? '1px solid var(--color-brass-500)' : '1px solid transparent', color: active === cat ? 'var(--color-brass-400)' : 'var(--color-ink-600)', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 0.15s', marginBottom: '-1px' }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <main className="max-w-7xl mx-auto" style={{ padding: '3rem 1.5rem 6rem' }}>
        {/* Featured post */}
        {active === 'All' && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} style={{ marginBottom: '1px' }}>
            <Link to={`/blog/${posts[0].id}`} style={{ textDecoration: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', background: 'var(--color-ink-900)', border: '1px solid var(--color-ink-800)', marginBottom: '1px', transition: 'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--color-ink-800)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--color-ink-900)'}>
              <div style={{ padding: '2.5rem 2.5rem 2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: categoryColor[posts[0].category] || 'var(--color-brass-500)', border: `1px solid ${categoryColor[posts[0].category] || 'var(--color-brass-500)'}22`, padding: '0.2rem 0.6rem' }}>{posts[0].category}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--color-ink-700)', textTransform: 'uppercase' }}>Featured</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--color-ink-50)', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '1rem' }}>{posts[0].title}</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--color-ink-500)', lineHeight: 1.75, marginBottom: '2rem' }}>{posts[0].excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.06em', color: 'var(--color-ink-700)', textTransform: 'uppercase' }}>{posts[0].date}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.06em', color: 'var(--color-ink-700)', textTransform: 'uppercase' }}>{posts[0].readTime} read</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.08em', color: 'var(--color-brass-400)', marginLeft: 'auto' }}>Read →</span>
                </div>
              </div>
              <div style={{ background: 'var(--color-ink-800)', minHeight: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 900, fontStyle: 'italic', color: 'var(--color-ink-700)', letterSpacing: '-0.04em', userSelect: 'none' }}>$</span>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Regular grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1px', background: 'var(--color-ink-800)', border: '1px solid var(--color-ink-800)' }}>
          {(active === 'All' ? filtered.slice(1) : filtered).map((post, idx) => (
            <motion.div key={post.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04, duration: 0.3 }}>
              <Link to={`/blog/${post.id}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: 'var(--color-ink-950)', padding: '1.75rem', height: '100%', boxSizing: 'border-box', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--color-ink-900)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--color-ink-950)'}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: categoryColor[post.category] || 'var(--color-brass-500)', border: `1px solid ${categoryColor[post.category] || 'var(--color-brass-500)'}33`, padding: '0.18rem 0.55rem' }}>{post.category}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--color-ink-700)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-ink-100)', letterSpacing: '-0.01em', lineHeight: 1.35, marginBottom: '0.75rem', flex: 1 }}>{post.title}</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 300, color: 'var(--color-ink-600)', lineHeight: 1.65, marginBottom: '1.25rem' }}>{post.excerpt}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--color-ink-800)', paddingTop: '1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-700)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{post.date}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-brass-500)', letterSpacing: '0.06em' }}>→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}