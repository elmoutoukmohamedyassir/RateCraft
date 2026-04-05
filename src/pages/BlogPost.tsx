import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Share2, Twitter, Linkedin } from 'lucide-react';

const postData = {
  'how-to-calculate-freelance-rate': {
    title: 'How to Calculate Your Freelance Rate: A Step-by-Step Guide',
    date: 'April 5, 2026',
    readTime: '10 min read',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Setting your freelance rate is one of the most important business decisions you will make. Charge too little, and you stay busy without building real income. Charge too much without a clear reason, and potential clients may walk away. The solution is not to guess. It is to calculate a rate that supports your business properly.</p>

      <p>Many freelancers start by copying prices from marketplaces or comparing themselves to other freelancers online. That approach often leads to underpricing because it ignores your taxes, expenses, unpaid admin work, and desired profit margin.</p>

      <h2>Why most freelancers undercharge</h2>
      <p>The biggest pricing mistake is assuming all working hours are billable. In reality, a freelancer also spends time on emails, client calls, revisions, proposals, invoicing, research, and marketing. Those hours matter, even if clients do not pay for them directly.</p>

      <ul>
        <li><strong>Taxes:</strong> a part of your revenue does not belong to you.</li>
        <li><strong>Expenses:</strong> software, hosting, equipment, tools, and internet all cost money.</li>
        <li><strong>Non-billable time:</strong> not every hour worked becomes paid client time.</li>
        <li><strong>Profit:</strong> without margin, your business stays fragile.</li>
      </ul>

      <h2>The basic formula</h2>
      <p>A practical way to estimate your rate is:</p>
      <p><strong>(Desired income + expenses + tax buffer + profit margin) ÷ billable hours = hourly rate</strong></p>

      <p>This is why a structured tool like the <a href="/calculator">RateCrafts freelance hourly rate calculator</a> is useful. It helps you work backward from your target income instead of guessing forward from random market prices.</p>

      <h2>Step 1: Set your monthly income goal</h2>
      <p>Start with how much you want to earn each month after covering business costs. This is the amount your business should support consistently.</p>

      <p>Example:</p>
      <ul>
        <li><strong>Desired monthly income:</strong> $3,000</li>
      </ul>

      <h2>Step 2: Add your business expenses</h2>
      <p>Freelancers often forget the real cost of running their business. Your expenses may include design tools, development platforms, AI tools, domains, hosting, internet, accounting software, and hardware replacement.</p>

      <p>Example:</p>
      <ul>
        <li><strong>Monthly expenses:</strong> $500</li>
      </ul>

      <h2>Step 3: Include taxes</h2>
      <p>Taxes are one of the most common reasons freelancers underprice their work. Even if you do not know the exact number yet, adding a realistic tax percentage is much better than ignoring it.</p>

      <p>Example:</p>
      <ul>
        <li><strong>Estimated tax percentage:</strong> 20%</li>
      </ul>

      <h2>Step 4: Estimate your billable hours honestly</h2>
      <p>You may work 40 hours per week, but most freelancers cannot bill all 40. A realistic billable range is often 20 to 30 hours per week.</p>

      <p>Example:</p>
      <ul>
        <li><strong>Billable hours per week:</strong> 25</li>
        <li><strong>Weeks worked per month:</strong> 4</li>
      </ul>

      <p>That gives you <strong>100 billable hours per month</strong>.</p>

      <h2>Step 5: Add profit margin</h2>
      <p>If your rate only covers survival, your business has no room for growth. A profit margin creates breathing space for savings, better tools, slower months, and future expansion.</p>

      <h2>Example freelance rate calculation</h2>
      <ul>
        <li>Desired monthly income: <strong>$3,000</strong></li>
        <li>Monthly business expenses: <strong>$500</strong></li>
        <li>Taxes: <strong>20%</strong></li>
        <li>Profit margin: <strong>10%</strong></li>
        <li>Billable hours per month: <strong>100</strong></li>
      </ul>

      <p>When you run numbers like these, the final hourly rate is usually much higher than beginners expect. That is normal. Most freelancers are not charging too much. They are charging too little.</p>

      <blockquote>
        "A good freelance rate is not based on hope. It is based on math."
      </blockquote>

      <h2>Common mistakes to avoid</h2>
      <ul>
        <li>Charging based only on what competitors charge</li>
        <li>Ignoring taxes completely</li>
        <li>Forgetting recurring business costs</li>
        <li>Assuming all hours are billable</li>
        <li>Leaving no room for profit</li>
      </ul>

      <h2>Final thoughts</h2>
      <p>Your freelance rate should support your business, not just your time. Once you understand the numbers behind your pricing, you make better decisions, avoid burnout, and build a more sustainable freelance career.</p>

      <p>If you want a faster way to estimate your pricing, use the <a href="/calculator">RateCrafts calculator</a> and then explore more guides on the <a href="/blog">RateCrafts blog</a>.</p>
    `
  },

  'hidden-costs-of-freelancing': {
    title: '7 Hidden Costs of Freelancing That Destroy Profit Margins',
    date: 'April 2, 2026',
    readTime: '8 min read',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Many freelancers think their rate only needs to cover living expenses and a bit of tax. That is rarely enough. The real cost of freelancing includes far more than most people expect, and these hidden costs quietly reduce your profit if you do not account for them in your pricing.</p>

      <h2>1. Taxes</h2>
      <p>One of the biggest surprises for new freelancers is how much income disappears into taxes. If you do not include a tax buffer in your pricing, your real take-home pay may be much lower than expected.</p>

      <h2>2. Software subscriptions</h2>
      <p>Design tools, development tools, storage, AI subscriptions, invoicing software, and scheduling tools often look cheap individually, but together they create serious monthly overhead.</p>

      <h2>3. Equipment replacement</h2>
      <p>Your laptop, monitor, phone, chair, and accessories will eventually need replacing. If you never budget for equipment, one hardware failure can wipe out a month of profit.</p>

      <h2>4. Unpaid admin work</h2>
      <p>Client communication, proposals, revisions, project scoping, invoicing, research, and sales all consume time. If your rate only covers visible project work, you are underpricing yourself.</p>

      <h2>5. Payment processing fees</h2>
      <p>Many freelancers forget to account for fees from payment platforms or banking services. A few percentage points lost on each invoice adds up over time.</p>

      <h2>6. Slow months</h2>
      <p>Freelancing income is not always stable. A healthy pricing structure should leave margin for quieter months, delayed payments, or unexpected client churn.</p>

      <h2>7. Growth and learning</h2>
      <p>Courses, books, certifications, conferences, and experimentation all help you stay competitive. These costs are part of building a stronger business, not optional extras.</p>

      <blockquote>
        "If your rate only covers today, your business will struggle tomorrow."
      </blockquote>

      <h2>How to protect your margin</h2>
      <p>The easiest way to protect your profit is to include these hidden costs in your pricing model from the start. Use the <a href="/calculator">RateCrafts calculator</a> to estimate a rate that reflects your real business needs, not just your ideal income.</p>

      <p>You can also read <a href="/blog/how-to-calculate-freelance-rate">our full freelance rate guide</a> to understand how expenses, taxes, and billable hours work together.</p>
    `
  },

  'raising-your-rates': {
    title: 'How to Raise Your Freelance Rates Without Losing Good Clients',
    date: 'March 28, 2026',
    readTime: '8 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Raising your rates is one of the fastest ways to grow your freelance income without working more hours. But doing it badly can damage trust and create tension with long-term clients. The key is to make rate increases feel professional, justified, and well communicated.</p>

      <h2>Why raising your rates matters</h2>
      <p>If your skills improve but your pricing stays the same, your business becomes less sustainable over time. Better work, better processes, stronger results, and more experience should be reflected in your rates.</p>

      <h2>Give notice early</h2>
      <p>Do not surprise clients with sudden price changes. Give notice in advance so they can plan their budgets. This shows professionalism and respect.</p>

      <h2>Focus on value, not your personal struggle</h2>
      <p>It is usually better to explain the value and quality you now bring rather than saying your bills are higher. Clients respond better to outcomes, expertise, and results than to personal costs alone.</p>

      <h2>Use the increase as a positioning filter</h2>
      <p>Some clients will accept your new rate immediately. Others may resist. That is normal. A rate increase helps you identify which clients value your work and which ones only value low pricing.</p>

      <blockquote>
        "A rate increase is not just more money. It is a shift toward better-fit clients."
      </blockquote>

      <h2>Offer options if needed</h2>
      <p>If a client cannot afford the full increase, you can reduce scope, change deliverables, or offer a phased transition. That keeps the conversation professional and solution-focused.</p>

      <h2>Use data to support your pricing</h2>
      <p>Before raising your rate, make sure your numbers support it. A tool like the <a href="/calculator">RateCrafts hourly rate calculator</a> helps you understand your pricing floor and avoid emotional decision-making.</p>

      <p>If you want to strengthen your rate before sending that message, start with <a href="/blog/how-to-calculate-freelance-rate">this freelance rate guide</a>.</p>
    `
  },

  'hourly-vs-project-pricing': {
    title: 'Hourly vs Project Pricing: Which Model Is Better for Freelancers?',
    date: 'April 4, 2026',
    readTime: '9 min read',
    category: 'Pricing',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>One of the biggest pricing decisions freelancers face is whether to charge by the hour or by the project. Both models can work, but they solve different business problems. The right option depends on your experience, your niche, and how clearly you can estimate scope.</p>

      <h2>When hourly pricing makes sense</h2>
      <p>Hourly pricing is useful when a project scope is unclear, when revisions are unpredictable, or when you are still learning how long your work actually takes. It is also easier for beginners because it feels more straightforward.</p>

      <h2>When project pricing makes sense</h2>
      <p>Project pricing becomes stronger when you understand your process well and can estimate work with confidence. It also allows you to charge for value rather than time alone.</p>

      <h2>The risk of hourly pricing</h2>
      <p>If you get faster and better, hourly pricing can limit your upside because your income stays tied to time. Clients may also focus too much on hours instead of outcomes.</p>

      <h2>The risk of project pricing</h2>
      <p>If your scope is vague or your estimate is poor, a project can become far less profitable than expected. This is why a strong hourly baseline still matters, even if you mostly sell projects.</p>

      <h2>Best practical approach</h2>
      <p>Many freelancers use an hourly rate internally and project pricing externally. That means you estimate the project using your hourly baseline, then present the client with a fixed price.</p>

      <p>You can use the <a href="/calculator">RateCrafts calculator</a> to find your hourly baseline first, then use that number to build smarter project quotes.</p>
    `
  },

  'freelance-pricing-mistakes': {
    title: '5 Freelance Pricing Mistakes That Keep You Underpaid',
    date: 'April 1, 2026',
    readTime: '7 min read',
    category: 'Pricing',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Most freelance underpricing is not caused by lack of skill. It is caused by avoidable pricing mistakes. If your work feels valuable but your income stays weak, there is a good chance one of these mistakes is quietly damaging your margins.</p>

      <h2>1. Charging what feels comfortable</h2>
      <p>Comfort-based pricing is often fear-based pricing. It feels safer to choose a lower number, but that usually creates long-term problems.</p>

      <h2>2. Ignoring taxes and expenses</h2>
      <p>Your revenue is not your real income. If you do not account for taxes and costs, your “good” rate may actually be unsustainable.</p>

      <h2>3. Overestimating billable hours</h2>
      <p>Many freelancers assume they can bill 40 hours a week. That is rarely realistic once admin work and communication are included.</p>

      <h2>4. Copying competitor rates blindly</h2>
      <p>Another freelancer’s rate may reflect a different country, client base, cost structure, or skill level. Their number is not automatically your number.</p>

      <h2>5. Leaving no room for profit</h2>
      <p>If your rate only covers survival, your business will always feel unstable. Margin matters.</p>

      <p>If you want to replace guesswork with a pricing model that actually makes sense, start with the <a href="/calculator">RateCrafts hourly rate calculator</a>.</p>
    `
  },

  'beginner-freelancer-rate': {
    title: 'How Much Should a Beginner Freelancer Charge?',
    date: 'March 30, 2026',
    readTime: '8 min read',
    category: 'Beginner',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>One of the hardest questions for new freelancers is simple: how much should I charge? The fear of losing clients often pushes beginners to set rates too low. But low pricing can attract the wrong clients and make it hard to build a real business.</p>

      <h2>Beginners should not price randomly</h2>
      <p>Being new does not mean your work has no value. It means your pricing should be realistic, strategic, and based on your actual needs, not insecurity.</p>

      <h2>What beginners should include in their rate</h2>
      <ul>
        <li>Income goal</li>
        <li>Taxes</li>
        <li>Basic expenses</li>
        <li>Limited billable hours</li>
        <li>A small profit buffer</li>
      </ul>

      <h2>Start with a floor, not a fantasy</h2>
      <p>You do not need the perfect premium rate on day one. You need a minimum sustainable rate that protects you from obvious underpricing.</p>

      <p>The easiest way to calculate that floor is with the <a href="/calculator">RateCrafts calculator</a>. Once you know your floor, you can decide whether to charge above it based on your niche, positioning, and results.</p>
    `
  },

  'daily-rate-calculation': {
    title: 'How to Convert an Hourly Rate Into a Professional Day Rate',
    date: 'March 27, 2026',
    readTime: '6 min read',
    category: 'Pricing',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Some clients prefer day rates instead of hourly pricing, especially in consulting, design, and strategy work. But a day rate should not be a random multiple of your hourly price. It needs to reflect how much focused work you can realistically deliver in a day.</p>

      <h2>Why day rates matter</h2>
      <p>Day rates simplify quoting, reduce time tracking friction, and help position your work more professionally in some markets.</p>

      <h2>Simple day rate method</h2>
      <p>A common starting point is:</p>
      <p><strong>Hourly rate × billable hours per day = day rate</strong></p>

      <p>Many freelancers use 6 to 8 billable hours as their day-rate baseline. But the right number depends on your process and the type of work you do.</p>

      <p>If you want to estimate both your hourly and daily price in one place, use the <a href="/calculator">RateCrafts calculator</a>.</p>
    `
  },

  'profit-margin-for-freelancers': {
    title: 'Why Freelancers Need a Profit Margin, Not Just Income',
    date: 'March 24, 2026',
    readTime: '7 min read',
    category: 'Finance',
    image: 'https://images.unsplash.com/photo-1553729784-e91953dec042?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Many freelancers focus only on replacing a salary. That is not enough. A healthy business needs profit, not just revenue that disappears into taxes, expenses, and personal income.</p>

      <h2>What profit margin actually does</h2>
      <p>Profit gives your business flexibility. It helps you survive slow periods, upgrade tools, invest in growth, and reduce financial stress.</p>

      <h2>Why break-even is risky</h2>
      <p>If your rate only covers your current costs, one surprise expense can damage your cash flow immediately. Margin protects you from that.</p>

      <p>The <a href="/calculator">RateCrafts calculator</a> includes a profit margin input for exactly this reason. A rate without margin often looks reasonable on paper and feels dangerous in real life.</p>
    `
  },

  'billable-hours-guide': {
    title: 'How Many Billable Hours Can a Freelancer Realistically Work?',
    date: 'March 21, 2026',
    readTime: '7 min read',
    category: 'Productivity',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>One of the biggest pricing mistakes freelancers make is overestimating billable hours. You might be available for 40 hours per week, but that does not mean 40 hours can be sold to clients.</p>

      <h2>Why 40 billable hours is unrealistic</h2>
      <p>Freelancers also spend time on proposals, calls, admin work, revisions, invoicing, learning, and client management. Those hours are part of the job, even when they are not paid directly.</p>

      <h2>A more realistic range</h2>
      <p>For many freelancers, 20 to 30 billable hours per week is much more realistic. That is why billable-hour estimates matter so much in pricing.</p>

      <p>If you assume too many billable hours, your rate drops too low. Use the <a href="/calculator">RateCrafts calculator</a> to test different billable-hour scenarios before setting your final price.</p>
    `
  },

  'quote-a-project-profitably': {
    title: 'How to Quote a Freelance Project Without Underpricing It',
    date: 'March 19, 2026',
    readTime: '8 min read',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Project quotes can help freelancers earn more than hourly billing, but only when they are built on a strong pricing foundation. The biggest mistake is giving a fixed quote without knowing your real hourly floor.</p>

      <h2>Start with your hourly baseline</h2>
      <p>Even if you plan to quote by project, your internal math should still begin with a sustainable hourly rate. That protects your margin when scope expands or timelines shift.</p>

      <h2>Estimate more than task time</h2>
      <p>Your quote should reflect research, communication, revisions, delivery, project management, and risk. Projects rarely include just execution time.</p>

      <p>If you do not know your pricing floor yet, start with the <a href="/calculator">RateCrafts calculator</a> and then build your project quote from there.</p>
    `
  },

  'freelance-rate-too-low': {
    title: 'How to Know If Your Freelance Rate Is Too Low',
    date: 'March 16, 2026',
    readTime: '6 min read',
    category: 'Strategy',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>Many freelancers feel busy but still struggle financially. That is often a sign that the rate is too low, not that the work volume is too small.</p>

      <h2>Signs your rate is too low</h2>
      <ul>
        <li>You are fully booked but still stressed about money</li>
        <li>You avoid taking time off because income drops immediately</li>
        <li>You cannot comfortably cover taxes and expenses</li>
        <li>You resent client revisions because the work no longer feels worth it</li>
      </ul>

      <p>If several of these feel familiar, your pricing probably needs work. Use the <a href="/calculator">RateCrafts calculator</a> to compare your current rate against a more realistic business-based estimate.</p>
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
      <SEO
        title={`${post.title} | RateCrafts Blog`}
        description="Read practical freelance pricing advice, profitability tips, and business strategy guides on the RateCrafts blog."
      />

      <main>
        <article className="pb-24">
          <header className="pt-16 pb-12 px-4 max-w-4xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-brand-600 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>

            <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-4">
              <span className="px-2 py-1 bg-brand-50 text-brand-600 rounded-md uppercase tracking-wider">
                {post.category}
              </span>
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

          <div className="max-w-3xl mx-auto px-4">
            <div
              className="prose prose-slate prose-lg prose-brand max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

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