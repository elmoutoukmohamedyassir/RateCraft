import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { 
  ArrowRight, 
  CheckCircle2, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  Users, 
  Zap, 
  ChevronDown, 
  BookOpen,
  Calendar
} from 'lucide-react';

const faqs = [
  {
    question: "Is this calculator really free?",
    answer: "Yes, 100% free. We built RateCraft to help the freelance community thrive. No hidden fees, no credit card required."
  },
  {
    question: "How accurate are the calculations?",
    answer: "The calculations are based on the financial inputs you provide. While it provides a solid baseline, we always recommend consulting with a financial advisor for complex business planning."
  },
  {
    question: "Do you store my financial data?",
    answer: "No. All calculations happen locally in your browser. We don't store or see any of the numbers you enter into the calculator."
  },
  {
    question: "What is a 'Profit Margin Buffer'?",
    answer: "It's an extra percentage added to your base rate to account for business growth, unexpected expenses, and to ensure you're not just 'breaking even' but actually building wealth."
  }
];

const blogPosts = [
  {
    id: 'how-to-calculate-freelance-rate',
    title: 'How to Calculate Your Freelance Rate: The Math Behind Profitability',
    date: 'March 25, 2026',
    category: 'Strategy',
    image: 'https://picsum.photos/seed/rate/400/250',
  },
  {
    id: 'hidden-costs-of-freelancing',
    title: 'Beyond the Laptop: 7 Hidden Costs of Running a Freelance Business',
    date: 'March 18, 2026',
    category: 'Finance',
    image: 'https://picsum.photos/seed/costs/400/250',
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="bg-white">
      <SEO>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </SEO>
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold mb-8 border border-brand-100">
                <Zap className="w-3 h-3 fill-current" />
                <span>New: Version 2.0 is live</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                Stop undercharging. <br />
                <span className="text-brand-600">Know your true market value.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                The most comprehensive hourly rate calculator for freelancers, consultants, and independent professionals. 
                Factor in taxes, overhead, and profit to build a sustainable business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/calculator"
                  className="w-full sm:w-auto px-8 py-4 bg-brand-600 text-white rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-200 flex items-center justify-center gap-2"
                >
                  Try the Calculator
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/blog"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-100 text-slate-900 rounded-full font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  Read the Blog
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-400 rounded-full blur-[120px]" />
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Who is RateCraft for?</h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether you're just starting your freelance journey or you're a seasoned consultant, 
                RateCraft is designed to help you build a sustainable business.
              </p>
              <ul className="space-y-4">
                {[
                  'Freelance Developers & Designers',
                  'Marketing Consultants & Copywriters',
                  'Virtual Assistants & Project Managers',
                  'Photographers & Creative Professionals',
                  'Small Service Business Owners'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="p-6 rounded-3xl bg-brand-50 border border-brand-100">
                  <Users className="w-8 h-8 text-brand-600 mb-4" />
                  <h4 className="font-bold text-slate-900">Community Driven</h4>
                  <p className="text-sm text-slate-600">Built for the needs of independent workers.</p>
                </div>
                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="w-8 h-8 text-slate-600 mb-4" />
                  <h4 className="font-bold text-slate-900">Privacy First</h4>
                  <p className="text-sm text-slate-600">Your financial data never leaves your device.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-6 rounded-3xl bg-violet-50 border border-violet-100">
                  <DollarSign className="w-8 h-8 text-violet-600 mb-4" />
                  <h4 className="font-bold text-slate-900">Profit Focused</h4>
                  <p className="text-sm text-slate-600">Move beyond just "getting by" to true growth.</p>
                </div>
                <div className="p-6 rounded-3xl bg-emerald-50 border border-emerald-100">
                  <Clock className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="font-bold text-slate-900">Time Valued</h4>
                  <p className="text-sm text-slate-600">Account for every billable and non-billable hour.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why use RateCraft?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Most freelancers undercharge because they forget to account for hidden costs. 
              We help you see the full picture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expense Tracking',
                desc: 'Account for software, hardware, and office costs that eat into your profit.',
                icon: DollarSign,
                color: 'bg-emerald-100 text-emerald-600',
              },
              {
                title: 'Lifestyle First',
                desc: 'Factor in vacation time and sick days so you don\'t burn out to meet your goals.',
                icon: Clock,
                color: 'bg-brand-100 text-brand-600',
              },
              {
                title: 'Tax Preparedness',
                desc: 'Estimate your tax burden upfront so you\'re never surprised by the IRS.',
                icon: ShieldCheck,
                color: 'bg-violet-100 text-violet-600',
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white border border-slate-200 hover:shadow-lg transition-shadow">
                <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How it works</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Three simple steps to financial clarity.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -z-10" />
            {[
              { step: '01', title: 'Enter Your Goals', desc: 'Input your desired monthly income and estimated taxes.' },
              { step: '02', title: 'Add Expenses', desc: 'Factor in your monthly business costs and profit margin.' },
              { step: '03', title: 'Set Availability', desc: 'Define your billable hours and working weeks per month.' }
            ].map((item, i) => (
              <div key={i} className="text-center bg-white px-4">
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center font-bold mx-auto mb-6 shadow-lg shadow-brand-200">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about RateCraft.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  {faq.question}
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Links Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">From the Blog</h2>
              <p className="text-slate-600">Insights to help you grow your freelance business.</p>
            </div>
            <Link to="/blog" className="text-brand-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              View all articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-3xl border border-slate-100 hover:border-brand-200 hover:shadow-xl transition-all"
              >
                <div className="w-full sm:w-48 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-400 mb-2">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md">{post.category}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to find your <br /> perfect rate?
              </h2>
              <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
                Join thousands of freelancers who use RateCraft to build sustainable, 
                profitable businesses.
              </p>
              <Link
                to="/calculator"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
            </div>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
}
