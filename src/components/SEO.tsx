import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEO: React.FC<{ 
  title?: string; 
  description?: string;
  children?: React.ReactNode;
}> = ({ 
  title = "RateCraft | Freelance Hourly Rate Calculator", 
  description = "Calculate your perfect freelance hourly rate based on your income goals, business expenses, and desired lifestyle. Free tool for freelancers and consultants.",
  children
}) => {
  const canonicalUrl = window.location.origin + window.location.pathname;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />
      {children}
    </Helmet>
  );
};
