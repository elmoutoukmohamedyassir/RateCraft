import React from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      <SEO title="About Us | RateCraft" />
      <main className="max-w-3xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-8">About RateCraft</h1>
          <div className="prose prose-slate prose-lg">
            <p>
              RateCraft was born out of a simple observation: most freelancers are undercharging for their work. 
              When you transition from a full-time job to freelancing, it's easy to forget that your hourly rate 
              needs to cover more than just your time.
            </p>
            <p>
              You are now the CEO, the HR department, and the IT support. You have to pay for your own 
              health insurance, your own laptop, and your own taxes.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">Our Mission</h2>
            <p>
              Our mission is to provide freelancers, consultants, and small business owners with the tools 
              they need to build sustainable and profitable businesses. We believe that when freelancers 
              charge what they're worth, the entire industry benefits.
            </p>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-slate-900">Why it's free</h2>
            <p>
              We believe financial literacy should be accessible to everyone. RateCraft is a free tool 
              maintained by the community. We don't track you, we don't sell your data, and we don't 
              require a login.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
