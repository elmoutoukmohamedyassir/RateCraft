import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

/* ── Post data ─────────────────────────────────────────── */
const postData: Record<string, { title: string; date: string; readTime: string; category: string; content: string }> = {
  'how-to-calculate-freelance-rate': {
    title: 'How to Calculate Your Freelance Rate: A Step-by-Step Guide',
    date: 'April 5, 2026', readTime: '10 min read', category: 'Strategy',
    content: `<p>Setting your freelance rate is one of the most important business decisions you will make. Charge too little and you stay busy without building real income. Charge too much without a clear reason and potential clients may walk away. The solution is not to guess — it is to calculate a rate that supports your business properly.</p>
<p>Many freelancers start by copying prices from marketplaces or comparing themselves to other freelancers online. That approach often leads to underpricing because it ignores your taxes, expenses, unpaid admin work, and desired profit margin.</p>
<h2>Why most freelancers undercharge</h2>
<p>The biggest pricing mistake is assuming all working hours are billable. In reality, a freelancer also spends time on emails, client calls, revisions, proposals, invoicing, research, and marketing. Those hours matter, even if clients do not pay for them directly.</p>
<ul><li><strong>Taxes:</strong> a portion of your revenue does not belong to you.</li><li><strong>Expenses:</strong> software, hosting, equipment, and tools all cost money.</li><li><strong>Non-billable time:</strong> not every hour worked becomes paid client time.</li><li><strong>Profit:</strong> without margin, your business stays fragile.</li></ul>
<h2>The basic formula</h2>
<p>A practical way to estimate your rate:</p>
<p><strong>(Desired income + expenses + tax buffer + profit margin) ÷ billable hours = hourly rate</strong></p>
<p>This is why a structured tool like the <a href="/calculator">RateCraft freelance hourly rate calculator</a> is useful. It helps you work backward from your target income instead of guessing forward from random market prices.</p>
<h2>Step 1: Set your monthly income goal</h2>
<p>Start with how much you want to earn each month after covering business costs. This is the amount your business should support consistently. Example: <strong>$3,000 desired monthly income.</strong></p>
<h2>Step 2: Add your business expenses</h2>
<p>Freelancers often forget the real cost of running their business — design tools, development platforms, domains, hosting, internet, accounting software, and hardware replacement. Example: <strong>$500 monthly expenses.</strong></p>
<h2>Step 3: Include taxes</h2>
<p>Taxes are one of the most common reasons freelancers underprice their work. Even if you do not know the exact number yet, adding a realistic tax percentage is much better than ignoring it. Example: <strong>20% estimated tax.</strong></p>
<h2>Step 4: Estimate your billable hours honestly</h2>
<p>You may work 40 hours per week, but most freelancers cannot bill all 40. A realistic billable range is often 20 to 30 hours per week. Example: 25 hrs/week × 4 weeks = <strong>100 billable hours per month.</strong></p>
<h2>Step 5: Add profit margin</h2>
<p>If your rate only covers survival, your business has no room for growth. A profit margin creates breathing space for savings, better tools, slower months, and future expansion.</p>
<blockquote>"A good freelance rate is not based on hope. It is based on math."</blockquote>
<h2>Common mistakes to avoid</h2>
<ul><li>Charging based only on what competitors charge</li><li>Ignoring taxes completely</li><li>Forgetting recurring business costs</li><li>Assuming all hours are billable</li><li>Leaving no room for profit</li></ul>
<p>Your freelance rate should support your business, not just your time. Once you understand the numbers behind your pricing, you make better decisions, avoid burnout, and build a more sustainable freelance career.</p>`,
  },
  'hidden-costs-of-freelancing': {
    title: '7 Hidden Costs of Freelancing That Destroy Profit Margins',
    date: 'April 2, 2026', readTime: '8 min read', category: 'Finance',
    content: `<p>Many freelancers think their rate only needs to cover living expenses and a bit of tax. That is rarely enough. The real cost of freelancing includes far more than most people expect, and these hidden costs quietly reduce your profit if you do not account for them in your pricing.</p>
<h2>1. Taxes</h2><p>One of the biggest surprises for new freelancers is how much income disappears into taxes. If you do not include a tax buffer in your pricing, your real take-home pay may be much lower than expected.</p>
<h2>2. Software subscriptions</h2><p>Design tools, development tools, storage, AI subscriptions, invoicing software, and scheduling tools often look cheap individually, but together they create serious monthly overhead.</p>
<h2>3. Equipment replacement</h2><p>Your laptop, monitor, phone, chair, and accessories will eventually need replacing. If you never budget for equipment, one hardware failure can wipe out a month of profit.</p>
<h2>4. Unpaid admin work</h2><p>Client communication, proposals, revisions, project scoping, invoicing, research, and sales all consume time. If your rate only covers visible project work, you are underpricing yourself.</p>
<h2>5. Payment processing fees</h2><p>Many freelancers forget to account for fees from payment platforms or banking services. A few percentage points lost on each invoice adds up over time.</p>
<h2>6. Slow months</h2><p>Freelancing income is not always stable. A healthy pricing structure should leave margin for quieter months, delayed payments, or unexpected client churn.</p>
<h2>7. Growth and learning</h2><p>Courses, books, certifications, conferences, and experimentation all help you stay competitive. These costs are part of building a stronger business, not optional extras.</p>
<blockquote>"If your rate only covers today, your business will struggle tomorrow."</blockquote>
<p>The easiest way to protect your profit is to include these hidden costs in your pricing model from the start. Use the <a href="/calculator">RateCraft calculator</a> to estimate a rate that reflects your real business needs.</p>`,
  },
  'raising-your-rates': {
    title: 'How to Raise Your Freelance Rates Without Losing Good Clients',
    date: 'March 28, 2026', readTime: '8 min read', category: 'Business',
    content: `<p>Raising your rates is one of the fastest ways to grow your freelance income without working more hours. But doing it badly can damage trust and create tension with long-term clients. The key is to make rate increases feel professional, justified, and well communicated.</p>
<h2>Why raising your rates matters</h2><p>If your skills improve but your pricing stays the same, your business becomes less sustainable over time. Better work, better processes, stronger results, and more experience should be reflected in your rates.</p>
<h2>Give notice early</h2><p>Do not surprise clients with sudden price changes. Give notice in advance so they can plan their budgets. This shows professionalism and respect.</p>
<h2>Focus on value, not your personal struggle</h2><p>It is usually better to explain the value and quality you now bring rather than saying your bills are higher. Clients respond better to outcomes, expertise, and results.</p>
<h2>Use the increase as a positioning filter</h2><p>Some clients will accept your new rate immediately. Others may resist. A rate increase helps you identify which clients value your work and which ones only value low pricing.</p>
<blockquote>"A rate increase is not just more money. It is a shift toward better-fit clients."</blockquote>
<h2>Offer options if needed</h2><p>If a client cannot afford the full increase, you can reduce scope, change deliverables, or offer a phased transition. That keeps the conversation professional and solution-focused.</p>
<p>Before raising your rate, make sure your numbers support it. A tool like the <a href="/calculator">RateCraft hourly rate calculator</a> helps you understand your pricing floor and avoid emotional decision-making.</p>`,
  },
  'hourly-vs-project-pricing': {
    title: 'Hourly vs Project Pricing: Which Model Is Better for Freelancers?',
    date: 'April 4, 2026', readTime: '9 min read', category: 'Pricing',
    content: `<p>One of the biggest pricing decisions freelancers face is whether to charge by the hour or by the project. Both models can work, but they solve different business problems.</p>
<h2>When hourly pricing makes sense</h2><p>Hourly pricing is useful when a project scope is unclear, when revisions are unpredictable, or when you are still learning how long your work actually takes. It is also easier for beginners because it feels more straightforward.</p>
<h2>When project pricing makes sense</h2><p>Project pricing becomes stronger when you understand your process well and can estimate work with confidence. It also allows you to charge for value rather than time alone.</p>
<h2>The risk of hourly pricing</h2><p>If you get faster and better, hourly pricing can limit your upside because your income stays tied to time. Clients may also focus too much on hours instead of outcomes.</p>
<h2>The risk of project pricing</h2><p>If your scope is vague or your estimate is poor, a project can become far less profitable than expected. This is why a strong hourly baseline still matters, even if you mostly sell projects.</p>
<h2>Best practical approach</h2><p>Many freelancers use an hourly rate internally and project pricing externally. That means you estimate the project using your hourly baseline, then present the client with a fixed price.</p>
<p>You can use the <a href="/calculator">RateCraft calculator</a> to find your hourly baseline first, then use that number to build smarter project quotes.</p>`,
  },
  'freelance-pricing-mistakes': {
    title: '5 Freelance Pricing Mistakes That Keep You Underpaid',
    date: 'April 1, 2026', readTime: '7 min read', category: 'Pricing',
    content: `<p>Most freelance underpricing is not caused by lack of skill. It is caused by avoidable pricing mistakes. If your work feels valuable but your income stays weak, there is a good chance one of these mistakes is quietly damaging your margins.</p>
<h2>1. Charging what feels comfortable</h2><p>Comfort-based pricing is often fear-based pricing. It feels safer to choose a lower number, but that usually creates long-term problems.</p>
<h2>2. Ignoring taxes and expenses</h2><p>Your revenue is not your real income. If you do not account for taxes and costs, your "good" rate may actually be unsustainable.</p>
<h2>3. Overestimating billable hours</h2><p>Many freelancers assume they can bill 40 hours a week. That is rarely realistic once admin work and communication are included.</p>
<h2>4. Copying competitor rates blindly</h2><p>Another freelancer's rate may reflect a different country, client base, cost structure, or skill level. Their number is not automatically your number.</p>
<h2>5. Leaving no room for profit</h2><p>If your rate only covers survival, your business will always feel unstable. Margin matters.</p>
<p>If you want to replace guesswork with a pricing model that actually makes sense, start with the <a href="/calculator">RateCraft hourly rate calculator</a>.</p>`,
  },
  'beginner-freelancer-rate': {
    title: 'How Much Should a Beginner Freelancer Charge?',
    date: 'March 30, 2026', readTime: '8 min read', category: 'Beginner',
    content: `<p>One of the hardest questions for new freelancers is simple: how much should I charge? The fear of losing clients often pushes beginners to set rates too low. But low pricing can attract the wrong clients and make it hard to build a real business.</p>
<h2>Beginners should not price randomly</h2><p>Being new does not mean your work has no value. It means your pricing should be realistic, strategic, and based on your actual needs, not insecurity.</p>
<h2>What beginners should include in their rate</h2><ul><li>Income goal</li><li>Taxes</li><li>Basic expenses</li><li>Limited billable hours</li><li>A small profit buffer</li></ul>
<h2>Start with a floor, not a fantasy</h2><p>You do not need the perfect premium rate on day one. You need a minimum sustainable rate that protects you from obvious underpricing.</p>
<p>The easiest way to calculate that floor is with the <a href="/calculator">RateCraft calculator</a>. Once you know your floor, you can decide whether to charge above it based on your niche, positioning, and results.</p>`,
  },
  'daily-rate-calculation': {
    title: 'How to Convert an Hourly Rate Into a Professional Day Rate',
    date: 'March 27, 2026', readTime: '6 min read', category: 'Pricing',
    content: `<p>Some clients prefer day rates instead of hourly pricing, especially in consulting, design, and strategy work. But a day rate should not be a random multiple of your hourly price. It needs to reflect how much focused work you can realistically deliver in a day.</p>
<h2>Why day rates matter</h2><p>Day rates simplify quoting, reduce time tracking friction, and help position your work more professionally in some markets.</p>
<h2>Simple day rate method</h2><p>A common starting point: <strong>Hourly rate × billable hours per day = day rate.</strong> Many freelancers use 6 to 8 billable hours as their day-rate baseline.</p>
<p>If you want to estimate both your hourly and daily price in one place, use the <a href="/calculator">RateCraft calculator</a>.</p>`,
  },
  'profit-margin-for-freelancers': {
    title: 'Why Freelancers Need a Profit Margin, Not Just Income',
    date: 'March 24, 2026', readTime: '7 min read', category: 'Finance',
    content: `<p>Many freelancers focus only on replacing a salary. That is not enough. A healthy business needs profit, not just revenue that disappears into taxes, expenses, and personal income.</p>
<h2>What profit margin actually does</h2><p>Profit gives your business flexibility. It helps you survive slow periods, upgrade tools, invest in growth, and reduce financial stress.</p>
<h2>Why break-even is risky</h2><p>If your rate only covers your current costs, one surprise expense can damage your cash flow immediately. Margin protects you from that.</p>
<p>The <a href="/calculator">RateCraft calculator</a> includes a profit margin input for exactly this reason. A rate without margin often looks reasonable on paper and feels dangerous in real life.</p>`,
  },
  'billable-hours-guide': {
    title: 'How Many Billable Hours Can a Freelancer Realistically Work?',
    date: 'March 21, 2026', readTime: '7 min read', category: 'Productivity',
    content: `<p>One of the biggest pricing mistakes freelancers make is overestimating billable hours. You might be available for 40 hours per week, but that does not mean 40 hours can be sold to clients.</p>
<h2>Why 40 billable hours is unrealistic</h2><p>Freelancers also spend time on proposals, calls, admin work, revisions, invoicing, learning, and client management. Those hours are part of the job, even when they are not paid directly.</p>
<h2>A more realistic range</h2><p>For many freelancers, 20 to 30 billable hours per week is much more realistic. That is why billable-hour estimates matter so much in pricing. The <a href="/calculator">RateCraft calculator</a> lets you input realistic hours so your rate reflects what you can actually bill.</p>`,
  },
  'quote-a-project-profitably': {
    title: 'How to Quote a Freelance Project Without Underpricing It',
    date: 'March 19, 2026', readTime: '8 min read', category: 'Business',
    content: `<p>Quoting a project is one of the most high-stakes moments in freelancing. Get it wrong and you either lose the job or lock yourself into weeks of underpaid work.</p>
<h2>Start with your hourly floor</h2><p>Before quoting any project, you need to know your minimum hourly rate. That number is the foundation of every quote you will ever send.</p>
<h2>Estimate time honestly</h2><p>Think through the actual tasks, not just the deliverable. Include revisions, client calls, handoff time, and any research involved.</p>
<h2>Add scope buffer</h2><p>Projects almost always take longer than planned. Adding a 15 to 20 percent time buffer into your estimate protects your margin when things run over.</p>
<p>Use the <a href="/calculator">RateCraft calculator</a> to establish your hourly floor before you write your next quote.</p>`,
  },
  'freelance-rate-too-low': {
    title: 'How to Know If Your Freelance Rate Is Too Low',
    date: 'March 16, 2026', readTime: '6 min read', category: 'Strategy',
    content: `<p>If you feel busy but still broke, your rate may be the problem. Many freelancers work hard and still struggle financially because their pricing does not match their actual costs.</p>
<h2>Signs your rate is too low</h2><ul><li>You are always fully booked but never have savings</li><li>You cannot afford to take a week off</li><li>You feel resentment toward your clients or projects</li><li>You avoid checking your bank account mid-month</li></ul>
<h2>The fix is not always more clients</h2><p>More clients at a bad rate just means more of the same problem. The fix is a better rate — one built on your real numbers, not market pressure or fear.</p>
<p>Use the <a href="/calculator">RateCraft calculator</a> to find out what your rate should actually be, then compare it to what you are currently charging.</p>`,
  },
};

/* ── Styles ─────────────────────────────────────────────── */
const articleCSS = `
  .article-body { font-family: var(--font-sans); font-size: 0.95rem; font-weight: 300; color: var(--color-ink-400); line-height: 1.85; }
  .article-body p { margin: 0 0 1.4rem; }
  .article-body h2 { font-family: var(--font-display); font-size: 1.35rem; font-weight: 700; color: var(--color-ink-100); letter-spacing: -0.015em; margin: 3rem 0 0.9rem; line-height: 1.2; }
  .article-body h3 { font-family: var(--font-display); font-size: 1.1rem; font-weight: 700; color: var(--color-ink-200); margin: 2rem 0 0.7rem; }
  .article-body ul, .article-body ol { padding-left: 0; margin: 0 0 1.4rem; list-style: none; }
  .article-body li { position: relative; padding-left: 1.25rem; margin-bottom: 0.55rem; color: var(--color-ink-400); }
  .article-body li::before { content: '—'; position: absolute; left: 0; color: var(--color-brass-600); font-family: var(--font-mono); font-size: 0.8rem; }
  .article-body strong { color: var(--color-ink-200); font-weight: 500; }
  .article-body a { color: var(--color-brass-400); text-decoration: none; border-bottom: 1px solid rgba(184,134,11,0.3); transition: border-color 0.15s; }
  .article-body a:hover { border-color: var(--color-brass-500); }
  .article-body blockquote { margin: 2rem 0; padding: 1.5rem 2rem; border-left: 2px solid var(--color-brass-500); background: rgba(184,134,11,0.04); font-family: var(--font-display); font-style: italic; font-size: 1.05rem; color: var(--color-brass-300); line-height: 1.6; }
  .article-body code { font-family: var(--font-mono); font-size: 0.82rem; color: var(--color-brass-300); background: rgba(184,134,11,0.08); padding: 0.1em 0.35em; border: 1px solid rgba(184,134,11,0.15); }
`;

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = id ? postData[id] : null;
  const allIds = Object.keys(postData);
  const currentIdx = id ? allIds.indexOf(id) : -1;
  const prevId = currentIdx > 0 ? allIds[currentIdx - 1] : null;
  const nextId = currentIdx < allIds.length - 1 ? allIds[currentIdx + 1] : null;
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!post) {
    return (
      <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-brass-500)', marginBottom: '1rem' }}>404</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-ink-100)', marginBottom: '1.5rem' }}>Article not found</h1>
          <Link to="/blog" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brass-400)', textDecoration: 'none', border: '1px solid var(--color-brass-600)', padding: '0.7rem 1.5rem', display: 'inline-block' }}>← Back to journal</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <style>{articleCSS}</style>
      <SEO title={`${post.title} | RateCraft`} description={post.title} />

      {/* Top bar */}
      <div style={{ borderBottom: '1px solid var(--color-ink-800)', padding: '0.85rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: '64px', zIndex: 40, background: 'rgba(14,13,11,0.92)', backdropFilter: 'blur(12px)' }}>
        <Link to="/blog" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-500)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.15s' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'var(--color-ink-200)'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'var(--color-ink-500)'}>
          ← Journal
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-700)' }}>{post.readTime}</span>
          <button onClick={handleShare} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: copied ? 'var(--color-brass-400)' : 'var(--color-ink-600)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.15s' }}>
            {copied ? 'Copied ✓' : 'Share'}
          </button>
        </div>
      </div>

      {/* Article */}
      <article style={{ maxWidth: '700px', margin: '0 auto', padding: '4rem 1.5rem 6rem' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>

          {/* Meta */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-brass-500)', border: '1px solid rgba(184,134,11,0.25)', padding: '0.2rem 0.6rem' }}>{post.category}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', color: 'var(--color-ink-700)', textTransform: 'uppercase' }}>{post.date}</span>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: 'var(--color-ink-50)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '2.5rem' }}>
            {post.title}
          </h1>

          {/* Brass rule */}
          <div style={{ width: '3rem', height: '1px', background: 'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))', marginBottom: '3rem' }} />

          {/* Content */}
          <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* CTA box */}
          <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--color-ink-900)', border: '1px solid var(--color-ink-800)', borderLeft: '2px solid var(--color-brass-500)' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--color-brass-500)', marginBottom: '0.75rem' }}>Try it now</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-ink-100)', marginBottom: '0.6rem' }}>Find your actual rate</p>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 300, color: 'var(--color-ink-500)', marginBottom: '1.25rem', lineHeight: 1.65 }}>Use the RateCraft calculator to get a number based on your real costs, not guesswork.</p>
            <Link to="/calculator" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.7rem 1.5rem', background: 'var(--color-brass-500)', color: 'var(--color-ink-950)', textDecoration: 'none', display: 'inline-block', fontWeight: 500 }}>Open Calculator →</Link>
          </div>
        </motion.div>

        {/* Prev / Next */}
        {(prevId || nextId) && (
          <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--color-ink-800)' }}>
            {prevId ? (
              <Link to={`/blog/${prevId}`} style={{ background: 'var(--color-ink-900)', padding: '1.5rem', textDecoration: 'none', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--color-ink-800)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--color-ink-900)'}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-700)', marginBottom: '0.5rem' }}>← Previous</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-ink-300)', lineHeight: 1.3 }}>{postData[prevId]?.title}</p>
              </Link>
            ) : <div style={{ background: 'var(--color-ink-950)' }} />}
            {nextId ? (
              <Link to={`/blog/${nextId}`} style={{ background: 'var(--color-ink-900)', padding: '1.5rem', textDecoration: 'none', textAlign: 'right', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--color-ink-800)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--color-ink-900)'}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-700)', marginBottom: '0.5rem' }}>Next →</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-ink-300)', lineHeight: 1.3 }}>{postData[nextId]?.title}</p>
              </Link>
            ) : <div style={{ background: 'var(--color-ink-950)' }} />}
          </div>
        )}
      </article>
    </div>
  );
}