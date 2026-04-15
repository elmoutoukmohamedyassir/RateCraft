import React, { useState } from 'react';
import { Link }             from 'react-router-dom';
import { motion }           from 'motion/react';
import { SEO }              from '../components/SEO';

/* ── Types ─────────────────────────────────────────────────────── */
export interface Post {
  id:       string;
  title:    string;
  excerpt:  string;
  date:     string;
  readTime: string;
  category: string;
  image:    string;
}

/* ── Post list ─────────────────────────────────────────────────── */
export const ALL_POSTS: Post[] = [
  {
    id:       'how-to-calculate-freelance-rate',
    title:    'How to Calculate Your Freelance Rate: A Step-by-Step Guide',
    excerpt:  'Work backward from what you need — not forward from what competitors charge. A structured method for pricing your services properly.',
    date:     'April 5, 2026',
    readTime: '10 min',
    category: 'Strategy',
    image:    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'hourly-vs-project-pricing',
    title:    'Hourly vs Project Pricing: Which Model Is Better for Freelancers?',
    excerpt:  'Both models can work — but for very different business situations. Here is how to choose the right one for your niche.',
    date:     'April 4, 2026',
    readTime: '9 min',
    category: 'Pricing',
    image:    'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'hidden-costs-of-freelancing',
    title:    '7 Hidden Costs of Freelancing That Destroy Profit Margins',
    excerpt:  'From taxes to software bloat and non-billable time — the costs every freelancer forgets when setting rates.',
    date:     'April 2, 2026',
    readTime: '8 min',
    category: 'Finance',
    image:    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'freelance-pricing-mistakes',
    title:    '5 Freelance Pricing Mistakes That Keep You Underpaid',
    excerpt:  'Common mistakes that quietly destroy freelance income. Recognise them and build a pricing strategy that actually holds.',
    date:     'April 1, 2026',
    readTime: '7 min',
    category: 'Pricing',
    image:    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'beginner-freelancer-rate',
    title:    'How Much Should a Beginner Freelancer Charge?',
    excerpt:  'Being new does not mean underpricing. Here is how to set a real minimum rate on day one — without panic or guesswork.',
    date:     'March 30, 2026',
    readTime: '8 min',
    category: 'Beginner',
    image:    'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'raising-your-rates',
    title:    'How to Raise Your Freelance Rates Without Losing Good Clients',
    excerpt:  'Professional, justified, and well-communicated rate increases that strengthen client relationships rather than damage them.',
    date:     'March 28, 2026',
    readTime: '8 min',
    category: 'Business',
    image:    'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'daily-rate-calculation',
    title:    'How to Convert an Hourly Rate Into a Professional Day Rate',
    excerpt:  'Turn your hourly baseline into a clean, client-friendly day rate for consulting, design, and strategy engagements.',
    date:     'March 27, 2026',
    readTime: '6 min',
    category: 'Pricing',
    image:    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'profit-margin-for-freelancers',
    title:    'Why Freelancers Need a Profit Margin, Not Just Income',
    excerpt:  'Busy but financially fragile? Margin is the missing piece. Here is why profit matters more than revenue.',
    date:     'March 24, 2026',
    readTime: '7 min',
    category: 'Finance',
    image:    'https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'billable-hours-guide',
    title:    'How Many Billable Hours Can a Freelancer Realistically Work?',
    excerpt:  'Stop overestimating. Here is what a realistic billable week looks like — and why it matters for your rate.',
    date:     'March 21, 2026',
    readTime: '7 min',
    category: 'Productivity',
    image:    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'quote-a-project-profitably',
    title:    'How to Quote a Freelance Project Without Underpricing It',
    excerpt:  'Build better project quotes using a strong pricing foundation, realistic scope, and your true hourly floor.',
    date:     'March 19, 2026',
    readTime: '8 min',
    category: 'Business',
    image:    'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'freelance-rate-too-low',
    title:    'How to Know If Your Freelance Rate Is Too Low',
    excerpt:  'Busy but broke? Your rate may be the problem. Here are the clearest signs you are undercharging right now.',
    date:     'March 16, 2026',
    readTime: '6 min',
    category: 'Strategy',
    image:    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
];

/* ── Category colors ───────────────────────────────────────────── */
export const CATEGORY_COLORS: Record<string, string> = {
  Strategy:    '#e8b830',
  Pricing:     '#3abba8',
  Finance:     '#a78bfa',
  Beginner:    '#60a5fa',
  Business:    '#f87171',
  Productivity:'#34d399',
};

const ALL_CATEGORIES = ['All', ...Array.from(new Set(ALL_POSTS.map((p) => p.category)))];

/* ── BlogIndex ─────────────────────────────────────────────────── */
export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts =
    activeCategory === 'All'
      ? ALL_POSTS
      : ALL_POSTS.filter((p) => p.category === activeCategory);

  const blogSchema = {
    '@context':  'https://schema.org',
    '@type':     'Blog',
    name:        'RateCrafts Journal',
    description: 'Practical guides on freelance pricing, billable hours, profitability, and building a sustainable business.',
    url:         'https://www.ratecrafts.com/blog',
    blogPost:    ALL_POSTS.map((p) => ({
      '@type':      'BlogPosting',
      headline:      p.title,
      datePublished: p.date,
      url:          `https://www.ratecrafts.com/blog/${p.id}`,
    })),
  };

  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO
        title="Freelance Pricing Blog | RateCrafts Journal"
        description="Practical guides on freelance hourly rates, pricing strategy, billable hours, and building a profitable freelance business."
      >
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
      </SEO>

      {/* ── Header ─────────────────────────────────────── */}
      <header
        style={{
          padding:      '5rem 1.5rem 4rem',
          borderBottom: '1px solid var(--color-ink-800)',
          position:     'relative',
          overflow:     'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position:        'absolute',
            inset:           0,
            backgroundImage: 'linear-gradient(var(--color-ink-800) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-800) 1px, transparent 1px)',
            backgroundSize:  '40px 40px',
            opacity:         0.2,
            pointerEvents:   'none',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}
        >
          <p className="mono-label" style={{ marginBottom: '1.25rem' }}>Journal</p>

          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight:    900,
              color:         'var(--color-ink-50)',
              letterSpacing: '-0.03em',
              lineHeight:    0.97,
              marginBottom:  '1.25rem',
            }}
          >
            The RateCrafts
            <br />
            <em style={{ color: 'var(--color-brass-300)', fontStyle: 'italic' }}>Journal</em>
          </h1>

          <p
            style={{
              fontFamily:   'var(--font-sans)',
              fontSize:     '1rem',
              fontWeight:   300,
              color:        'var(--color-ink-300)',
              maxWidth:     '480px',
              lineHeight:   1.75,
              marginBottom: '2rem',
            }}
          >
            Learn how to price your work, protect your margins, and build a
            freelance business that lasts.
          </p>

          {/* CTA to calculator */}
          <Link
            to="/calculator"
            style={{
              display:        'inline-flex',
              alignItems:     'center',
              gap:            '0.5rem',
              fontFamily:     'var(--font-mono)',
              fontSize:       '0.68rem',
              letterSpacing:  '0.1em',
              textTransform:  'uppercase',
              color:          'var(--color-brass-300)',
              textDecoration: 'none',
              border:         '1px solid rgba(212,160,23,0.3)',
              padding:        '0.5rem 1rem',
            }}
          >
            → Calculate your real rate — free tool
          </Link>
        </motion.div>
      </header>

      {/* ── Category tabs ──────────────────────────────── */}
      <div
        style={{
          borderBottom:   '1px solid var(--color-ink-800)',
          background:     'rgba(17, 16, 9, 0.95)',
          backdropFilter: 'blur(12px)',
          padding:        '0 1.5rem',
          position:       'sticky',
          top:            '64px',
          zIndex:         40,
          overflowX:      'auto',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex' }}>
          {ALL_CATEGORIES.map((cat) => (
            <CategoryTab
              key={cat}
              label={cat}
              active={activeCategory === cat}
              color={CATEGORY_COLORS[cat]}
              onClick={() => setActiveCategory(cat)}
            />
          ))}
        </div>
      </div>

      {/* ── Posts ──────────────────────────────────────── */}
      <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>

        {/* Featured post (All view only) */}
        {activeCategory === 'All' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            style={{ marginBottom: '2px' }}
          >
            <FeaturedPost post={ALL_POSTS[0]} />
          </motion.div>
        )}

        {/* Grid */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap:                 '2px',
            background:          'var(--color-ink-800)',
            border:              '1px solid var(--color-ink-800)',
          }}
        >
          {(activeCategory === 'All' ? filteredPosts.slice(1) : filteredPosts).map(
            (post, idx) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.28 }}
              >
                <PostCard post={post} />
              </motion.div>
            ),
          )}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            marginTop:    '4rem',
            padding:      '2.5rem',
            background:   'var(--color-ink-900)',
            border:       '1px solid var(--color-ink-800)',
            borderLeft:   '2px solid var(--color-brass-500)',
            display:      'flex',
            flexDirection:'column',
            gap:          '1.25rem',
          }}
        >
          <p
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.62rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color:         'var(--color-brass-500)',
            }}
          >
            Ready to apply what you've learned?
          </p>
          <p
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '1.35rem',
              fontWeight:    700,
              color:         'var(--color-ink-50)',
              letterSpacing: '-0.02em',
              lineHeight:    1.25,
            }}
          >
            Stop reading. Go calculate your rate.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <Link
              to="/calculator"
              style={{
                fontFamily:     'var(--font-mono)',
                fontSize:       '0.72rem',
                letterSpacing:  '0.1em',
                textTransform:  'uppercase',
                padding:        '0.75rem 1.75rem',
                background:     'var(--color-brass-500)',
                color:          'var(--color-ink-950)',
                textDecoration: 'none',
                fontWeight:     500,
              }}
            >
              Calculate your real rate →
            </Link>
            <Link
              to="/about"
              style={{
                fontFamily:     'var(--font-mono)',
                fontSize:       '0.68rem',
                letterSpacing:  '0.1em',
                textTransform:  'uppercase',
                color:          'var(--color-ink-500)',
                textDecoration: 'none',
              }}
            >
              About RateCrafts
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ── Sub-components ────────────────────────────────────────────── */

function CategoryTab({
  label, active, color, onClick,
}: {
  label: string; active: boolean; color?: string; onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const accent = color || 'var(--color-brass-500)';

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily:    'var(--font-mono)',
        fontSize:      '0.62rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        padding:       '1rem 1.1rem',
        background:    'none',
        border:        'none',
        borderBottom:  active ? `2px solid ${accent}` : '2px solid transparent',
        color:         active ? accent : hovered ? 'var(--color-ink-200)' : 'var(--color-ink-500)',
        cursor:        'pointer',
        whiteSpace:    'nowrap',
        transition:    'color 0.15s, border-color 0.15s',
        marginBottom:  '-1px',
      }}
    >
      {label}
    </button>
  );
}

function FeaturedPost({ post }: { post: Post }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/blog/${post.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        textDecoration:      'none',
        display:             'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        background:          hovered ? 'var(--color-ink-800)' : 'var(--color-ink-900)',
        border:              '1px solid var(--color-ink-800)',
        overflow:            'hidden',
        transition:          'background 0.2s',
      }}
    >
      <div style={{ padding: '2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <span
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.58rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color:         CATEGORY_COLORS[post.category] || 'var(--color-brass-400)',
              border:        `1px solid ${CATEGORY_COLORS[post.category] || 'var(--color-brass-400)'}33`,
              padding:       '0.2rem 0.6rem',
            }}
          >
            {post.category}
          </span>
          <span
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.58rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         'var(--color-brass-600)',
              background:    'rgba(212,160,23,0.08)',
              padding:       '0.2rem 0.6rem',
            }}
          >
            Featured
          </span>
        </div>

        <h2
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      'clamp(1.5rem, 3vw, 2rem)',
            fontWeight:    700,
            color:         'var(--color-ink-50)',
            letterSpacing: '-0.025em',
            lineHeight:    1.2,
            marginBottom:  '1rem',
          }}
        >
          {post.title}
        </h2>

        <p
          style={{
            fontFamily:   'var(--font-sans)',
            fontSize:     '0.9rem',
            fontWeight:   300,
            color:        'var(--color-ink-300)',
            lineHeight:   1.75,
            marginBottom: '2rem',
          }}
        >
          {post.excerpt}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-600)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{post.date}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--color-ink-600)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{post.readTime} read</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-brass-400)', marginLeft: 'auto' }}>Read →</span>
        </div>
      </div>

      <div style={{ minHeight: '240px', overflow: 'hidden' }}>
        <img
          src={post.image}
          alt={post.title}
          referrerPolicy="no-referrer"
          style={{
            width:      '100%',
            height:     '100%',
            objectFit:  'cover',
            filter:     `brightness(${hovered ? 0.75 : 0.6}) sepia(0.25)`,
            transform:  hovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 0.5s ease, filter 0.3s ease',
          }}
        />
      </div>
    </Link>
  );
}

function PostCard({ post }: { post: Post }) {
  const [hovered, setHovered] = useState(false);
  const catColor = CATEGORY_COLORS[post.category] || 'var(--color-brass-400)';

  return (
    <Link
      to={`/blog/${post.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:     hovered ? 'var(--color-ink-900)' : 'var(--color-ink-950)',
        textDecoration: 'none',
        display:        'flex',
        flexDirection:  'column',
        height:         '100%',
        overflow:       'hidden',
        transition:     'background 0.2s',
      }}
    >
      <div style={{ height: '170px', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={post.image}
          alt={post.title}
          referrerPolicy="no-referrer"
          style={{
            width:      '100%',
            height:     '100%',
            objectFit:  'cover',
            filter:     `brightness(${hovered ? 0.75 : 0.6}) sepia(0.2)`,
            transform:  hovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.4s ease, filter 0.3s ease',
          }}
        />
      </div>

      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
          <span
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.56rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color:         catColor,
              border:        `1px solid ${catColor}33`,
              padding:       '0.18rem 0.5rem',
            }}
          >
            {post.category}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-ink-600)' }}>
            {post.readTime}
          </span>
        </div>

        <h2
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      '1rem',
            fontWeight:    700,
            color:         'var(--color-ink-100)',
            letterSpacing: '-0.01em',
            lineHeight:    1.35,
            marginBottom:  '0.65rem',
            flex:          1,
          }}
        >
          {post.title}
        </h2>

        <p
          style={{
            fontFamily:   'var(--font-sans)',
            fontSize:     '0.8rem',
            fontWeight:   300,
            color:        'var(--color-ink-400)',
            lineHeight:   1.65,
            marginBottom: '1.1rem',
          }}
        >
          {post.excerpt}
        </p>

        <div
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            borderTop:      '1px solid var(--color-ink-800)',
            paddingTop:     '0.9rem',
          }}
        >
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-ink-600)' }}>
            {post.date}
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-brass-500)' }}>→</span>
        </div>
      </div>
    </Link>
  );
}