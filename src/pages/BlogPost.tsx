import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin } from 'lucide-react';

const postData = {
  'how-to-calculate-freelance-rate': {
    title: 'How to Calculate Your Freelance Rate: The Math Behind Profitability',
    date: 'March 25, 2026',
    readTime: '8 min read',
    category: 'Strategy',
    image: 'https://picsum.photos/seed/rate/1200/600',
    content: `
      <p>Determining your freelance rate is one of the most critical business decisions you'll make. Many new freelancers fall into the trap of "market matching"—charging what they see others charging on platforms like Upwork or Fiverr. This is a race to the bottom.</p>
      
      <h3>The "Salary Replacement" Fallacy</h3>
      <p>If you earned $80,000 as an employee, you might think $40/hour is a fair rate ($80,000 / 2,000 hours). <strong>This is dangerously low.</strong> As a freelancer, you are the employer and the employee. Your rate must cover:</p>
      <ul>
        <li><strong>Self-Employment Taxes:</strong> You're responsible for the full 15.3% (in the US) that was previously split with your employer.</li>
        <li><strong>Non-Billable Overhead:</strong> You will spend 20-30% of your time on marketing, invoicing, and sales. You aren't getting paid for these hours directly.</li>
        <li><strong>Benefits:</strong> Health insurance, 401k matching, and paid time off are now your responsibility.</li>
      </ul>

      <h3>The Reverse-Engineering Formula</h3>
      <p>To find your sustainable rate, work backward from your desired lifestyle:</p>
      <ol>
        <li><strong>Target Net Income:</strong> What do you need to take home after everything?</li>
        <li><strong>Annual Expenses:</strong> Sum up your software, hardware, office, and insurance costs.</li>
        <li><strong>The Tax Buffer:</strong> Add 25-30% to your total for taxes.</li>
        <li><strong>Billable Capacity:</strong> Be realistic. Most full-time freelancers can only sustain 20-25 billable hours per week.</li>
      </ol>
      
      <p>Divide your total gross requirement by your annual billable hours. That is your <strong>floor</strong>—the absolute minimum you can charge to stay in business.</p>

      <blockquote>
        "Your rate isn't just a price tag; it's the financial foundation of your freedom."
      </blockquote>

      <h3>Conclusion</h3>
      <p>Use the RateCraft calculator to run these numbers. Once you see the math, you'll realize why charging $25/hour is often a fast track to burnout. Charge for the value you provide and the business you're building.</p>
    `
  },
  'hidden-costs-of-freelancing': {
    title: 'Beyond the Laptop: 7 Hidden Costs of Running a Freelance Business',
    date: 'March 18, 2026',
    readTime: '5 min read',
    category: 'Finance',
    image: 'https://picsum.photos/seed/costs/1200/600',
    content: `
      <p>When you transition to freelancing, your "take-home" pay is no longer your gross pay. Understanding the overhead of an independent professional is the difference between a hobby and a career.</p>
      
      <h3>1. The "Employer" Half of Taxes</h3>
      <p>Most employees only see half of their payroll taxes. As a freelancer, you pay both the employer and employee portions. This "hidden" 7.65% (in the US) often surprises new business owners during their first tax season.</p>
      
      <h3>2. Software Bloat</h3>
      <p>Adobe Creative Cloud ($55/mo), Slack Pro ($8/mo), Zoom ($15/mo), QuickBooks ($30/mo), Calendly ($12/mo). These small monthly charges are "death by a thousand cuts." Always audit your stack quarterly.</p>
      
      <h3>3. Hardware Depreciation</h3>
      <p>A professional laptop lasts 3 years. If your machine costs $3,000, you should be setting aside $83 every month into a "replacement fund" so you aren't hit with a massive bill when your screen goes black.</p>
      
      <h3>4. Unpaid "CEO" Time</h3>
      <p>Answering emails, updating your portfolio, and chasing late payments are essential tasks that pay $0/hour. If you don't bake this time into your billable rate, your effective hourly wage drops significantly.</p>
      
      <h3>5. Health and Disability Insurance</h3>
      <p>Without an employer-sponsored plan, premiums can be staggering. Furthermore, if you get sick and can't work, you don't get paid. Disability insurance is a "hidden" cost that protects your most valuable asset: your ability to work.</p>
    `
  },
  'raising-your-rates': {
    title: 'The Art of the Rate Increase: How to Charge More Without Losing Clients',
    date: 'March 10, 2026',
    readTime: '6 min read',
    category: 'Business',
    image: 'https://picsum.photos/seed/raise/1200/600',
    content: `
      <p>Raising rates is the most effective way to grow your income without working more hours. However, doing it poorly can damage long-term relationships. Here is the professional framework for a price adjustment.</p>
      
      <h3>The "Notice Period" Strategy</h3>
      <p>Never raise rates effective immediately. Give your existing clients at least 60 days of notice. This shows respect for their budget cycles and gives them time to plan. A common approach is to announce in October for a January 1st effective date.</p>
      
      <h3>Focus on Value, Not Inflation</h3>
      <p>Avoid saying "my costs have gone up." Instead, highlight the increased expertise you've gained. "Over the last year, I've streamlined our workflow, resulting in 20% faster turnaround times." You are charging for the <strong>result</strong>, not the time.</p>

      <h3>The "Grandfather" Option</h3>
      <p>If a legacy client is truly valuable but has a tight budget, you can offer to "grandfather" them into a mid-tier rate for an additional 3 months before the full increase kicks in. This softens the blow while still moving them toward your new market value.</p>

      <blockquote>
        "A rate increase is a filter. It helps you move away from low-value work so you can focus on the clients who truly value your impact."
      </blockquote>

      <h3>What to do if they say no?</h3>
      <p>If a client refuses the increase, you have two choices: reduce the scope of work to match their budget, or politely finish the current project and move on. Remember, every hour spent on a low-paying client is an hour you can't sell to a high-paying one.</p>
    `
  }
};

export default function BlogPost() {
  const { id } = useParams();
  const post = postData[id as keyof typeof postData];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-brand-600 hover:underline">Back to blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <SEO title={`${post.title} | RateCraft Blog`} />
      
      <main>
        <article className="pb-24">
          {/* Header */}
          <header className="pt-16 pb-12 px-4 max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-brand-600 mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
            
            <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4">
              <span className="px-2 py-1 bg-brand-50 text-brand-600 rounded-md uppercase tracking-wider">{post.category}</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight tracking-tight">
              {post.title}
            </h1>
          </header>

          {/* Featured Image */}
          <div className="max-w-6xl mx-auto px-4 mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-[21/9] rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto px-4">
            <div 
              className="prose prose-slate prose-lg prose-brand max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            
            {/* Share */}
            <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-slate-900">Share this article:</span>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-all">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <Link 
                to="/calculator"
                className="px-6 py-3 bg-brand-600 text-white rounded-full font-bold text-sm hover:bg-brand-700 transition-all shadow-lg shadow-brand-200"
              >
                Try the Calculator
              </Link>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
}
