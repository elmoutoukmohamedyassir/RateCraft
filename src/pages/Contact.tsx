import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Send, Mail, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO title="Contact Us | RateCraft" description="Get in touch with the RateCraft team for support, feature suggestions, or partnership inquiries." />
      <main className="max-w-5xl mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              Have questions about the calculator? Want to suggest a feature? 
              We're a small team and we love hearing from the freelance community.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col items-center">
                <div className="p-4 rounded-2xl bg-brand-100 text-brand-600 mb-6">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-xl">Email Us</h3>
                <p className="text-slate-500 mb-6">For general inquiries and support.</p>
                <a 
                  href="mailto:hello@ratecraft.io" 
                  className="text-brand-600 font-bold hover:text-brand-700 transition-colors text-lg"
                >
                  hello@ratecraft.io
                </a>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col items-center">
                <div className="p-4 rounded-2xl bg-violet-100 text-violet-600 mb-6">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-xl">Feedback</h3>
                <p className="text-slate-500 mb-6">Suggest a new feature or tool.</p>
                <a 
                  href="mailto:feedback@ratecraft.io" 
                  className="text-violet-600 font-bold hover:text-violet-700 transition-colors text-lg"
                >
                  feedback@ratecraft.io
                </a>
              </div>
            </div>

            <div className="mt-16 p-8 rounded-3xl bg-slate-100 border border-slate-200">
              <p className="text-slate-600 italic">
                "We aim to respond to all inquiries within 24-48 business hours. 
                Thank you for being part of our journey to help freelancers succeed."
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
