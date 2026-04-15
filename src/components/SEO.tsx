import React from 'react';
import { Helmet } from 'react-helmet-async';

/* ── Constants ─────────────────────────────────────────────────── */
const SITE_NAME        = 'RateCrafts';
const SITE_URL         = 'https://www.ratecrafts.com';
const OG_IMAGE_DEFAULT = 'https://www.ratecrafts.com/og-image.png';

const DEFAULT_TITLE       = 'Freelance Rate Calculator | RateCrafts';
const DEFAULT_DESCRIPTION = 'Calculate your freelance hourly rate based on income goals, taxes, expenses, and billable hours. Free tool, no signup required.';

/* ── Types ─────────────────────────────────────────────────────── */
interface SEOProps {
  title?:        string;
  description?:  string;
  ogType?:       'website' | 'article';
  ogImage?:      string;
  articleDate?:  string;
  noIndex?:      boolean;
  children?:     React.ReactNode;
}

/* ── SEO ───────────────────────────────────────────────────────── */
export const SEO: React.FC<SEOProps> = ({
  title       = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogType      = 'website',
  ogImage     = OG_IMAGE_DEFAULT,
  articleDate,
  noIndex     = false,
  children,
}) => {
  const path         = typeof window !== 'undefined' ? window.location.pathname : '/';
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      {/* ── Core ───────────────────────────────────────── */}
      <title>{title}</title>
      <meta name="description"  content={description} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical"     href={canonicalUrl} />

      {/* ── Open Graph ─────────────────────────────────── */}
      <meta property="og:site_name"    content={SITE_NAME} />
      <meta property="og:title"        content={title} />
      <meta property="og:description"  content={description} />
      <meta property="og:type"         content={ogType} />
      <meta property="og:url"          content={canonicalUrl} />
      <meta property="og:image"        content={ogImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt"    content={title} />

      {/* ── Article OG ─────────────────────────────────── */}
      {ogType === 'article' && articleDate && (
        <meta property="article:published_time" content={articleDate} />
      )}
      {ogType === 'article' && (
        <meta property="article:author" content={SITE_URL} />
      )}

      {/* ── Twitter / X ────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />

      {/* ── Mobile / PWA ───────────────────────────────── */}
      <meta name="viewport"    content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#111009" />

      {children}
    </Helmet>
  );
};