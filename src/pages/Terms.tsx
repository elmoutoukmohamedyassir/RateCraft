import React from 'react';
import { SEO } from '../components/SEO';

export default function Terms() {
  return (
    <div className="bg-white min-h-screen">
      <SEO title="Terms of Service | RateCraft" />
      <main className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>
        <div className="prose prose-slate prose-lg">
          <p className="text-sm text-slate-500 mb-8">Last updated: April 3, 2026</p>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing and using RateCraft, you agree to be bound by these Terms of Service. 
            If you do not agree, please do not use the service.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">2. Use of the Service</h2>
          <p>
            RateCraft is provided as a free tool for freelancers and small business owners to estimate their 
            hourly and daily rates. While we strive for accuracy, the results are estimates and should be used 
            as a starting point for your pricing strategy.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">3. Intellectual Property</h2>
          <p>
            The design, code, and content of RateCraft are protected by copyright laws. You may use the 
            calculator for your own business planning, but you may not reproduce, redistribute, or 
            sell the service as your own without our explicit permission.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">4. Limitation of Liability</h2>
          <p>
            RateCraft is provided "as is" without any warranties. We are not responsible for any financial 
            decisions or business outcomes resulting from the use of our calculator.
          </p>
        </div>
      </main>
    </div>
  );
}
