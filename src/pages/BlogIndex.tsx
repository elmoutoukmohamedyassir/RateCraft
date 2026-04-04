import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'how-to-calculate-freelance-rate',
    title: 'How to Calculate Your Freelance Rate: The Math Behind Profitability',
    excerpt: 'Most freelancers guess their rates. Learn the data-driven approach to pricing that ensures your business stays profitable year-round.',
    date: 'March 25, 2026',
    readTime: '8 min read',
    category: 'Strategy',
    image: 'https://picsum.photos/seed/rate/800/400',
  },
  {
    id: 'hidden-costs-of-freelancing',
    title: 'Beyond the Laptop: 7 Hidden Costs of Running a Freelance Business',
    excerpt: 'From self-employment taxes to software bloat, discover the overhead costs that most independent professionals overlook when setting their rates.',
    date: 'March 18, 2026',
    readTime: '5 min read',
    category: 'Finance',
    image: 'https://picsum.photos/seed/costs/800/400',
  },
  {
    id: 'raising-your-rates',
    title: 'The Art of the Rate Increase: How to Charge More Without Losing Clients',
    excerpt: 'Navigating price increases is a critical skill for growth. Learn how to communicate value and transition long-term clients to your new market rates.',
    date: 'March 10, 2026',
    readTime: '6 min read',
    category: 'Business',
    image: 'https://picsum.photos/seed/raise/800/400',
  },
];

export default function BlogIndex() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO title="Blog | RateCraft" description="Expert advice on freelance pricing, business strategy, and financial management for independent professionals." />
      
      <header className="pt-24 pb-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">The RateCraft Blog</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Insights and strategies to help you build a more profitable freelance business.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-3">
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md">{post.category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span className="text-brand-600 font-bold text-sm flex items-center gap-1">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
