import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Footer } from './Footer';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Calculator', path: '/calculator' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--color-ink-950)' }}>
      {/* Navigation */}
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          borderBottom: scrolled
            ? '1px solid var(--color-ink-800)'
            : '1px solid transparent',
          background: scrolled
            ? 'rgba(14, 13, 11, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" style={{ textDecoration: 'none' }}>
            <div
              style={{
                width: '28px',
                height: '28px',
                border: '1px solid var(--color-brass-500)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'var(--color-brass-400)',
                  letterSpacing: '0.02em',
                }}
              >
                RC
              </span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--color-ink-50)',
                letterSpacing: '-0.01em',
              }}
            >
              RateCraft
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color:
                    location.pathname === link.path
                      ? 'var(--color-brass-400)'
                      : 'var(--color-ink-400)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--color-brass-300)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    location.pathname === link.path
                      ? 'var(--color-brass-400)'
                      : 'var(--color-ink-400)')
                }
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/calculator"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.45rem 1.1rem',
                border: '1px solid var(--color-brass-500)',
                color: 'var(--color-brass-400)',
                background: 'transparent',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-brass-500)';
                e.currentTarget.style.color = 'var(--color-ink-950)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--color-brass-400)';
              }}
            >
              Calculate Rate →
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-ink-300)',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
            aria-label="Toggle menu"
          >
            <div style={{ width: 22, display: 'flex', flexDirection: 'column', gap: 5 }}>
              <span
                style={{
                  display: 'block',
                  height: '1px',
                  background: 'currentColor',
                  transform: isMenuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
                  transition: 'transform 0.2s',
                }}
              />
              <span
                style={{
                  display: 'block',
                  height: '1px',
                  background: 'currentColor',
                  opacity: isMenuOpen ? 0 : 1,
                  transition: 'opacity 0.2s',
                }}
              />
              <span
                style={{
                  display: 'block',
                  height: '1px',
                  background: 'currentColor',
                  transform: isMenuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
                  transition: 'transform 0.2s',
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div
            style={{
              background: 'var(--color-ink-900)',
              borderTop: '1px solid var(--color-ink-800)',
              padding: '1.5rem 1.5rem',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color:
                    location.pathname === link.path
                      ? 'var(--color-brass-400)'
                      : 'var(--color-ink-300)',
                  textDecoration: 'none',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid var(--color-ink-800)',
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <main className="flex-grow page-enter">{children}</main>

      <Footer />
    </div>
  );
};