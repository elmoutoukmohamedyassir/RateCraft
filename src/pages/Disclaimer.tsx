import React from 'react';
import { SEO } from '../components/SEO';

export default function Disclaimer() {
  return (
    <div className="bg-white min-h-screen">
      <SEO title="Disclaimer | RateCraft" />
      <main className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Disclaimer</h1>
        <div className="prose prose-slate prose-lg">
          <p className="text-sm text-slate-500 mb-8">Last updated: April 3, 2026</p>
          <div className="p-6 bg-amber-50 border border-amber-100 rounded-2xl mb-8">
            <p className="text-amber-900 font-medium m-0">
              RateCraft is a tool designed to help freelancers estimate their rates. It is not a substitute for professional financial, tax, or legal advice.
            </p>
          </div>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">1. Not Financial Advice</h2>
          <p>
            The calculations provided by RateCraft are based on the data you input and general mathematical formulas. They do not account for your specific tax situation, local laws, or individual business needs. Always consult with a qualified accountant or financial advisor before making significant business decisions.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">2. Accuracy of Information</h2>
          <p>
            While we strive to keep the calculator accurate and up-to-date, we make no guarantees regarding the completeness or reliability of the results. Market conditions and tax laws change frequently, and RateCraft may not reflect the most current information.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">3. Limitation of Liability</h2>
          <p>
            By using RateCraft, you acknowledge that you are doing so at your own risk. We will not be liable for any losses or damages (including, but not limited to, financial loss or business interruption) arising from your use of this tool or reliance on its results.
          </p>
          <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">4. External Links</h2>
          <p>
            Our blog and resources may contain links to external websites. We do not control or endorse the content of these sites and are not responsible for their accuracy or privacy practices.
          </p>
        </div>
      </main>
    </div>
  );
}
