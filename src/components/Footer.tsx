import React from 'react';
import { Link } from 'react-router-dom';

/* ── Data ──────────────────────────────────────────────────────── */
const PRODUCT_LINKS = [
  { label: 'Hourly Rate Calculator', path: '/calculator'         },
  { label: 'Project Price Calculator', path: '/project-calculator' },
  { label: 'Freelance Pricing Blog', path: '/blog'               },
  { label: 'About RateCrafts',       path: '/about'              },
  { label: 'Contact',                path: '/contact'            },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy',   path: '/privacy'    },
  { label: 'Terms of Service', path: '/terms'      },
  { label: 'Disclaimer',       path: '/disclaimer' },
];

const TRUST_SIGNALS = [
  'Free forever',
  'No account needed',
  'Zero data collected',
];

/* ── Footer ────────────────────────────────────────────────────── */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background:    'var(--color-ink-900)',
        borderTop:     '1px solid var(--color-ink-800)',
        paddingTop:    '4rem',
        paddingBottom: '2rem',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* ── Trust bar ────────────────────────────────── */}
        <div
          style={{
            display:       'flex',
            gap:           '1.5rem',
            flexWrap:      'wrap',
            marginBottom:  '3rem',
            paddingBottom: '2rem',
            borderBottom:  '1px solid var(--color-ink-800)',
          }}
        >
          {TRUST_SIGNALS.map((s) => (
            <span
              key={s}
              style={{
                display:       'flex',
                alignItems:    'center',
                gap:           '0.4rem',
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.62rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color:         'var(--color-ink-600)',
              }}
            >
              <span style={{ color: 'var(--color-brass-600)', fontSize: '0.55rem' }}>✓</span>
              {s}
            </span>
          ))}
        </div>

        {/* ── Main grid ────────────────────────────────── */}
        <div
          style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap:                 '3rem',
            marginBottom:        '3rem',
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1rem' }}>
              <span
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      '1.4rem',
                  fontWeight:    700,
                  color:         'var(--color-ink-50)',
                  letterSpacing: '-0.02em',
                }}
              >
                RateCrafts
              </span>
            </Link>

            <p
              style={{
                fontFamily:   'var(--font-sans)',
                fontSize:     '0.875rem',
                fontWeight:   300,
                color:        'var(--color-ink-400)',
                lineHeight:   1.75,
                maxWidth:     '300px',
                marginBottom: '0.75rem',
              }}
            >
              The freelance rate calculator that accounts for taxes, expenses, and profit margin — not just your income goal.
            </p>

            <p
              style={{
                fontFamily:   'var(--font-sans)',
                fontSize:     '0.82rem',
                fontWeight:   300,
                color:        'var(--color-ink-600)',
                lineHeight:   1.7,
                maxWidth:     '300px',
                marginBottom: '1.25rem',
              }}
            >
              Independent. No ads. No investors. Built to help freelancers charge what they're actually worth.
            </p>

            <a
              href="mailto:impact.me02@gmail.com"
              style={{
                fontFamily:     'var(--font-mono)',
                fontSize:       '0.7rem',
                letterSpacing:  '0.08em',
                color:          'var(--color-brass-400)',
                textDecoration: 'none',
              }}
            >
              impact.me02@gmail.com
            </a>
          </div>

          {/* Product */}
          <div>
            <p
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.62rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color:         'var(--color-ink-600)',
                marginBottom:  '1.25rem',
              }}
            >
              Tools &amp; Content
            </p>
            {PRODUCT_LINKS.map((l) => <FooterLink key={l.path} label={l.label} path={l.path} />)}
          </div>

          {/* Legal */}
          <div>
            <p
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.62rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color:         'var(--color-ink-600)',
                marginBottom:  '1.25rem',
              }}
            >
              Legal
            </p>
            {LEGAL_LINKS.map((l) => <FooterLink key={l.path} label={l.label} path={l.path} />)}
          </div>
        </div>

        {/* ── Bottom ───────────────────────────────────── */}
        <div
          style={{
            borderTop:      '1px solid var(--color-ink-800)',
            paddingTop:     '1.5rem',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            flexWrap:       'wrap',
            gap:            '1rem',
          }}
        >
          <p
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.65rem',
              letterSpacing: '0.08em',
              color:         'var(--color-ink-600)',
            }}
          >
            © {year} RateCrafts — Freelance pricing tools for independent professionals
          </p>
          <div
            style={{
              width:      '2rem',
              height:     '1px',
              background: 'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))',
            }}
          />
        </div>
      </div>
    </footer>
  );
}

/* ── FooterLink ────────────────────────────────────────────────── */
function FooterLink({ label, path }: { label: string; path: string }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Link
      to={path}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        'block',
        fontFamily:     'var(--font-sans)',
        fontSize:       '0.875rem',
        fontWeight:     300,
        color:          hovered ? 'var(--color-brass-300)' : 'var(--color-ink-400)',
        textDecoration: 'none',
        marginBottom:   '0.8rem',
        transition:     'color 0.15s',
      }}
    >
      {label}
    </Link>
  );
}