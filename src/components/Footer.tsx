import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: 'var(--color-ink-900)',
        borderTop: '1px solid var(--color-ink-800)',
        paddingTop: '4rem',
        paddingBottom: '2.5rem',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            marginBottom: '3rem',
          }}
          className="md:grid-cols-4"
        >
          {/* Brand */}
          <div style={{ gridColumn: 'span 2' }}>
            <Link
              to="/"
              style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '1.25rem' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--color-ink-50)',
                  letterSpacing: '-0.02em',
                }}
              >
                RateCraft
              </span>
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                color: 'var(--color-ink-500)',
                lineHeight: 1.7,
                maxWidth: '320px',
                marginBottom: '1.5rem',
              }}
            >
              Financial clarity for independent professionals. Know what you're worth.
              Charge accordingly.
            </p>
            <a
              href="mailto:impact.me02@gmail.com"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.08em',
                color: 'var(--color-brass-400)',
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
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-ink-600)',
                marginBottom: '1.25rem',
              }}
            >
              Product
            </p>
            {[
              { name: 'Calculator', path: '/calculator' },
              { name: 'Blog', path: '/blog' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: 'var(--color-ink-400)',
                  textDecoration: 'none',
                  marginBottom: '0.75rem',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--color-brass-300)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--color-ink-400)')
                }
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Legal links */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--color-ink-600)',
                marginBottom: '1.25rem',
              }}
            >
              Legal
            </p>
            {[
              { name: 'Privacy', path: '/privacy' },
              { name: 'Terms', path: '/terms' },
              { name: 'Disclaimer', path: '/disclaimer' },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: 'var(--color-ink-400)',
                  textDecoration: 'none',
                  marginBottom: '0.75rem',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--color-brass-300)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--color-ink-400)')
                }
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid var(--color-ink-800)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
          }}
          className="sm:flex-row"
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              letterSpacing: '0.06em',
              color: 'var(--color-ink-700)',
            }}
          >
            © {currentYear} RateCraft — Built for the freelance community
          </p>
          <div
            style={{
              width: '2rem',
              height: '1px',
              background:
                'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))',
            }}
          />
        </div>
      </div>
    </footer>
  );
}