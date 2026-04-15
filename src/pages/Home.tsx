import React, { useState }           from 'react';
import { Link }                       from 'react-router-dom';
import { motion, AnimatePresence }    from 'motion/react';
import { SEO }                        from '../components/SEO';

/* ── Static data ───────────────────────────────────────────────── */

const FAQS = [
  {
    question: 'Is this calculator really free?',
    answer:   'Yes — completely free, forever. No account, no credit card, no catches. RateCrafts is an independent tool built for the freelance community.',
  },
  {
    question: 'How accurate are the calculations?',
    answer:   'The results are as accurate as the numbers you enter. The formula accounts for taxes, expenses, billable hours, and profit margin — far more reliable than guessing or copying a competitor rate.',
  },
  {
    question: 'Do you store my financial data?',
    answer:   'No. Every calculation runs entirely in your browser. Nothing is sent to a server. Your numbers stay on your device, always.',
  },
  {
    question: "What is the profit margin buffer?",
    answer:   "It adds a safety cushion on top of your base rate — for slow months, unexpected costs, savings, and growth. Without it your business breaks even at best.",
  },
];

const BLOG_PREVIEWS = [
  {
    id:       'how-to-calculate-freelance-rate',
    title:    'How to Calculate Your Freelance Rate: A Step-by-Step Guide',
    date:     'April 5, 2026',
    category: 'Strategy',
    image:    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'hidden-costs-of-freelancing',
    title:    '7 Hidden Costs of Freelancing That Destroy Profit Margins',
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

const WHO_ITS_FOR = [
  { role: 'Developers',    desc: 'Set a rate that covers your tools, taxes, and time.' },
  { role: 'Designers',     desc: 'Price creative work with a real financial foundation.' },
  { role: 'Consultants',   desc: 'Build a day rate grounded in your actual costs.'       },
  { role: 'Copywriters',   desc: 'Stop guessing. Know your minimum viable hourly floor.' },
];

const BENEFITS = [
  {
    number:  '01',
    title:   'Taxes & expenses included',
    desc:    'Most calculators ignore what you owe the government and what it costs to run your business. RateCrafts bakes both in — so your rate covers your actual life, not just your time.',
    link:    { label: 'See hidden freelance costs →', path: '/blog/hidden-costs-of-freelancing' },
  },
  {
    number:  '02',
    title:   'Realistic billable hours',
    desc:    'You cannot bill 40 hours a week. Admin, sales, revisions, and communication eat into that number. RateCrafts uses your real available hours — not an optimistic guess.',
    link:    { label: 'Learn about billable hours →', path: '/blog/billable-hours-guide' },
  },
  {
    number:  '03',
    title:   'Profit margin built in',
    desc:    'A rate that only covers break-even is a rate that keeps you fragile. Add a profit buffer and your business survives slow months, bad clients, and unexpected costs.',
    link:    { label: 'Why profit margin matters →', path: '/blog/profit-margin-for-freelancers' },
  },
];

const TOOLS_PROMO = [
  {
    label:  'Hourly Rate Calculator',
    desc:   'Find your minimum viable hourly rate based on income, taxes, expenses, and hours.',
    path:   '/calculator',
    cta:    'Calculate rate →',
    accent: true,
  },
  {
    label:  'Project Pricing Calculator',
    desc:   'Build a full project quote including revisions, buffer, tax, and profit margin.',
    path:   '/project-calculator',
    cta:    'Price a project →',
    accent: false,
  },
];

const HERO_STATS = [
  { number: '6',    unit: 'variables', label: 'Drive the calculation' },
  { number: '100%', unit: '',          label: 'Runs in your browser'  },
  { number: '∞',    unit: '',          label: 'Recalculates live'     },
];

/* ── Home ──────────────────────────────────────────────────────── */
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <SEO
        title="Freelance Rate Calculator | RateCrafts"
        description="Calculate your freelance hourly rate based on income goals, taxes, expenses, and billable hours. Free tool, no signup required."
      />

      {/* ══════════════════════════════════════════════════ HERO */}
      <section
        style={{
          minHeight:  '90vh',
          display:    'flex',
          alignItems: 'center',
          position:   'relative',
          overflow:   'hidden',
          padding:    '6rem 1.5rem 4rem',
        }}
      >
        {/* Grid background */}
        <div
          aria-hidden="true"
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
          aria-hidden="true"
          style={{
            position:     'absolute',
            top:          '10%',
            left:         '50%',
            width:        '800px',
            height:       '800px',
            background:   'radial-gradient(circle, rgba(212,160,23,0.06) 0%, transparent 65%)',
            pointerEvents:'none',
            transform:    'translateX(-50%)',
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Problem statement */}
            <p
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.7rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color:         'var(--color-brass-500)',
                marginBottom:  '1.75rem',
                display:       'flex',
                alignItems:    'center',
                gap:           '0.75rem',
              }}
            >
              <span
                style={{
                  display:    'inline-block',
                  width:      '2.5rem',
                  height:     '1px',
                  background: 'var(--color-brass-500)',
                  flexShrink: 0,
                }}
              />
              Most freelancers undercharge
            </p>

            {/* Headline — the solution */}
            <h1
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(2.8rem, 7vw, 6rem)',
                fontWeight:    900,
                color:         'var(--color-ink-50)',
                lineHeight:    0.97,
                letterSpacing: '-0.03em',
                maxWidth:      '820px',
                marginBottom:  '2rem',
              }}
            >
              Calculate your
              <br />
              <em style={{ color: 'var(--color-brass-300)', fontStyle: 'italic' }}>
                real hourly rate.
              </em>
            </h1>

            {/* Sub-headline */}
            <p
              style={{
                fontFamily:   'var(--font-sans)',
                fontSize:     '1.1rem',
                fontWeight:   300,
                color:        'var(--color-ink-300)',
                lineHeight:   1.75,
                maxWidth:     '520px',
                marginBottom: '2.5rem',
              }}
            >
              Enter your income goal, taxes, expenses, and available hours.
              Get a rate that actually covers your business — not just your time.
            </p>

            {/* Trust micro-copy */}
            <p
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.62rem',
                letterSpacing: '0.1em',
                color:         'var(--color-ink-600)',
                textTransform: 'uppercase',
                marginBottom:  '2rem',
              }}
            >
              Free · No signup · 100% private
            </p>

            {/* CTA row */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <PrimaryButton to="/calculator">Calculate your real rate →</PrimaryButton>
              <SecondaryButton to="/project-calculator">
                Price a project →
              </SecondaryButton>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              marginTop:           '5rem',
              paddingTop:          '2.5rem',
              borderTop:           '1px solid var(--color-ink-800)',
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
            }}
          >
            {HERO_STATS.map((stat, i) => (
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
                        fontFamily:  'var(--font-mono)',
                        fontSize:    '0.7rem',
                        color:       'var(--color-brass-400)',
                        marginLeft:  '0.35rem',
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

      {/* ══════════════════════════════════════════ WHO IT'S FOR */}
      <section
        style={{
          borderTop:  '1px solid var(--color-ink-800)',
          background: 'var(--color-ink-900)',
          padding:    '5rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p className="mono-label" style={{ marginBottom: '0.75rem' }}>Who it's for</p>
            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight:    700,
                color:         'var(--color-ink-50)',
                letterSpacing: '-0.025em',
                lineHeight:    1.1,
              }}
            >
              If you sell your time, this tool is for you.
            </h2>
          </div>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap:                 '2px',
              background:          'var(--color-ink-800)',
            }}
          >
            {WHO_ITS_FOR.map((item) => (
              <div
                key={item.role}
                style={{
                  background: 'var(--color-ink-950)',
                  padding:    '2rem 1.75rem',
                }}
              >
                <p
                  style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      '1.15rem',
                    fontWeight:    700,
                    color:         'var(--color-ink-50)',
                    marginBottom:  '0.6rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.role}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize:   '0.875rem',
                    fontWeight: 300,
                    color:      'var(--color-ink-400)',
                    lineHeight: 1.65,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <OutlineButton to="/calculator">Calculate your rate for free →</OutlineButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════ BENEFITS */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--color-ink-800)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="mono-label" style={{ marginBottom: '0.75rem' }}>Why it works</p>
            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight:    700,
                color:         'var(--color-ink-50)',
                letterSpacing: '-0.025em',
                lineHeight:    1.1,
                maxWidth:      '600px',
                margin:        '0 auto',
              }}
            >
              Three things most calculators get wrong.
            </h2>
          </div>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap:                 '2px',
              background:          'var(--color-ink-800)',
            }}
          >
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.number}
                style={{
                  background:    'var(--color-ink-950)',
                  padding:       '2.25rem 2rem',
                  display:       'flex',
                  flexDirection: 'column',
                }}
              >
                <p
                  style={{
                    fontFamily:   'var(--font-mono)',
                    fontSize:     '0.6rem',
                    color:        'var(--color-ink-700)',
                    marginBottom: '1.25rem',
                    letterSpacing:'0.06em',
                  }}
                >
                  {benefit.number}
                </p>

                <div
                  style={{
                    width:        '1.5rem',
                    height:       '1px',
                    background:   'var(--color-brass-500)',
                    marginBottom: '1.1rem',
                  }}
                />

                <p
                  style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      '1.1rem',
                    fontWeight:    700,
                    color:         'var(--color-ink-50)',
                    marginBottom:  '0.75rem',
                    lineHeight:    1.3,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {benefit.title}
                </p>

                <p
                  style={{
                    fontFamily:  'var(--font-sans)',
                    fontSize:    '0.875rem',
                    fontWeight:  300,
                    color:       'var(--color-ink-300)',
                    lineHeight:  1.75,
                    flex:        1,
                    marginBottom:'1.25rem',
                  }}
                >
                  {benefit.desc}
                </p>

                <Link
                  to={benefit.link.path}
                  style={{
                    fontFamily:     'var(--font-mono)',
                    fontSize:       '0.65rem',
                    letterSpacing:  '0.08em',
                    color:          'var(--color-brass-400)',
                    textDecoration: 'none',
                    textTransform:  'uppercase',
                  }}
                >
                  {benefit.link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ TOOLS */}
      <section
        style={{
          borderTop:  '1px solid var(--color-ink-800)',
          padding:    '5rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="mono-label" style={{ marginBottom: '0.75rem' }}>Free tools</p>
            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight:    700,
                color:         'var(--color-ink-50)',
                letterSpacing: '-0.025em',
              }}
            >
              Two calculators. One goal.
            </h2>
          </div>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap:                 '2px',
              background:          'var(--color-ink-800)',
            }}
          >
            {TOOLS_PROMO.map((tool) => (
              <div
                key={tool.path}
                style={{
                  background:    'var(--color-ink-900)',
                  padding:       '2.25rem',
                  position:      'relative',
                  display:       'flex',
                  flexDirection: 'column',
                }}
              >
                {tool.accent && (
                  <div
                    style={{
                      position:   'absolute',
                      top:        0,
                      left:       0,
                      right:      0,
                      height:     '2px',
                      background: 'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))',
                    }}
                  />
                )}
                <p
                  style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      '1.2rem',
                    fontWeight:    700,
                    color:         'var(--color-ink-50)',
                    letterSpacing: '-0.01em',
                    marginBottom:  '0.65rem',
                  }}
                >
                  {tool.label}
                </p>
                <p
                  style={{
                    fontFamily:   'var(--font-sans)',
                    fontSize:     '0.875rem',
                    fontWeight:   300,
                    color:        'var(--color-ink-400)',
                    lineHeight:   1.7,
                    marginBottom: '1.5rem',
                    flex:         1,
                  }}
                >
                  {tool.desc}
                </p>
                <Link
                  to={tool.path}
                  style={{
                    fontFamily:     'var(--font-mono)',
                    fontSize:       '0.72rem',
                    letterSpacing:  '0.1em',
                    textTransform:  'uppercase',
                    color:          tool.accent ? 'var(--color-ink-950)' : 'var(--color-brass-300)',
                    background:     tool.accent ? 'var(--color-brass-500)' : 'transparent',
                    border:         tool.accent ? 'none' : '1px solid var(--color-brass-600)',
                    textDecoration: 'none',
                    padding:        '0.65rem 1.25rem',
                    display:        'inline-block',
                    fontWeight:     tool.accent ? 500 : 400,
                    alignSelf:      'flex-start',
                  }}
                >
                  {tool.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ BLOG POSTS */}
      <section
        style={{
          borderTop:  '1px solid var(--color-ink-800)',
          background: 'var(--color-ink-900)',
          padding:    '6rem 1.5rem',
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
                Learn how to price your work.
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

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap:                 '2px',
              background:          'var(--color-ink-800)',
            }}
          >
            {BLOG_PREVIEWS.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════ FAQ */}
      <section
        style={{
          borderTop: '1px solid var(--color-ink-800)',
          padding:   '6rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <p
            className="mono-label"
            style={{ textAlign: 'center', display: 'block', marginBottom: '1rem' }}
          >
            FAQ
          </p>
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

          {FAQS.map((faq, i) => (
            <FaqItem
              key={i}
              faq={faq}
              isOpen={openFaq === i}
              isLast={i === FAQS.length - 1}
              onToggle={() => setOpenFaq(openFaq === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════ BOTTOM CTA */}
      <section
        style={{
          borderTop:  '1px solid var(--color-ink-800)',
          background: 'var(--color-ink-900)',
          padding:    '7rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
          <p className="mono-label" style={{ display: 'block', marginBottom: '1.5rem' }}>
            Get started — it's free
          </p>

          <h2
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.2rem, 5.5vw, 4.5rem)',
              fontWeight:    900,
              color:         'var(--color-ink-50)',
              letterSpacing: '-0.03em',
              lineHeight:    1.0,
              marginBottom:  '1.5rem',
            }}
          >
            Know your rate.
            <br />
            <em style={{ color: 'var(--color-brass-300)', fontStyle: 'italic' }}>
              Charge with confidence.
            </em>
          </h2>

          <p
            style={{
              fontFamily:   'var(--font-sans)',
              fontSize:     '1rem',
              fontWeight:   300,
              color:        'var(--color-ink-400)',
              lineHeight:   1.75,
              marginBottom: '2.5rem',
              maxWidth:     '460px',
              margin:       '0 auto 2.5rem',
            }}
          >
            Takes under a minute. No account required. Your data never leaves your browser.
          </p>

          <PrimaryButton to="/calculator">Calculate your real rate →</PrimaryButton>
        </div>
      </section>
    </div>
  );
}

/* ── Reusable sub-components ───────────────────────────────────── */

function PrimaryButton({ to, children }: { to: string; children: React.ReactNode }) {
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
        padding:        '0.95rem 2rem',
        background:     hovered ? 'var(--color-brass-400)' : 'var(--color-brass-500)',
        color:          'var(--color-ink-950)',
        textDecoration: 'none',
        display:        'inline-block',
        fontWeight:     500,
        transition:     'background 0.2s ease',
      }}
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ to, children }: { to: string; children: React.ReactNode }) {
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
        padding:        '0.95rem 2rem',
        border:         `1px solid ${hovered ? 'var(--color-ink-500)' : 'var(--color-ink-700)'}`,
        color:          hovered ? 'var(--color-ink-100)' : 'var(--color-ink-300)',
        background:     'transparent',
        textDecoration: 'none',
        display:        'inline-block',
        transition:     'all 0.2s ease',
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

function BlogCard({
  post,
}: {
  post: { id: string; title: string; date: string; category: string; image: string };
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/blog/${post.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:     hovered ? 'var(--color-ink-800)' : 'var(--color-ink-950)',
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
            display:      'flex',
            alignItems:   'center',
            gap:          '0.75rem',
            marginBottom: '0.85rem',
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
            flex:          1,
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