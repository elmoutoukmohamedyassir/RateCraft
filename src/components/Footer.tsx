import React from 'react';
import { Link } from 'react-router-dom';

/* ── Data ──────────────────────────────────────────────────────── */
const productLinks = [
  { label: 'Calculator', path: '/calculator' },
  { label: 'Blog',       path: '/blog'       },
  { label: 'About',      path: '/about'      },
  { label: 'Contact',    path: '/contact'    },
];

const legalLinks = [
  { label: 'Privacy Policy',   path: '/privacy'    },
  { label: 'Terms of Service', path: '/terms'      },
  { label: 'Disclaimer',       path: '/disclaimer' },
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
      <div
        style={{
          maxWidth: '1280px',
          margin:   '0 auto',
          padding:  '0 1.5rem',
        }}
      >
        {/* ── Top grid ─────────────────────────────────────── */}
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
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                display:        'inline-block',
                marginBottom:   '1rem',
              }}
            >
              <span
                style={{
                  fontFamily:    'var(--font-display)',
                  fontSize:      '1.4rem',
                  fontWeight:    700,
                  color:         'var(--color-ink-50)',
                  letterSpacing: '-0.02em',
                }}
              >
                RateCraft
              </span>
            </Link>

            <p
              style={{
                fontFamily:    'var(--font-sans)',
                fontSize:      '0.875rem',
                fontWeight:    300,
                color:         'var(--color-ink-400)',
                lineHeight:    1.75,
                maxWidth:      '300px',
                marginBottom:  '1.25rem',
              }}
            >
              Financial clarity for independent professionals.
              Know what you're worth. Charge accordingly.
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

          {/* Product links */}
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
              Product
            </p>

            {productLinks.map((link) => (
              <FooterLink key={link.path} {...link} />
            ))}
          </div>

          {/* Legal links */}
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

            {legalLinks.map((link) => (
              <FooterLink key={link.path} {...link} />
            ))}
          </div>
        </div>

        {/* ── Bottom bar ───────────────────────────────────── */}
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
            © {year} RateCraft — Built for the freelance community
          </p>

          {/* Decorative brass rule */}
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