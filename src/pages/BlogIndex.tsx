import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'how-to-calculate-freelance-rate',
    title: 'How to Calculate Your Freelance Rate: A Step-by-Step Guide',
    excerpt: 'Learn how to calculate a sustainable freelance hourly rate using income goals, taxes, expenses, billable hours, and profit margin.',
    date: 'April 5, 2026',
    readTime: '10 min read',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hourly-vs-project-pricing',
    title: 'Hourly vs Project Pricing: Which Model Is Better for Freelancers?',
    excerpt: 'Compare hourly and project pricing to see which model works better for your freelance services, client type, and profit goals.',
    date: 'April 4, 2026',
    readTime: '9 min read',
    category: 'Pricing',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'hidden-costs-of-freelancing',
    title: '7 Hidden Costs of Freelancing That Destroy Profit Margins',
    excerpt: 'From taxes to software bloat and non-billable time, discover the hidden costs freelancers often forget when setting rates.',
    date: 'April 2, 2026',
    readTime: '8 min read',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'freelance-pricing-mistakes',
    title: '5 Freelance Pricing Mistakes That Keep You Underpaid',
    excerpt: 'These common pricing mistakes quietly destroy freelance income. Learn how to spot them and build a stronger pricing strategy.',
    date: 'April 1, 2026',
    readTime: '7 min read',
    category: 'Pricing',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'beginner-freelancer-rate',
    title: 'How Much Should a Beginner Freelancer Charge?',
    excerpt: 'A practical guide to setting your first freelance rate without guessing, panicking, or underpricing your work.',
    date: 'March 30, 2026',
    readTime: '8 min read',
    category: 'Beginner',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'raising-your-rates',
    title: 'How to Raise Your Freelance Rates Without Losing Good Clients',
    excerpt: 'Raise your freelance prices professionally, communicate value clearly, and keep strong client relationships intact.',
    date: 'March 28, 2026',
    readTime: '8 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'daily-rate-calculation',
    title: 'How to Convert an Hourly Rate Into a Professional Day Rate',
    excerpt: 'Learn how to turn your hourly baseline into a clean, client-friendly day rate for consulting and freelance services.',
    date: 'March 27, 2026',
    readTime: '6 min read',
    category: 'Pricing',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'profit-margin-for-freelancers',
    title: 'Why Freelancers Need a Profit Margin, Not Just Income',
    excerpt: 'Freelancers who ignore profit margin often stay busy but financially fragile. Here is why margin matters.',
    date: 'March 24, 2026',
    readTime: '7 min read',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'billable-hours-guide',
    title: 'How Many Billable Hours Can a Freelancer Realistically Work?',
    excerpt: 'Stop overestimating billable time. Learn what a realistic weekly billable-hour range looks like for freelancers.',
    date: 'March 21, 2026',
    readTime: '7 min read',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'quote-a-project-profitably',
    title: 'How to Quote a Freelance Project Without Underpricing It',
    excerpt: 'Build better project quotes using a strong pricing foundation, realistic scope, and your true hourly floor.',
    date: 'March 19, 2026',
    readTime: '8 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'freelance-rate-too-low',
    title: 'How to Know If Your Freelance Rate Is Too Low',
    excerpt: 'If you feel busy but still broke, your rate may be the problem. Here are the clearest signs you are undercharging.',
    date: 'March 16, 2026',
    readTime: '6 min read',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
];

export default function BlogIndex() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO
        title="Blog | RateCrafts"
        description="Read practical guides on freelance pricing, billable hours, profitability, and business strategy on the RateCrafts blog."
      />

      <header className="pt-24 pb-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
          The RateCrafts Blog
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Practical guides to help freelancers price smarter, protect margins, and build a more
          sustainable business.
        </p>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
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
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-md">
                      {post.category}
                    </span>
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