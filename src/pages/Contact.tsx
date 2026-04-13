import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Mail, MessageSquare } from 'lucide-react';

/* ── Contact cards data ────────────────────────────────────────── */
const contactCards = [
  {
    icon:    Mail,
    title:   'Email Us',
    desc:    'For general inquiries and support.',
    email:   'elmoutoukmohamedyassir@gmail.com',
  },
  {
    icon:    MessageSquare,
    title:   'Feedback',
    desc:    'Suggest a new feature or tool.',
    email:   'impact.me02@gmail.com',
  },
];

/* ── Contact ───────────────────────────────────────────────────── */
export default function Contact() {
  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO
        title="Contact Us | RateCraft"
        description="Get in touch with the RateCraft team."
      />

      <main
        style={{
          maxWidth:  '720px',
          margin:    '0 auto',
          padding:   '5rem 1.5rem 6rem',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Label */}
          <p className="mono-label" style={{ marginBottom: '1.25rem' }}>Contact</p>

          {/* Title */}
          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(2.2rem, 5vw, 3.5rem)',
              fontWeight:    900,
              color:         'var(--color-ink-50)',
              letterSpacing: '-0.03em',
              lineHeight:    1.05,
              marginBottom:  '1rem',
            }}
          >
            Get in Touch
          </h1>

          <p
            style={{
              fontFamily:   'var(--font-sans)',
              fontSize:     '1rem',
              fontWeight:   300,
              color:        'var(--color-ink-300)',
              lineHeight:   1.75,
              maxWidth:     '480px',
              margin:       '0 auto 3.5rem',
            }}
          >
            Have questions about the calculator? Want to suggest a feature?
            We're a small team and we love hearing from the freelance community.
          </p>

          {/* Contact cards */}
          <div
            style={{
              display:             'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap:                 '2px',
              background:          'var(--color-ink-800)',
              marginBottom:        '2px',
            }}
          >
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.email}
                  style={{
                    background:     'var(--color-ink-900)',
                    padding:        '2.25rem',
                    display:        'flex',
                    flexDirection:  'column',
                    alignItems:     'center',
                    gap:            '0.75rem',
                    textAlign:      'center',
                  }}
                >
                  {/* Icon box */}
                  <div
                    style={{
                      width:          '44px',
                      height:         '44px',
                      border:         '1px solid var(--color-ink-700)',
                      display:        'flex',
                      alignItems:     'center',
                      justifyContent: 'center',
                      color:          'var(--color-brass-400)',
                      marginBottom:   '0.25rem',
                    }}
                  >
                    <Icon size={18} />
                  </div>

                  <p
                    style={{
                      fontFamily:    'var(--font-display)',
                      fontSize:      '1.1rem',
                      fontWeight:    700,
                      color:         'var(--color-ink-50)',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {card.title}
                  </p>

                  <p
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize:   '0.82rem',
                      fontWeight: 300,
                      color:      'var(--color-ink-400)',
                    }}
                  >
                    {card.desc}
                  </p>

                  <a
                    href={`mailto:${card.email}`}
                    style={{
                      fontFamily:     'var(--font-mono)',
                      fontSize:       '0.72rem',
                      letterSpacing:  '0.04em',
                      color:          'var(--color-brass-300)',
                      textDecoration: 'none',
                      wordBreak:      'break-all',
                    }}
                  >
                    {card.email}
                  </a>
                </div>
              );
            })}
          </div>

          {/* Quote */}
          <div
            style={{
              background:  'var(--color-ink-900)',
              border:      '1px solid var(--color-ink-800)',
              borderLeft:  '2px solid var(--color-brass-600)',
              padding:     '1.5rem 1.75rem',
              textAlign:   'left',
            }}
          >
            <p
              style={{
                fontFamily:  'var(--font-sans)',
                fontSize:    '0.875rem',
                fontWeight:  300,
                fontStyle:   'italic',
                color:       'var(--color-ink-300)',
                lineHeight:  1.75,
                margin:      0,
              }}
            >
              "We aim to respond to all inquiries within 24–48 business hours.
              Thank you for being part of our journey to help freelancers succeed."
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}