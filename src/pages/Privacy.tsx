import React from 'react';
import { SEO } from '../components/SEO';

export default function Privacy() {
  return (
    <div className="bg-white min-h-screen">
      <SEO title="Privacy Policy | RateCraft" />
      <main className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate prose-lg">
          <p className="text-sm text-slate-500 mb-8">Last updated: April 3, 2026</p>
          <p>
            At RateCraft, we take your privacy seriously. This policy explains how we handle your data.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">1. Data Collection & Privacy</h2>
          <p>
            RateCraft is built as a <strong>privacy-first, client-side application</strong>. We believe that your financial goals, business expenses, and income targets are your business alone.
          </p>
          <p>
            All calculations happen directly in your browser's memory. This means that when you enter your desired monthly income or business expenses, that data is never transmitted to our servers, never stored in a database, and never sold to third parties.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">2. Cookies & Tracking</h2>
          <p>
            We do not use tracking cookies, cross-site trackers, or invasive analytics. We may use standard web server logs to monitor site health and performance, but these do not contain personally identifiable information.
          </p>
          <p>
            We may use your browser's <code>localStorage</code> to temporarily save your calculator inputs so you don't have to re-enter them if you refresh the page. This data remains strictly on your device and is never accessed by us.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">3. Third-Party Integrations</h2>
          <p>
            RateCraft does not integrate with third-party advertising networks. Our blog may contain links to external resources or tools that we believe are helpful for freelancers. Please note that we are not responsible for the privacy practices of those external sites.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">4. Your Control</h2>
          <p>
            Because we don't store your data, you have total control. If you want to "delete" your data from RateCraft, simply clear your browser's cache or local storage.
          </p>
        </div>
      </main>
    </div>
  );
}
