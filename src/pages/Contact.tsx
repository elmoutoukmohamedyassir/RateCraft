import React from 'react';
import { Link }           from 'react-router-dom';
import { motion }         from 'motion/react';
import { SEO }            from '../components/SEO';
import { Mail, MessageSquare } from 'lucide-react';

/* ── Contact ───────────────────────────────────────────────────── */
export default function Contact() {
  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO
        title="Contact | RateCrafts"
        description="Get in touch with the RateCrafts project — for feedback, feature suggestions, or general questions."
      />

      <main
        style={{
          maxWidth:  '720px',
          margin:    '0 auto',
          padding:   '5rem 1.5rem 6rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <p className="mono-label" style={{ marginBottom: '1.25rem' }}>Contact</p>

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
              marginBottom: '3rem',
              maxWidth:     '480px',
            }}
          >
            RateCrafts is an independent project. If you have a question, a
            suggestion, or just want to say the tool helped — reach out. Every
            message gets read.
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
            {[
              {
                Icon:  Mail,
                title: 'General',
                desc:  'Questions, feedback, or anything else.',
                email: 'elmoutoukmohamedyassir@gmail.com',
              },
              {
                Icon:  MessageSquare,
                title: 'Feature suggestions',
                desc:  'Have an idea to make the calculator better?',
                email: 'impact.me02@gmail.com',
              },
            ].map(({ Icon, title, desc, email }) => (
              <div
                key={email}
                style={{
                  background:    'var(--color-ink-900)',
                  padding:       '2rem',
                  display:       'flex',
                  flexDirection: 'column',
                  gap:           '0.75rem',
                }}
              >
                <div
                  style={{
                    width:          '40px',
                    height:         '40px',
                    border:         '1px solid var(--color-ink-700)',
                    display:        'flex',
                    alignItems:     'center',
                    justifyContent: 'center',
                    color:          'var(--color-brass-400)',
                    marginBottom:   '0.25rem',
                  }}
                >
                  <Icon size={16} />
                </div>

                <p
                  style={{
                    fontFamily:    'var(--font-display)',
                    fontSize:      '1.05rem',
                    fontWeight:    700,
                    color:         'var(--color-ink-50)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {title}
                </p>

                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize:   '0.82rem',
                    fontWeight: 300,
                    color:      'var(--color-ink-400)',
                    lineHeight: 1.6,
                  }}
                >
                  {desc}
                </p>

                <a
                  href={`mailto:${email}`}
                  style={{
                    fontFamily:     'var(--font-mono)',
                    fontSize:       '0.7rem',
                    letterSpacing:  '0.04em',
                    color:          'var(--color-brass-300)',
                    textDecoration: 'none',
                    wordBreak:      'break-all',
                  }}
                >
                  {email}
                </a>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div
            style={{
              background:  'var(--color-ink-900)',
              border:      '1px solid var(--color-ink-800)',
              borderLeft:  '2px solid var(--color-brass-600)',
              padding:     '1.5rem 1.75rem',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize:   '0.875rem',
                fontWeight: 300,
                fontStyle:  'italic',
                color:      'var(--color-ink-400)',
                lineHeight: 1.75,
                margin:     0,
              }}
            >
              "I try to respond within 24–48 hours. RateCrafts is a side project
              — your feedback directly shapes what gets built next."
            </p>
          </div>

          {/* Navigation links */}
          <div
            style={{
              marginTop:   '2.5rem',
              display:     'flex',
              gap:         '1.5rem',
              flexWrap:    'wrap',
            }}
          >
            <Link
              to="/calculator"
              style={{
                fontFamily:     'var(--font-mono)',
                fontSize:       '0.68rem',
                letterSpacing:  '0.1em',
                textTransform:  'uppercase',
                color:          'var(--color-brass-400)',
                textDecoration: 'none',
              }}
            >
              Try the calculator →
            </Link>
            <Link
              to="/about"
              style={{
                fontFamily:     'var(--font-mono)',
                fontSize:       '0.68rem',
                letterSpacing:  '0.1em',
                textTransform:  'uppercase',
                color:          'var(--color-ink-600)',
                textDecoration: 'none',
              }}
            >
              About RateCrafts
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}