import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Footer } from './Footer';

/* ── Nav data ──────────────────────────────────────────────────── */
const navLinks = [
  { label: 'Calculator', path: '/calculator' },
  { label: 'Blog',       path: '/blog'       },
  { label: 'About',      path: '/about'      },
  { label: 'Contact',    path: '/contact'    },
];

/* ── Layout ────────────────────────────────────────────────────── */
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Detect scroll for nav background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

      {/* ── Navigation ─────────────────────────────────────── */}
      <nav
        style={{
          position:       'sticky',
          top:            0,
          zIndex:         50,
          background:     scrolled ? 'rgba(17, 16, 9, 0.95)' : 'transparent',
          borderBottom:   scrolled ? '1px solid var(--color-ink-800)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition:     'all 0.3s ease',
        }}
      >
        <div
          style={{
            maxWidth:       '1280px',
            margin:         '0 auto',
            padding:        '0 1.5rem',
            height:         '64px',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              display:        'flex',
              alignItems:     'center',
              gap:            '10px',
              flexShrink:     0,
            }}
          >
            <div
              style={{
                width:          '30px',
                height:         '30px',
                border:         '1px solid var(--color-brass-500)',
                display:        'flex',
                alignItems:     'center',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  fontFamily:    'var(--font-mono)',
                  fontSize:      '9px',
                  color:         'var(--color-brass-400)',
                  letterSpacing: '0.05em',
                }}
              >
                RC
              </span>
            </div>
            <span
              style={{
                fontFamily:    'var(--font-display)',
                fontSize:      '1.15rem',
                fontWeight:    700,
                color:         'var(--color-ink-50)',
                letterSpacing: '-0.02em',
              }}
            >
              RateCraft
            </span>
          </Link>

          {/* Desktop nav links */}
          <div
            className="hidden md:flex"
            style={{ alignItems: 'center', gap: '2.5rem' }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                label={link.label}
                path={link.path}
                active={isActive(link.path)}
              />
            ))}

            {/* CTA button */}
            <NavCTA />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden"
            style={{
              background: 'none',
              border:     'none',
              cursor:     'pointer',
              padding:    '0.5rem',
              display:    'flex',
              flexDirection: 'column',
              gap:        '5px',
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display:    'block',
                  width:      '22px',
                  height:     '1px',
                  background: 'var(--color-ink-300)',
                  transition: 'all 0.22s ease',
                  transform:
                    menuOpen && i === 0 ? 'rotate(45deg) translate(4px, 4px)'   :
                    menuOpen && i === 2 ? 'rotate(-45deg) translate(4px, -4px)' :
                    'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu drawer */}
        {menuOpen && (
          <div
            style={{
              background:  'var(--color-ink-900)',
              borderTop:   '1px solid var(--color-ink-800)',
              padding:     '1.5rem',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  display:        'block',
                  padding:        '0.9rem 0',
                  fontFamily:     'var(--font-mono)',
                  fontSize:       '0.72rem',
                  letterSpacing:  '0.12em',
                  textTransform:  'uppercase',
                  color:          isActive(link.path) ? 'var(--color-brass-300)' : 'var(--color-ink-300)',
                  textDecoration: 'none',
                  borderBottom:   '1px solid var(--color-ink-800)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* ── Page content ───────────────────────────────────── */}
      <main style={{ flex: 1 }} className="page-enter">
        {children}
      </main>

      <Footer />
    </div>
  );
};

/* ── NavLink ───────────────────────────────────────────────────── */
function NavLink({
  label,
  path,
  active,
}: {
  label: string;
  path: string;
  active: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={path}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily:     'var(--font-mono)',
        fontSize:       '0.68rem',
        letterSpacing:  '0.12em',
        textTransform:  'uppercase',
        textDecoration: 'none',
        color:
          active    ? 'var(--color-brass-300)' :
          hovered   ? 'var(--color-ink-100)'   :
                      'var(--color-ink-400)',
        transition: 'color 0.15s',
      }}
    >
      {label}
    </Link>
  );
}

/* ── NavCTA ────────────────────────────────────────────────────── */
function NavCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to="/calculator"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily:     'var(--font-mono)',
        fontSize:       '0.68rem',
        letterSpacing:  '0.1em',
        textTransform:  'uppercase',
        textDecoration: 'none',
        padding:        '0.5rem 1.1rem',
        border:         '1px solid var(--color-brass-500)',
        color:          hovered ? 'var(--color-ink-950)' : 'var(--color-brass-300)',
        background:     hovered ? 'var(--color-brass-500)' : 'transparent',
        transition:     'all 0.2s ease',
      }}
    >
      Calculate →
    </Link>
  );
}