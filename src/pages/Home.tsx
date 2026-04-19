import React, { useState } from 'react';
import { Link }                       from 'react-router-dom';
import { motion, AnimatePresence }    from 'motion/react';
import { SEO }                        from '../components/SEO';

/* ── FAQ data ──────────────────────────────────────────────────── */
const FAQS = [
  {
    question: 'Is RateCrafts really free?',
    answer:   'Yes — completely free, forever. No account, no credit card, no premium tier. The calculation runs in your browser and nothing is ever sent to a server.',
  },
  {
    question: 'Why does this give a different number than other calculators?',
    answer:   'Most calculators divide a salary goal by 52 weeks and 40 hours. That formula ignores taxes, business expenses, realistic billable hours, and profit margin — so it consistently produces rates that are too low. RateCrafts accounts for all four.',
  },
  {
    question: 'How many billable hours per week should I enter?',
    answer:   'Be honest — most freelancers bill 20 to 28 hours per week once admin, sales, revisions, and client communication are factored in. Using 40 will produce a rate that is too low. Start with 25 and adjust from there.',
  },
  {
    question: 'What tax rate should I use?',
    answer:   'Use your combined self-employment and income tax rate. US freelancers typically use 28–35%. UK freelancers on standard rate: around 28–32% including NI. If you are unsure, 30% is a conservative and commonly safe starting point.',
  },
  {
    question: "What is the profit margin buffer?",
    answer:   'It is an extra percentage added to your rate above and beyond break-even — to cover slow months, equipment failures, future investments, and actual business growth. Without it, your business survives but never thrives. 10–15% is a reasonable minimum.',
  },
];

/* ── Blog previews ─────────────────────────────────────────────── */
const BLOG_PREVIEWS = [
  {
    id:       'how-to-calculate-freelance-rate',
    title:    'Why the $29/hr Rate You Calculated Last Year Is Wrong',
    date:     'April 5, 2026',
    category: 'Strategy',
    excerpt:  'Most freelancers calculate their rate once, get a number that feels too high, and immediately discount it. Here is the math that shows they should have gone the other way.',
    image:    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'hidden-costs-of-freelancing',
    title:    '7 Costs Freelancers Build Into Their Lifestyle Instead of Their Rate',
    date:     'April 2, 2026',
    category: 'Finance',
    excerpt:  'Slow internet you upgraded for client calls. The chair that helps your back. The time you spend on proposals. None of these are personal expenses.',
    image:    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  },
  {
    id:       'freelance-rate-too-low',
    title:    'Fully Booked, Still Broke: The Rate Problem Nobody Talks About',
    date:     'March 16, 2026',
    category: 'Strategy',
    excerpt:  'Busy freelancers often blame the wrong thing — client quality, niche, platform. The actual problem is almost always pricing.',
    image:    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
];

/* ── Who it is for ─────────────────────────────────────────────── */
const WHO_ITS_FOR = [
  {
    role: 'Developers',
    desc: 'Your rate needs to cover the SaaS stack you maintain, the learning time between projects, and the tax bill that arrives in January. A $50/hr rate that ignores those is not really $50/hr.',
  },
  {
    role: 'Designers',
    desc: 'Creative work is routinely underpriced because it looks effortless. Your rate should reflect the exploration, the revisions, the expertise — not just the final file.',
  },
  {
    role: 'Consultants',
    desc: 'Day rates are common in consulting. But a day rate set without understanding your hourly floor can leave significant money on the table across a year of engagements.',
  },
  {
    role: 'Copywriters',
    desc: 'Research, interviews, briefing calls, revisions, and client education all happen before a word gets written. If your rate only prices the writing, you are undercharging.',
  },
];

/* ── Three differentiators ─────────────────────────────────────── */
const DIFFERENTIATORS = [
  {
    number: '01',
    title:  'Tax-aware by default',
    body:   'Self-employment adds a second layer of tax that employees never see. In the US, it is 15.3% on top of income tax. In the UK, Class 4 NI kicks in on profits above £12,570. RateCrafts builds this in as a mandatory input — not an optional footnote.',
    link:   { label: 'Read: 7 hidden costs of freelancing →', path: '/blog/hidden-costs-of-freelancing' },
  },
  {
    number: '02',
    title:  'Honest about billable hours',
    body:   'The 40-hour week is a fiction for most freelancers. Proposals, admin, calls, revisions, and invoicing are real work that rarely gets billed. RateCrafts defaults to 25 billable hours per week — and lets you adjust to your reality.',
    link:   { label: 'Read: How many billable hours are realistic? →', path: '/blog/billable-hours-guide' },
  },
  {
    number: '03',
    title:  'Profit margin, not just break-even',
    body:   'A rate that covers your costs is a rate that keeps you in business but never builds one. The profit margin input is not optional — it is what separates a sustainable freelance practice from a cash flow treadmill.',
    link:   { label: 'Read: Why margin matters more than revenue →', path: '/blog/profit-margin-for-freelancers' },
  },
];

/* ── Home ──────────────────────────────────────────────────────── */
export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      <SEO
        title="Freelance Hourly Rate Calculator | RateCrafts"
        description="Calculate your freelance hourly rate based on income goals, taxes, expenses, and realistic billable hours. Free tool, no signup. Used by developers, designers, and consultants."
      />

      {/* ══════════════════════════════════════════════════ HERO */}
      <section
        style={{
          minHeight:  '90vh',
          display:    'flex',
          alignItems: 'center',
          position:   'relative',
          overflow:   'hidden',
          padding:    '7rem 1.5rem 5rem',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position:        'absolute',
            inset:           0,
            backgroundImage: 'linear-gradient(var(--color-ink-800) 1px, transparent 1px), linear-gradient(90deg, var(--color-ink-800) 1px, transparent 1px)',
            backgroundSize:  '56px 56px',
            opacity:         0.28,
            pointerEvents:   'none',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position:      'absolute',
            top:           '15%',
            left:          '55%',
            width:         '700px',
            height:        '700px',
            background:    'radial-gradient(circle, rgba(212,160,23,0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1, width: '100%' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

            {/* Eyebrow */}
            <p
              className="mono-label"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}
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
              Freelance rate calculator — free, no signup
            </p>

            {/* Headline */}
            <h1
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(2.8rem, 7vw, 6rem)',
                fontWeight:    900,
                color:         'var(--color-ink-50)',
                lineHeight:    0.97,
                letterSpacing: '-0.03em',
                maxWidth:      '820px',
                marginBottom:  '1.75rem',
              }}
            >
              Most freelancers
              <br />
              <em style={{ color: 'var(--color-brass-300)', fontStyle: 'italic' }}>
                undercharge.
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
                maxWidth:     '520px',
                marginBottom: '0.85rem',
              }}
            >
              Not because they lack skills. Because their rate was calculated with the
              wrong formula — one that ignores taxes, realistic hours, and profit margin.
            </p>

            <p
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.7rem',
                letterSpacing: '0.1em',
                color:         'var(--color-brass-500)',
                marginBottom:  '2.25rem',
                textTransform: 'uppercase',
              }}
            >
              RateCrafts fixes that in 90 seconds.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
              <PrimaryButton to="/calculator">Calculate your real rate →</PrimaryButton>
              <GhostButton to="/project-calculator">Price a project →</GhostButton>
            </div>

            {/* Trust micro-copy */}
            <p
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.6rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         'var(--color-ink-700)',
              }}
            >
              Free · No account · Runs in your browser · Zero data collected
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.45 }}
            style={{
              marginTop:           '5rem',
              paddingTop:          '2.5rem',
              borderTop:           '1px solid var(--color-ink-800)',
              display:             'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
            }}
          >
            {[
              { n: '6',    unit: 'inputs',  label: 'Drive every calculation' },
              { n: '100%', unit: '',         label: 'Runs client-side only'   },
              { n: '∞',    unit: '',         label: 'Updates in real time'    },
            ].map((s, i) => (
              <div
                key={s.label}
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
                  {s.n}
                  {s.unit && (
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--color-brass-400)', marginLeft: '0.3rem' }}>
                      {s.unit}
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
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════ WHO IT'S FOR */}
      <section
        style={{
          borderTop:  '1px solid var(--color-ink-800)',
          background: 'var(--color-ink-900)',
          padding:    '5.5rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '3.5rem', maxWidth: '600px' }}>
            <p className="mono-label" style={{ marginBottom: '0.85rem' }}>Who it's for</p>
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
              If you bill for your time,
              <br />
              this number matters.
            </h2>
          </div>

          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap:                 '2px',
              background:          'var(--color-ink-800)',
            }}
          >
            {WHO_ITS_FOR.map((item) => (
              <div
                key={item.role}
                style={{
                  background:    'var(--color-ink-950)',
                  padding:       '2rem 1.75rem',
                  display:       'flex',
                  flexDirection: 'column',
                  gap:           '0.65rem',
                }}
              >
                <p
                  style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      '1.15rem',
                    fontWeight:    700,
                    color:         'var(--color-ink-50)',
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
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <OutlineButton to="/calculator">Find your rate — free →</OutlineButton>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════ DIFFERENTIATORS */}
      <section style={{ padding: '6rem 1.5rem', borderTop: '1px solid var(--color-ink-800)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p className="mono-label" style={{ marginBottom: '0.85rem' }}>What's different</p>
            <h2
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      'clamp(1.8rem, 3.5vw, 2.5rem)',
                fontWeight:    700,
                color:         'var(--color-ink-50)',
                letterSpacing: '-0.025em',
                lineHeight:    1.15,
              }}
            >
              Three things most calculators
              <br />
              quietly leave out.
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
            {DIFFERENTIATORS.map((d) => (
              <div
                key={d.number}
                style={{
                  background:    'var(--color-ink-950)',
                  padding:       '2.25rem 2rem',
                  display:       'flex',
                  flexDirection: 'column',
                }}
              >
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: 'var(--color-ink-700)', marginBottom: '1.1rem', letterSpacing: '0.06em' }}>
                  {d.number}
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
                    fontFamily:    'var(--font-display)',
                    fontSize:      '1.1rem',
                    fontWeight:    700,
                    color:         'var(--color-ink-50)',
                    marginBottom:  '0.75rem',
                    letterSpacing: '-0.01em',
                    lineHeight:    1.3,
                  }}
                >
                  {d.title}
                </p>
                <p
                  style={{
                    fontFamily:   'var(--font-sans)',
                    fontSize:     '0.875rem',
                    fontWeight:   300,
                    color:        'var(--color-ink-300)',
                    lineHeight:   1.75,
                    flex:         1,
                    marginBottom: '1.25rem',
                  }}
                >
                  {d.body}
                </p>
                <Link
                  to={d.link.path}
                  style={{
                    fontFamily:     'var(--font-mono)',
                    fontSize:       '0.63rem',
                    letterSpacing:  '0.08em',
                    color:          'var(--color-brass-400)',
                    textDecoration: 'none',
                    textTransform:  'uppercase',
                  }}
                >
                  {d.link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════ BLOG */}
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
              <p className="mono-label" style={{ marginBottom: '0.6rem' }}>Freelance pricing, demystified</p>
              <h2
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight:    700,
                  color:         'var(--color-ink-50)',
                  letterSpacing: '-0.02em',
                }}
              >
                Articles worth reading.
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

      {/* ═══════════════════════════════════════════════ BOTTOM CTA */}
      <section
        style={{
          borderTop:  '1px solid var(--color-ink-800)',
          background: 'var(--color-ink-900)',
          padding:    '7rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p className="mono-label" style={{ display: 'block', marginBottom: '1.5rem' }}>Takes under 90 seconds</p>
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
            Stop guessing.
            <br />
            <em style={{ color: 'var(--color-brass-300)', fontStyle: 'italic' }}>
              Know your number.
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
              maxWidth:     '420px',
              margin:       '0 auto 2.5rem',
            }}
          >
            Enter your real numbers. Get a rate that holds up — to a client, to a
            spreadsheet, to yourself.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <PrimaryButton to="/calculator">Calculate your rate →</PrimaryButton>
            <GhostButton to="/project-calculator">Price a project →</GhostButton>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ── Buttons ───────────────────────────────────────────────────── */
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

function GhostButton({ to, children }: { to: string; children: React.ReactNode }) {
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

/* ── BlogCard ──────────────────────────────────────────────────── */
function BlogCard({
  post,
}: {
  post: {
    id: string; title: string; date: string;
    category: string; excerpt: string; image: string;
  };
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
      <div style={{ height: '200px', overflow: 'hidden', flexShrink: 0 }}>
        <img
          src={post.image}
          alt={post.title}
          referrerPolicy="no-referrer"
          style={{
            width:      '100%',
            height:     '100%',
            objectFit:  'cover',
            filter:     `brightness(${hovered ? 0.78 : 0.62}) sepia(0.2)`,
            transform:  hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.4s ease, filter 0.3s ease',
          }}
        />
      </div>
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
        <p
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize:   '0.82rem',
            fontWeight: 300,
            color:      'var(--color-ink-500)',
            lineHeight: 1.65,
          }}
        >
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

/* ── FaqItem ───────────────────────────────────────────────────── */
function FaqItem({
  faq, isOpen, isLast, onToggle,
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
            fontFamily: 'var(--font-display)',
            fontSize:   '1rem',
            fontWeight: 700,
            color:      'var(--color-ink-100)',
            lineHeight: 1.4,
          }}
        >
          {faq.question}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize:   '1.1rem',
            color:      'var(--color-brass-400)',
            flexShrink: 0,
            transform:  isOpen ? 'rotate(45deg)' : 'none',
            transition: 'transform 0.2s ease',
            display:    'block',
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