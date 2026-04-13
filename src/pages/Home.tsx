import React, { useState } from 'react';
import { Link }             from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '../components/SEO';

/* ── Data ──────────────────────────────────────────────────────── */
const faqs = [
  {
    question: 'Is this calculator really free?',
    answer:   'Yes, 100% free. No hidden fees, no credit card required.',
  },
  {
    question: 'How accurate are the calculations?',
    answer:   'Based on your inputs it provides a solid baseline. We recommend consulting a financial advisor for complex planning.',
  },
  {
    question: 'Do you store my financial data?',
    answer:   "No. All calculations happen locally in your browser. We never store or see any numbers you enter.",
  },
  {
    question: "What is a 'Profit Margin Buffer'?",
    answer:   "An extra percentage added to your base rate for growth, unexpected expenses, and building wealth beyond break-even.",
  },
];

const blogPosts = [
  {
    id:       'how-to-calculate-freelance-rate',
    title:    'How to Calculate Your Freelance Rate: The Math Behind Profitability',
    date:     'April 5, 2026',
    category: 'Strategy',
    image:    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'hidden-costs-of-freelancing',
    title:    'Beyond the Laptop: 7 Hidden Costs of Running a Freelance Business',
    date:     'April 2, 2026',
    category: 'Finance',
    image:    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'raising-your-rates',
    title:    'How to Raise Your Rates Without Losing Good Clients',
    date:     'March 28, 2026',
    category: 'Business',
    image:    'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
  },
];

const features = [
  { n: '01', title: 'Tax Aware',       desc: 'Self-employment tax is baked in so you are never blindsided at year-end.'           },
  { n: '02', title: 'Profit Focused',  desc: 'Goes beyond break-even — adds a real margin so your business actually grows.'       },
  { n: '03', title: 'Honest Hours',    desc: 'Accounts for admin, sales, and non-billable time, not just raw availability.'       },
  { n: '04', title: 'Privacy First',   desc: 'All math happens in your browser. Zero data ever leaves your device.'               },
];

const steps = [
  { numeral: 'I',   title: 'Set Your Goals',      desc: 'Enter your desired take-home income and estimated tax rate.'     },
  { numeral: 'II',  title: 'Add Your Costs',       desc: 'Include monthly business expenses and a profit margin buffer.'  },
  { numeral: 'III', title: 'Define Availability',  desc: 'Set weekly billable hours and working weeks per month.'         },
];

const heroStats = [
  { number: '6',    unit: 'inputs', label: 'Financial variables' },
  { number: '100%', unit: '',       label: 'Client-side only'    },
  { number: '∞',    unit: '',       label: 'Live recalculation'  },
];

/* ── Home ──────────────────────────────────────────────────────── */
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <SEO />

      {/* ══════════════════════════════════════════════════════ HERO */}
      <section
        style={{
          minHeight:  '92vh',
          display:    'flex',
          alignItems: 'center',
          position:   'relative',
          overflow:   'hidden',
          padding:    '7rem 1.5rem 5rem',
        }}
      >
        {/* Grid pattern background */}
        <div
          style={{
            position:        'absolute',
            inset:           0,
            backgroundImage: 'linear-gradient(var(--color-ink-800) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-800) 1px, transparent 1px)',
            backgroundSize:  '56px 56px',
            opacity:         0.3,
            pointerEvents:   'none',
          }}
        />

        {/* Radial glow */}
        <div
          style={{
            position:     'absolute',
            top:          '15%',
            left:         '55%',
            width:        '700px',
            height:       '700px',
            background:   'radial-gradient(circle, rgba(212,160,23,0.07) 0%, transparent 65%)',
            pointerEvents:'none',
          }}
        />

        <div
          style={{
            maxWidth:  '1280px',
            margin:    '0 auto',
            position:  'relative',
            zIndex:    1,
            width:     '100%',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Eyebrow */}
            <p
              className="mono-label"
              style={{
                display:     'flex',
                alignItems:  'center',
                gap:         '0.75rem',
                marginBottom:'2rem',
              }}
            >
              <span
                style={{
                  display:    'inline-block',
                  width:      '2.5rem',
                  height:     '1px',
                  background: 'var(--color-brass-500)',
                }}
              />
              Freelance Rate Calculator
            </p>

            {/* Headline */}
            <h1
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(3rem, 7.5vw, 6.5rem)',
                fontWeight:    900,
                color:         'var(--color-ink-50)',
                lineHeight:    0.97,
                letterSpacing: '-0.03em',
                maxWidth:      '820px',
                marginBottom:  '2rem',
              }}
            >
              Stop guessing.
              <br />
              <em style={{ color: 'var(--color-brass-300)', fontStyle: 'italic' }}>
                Know your rate.
              </em>
            </h1>

            {/* Sub */}
            <p
              style={{
                fontFamily:   'var(--font-sans)',
                fontSize:     '1.1rem',
                fontWeight:   300,
                color:        'var(--color-ink-300)',
                lineHeight:   1.75,
                maxWidth:     '500px',
                marginBottom: '3rem',
              }}
            >
              Factor in taxes, overhead, and profit margin to set a rate that
              actually sustains your business — not just covers your laptop.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <HeroCTA to="/calculator" primary>Open Calculator →</HeroCTA>
              <HeroCTA to="/blog" primary={false}>Read the Blog</HeroCTA>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              marginTop:     '5rem',
              paddingTop:    '2.5rem',
              borderTop:     '1px solid var(--color-ink-800)',
              display:       'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
            }}
          >
            {heroStats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  padding:     '1.25rem 1.5rem',
                  borderRight: i < 2 ? '1px solid var(--color-ink-800)' : 'none',
                }}
              >
                <p
                  style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      '2.2rem',
                    fontWeight:    700,
                    color:         'var(--color-ink-50)',
                    lineHeight:    1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {stat.number}
                  {stat.unit && (
                    <span
                      style={{
                        fontFamily:   'var(--font-mono)',
                        fontSize:     '0.7rem',
                        color:        'var(--color-brass-400)',
                        marginLeft:   '0.3rem',
                      }}
                    >
                      {stat.unit}
                    </span>
                  )}
                </p>
                <p
                  style={{
                    fontFamily:    'var(--font-mono)',
                    fontSize:      '0.6rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color:         'var(--color-ink-500)',
                    marginTop:     '0.3rem',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ FEATURES */}
      <section
        style={{
          borderTop:    '1px solid var(--color-ink-800)',
          borderBottom: '1px solid var(--color-ink-800)',
          background:   'var(--color-ink-900)',
          padding:      '6rem 1.5rem',
        }}
      >
        <div
          style={{
            maxWidth:            '1280px',
            margin:              '0 auto',
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap:                 '4rem',
            alignItems:          'center',
          }}
        >
          {/* Text column */}
          <div>
            <p className="mono-label" style={{ marginBottom: '1.25rem' }}>Why RateCraft</p>

            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(2rem, 4vw, 2.75rem)',
                fontWeight:    700,
                color:         'var(--color-ink-50)',
                letterSpacing: '-0.025em',
                lineHeight:    1.1,
                marginBottom:  '1.25rem',
              }}
            >
              If you sell your time,
              <br />
              this tool is for you.
            </h2>

            <p
              style={{
                fontFamily:   'var(--font-sans)',
                fontSize:     '0.95rem',
                fontWeight:   300,
                color:        'var(--color-ink-300)',
                lineHeight:   1.8,
                marginBottom: '2rem',
              }}
            >
              Most freelancers undercharge because they forget hidden costs.
              RateCraft gives you a number grounded in your actual expenses
              — not guesswork or market copying.
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                'Freelance Developers & Designers',
                'Marketing Consultants & Copywriters',
                'Photographers & Creative Professionals',
                'Small Service Business Owners',
              ].map((item) => (
                <li
                  key={item}
                  style={{
                    display:    'flex',
                    alignItems: 'center',
                    gap:        '0.75rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize:   '0.9rem',
                    fontWeight: 300,
                    color:      'var(--color-ink-300)',
                  }}
                >
                  <span
                    style={{
                      width:      '4px',
                      height:     '4px',
                      background: 'var(--color-brass-500)',
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Feature tiles grid */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: '1fr 1fr',
              gap:                 '2px',
              background:          'var(--color-ink-800)',
            }}
          >
            {features.map((f) => (
              <div
                key={f.n}
                style={{
                  background: 'var(--color-ink-950)',
                  padding:    '1.75rem',
                }}
              >
                <p
                  style={{
                    fontFamily:   'var(--font-mono)',
                    fontSize:     '0.6rem',
                    color:        'var(--color-ink-700)',
                    marginBottom: '1rem',
                  }}
                >
                  {f.n}
                </p>
                <p
                  style={{
                    fontFamily:   'var(--font-display)',
                    fontSize:     '1rem',
                    fontWeight:   700,
                    color:        'var(--color-ink-100)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {f.title}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize:   '0.82rem',
                    fontWeight: 300,
                    color:      'var(--color-ink-400)',
                    lineHeight: 1.65,
                  }}
                >
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ HOW IT WORKS */}
      <section style={{ padding: '6rem 1.5rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="mono-label" style={{ marginBottom: '1rem' }}>Process</p>
            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight:    700,
                color:         'var(--color-ink-50)',
                letterSpacing: '-0.025em',
              }}
            >
              Three inputs. One clear number.
            </h2>
          </div>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap:                 '2px',
              background:          'var(--color-ink-800)',
              marginBottom:        '3rem',
            }}
          >
            {steps.map((step) => (
              <div
                key={step.numeral}
                style={{
                  background: 'var(--color-ink-950)',
                  padding:    '2.5rem 2rem',
                }}
              >
                <p
                  style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      '3.5rem',
                    fontWeight:    900,
                    fontStyle:     'italic',
                    color:         'var(--color-ink-800)',
                    lineHeight:    1,
                    marginBottom:  '1.5rem',
                    letterSpacing: '-0.03em',
                  }}
                >
                  {step.numeral}
                </p>

                <div
                  style={{
                    width:        '1.5rem',
                    height:       '1px',
                    background:   'var(--color-brass-500)',
                    marginBottom: '1rem',
                  }}
                />

                <p
                  style={{
                    fontFamily:   'var(--font-display)',
                    fontSize:     '1.05rem',
                    fontWeight:   700,
                    color:        'var(--color-ink-100)',
                    marginBottom: '0.55rem',
                  }}
                >
                  {step.title}
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize:   '0.85rem',
                    fontWeight: 300,
                    color:      'var(--color-ink-400)',
                    lineHeight: 1.7,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <OutlineButton to="/calculator">Try it free →</OutlineButton>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ BLOG */}
      <section
        style={{
          borderTop: '1px solid var(--color-ink-800)',
          padding:   '6rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div
            style={{
              display:        'flex',
              justifyContent: 'space-between',
              alignItems:     'flex-end',
              marginBottom:   '3rem',
              flexWrap:       'wrap',
              gap:            '1rem',
            }}
          >
            <div>
              <p className="mono-label" style={{ marginBottom: '0.6rem' }}>From the blog</p>
              <h2
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight:    700,
                  color:         'var(--color-ink-50)',
                  letterSpacing: '-0.02em',
                }}
              >
                Freelance finance, demystified.
              </h2>
            </div>

            <Link
              to="/blog"
              style={{
                fontFamily:     'var(--font-mono)',
                fontSize:       '0.68rem',
                letterSpacing:  '0.1em',
                textTransform:  'uppercase',
                color:          'var(--color-brass-400)',
                textDecoration: 'none',
              }}
            >
              All articles →
            </Link>
          </div>

          {/* Blog cards */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap:                 '2px',
              background:          'var(--color-ink-800)',
            }}
          >
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ FAQ */}
      <section
        style={{
          borderTop:  '1px solid var(--color-ink-800)',
          background: 'var(--color-ink-900)',
          padding:    '6rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p className="mono-label" style={{ textAlign: 'center', display: 'block', marginBottom: '1rem' }}>FAQ</p>

          <h2
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(1.8rem, 3vw, 2.25rem)',
              fontWeight:    700,
              color:         'var(--color-ink-50)',
              textAlign:     'center',
              letterSpacing: '-0.025em',
              marginBottom:  '3rem',
            }}
          >
            Questions &amp; Answers
          </h2>

          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openFaq === i}
              isLast={i === faqs.length - 1}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════ CTA */}
      <section
        style={{
          padding:   '7rem 1.5rem',
          borderTop: '1px solid var(--color-ink-800)',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <p className="mono-label" style={{ display: 'block', marginBottom: '1.5rem' }}>Get started</p>

          <h2
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.2rem, 5.5vw, 4.5rem)',
              fontWeight:    900,
              color:         'var(--color-ink-50)',
              letterSpacing: '-0.03em',
              lineHeight:    1.0,
              marginBottom:  '2.5rem',
            }}
          >
            Your rate, calculated
            <br />
            <em style={{ color: 'var(--color-brass-300)', fontStyle: 'italic' }}>
              in under a minute.
            </em>
          </h2>

          <HeroCTA to="/calculator" primary>Open the Calculator →</HeroCTA>
        </div>
      </section>
    </div>
  );
}

/* ── Sub-components ────────────────────────────────────────────── */

function HeroCTA({
  to,
  primary,
  children,
}: {
  to: string;
  primary: boolean;
  children: React.ReactNode;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily:     'var(--font-mono)',
        fontSize:       '0.78rem',
        letterSpacing:  '0.1em',
        textTransform:  'uppercase',
        padding:        '0.9rem 2rem',
        textDecoration: 'none',
        display:        'inline-block',
        transition:     'all 0.2s ease',
        background:     primary
          ? hovered ? 'var(--color-brass-400)' : 'var(--color-brass-500)'
          : 'transparent',
        color: primary
          ? 'var(--color-ink-950)'
          : hovered ? 'var(--color-ink-100)' : 'var(--color-ink-300)',
        border: primary
          ? 'none'
          : `1px solid ${hovered ? 'var(--color-ink-500)' : 'var(--color-ink-700)'}`,
        fontWeight: primary ? 500 : 400,
      }}
    >
      {children}
    </Link>
  );
}

function OutlineButton({ to, children }: { to: string; children: React.ReactNode }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily:     'var(--font-mono)',
        fontSize:       '0.78rem',
        letterSpacing:  '0.1em',
        textTransform:  'uppercase',
        padding:        '0.9rem 2.5rem',
        border:         '1px solid var(--color-brass-600)',
        color:          hovered ? 'var(--color-ink-950)' : 'var(--color-brass-300)',
        background:     hovered ? 'var(--color-brass-500)' : 'transparent',
        textDecoration: 'none',
        display:        'inline-block',
        transition:     'all 0.2s ease',
      }}
    >
      {children}
    </Link>
  );
}

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  const [hovered, setHovered] = useState(false);

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
        overflow:       'hidden',
        transition:     'background 0.2s',
      }}
    >
      {/* Image */}
      <div style={{ height: '200px', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={post.image}
          alt={post.title}
          referrerPolicy="no-referrer"
          style={{
            width:      '100%',
            height:     '100%',
            objectFit:  'cover',
            filter:     `brightness(${hovered ? 0.8 : 0.65}) sepia(0.2)`,
            transform:  hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.4s ease, filter 0.3s ease',
          }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display:     'flex',
            alignItems:  'center',
            gap:         '0.75rem',
            marginBottom:'0.85rem',
          }}
        >
          <span
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.58rem',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color:         'var(--color-brass-400)',
              border:        '1px solid rgba(212,160,23,0.25)',
              padding:       '0.18rem 0.5rem',
            }}
          >
            {post.category}
          </span>
          <span
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.58rem',
              color:         'var(--color-ink-600)',
              letterSpacing: '0.06em',
            }}
          >
            {post.date}
          </span>
        </div>

        <h3
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      '1rem',
            fontWeight:    700,
            color:         'var(--color-ink-100)',
            lineHeight:    1.35,
            letterSpacing: '-0.01em',
          }}
        >
          {post.title}
        </h3>
      </div>
    </Link>
  );
}

function FaqItem({
  faq,
  isOpen,
  isLast,
  onToggle,
}: {
  faq:      { question: string; answer: string };
  isOpen:   boolean;
  isLast:   boolean;
  onToggle: () => void;
}) {
  return (
    <div
      style={{
        borderTop:    '1px solid var(--color-ink-800)',
        borderBottom: isLast ? '1px solid var(--color-ink-800)' : 'none',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width:          '100%',
          padding:        '1.35rem 0',
          background:     'none',
          border:         'none',
          cursor:         'pointer',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          gap:            '1rem',
          textAlign:      'left',
        }}
      >
        <span
          style={{
            fontFamily:    'var(--font-display)',
            fontSize:      '1rem',
            fontWeight:    700,
            color:         'var(--color-ink-100)',
            lineHeight:    1.4,
          }}
        >
          {faq.question}
        </span>

        <span
          style={{
            fontFamily:  'var(--font-mono)',
            fontSize:    '1.1rem',
            color:       'var(--color-brass-400)',
            flexShrink:  0,
            transform:   isOpen ? 'rotate(45deg)' : 'none',
            transition:  'transform 0.2s ease',
            display:     'block',
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                fontFamily:   'var(--font-sans)',
                fontSize:     '0.9rem',
                fontWeight:   300,
                color:        'var(--color-ink-300)',
                lineHeight:   1.8,
                paddingBottom:'1.35rem',
              }}
            >
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}