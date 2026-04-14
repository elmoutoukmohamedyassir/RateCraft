import React, { useState, useEffect } from 'react';
import { Link, useParams }            from 'react-router-dom';
import { motion }                     from 'motion/react';
import { SEO }                        from '../components/SEO';
import { ALL_POSTS }                  from './BlogIndex';

/* ── Types ─────────────────────────────────────────────────────── */
interface PostContent {
  title:       string;
  date:        string;
  readTime:    string;
  category:    string;
  description: string;          // for SEO meta description
  content:     string;          // raw HTML string
  relatedIds:  string[];        // manually curated related posts
}

/* ── All post content ──────────────────────────────────────────── */
const POST_CONTENT: Record<string, PostContent> = {

  'how-to-calculate-freelance-rate': {
    title:       'How to Calculate Your Freelance Rate: A Step-by-Step Guide',
    date:        'April 5, 2026',
    readTime:    '10 min read',
    category:    'Strategy',
    description: 'Learn how to calculate a sustainable freelance hourly rate using income goals, taxes, expenses, billable hours, and profit margin.',
    relatedIds:  ['hidden-costs-of-freelancing', 'billable-hours-guide', 'freelance-pricing-mistakes'],
    content: `
      <p>Setting your freelance rate is one of the most important business decisions you will make. Charge too little and you stay busy without building real income. Charge too much without a clear reason and potential clients may walk away. The solution is not to guess — it is to calculate a rate that supports your business properly.</p>
      <p>Many freelancers start by copying prices from marketplaces or comparing themselves to others online. That approach often leads to underpricing because it ignores your taxes, expenses, unpaid admin work, and desired profit margin. Use the <a href="/calculator">RateCraft freelance rate calculator</a> to get a number based on your actual situation.</p>

      <h2>Why most freelancers undercharge</h2>
      <p>The biggest pricing mistake is assuming all working hours are billable. In reality, a freelancer also spends time on emails, client calls, revisions, proposals, invoicing, and marketing. Those hours matter, even if clients do not pay for them directly. Read our guide on <a href="/blog/billable-hours-guide">how many billable hours are realistically achievable</a> to understand the gap.</p>
      <ul>
        <li><strong>Taxes:</strong> a portion of your revenue does not belong to you.</li>
        <li><strong>Expenses:</strong> software, hosting, equipment, and tools all cost money. See our article on <a href="/blog/hidden-costs-of-freelancing">hidden costs of freelancing</a> for the full list.</li>
        <li><strong>Non-billable time:</strong> not every hour worked becomes paid client time.</li>
        <li><strong>Profit:</strong> without margin, your business stays fragile. Our guide on <a href="/blog/profit-margin-for-freelancers">why freelancers need profit margin</a> explains why.</li>
      </ul>

      <h2>The basic formula</h2>
      <p><strong>(Desired income + expenses + tax buffer + profit margin) ÷ billable hours = hourly rate</strong></p>
      <p>This is exactly what the <a href="/calculator">RateCraft calculator</a> computes. It helps you work backward from your target income instead of guessing forward from random market prices.</p>

      <h2>Step 1: Set your monthly income goal</h2>
      <p>Start with how much you want to earn each month after covering business costs. This is the amount your business should support consistently — not just in good months.</p>

      <h2>Step 2: Add your business expenses</h2>
      <p>Freelancers often forget the real cost of running their business. Design tools, development platforms, domains, hosting, internet, accounting software, and hardware replacement all add up. Our breakdown of <a href="/blog/hidden-costs-of-freelancing">7 hidden freelance costs</a> covers every category.</p>

      <h2>Step 3: Include taxes</h2>
      <p>Taxes are one of the most common reasons freelancers underprice their work. Even if you do not know your exact rate yet, adding a realistic percentage is much better than ignoring it entirely.</p>

      <h2>Step 4: Estimate your billable hours honestly</h2>
      <p>You may work 40 hours per week, but most freelancers cannot bill all 40. A realistic range is often 20 to 30 hours. Our dedicated guide on <a href="/blog/billable-hours-guide">realistic billable hours</a> explains why this number matters so much for your rate.</p>

      <h2>Step 5: Add profit margin</h2>
      <p>If your rate only covers survival, your business has no room for growth. A profit margin creates breathing space for savings, better tools, slower months, and future expansion. See our article on <a href="/blog/profit-margin-for-freelancers">why profit margin matters</a> for a deeper breakdown.</p>

      <blockquote>"A good freelance rate is not based on hope. It is based on math."</blockquote>

      <h2>Common mistakes to avoid</h2>
      <p>We cover these in depth in our article on <a href="/blog/freelance-pricing-mistakes">5 freelance pricing mistakes</a>, but in summary: ignoring taxes, forgetting expenses, overestimating billable hours, copying competitor rates, and leaving no room for profit are the five fastest ways to stay underpaid.</p>

      <p>Once you have your rate, use it as the foundation for <a href="/blog/quote-a-project-profitably">quoting projects profitably</a> and for deciding when and how to <a href="/blog/raising-your-rates">raise your rates</a> over time.</p>
    `,
  },

  'hidden-costs-of-freelancing': {
    title:       '7 Hidden Costs of Freelancing That Destroy Profit Margins',
    date:        'April 2, 2026',
    readTime:    '8 min read',
    category:    'Finance',
    description: 'From taxes to software bloat and non-billable time, discover the hidden costs freelancers forget when setting rates.',
    relatedIds:  ['how-to-calculate-freelance-rate', 'profit-margin-for-freelancers', 'freelance-pricing-mistakes'],
    content: `
      <p>Many freelancers think their rate only needs to cover living expenses and a bit of tax. That is rarely enough. The real cost of freelancing includes far more than most people expect, and these hidden costs quietly reduce your profit if you do not account for them in your pricing. The fastest fix is to run your numbers through the <a href="/calculator">RateCraft calculator</a> and include every category below.</p>

      <h2>1. Taxes</h2>
      <p>One of the biggest surprises for new freelancers is how much income disappears into taxes. If you do not include a tax buffer in your pricing, your real take-home pay may be much lower than expected. This is the first input in our <a href="/calculator">rate calculator</a> for a reason.</p>

      <h2>2. Software subscriptions</h2>
      <p>Design tools, development tools, storage, AI subscriptions, invoicing software, and scheduling tools often look cheap individually, but together they create serious monthly overhead. Add them all up before setting your rate.</p>

      <h2>3. Equipment replacement</h2>
      <p>Your laptop, monitor, phone, chair, and accessories will eventually need replacing. If you never budget for equipment, one hardware failure can wipe out a month of profit. A good rule: set aside a small amount from every invoice for hardware replacement.</p>

      <h2>4. Unpaid admin work</h2>
      <p>Client communication, proposals, revisions, project scoping, invoicing, research, and sales all consume time. If your rate only covers visible project work, you are underpricing yourself. Our guide on <a href="/blog/billable-hours-guide">realistic billable hours</a> explains how much of your week is really billable.</p>

      <h2>5. Payment processing fees</h2>
      <p>Many freelancers forget to account for fees from payment platforms or banking services. A few percentage points lost on each invoice adds up significantly over a year.</p>

      <h2>6. Slow months</h2>
      <p>Freelancing income is not always stable. A healthy pricing structure should leave margin for quieter months, delayed payments, or unexpected client churn. This is exactly why the <a href="/blog/profit-margin-for-freelancers">profit margin buffer</a> in your rate is so important.</p>

      <h2>7. Growth and learning</h2>
      <p>Courses, books, certifications, conferences, and experimentation all help you stay competitive. These costs are part of building a stronger business, not optional extras.</p>

      <blockquote>"If your rate only covers today, your business will struggle tomorrow."</blockquote>

      <p>The fastest way to protect your profit is to include all of these in your pricing model from the start. Learn <a href="/blog/how-to-calculate-freelance-rate">how to calculate your freelance rate</a> using all these inputs, and avoid the <a href="/blog/freelance-pricing-mistakes">5 most common pricing mistakes</a> that keep freelancers underpaid.</p>
    `,
  },

  'raising-your-rates': {
    title:       'How to Raise Your Freelance Rates Without Losing Good Clients',
    date:        'March 28, 2026',
    readTime:    '8 min read',
    category:    'Business',
    description: 'Raise your freelance prices professionally, communicate value clearly, and keep strong client relationships intact.',
    relatedIds:  ['how-to-calculate-freelance-rate', 'freelance-rate-too-low', 'quote-a-project-profitably'],
    content: `
      <p>Raising your rates is one of the fastest ways to grow your freelance income without working more hours. But doing it badly can damage trust and create tension with long-term clients. The key is to make rate increases feel professional, justified, and well communicated. Before you raise your rate, use the <a href="/calculator">RateCraft calculator</a> to confirm your new number is grounded in real numbers — not just a guess.</p>

      <h2>Why raising your rates matters</h2>
      <p>If your skills improve but your pricing stays the same, your business becomes less sustainable over time. Better work, better processes, stronger results, and more experience should be reflected in your rates. If you are not sure whether your current rate is already too low, read our article on <a href="/blog/freelance-rate-too-low">signs your rate is too low</a> first.</p>

      <h2>Give notice early</h2>
      <p>Do not surprise clients with sudden price changes. Give at least four to six weeks notice so they can plan their budgets. This shows professionalism and respect for the working relationship.</p>

      <h2>Focus on value, not your personal struggle</h2>
      <p>It is usually better to explain the value and quality you now deliver rather than saying your bills are higher. Clients respond to outcomes, expertise, and results — not to your personal cost of living.</p>

      <h2>Use the increase as a positioning filter</h2>
      <p>Some clients will accept your new rate immediately. Others may resist. That is normal. A rate increase helps you identify which clients truly value your work and which ones only value low pricing. Long-term, this makes your business stronger.</p>

      <blockquote>"A rate increase is not just more money. It is a shift toward better-fit clients."</blockquote>

      <h2>Offer options if needed</h2>
      <p>If a client cannot afford the full increase, you can reduce scope, change deliverables, or offer a phased transition. That keeps the conversation professional and solution-focused.</p>

      <h2>Use data to support your pricing</h2>
      <p>Before raising your rate, make sure your numbers support it. Use the <a href="/calculator">RateCraft hourly rate calculator</a> to understand your pricing floor and make confident decisions. You can also read our full guide on <a href="/blog/how-to-calculate-freelance-rate">how to calculate your freelance rate</a> to build your case from first principles.</p>
    `,
  },

  'hourly-vs-project-pricing': {
    title:       'Hourly vs Project Pricing: Which Model Is Better for Freelancers?',
    date:        'April 4, 2026',
    readTime:    '9 min read',
    category:    'Pricing',
    description: 'Compare hourly and project pricing to see which model works better for your freelance services, client type, and profit goals.',
    relatedIds:  ['how-to-calculate-freelance-rate', 'quote-a-project-profitably', 'daily-rate-calculation'],
    content: `
      <p>One of the biggest pricing decisions freelancers face is whether to charge by the hour or by the project. Both models can work, but they solve different business problems. The right option depends on your experience, your niche, and how clearly you can estimate scope. Either way, your starting point should be a solid hourly floor — which you can find using the <a href="/calculator">RateCraft rate calculator</a>.</p>

      <h2>When hourly pricing makes sense</h2>
      <p>Hourly pricing is useful when a project scope is unclear, when revisions are unpredictable, or when you are still learning how long your work actually takes. It is also easier for beginners. If you are just starting out, read our guide on <a href="/blog/beginner-freelancer-rate">how much beginner freelancers should charge</a>.</p>

      <h2>When project pricing makes sense</h2>
      <p>Project pricing becomes stronger when you understand your process well and can estimate work with confidence. It also allows you to charge for value rather than time alone. Once you are comfortable with project pricing, our article on <a href="/blog/quote-a-project-profitably">quoting projects profitably</a> gives you a practical framework.</p>

      <h2>The risk of hourly pricing</h2>
      <p>If you get faster and better, hourly pricing can limit your upside because your income stays tied to time. Clients may also focus too much on hours rather than outcomes.</p>

      <h2>The risk of project pricing</h2>
      <p>If your scope is vague or your estimate is poor, a project can become far less profitable than expected. This is why a strong hourly baseline still matters, even if you mostly sell projects. Always calculate your minimum hourly floor first, then use that to build your project quote.</p>

      <h2>The practical hybrid approach</h2>
      <p>Many freelancers use an hourly rate internally and project pricing externally. That means estimating the project using your hourly baseline, then presenting the client with a fixed price. Combine this with a clear day rate — learn how in our guide on <a href="/blog/daily-rate-calculation">converting hourly to day rate</a>.</p>

      <p>Use the <a href="/calculator">RateCraft calculator</a> to find your hourly baseline first, then use that number to build smarter project quotes and avoid the <a href="/blog/freelance-pricing-mistakes">common pricing mistakes</a> that keep freelancers underpaid.</p>
    `,
  },

  'freelance-pricing-mistakes': {
    title:       '5 Freelance Pricing Mistakes That Keep You Underpaid',
    date:        'April 1, 2026',
    readTime:    '7 min read',
    category:    'Pricing',
    description: 'These 5 common pricing mistakes quietly destroy freelance income. Learn how to spot and fix them.',
    relatedIds:  ['how-to-calculate-freelance-rate', 'freelance-rate-too-low', 'hidden-costs-of-freelancing'],
    content: `
      <p>Most freelance underpricing is not caused by lack of skill. It is caused by avoidable pricing mistakes. If your work feels valuable but your income stays weak, there is a good chance one of these mistakes is quietly damaging your margins. The solution always starts with running your real numbers through the <a href="/calculator">RateCraft rate calculator</a>.</p>

      <h2>1. Charging what feels comfortable</h2>
      <p>Comfort-based pricing is often fear-based pricing. It feels safer to choose a lower number, but that usually creates long-term problems. If you are not sure whether your number is too low, read our article on <a href="/blog/freelance-rate-too-low">signs your rate is too low</a>.</p>

      <h2>2. Ignoring taxes and expenses</h2>
      <p>Your revenue is not your real income. If you do not account for taxes and costs, your "good" rate may actually be unsustainable. Our breakdown of <a href="/blog/hidden-costs-of-freelancing">7 hidden freelance costs</a> covers every category you need to include.</p>

      <h2>3. Overestimating billable hours</h2>
      <p>Many freelancers assume they can bill 40 hours a week. That is rarely realistic once admin work and communication are included. Our dedicated guide on <a href="/blog/billable-hours-guide">realistic billable hours</a> shows you what most freelancers actually achieve.</p>

      <h2>4. Copying competitor rates blindly</h2>
      <p>Another freelancer's rate may reflect a different country, client base, cost structure, or skill level. Their number is not automatically your number. The only rate that matters is the one derived from <em>your</em> actual costs and goals — which is exactly what <a href="/calculator">RateCraft</a> calculates.</p>

      <h2>5. Leaving no room for profit</h2>
      <p>If your rate only covers survival, your business will always feel unstable. Margin matters. Read our article on <a href="/blog/profit-margin-for-freelancers">why freelancers need profit margin</a> to understand why break-even is not a safe position.</p>

      <p>Once you have identified which mistakes apply to you, learn the full method for <a href="/blog/how-to-calculate-freelance-rate">calculating your freelance rate correctly</a> — and how to <a href="/blog/raising-your-rates">raise your rate professionally</a> once your new number is clear.</p>
    `,
  },

  'beginner-freelancer-rate': {
    title:       'How Much Should a Beginner Freelancer Charge?',
    date:        'March 30, 2026',
    readTime:    '8 min read',
    category:    'Beginner',
    description: 'A practical guide to setting your first freelance rate without guessing, panicking, or underpricing your work.',
    relatedIds:  ['how-to-calculate-freelance-rate', 'freelance-pricing-mistakes', 'billable-hours-guide'],
    content: `
      <p>One of the hardest questions for new freelancers is simple: how much should I charge? The fear of losing clients often pushes beginners to set rates too low. But low pricing can attract the wrong clients and make it hard to build a real business. The answer is not to guess — use the <a href="/calculator">RateCraft free rate calculator</a> to set a minimum based on your actual costs.</p>

      <h2>Being new does not mean underpricing</h2>
      <p>Your rate does not need to reflect your experience level — it needs to reflect your cost of running a viable business. Even a beginner has taxes, expenses, and living costs. Those do not disappear because you are new.</p>

      <h2>What beginners should include in their rate</h2>
      <ul>
        <li>Your income goal — what you actually need to live and save</li>
        <li>Estimated taxes — even a rough percentage is better than nothing</li>
        <li>Basic expenses — tools, software, internet, phone</li>
        <li>Realistic billable hours — read our guide on <a href="/blog/billable-hours-guide">how many hours are actually billable</a></li>
        <li>A small profit buffer — see why in our article on <a href="/blog/profit-margin-for-freelancers">profit margin for freelancers</a></li>
      </ul>

      <h2>Start with a floor, not a fantasy</h2>
      <p>You do not need the perfect premium rate on day one. You need a minimum sustainable rate that protects you from obvious underpricing. The <a href="/calculator">RateCraft calculator</a> is built exactly for this — enter your real numbers and get a defensible minimum hourly rate.</p>

      <p>Once you have your floor, avoid the <a href="/blog/freelance-pricing-mistakes">5 most common beginner pricing mistakes</a> and you will be ahead of most people who start freelancing. As you grow, learn how to <a href="/blog/raising-your-rates">raise your rates professionally</a> without damaging client relationships.</p>
    `,
  },

  'daily-rate-calculation': {
    title:       'How to Convert an Hourly Rate Into a Professional Day Rate',
    date:        'March 27, 2026',
    readTime:    '6 min read',
    category:    'Pricing',
    description: 'Learn how to turn your hourly baseline into a clean, client-friendly day rate for consulting and freelance services.',
    relatedIds:  ['how-to-calculate-freelance-rate', 'hourly-vs-project-pricing', 'quote-a-project-profitably'],
    content: `
      <p>Some clients prefer day rates instead of hourly pricing, especially in consulting, design, and strategy work. But a day rate should not be a random multiple of your hourly price — it needs to reflect how much focused work you can realistically deliver in a day. Start by calculating your hourly rate with the <a href="/calculator">RateCraft rate calculator</a>, then apply the method below.</p>

      <h2>Why day rates matter</h2>
      <p>Day rates simplify quoting, reduce time-tracking friction, and help position your work more professionally in some markets. They are especially useful for on-site work, workshops, and consulting retainers.</p>

      <h2>The simple conversion method</h2>
      <p><strong>Hourly rate × billable hours per day = day rate</strong></p>
      <p>Many freelancers use 6 to 8 billable hours as their day-rate baseline. But the right number depends on your process and the type of work you do. Be realistic — most professionals are not fully productive for 8 hours. Read our guide on <a href="/blog/billable-hours-guide">realistic billable hours</a> for context.</p>

      <h2>When to use a day rate vs an hourly rate</h2>
      <p>Our comparison of <a href="/blog/hourly-vs-project-pricing">hourly vs project pricing</a> covers when each model makes sense. Day rates sit somewhere in the middle — they work well when you are engaged for full days but want predictability for both parties.</p>

      <p>Use the <a href="/calculator">RateCraft calculator</a> to establish your hourly floor first. That number then becomes the foundation for your day rate, your project quotes, and your long-term <a href="/blog/raising-your-rates">rate increase strategy</a>.</p>
    `,
  },

  'profit-margin-for-freelancers': {
    title:       'Why Freelancers Need a Profit Margin, Not Just Income',
    date:        'March 24, 2026',
    readTime:    '7 min read',
    category:    'Finance',
    description: 'Freelancers who ignore profit margin often stay busy but financially fragile. Here is why margin matters.',
    relatedIds:  ['how-to-calculate-freelance-rate', 'hidden-costs-of-freelancing', 'freelance-rate-too-low'],
    content: `
      <p>Many freelancers focus only on replacing a salary. That is not enough. A healthy business needs profit, not just revenue that disappears into taxes, expenses, and personal income. If you feel like you are always working but never getting ahead, this is usually why. The first step to fixing it is using the <a href="/calculator">RateCraft calculator</a> and turning on the profit margin input.</p>

      <h2>What profit margin actually does</h2>
      <p>Profit gives your business flexibility. It helps you survive slow periods, upgrade tools, invest in growth, and reduce financial stress. Without margin, you are one bad month away from a cash problem — even if your average income looks fine.</p>

      <h2>Why break-even is a dangerous position</h2>
      <p>If your rate only covers your current costs, one surprise expense can damage your cash flow immediately. And there are always surprise expenses — our article on <a href="/blog/hidden-costs-of-freelancing">7 hidden freelance costs</a> lists all the categories people miss. Margin absorbs those shocks.</p>

      <h2>How much margin should you target?</h2>
      <p>Most freelancers should aim for 10–20% profit margin above their baseline. This is separate from your income goal — it is the buffer that sits on top of everything else. The <a href="/calculator">RateCraft calculator</a> has a dedicated profit margin field so you can dial in exactly how much cushion you want.</p>

      <p>If you are not sure whether your current rate already reflects a real margin, read our article on <a href="/blog/freelance-rate-too-low">signs your rate is too low</a>. And if you are ready to fix the number, start with the full method in our guide on <a href="/blog/how-to-calculate-freelance-rate">calculating your freelance rate from scratch</a>.</p>
    `,
  },

  'billable-hours-guide': {
    title:       'How Many Billable Hours Can a Freelancer Realistically Work?',
    date:        'March 21, 2026',
    readTime:    '7 min read',
    category:    'Productivity',
    description: 'Stop overestimating billable time. Learn what a realistic weekly billable-hour range looks like for freelancers.',
    relatedIds:  ['how-to-calculate-freelance-rate', 'hidden-costs-of-freelancing', 'freelance-pricing-mistakes'],
    content: `
      <p>One of the biggest pricing mistakes freelancers make is overestimating billable hours. You might be available for 40 hours per week, but that does not mean 40 hours can be sold to clients. Overestimating billable hours is one of the five core <a href="/blog/freelance-pricing-mistakes">freelance pricing mistakes</a> — and it directly causes undercharging.</p>

      <h2>Why 40 billable hours is unrealistic</h2>
      <p>Freelancers also spend time on proposals, calls, admin work, revisions, invoicing, learning, and client management. Those hours are part of the job, even when they are not paid directly. Add up all your non-billable activities and you will likely find they consume 25–40% of your working week.</p>

      <h2>What realistic looks like</h2>
      <p>For most freelancers, 20 to 30 billable hours per week is a much more honest estimate. Full-time consultants with well-structured processes might reach 30–35. Very few consistently exceed that without burning out.</p>

      <h2>Why this number matters so much for pricing</h2>
      <p>Billable hours is the denominator in your rate calculation. Overestimate it and your rate comes out too low — your real income will be far below what you planned. Our guide on <a href="/blog/how-to-calculate-freelance-rate">calculating your freelance rate</a> walks through the exact formula, and our article on <a href="/blog/hidden-costs-of-freelancing">hidden costs</a> explains all the things that eat into your available hours.</p>

      <p>Use the <a href="/calculator">RateCraft rate calculator</a> with an honest billable-hour estimate to get a rate that actually reflects your real situation — not an optimistic projection that sets you up to undercharge.</p>
    `,
  },

  'quote-a-project-profitably': {
    title:       'How to Quote a Freelance Project Without Underpricing It',
    date:        'March 19, 2026',
    readTime:    '8 min read',
    category:    'Business',
    description: 'Build better project quotes using a strong pricing foundation, realistic scope, and your true hourly floor.',
    relatedIds:  ['how-to-calculate-freelance-rate', 'hourly-vs-project-pricing', 'raising-your-rates'],
    content: `
      <p>Quoting a project is one of the most high-stakes moments in freelancing. Get it wrong and you either lose the job or lock yourself into weeks of underpaid work. The foundation of every good quote is a solid hourly floor — which you can calculate with the <a href="/calculator">RateCraft rate calculator</a>.</p>

      <h2>Start with your hourly floor</h2>
      <p>Before quoting any project, you need to know your minimum viable hourly rate. That number is the foundation of every quote. Without it, you are guessing — and guessing almost always means underpricing. Our guide on <a href="/blog/how-to-calculate-freelance-rate">how to calculate your freelance rate</a> gives you the full method.</p>

      <h2>Estimate time honestly</h2>
      <p>Think through the actual tasks, not just the deliverable. Include revisions, client calls, handoff time, and any research involved. Most freelancers underestimate by 20–30%. Read our article on <a href="/blog/billable-hours-guide">realistic billable hours</a> to calibrate your estimates.</p>

      <h2>Add a scope buffer</h2>
      <p>Projects almost always take longer than planned. Adding a 15 to 20 percent time buffer protects your margin when things run over. This is especially important if you tend to be optimistic with estimates.</p>

      <h2>Understand hourly vs project trade-offs</h2>
      <p>Before deciding whether to quote hourly or as a fixed project, read our comparison of <a href="/blog/hourly-vs-project-pricing">hourly vs project pricing</a>. For most fixed-price projects, using a <a href="/blog/daily-rate-calculation">day rate</a> as the unit of estimation makes quoting faster and more consistent.</p>

      <p>As your confidence in quoting grows, you will also be in a better position to <a href="/blog/raising-your-rates">raise your rates</a> — because you will have data proving what your work is worth.</p>
    `,
  },

  'freelance-rate-too-low': {
    title:       'How to Know If Your Freelance Rate Is Too Low',
    date:        'March 16, 2026',
    readTime:    '6 min read',
    category:    'Strategy',
    description: 'If you feel busy but still broke, your rate may be the problem. Here are the clearest signs you are undercharging.',
    relatedIds:  ['how-to-calculate-freelance-rate', 'raising-your-rates', 'freelance-pricing-mistakes'],
    content: `
      <p>If you feel busy but still broke, your rate may be the problem. Many freelancers work hard and still struggle financially because their pricing does not match their actual costs. The fastest diagnostic: put your real numbers into the <a href="/calculator">RateCraft rate calculator</a> and compare the output to what you currently charge.</p>

      <h2>Warning signs your rate is too low</h2>
      <ul>
        <li>You are always fully booked but never have meaningful savings</li>
        <li>You cannot afford to take a week off without financial stress</li>
        <li>You feel resentment toward clients or projects — often a sign that the economics feel unfair</li>
        <li>You avoid checking your bank account mid-month</li>
        <li>You keep saying yes to work you should decline</li>
      </ul>

      <h2>The fix is not always more clients</h2>
      <p>More clients at a bad rate just means more of the same problem. The fix is a better rate — one built on your real numbers, not market pressure or fear. This is especially true if you have been making the <a href="/blog/freelance-pricing-mistakes">5 most common pricing mistakes</a> without realising it.</p>

      <h2>Check if you are covering your real costs</h2>
      <p>Before deciding your rate is right, make sure you are accounting for all the <a href="/blog/hidden-costs-of-freelancing">hidden costs of freelancing</a> and building in a <a href="/blog/profit-margin-for-freelancers">real profit margin</a>. Most freelancers who feel underpaid are not covering one or both of these.</p>

      <h2>What to do once you know</h2>
      <p>If the calculator confirms your rate is too low, do not panic — start with our full guide on <a href="/blog/how-to-calculate-freelance-rate">calculating your correct rate</a>, then use our guide on <a href="/blog/raising-your-rates">raising your rates without losing good clients</a> to make the transition smoothly.</p>
    `,
  },
};

/* ── BlogPost ───────────────────────────────────────────────────── */
export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post   = id ? POST_CONTENT[id] : null;

  // Navigation: prev / next within the ALL_POSTS order
  const allIds      = ALL_POSTS.map((p) => p.id);
  const currentIdx  = id ? allIds.indexOf(id) : -1;
  const prevPost    = currentIdx > 0               ? ALL_POSTS[currentIdx - 1] : null;
  const nextPost    = currentIdx < allIds.length - 1 ? ALL_POSTS[currentIdx + 1] : null;

  // Related posts from curated list
  const relatedPosts = post
    ? post.relatedIds
        .map((rid) => ALL_POSTS.find((p) => p.id === rid))
        .filter(Boolean) as typeof ALL_POSTS
    : [];

  const [copied, setCopied] = useState(false);

  // Scroll to top on post change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Copy URL to clipboard
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  /* ── 404 ─────────────────────────────────────────────── */
  if (!post) {
    return (
      <div
        style={{
          background:     'var(--color-ink-950)',
          minHeight:      '100vh',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          padding:        '2rem',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <p className="mono-label" style={{ marginBottom: '1rem' }}>404</p>
          <h1
            style={{
              fontFamily:   'var(--font-display)',
              fontSize:     '2rem',
              fontWeight:   700,
              color:        'var(--color-ink-100)',
              marginBottom: '1.5rem',
            }}
          >
            Article not found
          </h1>
          <Link
            to="/blog"
            style={{
              fontFamily:     'var(--font-mono)',
              fontSize:       '0.72rem',
              letterSpacing:  '0.1em',
              textTransform:  'uppercase',
              color:          'var(--color-brass-400)',
              textDecoration: 'none',
              border:         '1px solid var(--color-brass-600)',
              padding:        '0.7rem 1.5rem',
              display:        'inline-block',
              marginRight:    '1rem',
            }}
          >
            ← Back to journal
          </Link>
          <Link
            to="/calculator"
            style={{
              fontFamily:     'var(--font-mono)',
              fontSize:       '0.72rem',
              letterSpacing:  '0.1em',
              textTransform:  'uppercase',
              color:          'var(--color-ink-400)',
              textDecoration: 'none',
            }}
          >
            Try the calculator →
          </Link>
        </div>
      </div>
    );
  }

  /* ── Schema markup ───────────────────────────────────── */
  const articleSchema = {
    '@context':    'https://schema.org',
    '@type':       'BlogPosting',
    headline:      post.title,
    datePublished: post.date,
    description:   post.description,
    author:        { '@type': 'Organization', name: 'RateCraft' },
    publisher:     { '@type': 'Organization', name: 'RateCraft', url: 'https://ratecraft.io' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://ratecraft.io/blog/${id}` },
  };

  /* ── Render ──────────────────────────────────────────── */
  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO title={`${post.title} | RateCraft`} description={post.description}>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <link rel="canonical" href={`https://ratecraft.io/blog/${id}`} />
      </SEO>

      {/* ── Sticky top bar ───────────────────────────────── */}
      <div
        style={{
          borderBottom:   '1px solid var(--color-ink-800)',
          padding:        '0 1.5rem',
          height:         '48px',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'space-between',
          position:       'sticky',
          top:            '64px',
          zIndex:         40,
          background:     'rgba(17, 16, 9, 0.95)',
          backdropFilter: 'blur(12px)',
        }}
      >
        <Link
          to="/blog"
          style={{
            fontFamily:     'var(--font-mono)',
            fontSize:       '0.62rem',
            letterSpacing:  '0.12em',
            textTransform:  'uppercase',
            color:          'var(--color-ink-500)',
            textDecoration: 'none',
            transition:     'color 0.15s',
          }}
        >
          ← Journal
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.58rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         'var(--color-ink-700)',
            }}
          >
            {post.readTime}
          </span>

          <button
            onClick={handleShare}
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.58rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color:         copied ? 'var(--color-brass-400)' : 'var(--color-ink-600)',
              background:    'none',
              border:        'none',
              cursor:        'pointer',
              transition:    'color 0.15s',
            }}
          >
            {copied ? 'Copied ✓' : 'Share'}
          </button>
        </div>
      </div>

      {/* ── Article ──────────────────────────────────────── */}
      <article
        style={{
          maxWidth: '700px',
          margin:   '0 auto',
          padding:  '4rem 1.5rem 2rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Meta */}
          <div
            style={{
              display:      'flex',
              alignItems:   'center',
              gap:          '1rem',
              marginBottom: '2.5rem',
              flexWrap:     'wrap',
            }}
          >
            <span
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.6rem',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color:         'var(--color-brass-400)',
                border:        '1px solid rgba(212,160,23,0.25)',
                padding:       '0.2rem 0.6rem',
              }}
            >
              {post.category}
            </span>

            <span
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.6rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color:         'var(--color-ink-700)',
              }}
            >
              {post.date}
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight:    900,
              color:         'var(--color-ink-50)',
              letterSpacing: '-0.03em',
              lineHeight:    1.1,
              marginBottom:  '2.5rem',
            }}
          >
            {post.title}
          </h1>

          {/* Brass rule */}
          <div
            style={{
              width:        '3rem',
              height:       '1px',
              background:   'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))',
              marginBottom: '3rem',
            }}
          />

          {/* Body */}
          <div
            className="article-body"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* ── Calculator CTA ───────────────────────────── */}
        <div
          style={{
            marginTop:   '4rem',
            padding:     '2rem',
            background:  'var(--color-ink-900)',
            border:      '1px solid var(--color-ink-800)',
            borderLeft:  '2px solid var(--color-brass-500)',
          }}
        >
          <p
            style={{
              fontFamily:    'var(--font-mono)',
              fontSize:      '0.6rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color:         'var(--color-brass-500)',
              marginBottom:  '0.75rem',
            }}
          >
            Apply what you've learned
          </p>
          <p
            style={{
              fontFamily:    'var(--font-display)',
              fontSize:      '1.15rem',
              fontWeight:    700,
              color:         'var(--color-ink-50)',
              marginBottom:  '0.6rem',
              letterSpacing: '-0.01em',
            }}
          >
            Find your actual rate in under a minute
          </p>
          <p
            style={{
              fontFamily:   'var(--font-sans)',
              fontSize:     '0.875rem',
              fontWeight:   300,
              color:        'var(--color-ink-300)',
              lineHeight:   1.7,
              marginBottom: '1.25rem',
            }}
          >
            Use the RateCraft calculator to get a number based on your real costs,
            taxes, and goals — not guesswork.
          </p>
          <Link
            to="/calculator"
            style={{
              fontFamily:     'var(--font-mono)',
              fontSize:       '0.72rem',
              letterSpacing:  '0.1em',
              textTransform:  'uppercase',
              padding:        '0.7rem 1.5rem',
              background:     'var(--color-brass-500)',
              color:          'var(--color-ink-950)',
              textDecoration: 'none',
              display:        'inline-block',
              fontWeight:     500,
            }}
          >
            Open Calculator →
          </Link>
        </div>

        {/* ── Related posts ────────────────────────────── */}
        {relatedPosts.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <p
              style={{
                fontFamily:    'var(--font-mono)',
                fontSize:      '0.62rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color:         'var(--color-ink-500)',
                marginBottom:  '1.25rem',
              }}
            >
              Related Articles
            </p>

            <div
              style={{
                display:       'flex',
                flexDirection: 'column',
                gap:           '2px',
                background:    'var(--color-ink-800)',
              }}
            >
              {relatedPosts.map((related) => (
                <RelatedPostLink key={related.id} post={related} />
              ))}
            </div>
          </div>
        )}

        {/* ── Prev / Next navigation ───────────────────── */}
        <div
          style={{
            marginTop:           '3rem',
            display:             'grid',
            gridTemplateColumns: '1fr 1fr',
            gap:                 '2px',
            background:          'var(--color-ink-800)',
          }}
        >
          {prevPost ? (
            <PrevNextLink post={prevPost} direction="prev" />
          ) : (
            <div style={{ background: 'var(--color-ink-950)' }} />
          )}

          {nextPost ? (
            <PrevNextLink post={nextPost} direction="next" />
          ) : (
            <div style={{ background: 'var(--color-ink-950)' }} />
          )}
        </div>
      </article>

      {/* ── Footer breadcrumb ────────────────────────────── */}
      <div
        style={{
          maxWidth: '700px',
          margin:   '0 auto',
          padding:  '2rem 1.5rem 5rem',
          display:  'flex',
          gap:      '1.5rem',
          flexWrap: 'wrap',
        }}
      >
        <Link
          to="/blog"
          style={{
            fontFamily:     'var(--font-mono)',
            fontSize:       '0.62rem',
            letterSpacing:  '0.1em',
            textTransform:  'uppercase',
            color:          'var(--color-ink-600)',
            textDecoration: 'none',
          }}
        >
          ← All articles
        </Link>
        <Link
          to="/calculator"
          style={{
            fontFamily:     'var(--font-mono)',
            fontSize:       '0.62rem',
            letterSpacing:  '0.1em',
            textTransform:  'uppercase',
            color:          'var(--color-ink-600)',
            textDecoration: 'none',
          }}
        >
          Rate calculator
        </Link>
        <Link
          to="/about"
          style={{
            fontFamily:     'var(--font-mono)',
            fontSize:       '0.62rem',
            letterSpacing:  '0.1em',
            textTransform:  'uppercase',
            color:          'var(--color-ink-600)',
            textDecoration: 'none',
          }}
        >
          About RateCraft
        </Link>
      </div>
    </div>
  );
}

/* ── Sub-components ────────────────────────────────────────────── */

function RelatedPostLink({ post }: { post: typeof ALL_POSTS[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/blog/${post.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:     hovered ? 'var(--color-ink-800)' : 'var(--color-ink-900)',
        padding:        '1.1rem 1.5rem',
        textDecoration: 'none',
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        gap:            '1rem',
        transition:     'background 0.15s',
      }}
    >
      <span
        style={{
          fontFamily:    'var(--font-display)',
          fontSize:      '0.9rem',
          fontWeight:    700,
          color:         'var(--color-ink-200)',
          lineHeight:    1.3,
        }}
      >
        {post.title}
      </span>
      <span
        style={{
          fontFamily:  'var(--font-mono)',
          fontSize:    '0.65rem',
          color:       'var(--color-brass-500)',
          flexShrink:  0,
        }}
      >
        →
      </span>
    </Link>
  );
}

function PrevNextLink({
  post,
  direction,
}: {
  post:      typeof ALL_POSTS[0];
  direction: 'prev' | 'next';
}) {
  const [hovered, setHovered] = useState(false);
  const isPrev = direction === 'prev';

  return (
    <Link
      to={`/blog/${post.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:     hovered ? 'var(--color-ink-800)' : 'var(--color-ink-900)',
        padding:        '1.5rem',
        textDecoration: 'none',
        textAlign:      isPrev ? 'left' : 'right',
        transition:     'background 0.2s',
      }}
    >
      <p
        style={{
          fontFamily:    'var(--font-mono)',
          fontSize:      '0.56rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color:         'var(--color-ink-700)',
          marginBottom:  '0.5rem',
        }}
      >
        {isPrev ? '← Previous' : 'Next →'}
      </p>
      <p
        style={{
          fontFamily:    'var(--font-display)',
          fontSize:      '0.9rem',
          fontWeight:    700,
          color:         'var(--color-ink-300)',
          lineHeight:    1.3,
        }}
      >
        {post.title}
      </p>
    </Link>
  );
}