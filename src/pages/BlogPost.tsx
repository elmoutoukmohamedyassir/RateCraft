import React, { useState, useEffect } from 'react';
import { Link, useParams }            from 'react-router-dom';
import { motion }                     from 'motion/react';
import { SEO }                        from '../components/SEO';
import { ALL_POSTS, CATEGORY_COLORS } from './BlogIndex';

interface PostData {
  title:       string;
  date:        string;
  readTime:    string;
  category:    string;
  description: string;
  content:     string;
  relatedIds:  string[];
}

const SITE_URL = 'https://www.ratecrafts.com';

const POST_CONTENT: Record<string, PostData> = {

  'how-to-calculate-freelance-rate': {
    title: 'How to Calculate Your Freelance Rate: A Step-by-Step Guide',
    date: 'April 5, 2026', readTime: '10 min read', category: 'Strategy',
    description: 'Learn how to calculate a sustainable freelance hourly rate using income goals, taxes, expenses, billable hours, and profit margin.',
    relatedIds: ['hidden-costs-of-freelancing', 'billable-hours-guide', 'freelance-pricing-mistakes'],
    content: `
      <p>Setting your freelance rate is one of the most important business decisions you will make. Charge too little and you stay busy without building real income. The solution is not to guess — it is to calculate a rate that supports your business properly.</p>
      <p>Many freelancers start by copying prices from marketplaces. That approach leads to underpricing because it ignores your taxes, expenses, unpaid admin, and profit margin. Use the <a href="/calculator">RateCrafts freelance rate calculator</a> to get a number based on your actual situation.</p>
      <h2>Why most freelancers undercharge</h2>
      <p>The biggest pricing mistake is assuming all working hours are billable. In reality, you also spend time on emails, calls, revisions, proposals, invoicing, and marketing. See our guide on <a href="/blog/billable-hours-guide">how many billable hours are realistic</a>.</p>
      <ul>
        <li><strong>Taxes:</strong> a portion of your revenue does not belong to you.</li>
        <li><strong>Expenses:</strong> software, hosting, equipment. See <a href="/blog/hidden-costs-of-freelancing">7 hidden costs of freelancing</a>.</li>
        <li><strong>Non-billable time:</strong> not every hour worked becomes paid time.</li>
        <li><strong>Profit:</strong> without margin, your business stays fragile. See <a href="/blog/profit-margin-for-freelancers">why profit margin matters</a>.</li>
      </ul>
      <h2>The basic formula</h2>
      <p><strong>(Desired income + expenses + tax buffer + profit margin) ÷ billable hours = hourly rate</strong></p>
      <p>This is exactly what the <a href="/calculator">RateCrafts hourly rate calculator</a> computes. Once you have your rate, use the <a href="/project-calculator">project pricing calculator</a> to quote entire projects confidently.</p>
      <h2>Step 1: Set your income goal</h2>
      <p>Start with how much you want to earn each month after covering business costs.</p>
      <h2>Step 2: Add expenses</h2>
      <p>Design tools, domains, hosting, accounting software, hardware. See the <a href="/blog/hidden-costs-of-freelancing">full breakdown of hidden freelance costs</a>.</p>
      <h2>Step 3: Include taxes</h2>
      <p>Even a rough percentage is much better than ignoring taxes entirely. Most freelancers use 25–30% as a starting estimate.</p>
      <h2>Step 4: Estimate billable hours honestly</h2>
      <p>A realistic range is 20–30 hours per week. Read our <a href="/blog/best-billable-hours-for-freelancers">guide to optimal billable hours</a> to calibrate your estimate.</p>
      <h2>Step 5: Add profit margin</h2>
      <p>A profit margin creates breathing space for savings, better tools, slow months, and growth. See <a href="/blog/profit-margin-for-freelancers">why freelancers need profit margin</a>.</p>
      <blockquote>"A good freelance rate is not based on hope. It is based on math."</blockquote>
      <p>Avoid the mistakes covered in <a href="/blog/freelance-pricing-mistakes">5 freelance pricing mistakes</a>, and use the <a href="/project-calculator">project pricing calculator</a> to convert your hourly rate into full project quotes.</p>
    `,
  },

  'hourly-vs-project-pricing': {
    title: 'Hourly vs Project Pricing: Which Model Is Better for Freelancers?',
    date: 'April 4, 2026', readTime: '9 min read', category: 'Pricing',
    description: 'Compare hourly and project pricing models to see which works better for your freelance services, client type, and profit goals.',
    relatedIds: ['how-to-calculate-freelance-rate', 'quote-a-project-profitably', 'daily-rate-calculation'],
    content: `
      <p>One of the biggest pricing decisions freelancers face is whether to charge by the hour or by the project. Both models work — but for very different business situations. Your starting point should be a solid hourly floor from the <a href="/calculator">RateCrafts rate calculator</a>.</p>
      <h2>When hourly pricing makes sense</h2>
      <p>Hourly pricing works well when scope is unclear, revisions are unpredictable, or you are still learning how long your work actually takes. It is also easier for beginners. See our guide on <a href="/blog/beginner-freelancer-rate">how much beginner freelancers should charge</a>.</p>
      <h2>When project pricing makes sense</h2>
      <p>Project pricing becomes stronger when you can estimate work confidently and charge for value rather than time. Use the <a href="/project-calculator">project pricing calculator</a> to build quotes that include revisions, buffer, and profit margin in one number.</p>
      <h2>The risk of hourly pricing</h2>
      <p>If you get faster, hourly pricing limits your upside. Clients may also focus on hours rather than outcomes.</p>
      <h2>The risk of project pricing</h2>
      <p>If scope is vague, a project can become far less profitable than expected. A strong hourly floor still matters even when you sell projects. See our guide on <a href="/blog/quote-a-project-profitably">quoting projects profitably</a>.</p>
      <h2>The hybrid approach</h2>
      <p>Most experienced freelancers estimate internally using their hourly rate, then present clients with a fixed project price. Calculate your hourly floor with the <a href="/calculator">rate calculator</a>, build your day rate (see <a href="/blog/daily-rate-calculation">converting hourly to day rate</a>), then use the <a href="/project-calculator">project pricing calculator</a> for full project quotes.</p>
    `,
  },

  'hidden-costs-of-freelancing': {
    title: '7 Hidden Costs of Freelancing That Destroy Profit Margins',
    date: 'April 2, 2026', readTime: '8 min read', category: 'Finance',
    description: 'From taxes to software bloat and non-billable time, discover the hidden costs freelancers forget when setting their rates.',
    relatedIds: ['how-to-calculate-freelance-rate', 'profit-margin-for-freelancers', 'freelance-pricing-mistakes'],
    content: `
      <p>Many freelancers think their rate only needs to cover living expenses and a bit of tax. That is rarely enough. Run your real numbers through the <a href="/calculator">RateCrafts calculator</a> and include every category below.</p>
      <h2>1. Taxes</h2>
      <p>The biggest surprise for new freelancers. If you do not include a tax buffer, your real take-home pay will be far lower than expected. This is the first input in the <a href="/calculator">rate calculator</a> for a reason.</p>
      <h2>2. Software subscriptions</h2>
      <p>Design tools, AI subscriptions, invoicing software — individually cheap, collectively expensive. Add them all up before setting your rate.</p>
      <h2>3. Equipment replacement</h2>
      <p>Your laptop and hardware will need replacing. One hardware failure without a replacement budget can wipe out a month of profit.</p>
      <h2>4. Unpaid admin work</h2>
      <p>Proposals, calls, revisions, invoicing, sales — all real work that does not show up as billable hours. See our guide on <a href="/blog/billable-hours-guide">realistic billable hours</a>.</p>
      <h2>5. Payment processing fees</h2>
      <p>Platform fees add up over a year. Account for them in your pricing.</p>
      <h2>6. Slow months</h2>
      <p>A healthy rate should leave margin for quieter periods. This is why the <a href="/blog/profit-margin-for-freelancers">profit margin buffer</a> matters so much.</p>
      <h2>7. Growth and learning</h2>
      <p>Courses, books, and certifications are legitimate business costs — build them in from day one.</p>
      <blockquote>"If your rate only covers today, your business will struggle tomorrow."</blockquote>
      <p>Learn to avoid the <a href="/blog/freelance-pricing-mistakes">5 most common pricing mistakes</a> and use the <a href="/project-calculator">project pricing calculator</a> to build quotes that account for these costs at the project level.</p>
    `,
  },

  'freelance-pricing-mistakes': {
    title: '5 Freelance Pricing Mistakes That Keep You Underpaid',
    date: 'April 1, 2026', readTime: '7 min read', category: 'Pricing',
    description: 'These 5 common pricing mistakes quietly destroy freelance income. Learn how to spot and fix them with real math.',
    relatedIds: ['how-to-calculate-freelance-rate', 'freelance-rate-too-low', 'hidden-costs-of-freelancing'],
    content: `
      <p>Most freelance underpricing is not caused by lack of skill. It is caused by avoidable mistakes. Fix them by running your real numbers through the <a href="/calculator">RateCrafts rate calculator</a>.</p>
      <h2>1. Charging what feels comfortable</h2>
      <p>Comfort-based pricing is fear-based pricing. If you are not sure whether your number is already too low, see <a href="/blog/freelance-rate-too-low">signs your rate is too low</a>.</p>
      <h2>2. Ignoring taxes and expenses</h2>
      <p>Your revenue is not your real income. See our breakdown of <a href="/blog/hidden-costs-of-freelancing">7 hidden freelance costs</a>.</p>
      <h2>3. Overestimating billable hours</h2>
      <p>40 billable hours a week is rarely realistic. See <a href="/blog/best-billable-hours-for-freelancers">the best billable hours target for freelancers</a>.</p>
      <h2>4. Copying competitor rates blindly</h2>
      <p>Another freelancer's rate reflects their country, client base, and cost structure — not yours. The only rate that matters comes from your actual costs — use <a href="/calculator">RateCrafts</a> to find it.</p>
      <h2>5. Leaving no room for profit</h2>
      <p>Break-even is not a safe position. See <a href="/blog/profit-margin-for-freelancers">why freelancers need profit margin</a> and use the <a href="/project-calculator">project pricing calculator</a> to carry correct margin through to every quote.</p>
    `,
  },

  'beginner-freelancer-rate': {
    title: 'How Much Should a Beginner Freelancer Charge?',
    date: 'March 30, 2026', readTime: '8 min read', category: 'Beginner',
    description: 'A practical guide to setting your first freelance rate without guessing, panicking, or underpricing your work.',
    relatedIds: ['how-to-calculate-freelance-rate', 'freelance-pricing-mistakes', 'billable-hours-guide'],
    content: `
      <p>The fear of losing clients pushes beginners to set rates too low. But low pricing attracts wrong clients and makes it hard to build a real business. Use the <a href="/calculator">RateCrafts free rate calculator</a> to set a minimum based on your actual costs.</p>
      <h2>Being new does not mean underpricing</h2>
      <p>Your rate needs to reflect the cost of running a viable business — not your experience level. Even a beginner has taxes, tools, and living costs.</p>
      <h2>What beginners should include</h2>
      <ul>
        <li>Your income goal — what you actually need to live and save</li>
        <li>Estimated taxes — see our <a href="/blog/freelance-tax-guide">freelance tax guide</a></li>
        <li>Basic expenses — tools, software, internet, phone</li>
        <li>Realistic billable hours — see <a href="/blog/billable-hours-guide">how many hours are actually billable</a></li>
        <li>A small profit buffer — see <a href="/blog/profit-margin-for-freelancers">why profit margin matters</a></li>
      </ul>
      <h2>Start with a floor, not a fantasy</h2>
      <p>The <a href="/calculator">RateCrafts calculator</a> gives you a defensible minimum. Once you have your floor, avoid the <a href="/blog/freelance-pricing-mistakes">5 most common beginner pricing mistakes</a> and use the <a href="/project-calculator">project pricing calculator</a> to build your first project quotes.</p>
    `,
  },

  'raising-your-rates': {
    title: 'How to Raise Your Freelance Rates Without Losing Good Clients',
    date: 'March 28, 2026', readTime: '8 min read', category: 'Business',
    description: 'Raise your freelance prices professionally, communicate value clearly, and keep strong client relationships intact.',
    relatedIds: ['how-to-calculate-freelance-rate', 'freelance-rate-too-low', 'quote-a-project-profitably'],
    content: `
      <p>Raising your rates is one of the fastest ways to grow your income without working more hours. Before raising your rate, confirm your new number in the <a href="/calculator">RateCrafts calculator</a> — not just a gut feel.</p>
      <h2>Why raising your rates matters</h2>
      <p>Better skills and more experience should be reflected in your rates. Check first whether your current rate is already too low — see <a href="/blog/freelance-rate-too-low">signs your rate is too low</a>.</p>
      <h2>Give notice early</h2>
      <p>Give at least four to six weeks notice so clients can plan their budgets. This signals professionalism.</p>
      <h2>Focus on value delivered</h2>
      <p>Explain the results you now deliver, not your personal cost increases. Clients respond to outcomes.</p>
      <h2>Use it as a positioning filter</h2>
      <p>A rate increase identifies which clients truly value your work. Long-term this makes your business stronger.</p>
      <blockquote>"A rate increase is not just more money. It is a shift toward better-fit clients."</blockquote>
      <p>Use the <a href="/calculator">hourly rate calculator</a> to establish your new floor and the <a href="/project-calculator">project pricing calculator</a> to build quotes at your new rate. For more on the full method, see <a href="/blog/how-to-raise-your-rates">the professional playbook for raising rates</a>.</p>
    `,
  },

  'daily-rate-calculation': {
    title: 'How to Convert an Hourly Rate Into a Professional Day Rate',
    date: 'March 27, 2026', readTime: '6 min read', category: 'Pricing',
    description: 'Learn how to turn your hourly baseline into a clean, client-friendly day rate for consulting and freelance services.',
    relatedIds: ['how-to-calculate-freelance-rate', 'hourly-vs-project-pricing', 'quote-a-project-profitably'],
    content: `
      <p>Some clients prefer day rates — especially in consulting, design, and strategy. Start by calculating your hourly rate with the <a href="/calculator">RateCrafts rate calculator</a>, then apply the method below.</p>
      <h2>The simple conversion</h2>
      <p><strong>Hourly rate × billable hours per day = day rate</strong></p>
      <p>Most freelancers use 6–8 billable hours per day. Be realistic — see our guide on <a href="/blog/best-billable-hours-for-freelancers">the optimal billable hours target</a>.</p>
      <h2>When to use a day rate vs a project rate</h2>
      <p>See our comparison of <a href="/blog/hourly-vs-project-pricing">hourly vs project pricing</a>. For defined deliverables with revisions, the <a href="/project-calculator">project pricing calculator</a> gives you a more precise number that builds in buffer and tax automatically.</p>
      <p>Establish your hourly floor with the <a href="/calculator">RateCrafts calculator</a>, then use the <a href="/project-calculator">project calculator</a> for full project quotes. See also: <a href="/blog/freelance-rate-vs-salary">freelance rate vs salary conversion</a>.</p>
    `,
  },

  'profit-margin-for-freelancers': {
    title: 'Why Freelancers Need a Profit Margin, Not Just Income',
    date: 'March 24, 2026', readTime: '7 min read', category: 'Finance',
    description: 'Freelancers who ignore profit margin often stay busy but financially fragile. Here is why margin matters more than revenue.',
    relatedIds: ['how-to-calculate-freelance-rate', 'hidden-costs-of-freelancing', 'freelance-rate-too-low'],
    content: `
      <p>Many freelancers focus only on replacing a salary. A healthy business needs profit — not just revenue that disappears into taxes and expenses. Fix it by enabling the profit margin input in the <a href="/calculator">RateCrafts calculator</a>.</p>
      <h2>What profit margin actually does</h2>
      <p>Profit gives your business flexibility — survive slow periods, upgrade tools, invest in growth, reduce financial stress.</p>
      <h2>Why break-even is dangerous</h2>
      <p>One surprise expense damages your cash flow immediately. And there are always surprises — see <a href="/blog/hidden-costs-of-freelancing">7 hidden costs of freelancing</a>.</p>
      <h2>How much to target</h2>
      <p>Most freelancers should aim for 10–20% above their baseline. Both the <a href="/calculator">hourly rate calculator</a> and the <a href="/project-calculator">project pricing calculator</a> include dedicated profit margin fields.</p>
      <p>Not sure whether your current rate reflects real margin? See <a href="/blog/freelance-rate-too-low">signs your rate is too low</a> and learn <a href="/blog/how-to-calculate-freelance-rate">how to calculate your rate correctly</a>.</p>
    `,
  },

  'billable-hours-guide': {
    title: 'How Many Billable Hours Can a Freelancer Realistically Work?',
    date: 'March 21, 2026', readTime: '7 min read', category: 'Productivity',
    description: 'Stop overestimating billable time. Learn what a realistic weekly billable-hour range looks like and why it matters for your rate.',
    relatedIds: ['how-to-calculate-freelance-rate', 'hidden-costs-of-freelancing', 'freelance-pricing-mistakes'],
    content: `
      <p>One of the biggest pricing mistakes is overestimating billable hours. 40 hours a week available does not mean 40 billable hours. This is one of the core <a href="/blog/freelance-pricing-mistakes">freelance pricing mistakes</a> that directly causes undercharging.</p>
      <h2>Why 40 billable hours is unrealistic</h2>
      <p>Proposals, calls, admin, revisions, invoicing, and learning consume 25–40% of your working week. See <a href="/blog/hidden-costs-of-freelancing">hidden costs of freelancing</a> for the full picture.</p>
      <h2>What realistic looks like</h2>
      <p>For most freelancers, 20–30 billable hours per week is honest. See our dedicated guide on <a href="/blog/best-billable-hours-for-freelancers">the best billable hours target</a>.</p>
      <h2>Why this number matters</h2>
      <p>Billable hours is the denominator in your rate calculation. Overestimate it and your rate comes out too low. The <a href="/calculator">RateCrafts rate calculator</a> uses your honest estimate to produce an accurate floor. At the project level, the <a href="/project-calculator">project pricing calculator</a> lets you estimate project hours directly.</p>
    `,
  },

  'quote-a-project-profitably': {
    title: 'How to Quote a Freelance Project Without Underpricing It',
    date: 'March 19, 2026', readTime: '8 min read', category: 'Business',
    description: 'Build better freelance project quotes using a strong pricing foundation, realistic scope, and your true hourly floor.',
    relatedIds: ['how-to-calculate-freelance-rate', 'hourly-vs-project-pricing', 'raising-your-rates'],
    content: `
      <p>Quoting a project wrong locks you into weeks of underpaid work. The foundation of every good quote is a solid hourly floor from the <a href="/calculator">RateCrafts rate calculator</a> — then use the <a href="/project-calculator">project pricing calculator</a> to build the full quote.</p>
      <h2>Start with your hourly floor</h2>
      <p>Without it, you are guessing. See our guide on <a href="/blog/how-to-calculate-freelance-rate">how to calculate your freelance rate</a>.</p>
      <h2>Estimate time honestly</h2>
      <p>Include revisions, calls, handoff, and research. Most freelancers underestimate by 20–30%. See <a href="/blog/billable-hours-guide">realistic billable hours</a>.</p>
      <h2>Add a scope buffer</h2>
      <p>Projects almost always take longer than planned. A 15–20% buffer is standard. The <a href="/project-calculator">project calculator</a> has a dedicated buffer field.</p>
      <h2>Include revisions explicitly</h2>
      <p>Unlimited revisions destroy profit. Price revision rounds explicitly. The <a href="/project-calculator">project calculator</a> calculates revision cost automatically. See our template in <a href="/blog/freelance-project-pricing-template">the freelance project pricing template</a>.</p>
    `,
  },

  'freelance-rate-too-low': {
    title: 'How to Know If Your Freelance Rate Is Too Low',
    date: 'March 16, 2026', readTime: '6 min read', category: 'Strategy',
    description: 'If you feel busy but still broke, your rate may be the problem. Here are the clearest signs you are undercharging right now.',
    relatedIds: ['how-to-calculate-freelance-rate', 'raising-your-rates', 'freelance-pricing-mistakes'],
    content: `
      <p>If you feel busy but still broke, your rate may be the problem. The fastest diagnostic: put your real numbers into the <a href="/calculator">RateCrafts rate calculator</a> and compare the output to what you currently charge.</p>
      <h2>Warning signs your rate is too low</h2>
      <ul>
        <li>Always fully booked but never have meaningful savings</li>
        <li>Cannot afford to take a week off without financial stress</li>
        <li>Feel resentment toward clients or projects</li>
        <li>Avoid checking your bank account mid-month</li>
        <li>Keep saying yes to work you should decline</li>
      </ul>
      <h2>The fix is not more clients</h2>
      <p>More clients at a bad rate just means more of the same problem. See the <a href="/blog/freelance-pricing-mistakes">5 most common pricing mistakes</a> and check whether you are covering your <a href="/blog/hidden-costs-of-freelancing">real freelance costs</a>.</p>
      <h2>What to do</h2>
      <p>Start with the full guide on <a href="/blog/how-to-calculate-freelance-rate">calculating your correct rate</a>, then use our guide on <a href="/blog/raising-your-rates">raising your rates professionally</a>. Apply your new rate to future projects immediately using the <a href="/project-calculator">project pricing calculator</a>.</p>
    `,
  },

  'how-to-price-a-freelance-project': {
    title: 'How to Price a Freelance Project: A Complete Guide',
    date: 'April 8, 2026', readTime: '11 min read', category: 'Business',
    description: 'Stop guessing on project quotes. This complete guide shows you how to price any freelance project profitably from first principles.',
    relatedIds: ['quote-a-project-profitably', 'freelance-project-pricing-template', 'hourly-vs-project-pricing'],
    content: `
      <p>Project pricing is where most freelancers leak money. A well-structured project quote is the difference between a profitable engagement and weeks of underpaid work. This guide covers the complete method — start by finding your hourly floor with the <a href="/calculator">RateCrafts rate calculator</a>, then build your project price with the <a href="/project-calculator">project pricing calculator</a>.</p>
      <h2>Why project pricing is different from hourly pricing</h2>
      <p>When you charge by the hour, your income is capped by your time. Project pricing lets you charge for outcomes and value — but only if you build the quote correctly. See our comparison of <a href="/blog/hourly-vs-project-pricing">hourly vs project pricing</a> for context.</p>
      <h2>Step 1: Establish your hourly floor</h2>
      <p>Every project price is built on an hourly rate. Without a solid floor, your project price will be wrong. Use the <a href="/calculator">RateCrafts calculator</a> to find your minimum viable rate based on your income goal, taxes, expenses, and realistic billable hours.</p>
      <h2>Step 2: Break the project into phases</h2>
      <p>Before you can price anything, you need to understand the scope. Break the project into phases: discovery, design or development, delivery, revisions. Estimate hours for each phase separately — combined estimates are almost always optimistic.</p>
      <h2>Step 3: Add revision rounds</h2>
      <p>Revisions are one of the most commonly underpriced elements of a project. Specify how many rounds are included, how many hours each round takes, and what happens if the client exceeds them. The <a href="/project-calculator">project pricing calculator</a> calculates revision costs automatically.</p>
      <h2>Step 4: Apply a scope buffer</h2>
      <p>Projects almost always take longer than planned. A 15–25% buffer absorbs scope creep, unclear briefs, and client-side delays. This is not padding — it is professional risk management. See our <a href="/blog/freelance-project-pricing-template">project pricing template</a> for how to structure this in a quote.</p>
      <h2>Step 5: Add tax and profit margin</h2>
      <p>A project price that covers costs but leaves no profit means you are working at break-even. Add a 10–20% profit margin on top of your buffered subtotal, plus the tax component. Both fields are built into the <a href="/project-calculator">project pricing calculator</a>.</p>
      <h2>Step 6: Present the price with confidence</h2>
      <p>Once you have a number you can defend, present it clearly and without apology. Clients who push back heavily on a well-calculated price are often not the right clients. See our guide on <a href="/blog/raising-your-rates">raising your rates professionally</a> for how to handle rate conversations.</p>
      <blockquote>"A project quote is not a guess. It is a structured calculation with your business interests built in."</blockquote>
      <p>Use the <a href="/project-calculator">project pricing calculator</a> to apply this method to your next quote, and the <a href="/blog/freelance-project-pricing-template">pricing template</a> to see a complete example.</p>
    `,
  },

  'freelance-project-pricing-template': {
    title: 'Freelance Project Pricing Template: What to Include in Every Quote',
    date: 'April 7, 2026', readTime: '9 min read', category: 'Business',
    description: 'A structured template for building freelance project quotes that account for revisions, scope creep, taxes, and profit margin.',
    relatedIds: ['how-to-price-a-freelance-project', 'quote-a-project-profitably', 'project-calculator'],
    content: `
      <p>A good project quote is not just a number — it is a structured document that protects you and communicates professionalism. This template gives you the exact components to include in every freelance project quote. Use the <a href="/project-calculator">RateCrafts project pricing calculator</a> to generate the numbers, then structure them using this template.</p>
      <h2>Section 1: Project scope summary</h2>
      <p>Open with a clear, concise summary of what is included in the project. One to three paragraphs. This protects you from scope creep and ensures both parties have the same expectations before money changes hands.</p>
      <h2>Section 2: Deliverables list</h2>
      <p>An explicit list of what you will deliver — not vague descriptions, but concrete outputs. For a web design project this might be: homepage design, three inner page templates, mobile responsive layouts, and exported assets. For copywriting: five blog posts of 1,200 words each.</p>
      <h2>Section 3: Project phases and timeline</h2>
      <p>Break the work into phases with estimated durations: discovery (1 week), design (2 weeks), review and revisions (1 week), final delivery (3 days). This sets client expectations and gives you a structure to bill against if anything changes.</p>
      <h2>Section 4: Revision policy</h2>
      <p>Specify exactly how many rounds of revisions are included and what constitutes a revision round. For example: "Two rounds of revisions are included. Each round covers one consolidated set of feedback. Additional rounds are billed at £X per round." Use the <a href="/project-calculator">project calculator</a> to price revisions correctly from the start.</p>
      <h2>Section 5: Pricing breakdown</h2>
      <p>The financial section should include: base project cost, revision cost, scope buffer, and your final total. Do not hide the buffer — clients respect transparency. A typical structure looks like this:</p>
      <ul>
        <li>Base project work: [hours] × [hourly rate]</li>
        <li>Revision rounds: [rounds] × [hours/round] × [hourly rate]</li>
        <li>Scope and complexity buffer: [buffer %]</li>
        <li>Total project investment: [final price including tax and margin]</li>
      </ul>
      <h2>Section 6: Payment terms</h2>
      <p>Be explicit: 50% upfront, 50% on delivery is a common structure. Monthly retainer? Weekly? Include your late payment terms. These terms protect your cash flow — see our <a href="/blog/profit-margin-for-freelancers">guide to profit margin</a> for why cash flow management matters.</p>
      <h2>Section 7: What is not included</h2>
      <p>An explicit "not included" list prevents future disputes. Stock imagery, third-party tool costs, translations, printing, and paid advertising are common exclusions that clients often assume are included unless you say otherwise.</p>
      <h2>Putting it together</h2>
      <p>Build your numbers first with the <a href="/project-calculator">project pricing calculator</a>, then structure them using this template. For the underlying hourly rate, use the <a href="/calculator">RateCrafts hourly rate calculator</a>. See also our complete guide on <a href="/blog/how-to-price-a-freelance-project">how to price a freelance project</a>.</p>
    `,
  },

  'how-much-to-charge-per-hour': {
    title: 'How Much Should a Freelancer Charge Per Hour? (2026 Guide)',
    date: 'April 6, 2026', readTime: '10 min read', category: 'Strategy',
    description: 'Not sure what to charge? This guide breaks down how to calculate a freelance hourly rate based on your real costs and income goals.',
    relatedIds: ['how-to-calculate-freelance-rate', 'freelance-rate-too-low', 'billable-hours-guide'],
    content: `
      <p>The question every new freelancer asks — and many experienced ones never answer properly: how much should I charge per hour? The honest answer is: it depends entirely on your costs, income goals, and realistic working capacity. Use the <a href="/calculator">RateCrafts calculator</a> to get a number specific to your situation, not a generic market average.</p>
      <h2>Why generic rate guides are misleading</h2>
      <p>You will find countless articles claiming "freelance developers charge £50–£150/hr" or "copywriters average $75–$150/hr." These numbers are meaningless without context. A developer in London has very different costs to a developer in Lisbon. A full-time freelancer working 30 billable hours a week has a very different floor to someone freelancing part-time.</p>
      <p>The only rate that matters is one calculated from your own numbers — see our guide on <a href="/blog/how-to-calculate-freelance-rate">how to calculate your freelance rate step by step</a>.</p>
      <h2>What goes into an hourly rate calculation</h2>
      <p>A correct hourly rate must cover:</p>
      <ul>
        <li><strong>Your income goal:</strong> what you want to take home after all costs</li>
        <li><strong>Taxes:</strong> self-employment tax plus income tax. Most freelancers should include 25–35%. See our <a href="/blog/freelance-tax-guide">freelance tax guide</a> for your specific situation.</li>
        <li><strong>Business expenses:</strong> software, hardware, internet, insurance, and everything else. See the full list in <a href="/blog/hidden-costs-of-freelancing">7 hidden costs of freelancing</a>.</li>
        <li><strong>Realistic billable hours:</strong> most freelancers bill 20–30 hours per week. See <a href="/blog/best-billable-hours-for-freelancers">the best billable hours target</a>.</li>
        <li><strong>Profit margin:</strong> a buffer for growth and stability. See <a href="/blog/profit-margin-for-freelancers">why profit margin matters</a>.</li>
      </ul>
      <h2>Typical ranges by profession (2026)</h2>
      <p>These are illustrative ranges only — your actual rate depends on your personal calculation:</p>
      <ul>
        <li>Freelance web developer: $65–$200/hr (junior to senior)</li>
        <li>UI/UX designer: $60–$180/hr</li>
        <li>Copywriter / content writer: $40–$150/hr</li>
        <li>Marketing consultant: $75–$250/hr</li>
        <li>Virtual assistant: $25–$75/hr</li>
        <li>Project manager: $60–$150/hr</li>
      </ul>
      <p>If your calculated rate falls below these ranges, re-check your inputs. If it falls above, that is a good sign — it means your cost structure demands a premium rate and you should price accordingly.</p>
      <h2>Signs your current rate is already too low</h2>
      <p>If you are always fully booked but never building savings, see our article on <a href="/blog/freelance-rate-too-low">how to know if your freelance rate is too low</a>. If you need to increase it, see the <a href="/blog/how-to-raise-your-rates">professional playbook for raising rates</a>.</p>
      <h2>From hourly rate to project price</h2>
      <p>Once you have your hourly floor, the <a href="/project-calculator">RateCrafts project pricing calculator</a> lets you build complete project quotes — including revisions, buffer, tax, and profit margin — in one calculation.</p>
    `,
  },

  'freelance-rate-calculator-uk': {
    title: 'Freelance Rate Calculator UK: How to Set Your Rate in Britain',
    date: 'April 9, 2026', readTime: '9 min read', category: 'Strategy',
    description: 'UK freelancers face unique tax rules and market rates. Here is how to calculate a sustainable hourly rate in the British market.',
    relatedIds: ['how-to-calculate-freelance-rate', 'freelance-tax-guide', 'hidden-costs-of-freelancing'],
    content: `
      <p>UK freelancers face a specific set of tax rules, NI contributions, and market dynamics that make generic rate calculators unreliable. This guide explains the UK-specific factors to include in your rate calculation. Use the <a href="/calculator">RateCrafts rate calculator</a> and adjust the tax percentage to reflect your UK tax situation.</p>
      <h2>UK self-employment tax overview</h2>
      <p>As a self-employed person in the UK, you pay:</p>
      <ul>
        <li><strong>Income Tax:</strong> 20% on profits above your Personal Allowance (£12,570 in 2026), 40% above £50,270</li>
        <li><strong>National Insurance Class 4:</strong> 9% on profits between £12,570 and £50,270, 2% above</li>
        <li><strong>National Insurance Class 2:</strong> flat rate if your profits exceed the Small Profits Threshold</li>
      </ul>
      <p>For most UK freelancers earning £30,000–£80,000, a combined tax and NI provision of 28–35% is a reasonable estimate to use in the <a href="/calculator">rate calculator</a>. See our full <a href="/blog/freelance-tax-guide">freelance tax guide</a> for detailed breakdowns.</p>
      <h2>UK-specific business expenses to include</h2>
      <p>HMRC allows you to deduct legitimate business expenses before calculating your tax bill. Include these in the expenses field of the <a href="/calculator">calculator</a>:</p>
      <ul>
        <li>Home office costs (simplified flat rate or actual costs)</li>
        <li>Professional subscriptions and software</li>
        <li>Business travel and accommodation</li>
        <li>Professional development and training</li>
        <li>Accountancy fees</li>
        <li>Business insurance (professional indemnity, public liability)</li>
      </ul>
      <h2>Day rates vs hourly rates in the UK market</h2>
      <p>Many UK contractors, particularly in tech and finance, quote day rates rather than hourly rates. To convert your hourly rate to a day rate, see our guide on <a href="/blog/daily-rate-calculation">converting an hourly rate to a day rate</a>. The standard UK contractor day is typically 7.5 billable hours.</p>
      <h2>IR35 considerations</h2>
      <p>If you work through a limited company and your engagement falls inside IR35, your effective tax rate increases significantly. Build this into your rate calculation by increasing your tax percentage in the <a href="/calculator">RateCrafts calculator</a>. Consult an accountant for your specific situation.</p>
      <h2>Typical UK freelance rates (2026)</h2>
      <ul>
        <li>Freelance developer (mid-level): £400–£700/day</li>
        <li>UX/UI designer: £350–£600/day</li>
        <li>Digital marketing consultant: £300–£600/day</li>
        <li>Copywriter: £300–£600/day</li>
        <li>Project manager: £400–£700/day</li>
      </ul>
      <p>These are indicative ranges. Your actual rate depends on your specific calculation — use the <a href="/calculator">RateCrafts calculator</a> to find your personal floor, then use the <a href="/project-calculator">project pricing calculator</a> to build full project quotes in GBP.</p>
    `,
  },

  'best-billable-hours-for-freelancers': {
    title: 'The Best Weekly Billable Hours Target for Freelancers',
    date: 'April 10, 2026', readTime: '7 min read', category: 'Productivity',
    description: 'What is the optimal number of billable hours per week for a healthy freelance business? The answer is probably lower than you think.',
    relatedIds: ['billable-hours-guide', 'how-to-calculate-freelance-rate', 'freelance-pricing-mistakes'],
    content: `
      <p>Ask most freelancers how many billable hours they plan to work and they will say 40. Ask them how many they actually bill, and the number is usually far lower. Understanding the gap is critical to setting a rate that actually sustains your business — use the <a href="/calculator">RateCrafts calculator</a> with an honest billable-hour estimate.</p>
      <h2>Why 40 hours is a myth</h2>
      <p>Freelancers do not just do client work. They also handle business development, administration, invoicing, professional development, and all the overhead that a full-time employer would otherwise absorb. Our general guide on <a href="/blog/billable-hours-guide">realistic billable hours</a> explains where the time goes.</p>
      <h2>The realistic ranges by experience level</h2>
      <ul>
        <li><strong>New freelancers (0–2 years):</strong> 15–22 billable hours per week. Time spent on proposals, learning, and client acquisition is high relative to actual billable output.</li>
        <li><strong>Established freelancers (2–5 years):</strong> 22–30 billable hours per week. Processes are more efficient, referrals reduce marketing time, and proposals convert faster.</li>
        <li><strong>Senior freelancers with strong pipelines:</strong> 28–35 billable hours per week. Strong referral networks and clear positioning reduce non-billable overhead.</li>
      </ul>
      <h2>The sweet spot: 25 billable hours</h2>
      <p>For most independent freelancers, 25 billable hours per week is a sustainable and realistic target. It provides enough buffer for the inevitable non-billable work without pushing you into burnout territory. This is the default used in the <a href="/calculator">RateCrafts calculator</a> — but adjust it to your reality.</p>
      <h2>Why the right number changes your rate significantly</h2>
      <p>Consider a freelancer who needs £4,000/month after taxes and expenses. At 40 billable hours/week, that requires about £25/hr. At 25 billable hours/week, the required rate is approximately £40/hr. The difference is enormous — and the 40-hour estimate is almost certainly wrong.</p>
      <p>This is one of the core <a href="/blog/freelance-pricing-mistakes">freelance pricing mistakes</a> that keeps skilled professionals undercharging. See also: <a href="/blog/common-freelance-pricing-mistakes">the most common freelance pricing mistakes in depth</a>.</p>
      <h2>Applying this to your rate calculation</h2>
      <p>Use an honest billable-hour estimate in the <a href="/calculator">RateCrafts rate calculator</a>. Then use the <a href="/project-calculator">project pricing calculator</a> to build project quotes based on realistic project hours rather than monthly averages.</p>
    `,
  },

  'common-freelance-pricing-mistakes': {
    title: 'The Most Common Freelance Pricing Mistakes (And How to Fix Them)',
    date: 'April 11, 2026', readTime: '10 min read', category: 'Pricing',
    description: 'A deep-dive into the pricing errors that keep skilled freelancers underpaid — and the exact fixes that help you charge what you are worth.',
    relatedIds: ['freelance-pricing-mistakes', 'how-to-calculate-freelance-rate', 'freelance-rate-too-low'],
    content: `
      <p>Freelance pricing mistakes are almost universal — even among experienced professionals. This deep-dive covers the full spectrum of errors that lead to undercharging, with specific fixes for each. The fastest fix in most cases is to run your real numbers through the <a href="/calculator">RateCrafts rate calculator</a> and compare the result to what you currently charge.</p>
      <h2>Mistake 1: Starting from the market, not from your costs</h2>
      <p>Looking at what other freelancers charge is a useful reference, but it cannot be your starting point. Their rate reflects their location, client base, cost structure, and experience — none of which may apply to you. Start from your own numbers: income goal, taxes, expenses, billable hours, and margin. The <a href="/calculator">RateCrafts calculator</a> does exactly this calculation.</p>
      <h2>Mistake 2: Ignoring self-employment tax</h2>
      <p>Employees have tax deducted automatically. Freelancers must set aside their own tax — and many forget that self-employment also attracts additional National Insurance (UK) or self-employment tax (US) on top of income tax. See our <a href="/blog/freelance-tax-guide">freelance tax guide</a> for the specifics.</p>
      <h2>Mistake 3: Treating all hours as billable</h2>
      <p>Admin, proposals, learning, and marketing are all part of the job — and none of them are billed to clients. The realistic billable-hours range for most freelancers is 20–28 hours per week. See our guide on <a href="/blog/best-billable-hours-for-freelancers">the best billable hours target</a>.</p>
      <h2>Mistake 4: No buffer for slow months</h2>
      <p>Freelance income fluctuates. A rate that just covers expenses in a good month will fall short in a quiet one. Building a profit margin into your rate creates a natural buffer — see <a href="/blog/profit-margin-for-freelancers">why profit margin matters</a>.</p>
      <h2>Mistake 5: Underpricing revisions in project quotes</h2>
      <p>Unlimited revisions are one of the fastest ways to destroy project profitability. Specify revision rounds explicitly and price them using the <a href="/project-calculator">project pricing calculator</a>. Our <a href="/blog/freelance-project-pricing-template">pricing template</a> shows exactly how to structure this in a client quote.</p>
      <h2>Mistake 6: Never increasing rates</h2>
      <p>A rate set three years ago does not account for inflation, improved skills, or higher demand. Your rates should increase regularly. See the <a href="/blog/how-to-raise-your-rates">professional playbook for raising rates</a> for how to do this without damaging client relationships.</p>
      <h2>Mistake 7: Not knowing when a rate is too low</h2>
      <p>Many freelancers know they are undercharging but cannot pinpoint by how much. The <a href="/calculator">RateCrafts calculator</a> gives you a precise floor — and our article on <a href="/blog/freelance-rate-too-low">how to know if your rate is too low</a> lists the warning signs to watch for.</p>
      <blockquote>"The most expensive mistake a freelancer can make is charging too little for too long."</blockquote>
    `,
  },

  'how-to-raise-your-rates': {
    title: 'How to Raise Your Freelance Rates: The Professional Playbook',
    date: 'April 12, 2026', readTime: '9 min read', category: 'Business',
    description: 'A step-by-step guide to increasing your freelance rates confidently — without awkward client conversations or losing good relationships.',
    relatedIds: ['raising-your-rates', 'freelance-rate-too-low', 'how-to-calculate-freelance-rate'],
    content: `
      <p>Raising your rates is one of the highest-leverage actions a freelancer can take. Done well, it increases income without increasing hours, improves client quality, and strengthens your positioning. Done badly, it damages relationships and creates anxiety. This playbook covers the professional approach — start by using the <a href="/calculator">RateCrafts calculator</a> to confirm your new rate is grounded in real numbers.</p>
      <h2>Step 1: Calculate your target rate first</h2>
      <p>Do not raise your rate based on feeling or what a friend charges. Use the <a href="/calculator">RateCrafts rate calculator</a> to establish a defensible floor based on your actual costs, taxes, and income goals. Then decide whether your new rate should be at the floor or above it based on your market position. Also check our article on <a href="/blog/freelance-rate-too-low">how to know if your current rate is too low</a>.</p>
      <h2>Step 2: Choose the right timing</h2>
      <p>The best time to raise rates is: at the end of a successful project, at the start of a new contract year, after delivering strong results, or when you have more demand than capacity. Avoid raising rates mid-project unless circumstances change dramatically.</p>
      <h2>Step 3: Give proper notice</h2>
      <p>Four to six weeks notice is professional and respectful. It gives clients time to budget and demonstrates you value the relationship. Do not spring a rate increase on anyone at short notice.</p>
      <h2>Step 4: Communicate the increase clearly</h2>
      <p>Be direct and confident. A clear, brief message works better than a long justification. Example: "Starting [date], my rate will be £X/day. I wanted to give you advance notice and discuss how we continue working together." Avoid over-explaining or apologising.</p>
      <h2>Step 5: Anchor on value, not personal costs</h2>
      <p>Clients respond better to value framing than personal-cost framing. "My rate reflects the depth of expertise I now bring to your projects" is stronger than "my expenses have gone up." Focus on outcomes, results, and the quality of what you deliver.</p>
      <h2>Step 6: Handle pushback professionally</h2>
      <p>Some clients will push back. Have a response ready: you can offer a phased increase, reduced scope at the old rate, or a fixed-term rate lock for a defined project. What you should not do is immediately capitulate — that signals that your rate was arbitrary to begin with.</p>
      <h2>Step 7: Apply the new rate immediately to new projects</h2>
      <p>New clients and new projects should immediately be quoted at your new rate using the <a href="/project-calculator">project pricing calculator</a>. Do not wait until existing clients have transitioned before charging new clients the correct rate.</p>
      <h2>How often should you raise rates?</h2>
      <p>At minimum, annually to account for inflation. More frequently if your skills, demand, or market position have improved significantly. Freelancers who have not raised rates in over two years are almost certainly <a href="/blog/freelance-rate-too-low">undercharging</a>.</p>
      <p>See our original guide on <a href="/blog/raising-your-rates">raising your rates without losing good clients</a> for the interpersonal side of these conversations, and <a href="/blog/common-freelance-pricing-mistakes">the most common pricing mistakes</a> to ensure you are fixing the right problem.</p>
    `,
  },

  'how-to-quote-without-underpricing': {
    title: "How to Quote a Project Without Underpricing: A Freelancer's Guide",
    date: 'April 13, 2026', readTime: '10 min read', category: 'Business',
    description: "The complete method for writing freelance project quotes that protect your margins, impress clients, and win the right work.",
    relatedIds: ['freelance-project-pricing-template', 'how-to-price-a-freelance-project', 'quote-a-project-profitably'],
    content: `
      <p>Most freelancers underprice projects because they skip steps in the quoting process. They estimate loosely, forget revisions, ignore buffer, and leave out tax. The result is a quote that feels safe but destroys margin. This guide fixes that — use the <a href="/project-calculator">RateCrafts project pricing calculator</a> to apply every step below.</p>
      <h2>Why most project quotes are too low</h2>
      <p>The problem is usually structural, not numerical. Freelancers do not forget to include their hourly rate — they forget to include revision rounds, scope buffer, admin time, and tax. These omissions can reduce effective profit by 30–50% on a typical project.</p>
      <h2>The quoting process that prevents underpricing</h2>
      <h2>1. Build from your hourly floor</h2>
      <p>Every project quote starts with a solid hourly rate. If you do not have one, use the <a href="/calculator">RateCrafts rate calculator</a> to find it. Your project price is this rate multiplied by everything the project will actually require — including the work clients do not see.</p>
      <h2>2. Write a detailed scope before you price</h2>
      <p>Do not price a vague scope. Write out every deliverable, every phase, every meeting, and every revision round before you estimate time. Vague scope creates optimistic estimates — specific scope creates accurate ones.</p>
      <h2>3. Price revision rounds explicitly</h2>
      <p>Specify the number of revision rounds included and what constitutes a revision. Then price them using the <a href="/project-calculator">project calculator</a>. Revision rounds that are not priced are revision rounds that are free — which means you are working for nothing on the most contested part of any project.</p>
      <h2>4. Add a 15–25% buffer</h2>
      <p>Even with a detailed scope, projects take longer than planned. Add a buffer percentage to your estimate — not as a hidden mark-up, but as a transparent line item in your quote. Clients understand that estimates have inherent uncertainty. See our <a href="/blog/freelance-project-pricing-template">pricing template</a> for how to present this professionally.</p>
      <h2>5. Include tax in the client-facing price</h2>
      <p>Do not quote a price and then discover you owe 25% of it in tax. Build the tax component into the price you present. The <a href="/project-calculator">project pricing calculator</a> does this automatically.</p>
      <h2>6. Add profit margin</h2>
      <p>A project that covers costs and taxes but leaves no profit is not a good project. Add 10–20% margin above your buffered subtotal. This is separate from your hourly rate — it is the business profit on top of your labour income. See <a href="/blog/profit-margin-for-freelancers">why profit margin matters</a>.</p>
      <h2>7. Present the number with confidence</h2>
      <p>A well-calculated quote deserves a confident presentation. If a client pushes back hard on a correctly priced project, that is useful information — they may not be the right client. See our guide on <a href="/blog/how-to-raise-your-rates">raising your rates professionally</a> for how to handle those conversations.</p>
      <blockquote>"A quote you cannot defend was never the right number in the first place."</blockquote>
      <p>Apply this method to your next quote using the <a href="/project-calculator">project pricing calculator</a>, and see the complete example in the <a href="/blog/freelance-project-pricing-template">project pricing template</a>.</p>
    `,
  },

  'freelance-rate-vs-salary': {
    title: 'Freelance Rate vs Salary: How to Convert One Into the Other',
    date: 'April 14, 2026', readTime: '8 min read', category: 'Finance',
    description: 'Thinking about going freelance, or returning to employment? Here is how to translate between an annual salary and a freelance day rate.',
    relatedIds: ['how-to-calculate-freelance-rate', 'daily-rate-calculation', 'hidden-costs-of-freelancing'],
    content: `
      <p>One of the most common questions from people considering freelancing is: "What freelance rate would match my current salary?" And from freelancers considering employment: "What salary would match my day rate?" Both conversions are trickier than they look — use the <a href="/calculator">RateCrafts calculator</a> to get accurate numbers for your specific situation.</p>
      <h2>Why a simple conversion does not work</h2>
      <p>A £50,000 salary and a £50,000 freelance income are very different things. As an employee, your employer contributes to your pension, pays employer NI, provides holiday pay, sick pay, equipment, and office space. As a freelancer, all of those costs fall on you. See our full breakdown of <a href="/blog/hidden-costs-of-freelancing">hidden costs of freelancing</a>.</p>
      <h2>The employer cost multiplier</h2>
      <p>A reasonable estimate is that the total cost of employing someone is 1.25–1.4× their salary. So a £50,000 salary has an effective employer cost of £62,500–£70,000. To match this as a freelancer, you need to charge enough to cover all those costs yourself.</p>
      <h2>Converting a salary to a freelance day rate</h2>
      <p>A commonly used formula is:</p>
      <ul>
        <li>Annual salary ÷ 220 working days = rough equivalent day rate</li>
        <li>Then multiply by 1.3–1.5 to account for holidays, sick days, pension, and employer NI</li>
        <li>Then add your profit margin — see <a href="/blog/profit-margin-for-freelancers">why profit margin matters</a></li>
      </ul>
      <p>Example: £50,000 salary ÷ 220 days = £227/day baseline × 1.4 = £318/day. Add profit margin: £350–£380/day.</p>
      <h2>Converting a freelance day rate to a salary equivalent</h2>
      <p>Reverse the process:</p>
      <ul>
        <li>Day rate × 220 billed days = gross annual freelance income</li>
        <li>Subtract taxes (see our <a href="/blog/freelance-tax-guide">tax guide</a>) to get net income</li>
        <li>Add back the value of benefits you would receive as an employee</li>
      </ul>
      <h2>Use the calculator for accuracy</h2>
      <p>The formula above gives a rough starting point. For an accurate number specific to your income goals, tax rate, and business expenses, use the <a href="/calculator">RateCrafts rate calculator</a>. Then use the <a href="/blog/daily-rate-calculation">day rate guide</a> to convert your hourly rate to a day rate for client-facing quotes.</p>
    `,
  },

  'freelance-tax-guide': {
    title: 'Freelance Tax Guide: What Every Independent Professional Needs to Know',
    date: 'April 15, 2026', readTime: '11 min read', category: 'Finance',
    description: 'Self-employment tax, quarterly payments, deductions, and setting the right tax rate in your pricing — a plain-English guide for freelancers.',
    relatedIds: ['hidden-costs-of-freelancing', 'how-to-calculate-freelance-rate', 'freelance-rate-calculator-uk'],
    content: `
      <p>Tax is one of the most commonly misunderstood aspects of freelancing — and one of the most financially dangerous. Getting your tax estimate wrong in your pricing means you are giving away money every time you invoice a client. This guide covers the essentials, and the <a href="/calculator">RateCrafts rate calculator</a> helps you apply the right tax rate to your pricing.</p>
      <h2>How freelance taxation differs from employment</h2>
      <p>As an employee, your employer deducts tax at source through PAYE (UK) or payroll withholding (US). As a freelancer, you receive your full invoice payment and must set aside tax yourself. There is no one to catch you if you forget — and the penalties for late payment can be significant.</p>
      <h2>What taxes do freelancers pay?</h2>
      <p>Depending on your country, freelancers typically pay a combination of:</p>
      <ul>
        <li><strong>Income tax:</strong> on your profits above your personal allowance</li>
        <li><strong>Self-employment / National Insurance tax:</strong> an additional levy on self-employed income not paid by employees</li>
        <li><strong>Sales tax / VAT:</strong> if your income exceeds the registration threshold in your country</li>
        <li><strong>Corporation tax:</strong> if you operate through a limited company</li>
      </ul>
      <h2>UK freelancers: key numbers for 2026</h2>
      <p>See our dedicated guide on <a href="/blog/freelance-rate-calculator-uk">setting your freelance rate in the UK</a> for full UK-specific detail. In brief: most UK freelancers earning £30,000–£80,000 should provision 28–35% for income tax and National Insurance combined.</p>
      <h2>US freelancers: the self-employment tax problem</h2>
      <p>US freelancers pay self-employment tax (15.3% on the first $160,200 of net earnings) on top of regular income tax. This is on top of federal income tax and state income tax. A freelancer in a high-tax state can easily face effective marginal rates of 40–50% on income above $100,000. Build this into your rate using the <a href="/calculator">RateCrafts calculator</a>.</p>
      <h2>What expenses can you deduct?</h2>
      <p>Legitimate business expenses reduce your taxable profit. Common deductions include:</p>
      <ul>
        <li>Home office (proportional rent/mortgage and utilities)</li>
        <li>Business software and subscriptions</li>
        <li>Professional development and training</li>
        <li>Equipment and tools</li>
        <li>Professional fees (accountant, legal)</li>
        <li>Business travel</li>
        <li>Business insurance</li>
      </ul>
      <p>These expenses are also part of your monthly business costs — include them in the expenses field of the <a href="/calculator">rate calculator</a>. See the full list in <a href="/blog/hidden-costs-of-freelancing">7 hidden costs of freelancing</a>.</p>
      <h2>How much to set aside</h2>
      <p>A conservative and simple rule: set aside 30% of every invoice payment into a dedicated tax account. This is usually more than you will owe, which gives you a buffer. The excess becomes savings or a business emergency fund. If your effective rate is lower, adjust accordingly — but never set aside less than 25% unless you have confirmed your tax liability with an accountant.</p>
      <h2>Quarterly vs annual payments</h2>
      <p>In the US, freelancers are required to make quarterly estimated tax payments. In the UK, the Self Assessment deadline is 31 January. Missing these deadlines results in penalties and interest. Set calendar reminders well in advance.</p>
      <h2>Applying the right tax rate to your pricing</h2>
      <p>The tax percentage in the <a href="/calculator">RateCrafts rate calculator</a> represents your combined tax provision as a percentage of gross income. Use your actual effective tax rate or a conservative estimate. When in doubt, use 30% — it is better to price too high and have surplus tax savings than to price too low and face an unexpected bill.</p>
      <p>Once you have the right tax rate in your hourly calculation, apply it at the project level too using the <a href="/project-calculator">project pricing calculator</a>. This ensures every quote you send accounts for your real tax liability.</p>
    `,
  },
};

export default function BlogPost() {
  const { id }    = useParams<{ id: string }>();
  const post      = id ? POST_CONTENT[id] : null;
  const allIds    = ALL_POSTS.map((p) => p.id);
  const curIdx    = id ? allIds.indexOf(id) : -1;
  const prevPost  = curIdx > 0              ? ALL_POSTS[curIdx - 1] : null;
  const nextPost  = curIdx < allIds.length - 1 ? ALL_POSTS[curIdx + 1] : null;

  const relatedPosts = post
    ? (post.relatedIds.map((rid) => ALL_POSTS.find((p) => p.id === rid)).filter(Boolean) as typeof ALL_POSTS)
    : [];

  const [copied,    setCopied]    = useState(false);
  const [shareUrl,  setShareUrl]  = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!post) {
    return (
      <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ textAlign: 'center' }}>
          <p className="mono-label" style={{ marginBottom: '1rem' }}>404</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-ink-100)', marginBottom: '1.5rem' }}>Article not found</h1>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/blog" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-brass-400)', textDecoration: 'none', border: '1px solid var(--color-brass-600)', padding: '0.7rem 1.5rem', display: 'inline-block' }}>← Back to journal</Link>
            <Link to="/calculator" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-400)', textDecoration: 'none' }}>Try the calculator →</Link>
          </div>
        </div>
      </div>
    );
  }

  const articleSchema = {
    '@context':    'https://schema.org',
    '@type':       'BlogPosting',
    headline:       post.title,
    datePublished:  post.date,
    description:    post.description,
    author:         { '@type': 'Organization', name: 'RateCrafts' },
    publisher:      { '@type': 'Organization', name: 'RateCrafts', url: 'https://www.ratecrafts.com' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${id}` },
  };

  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO title={`${post.title} | RateCrafts`} description={post.description} ogType="article" articleDate={post.date}>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <link rel="canonical" href={`${SITE_URL}/blog/${id}`} />
      </SEO>

      {/* Top bar */}
      <div style={{ borderBottom: '1px solid var(--color-ink-800)', padding: '0 1.5rem', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: '64px', zIndex: 40, background: 'rgba(17,16,9,0.95)', backdropFilter: 'blur(12px)' }}>
        <Link to="/blog" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-500)', textDecoration: 'none' }}>← Journal</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-700)' }}>{post.readTime}</span>
          <button onClick={handleShare} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: copied ? 'var(--color-brass-400)' : 'var(--color-ink-600)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 0.15s' }}>
            {copied ? 'Copied ✓' : 'Copy link'}
          </button>
        </div>
      </div>

      <article style={{ maxWidth: '700px', margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: CATEGORY_COLORS[post.category] || 'var(--color-brass-400)', border: `1px solid ${CATEGORY_COLORS[post.category] || 'var(--color-brass-400)'}44`, padding: '0.2rem 0.6rem' }}>{post.category}</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-ink-700)' }}>{post.date}</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 900, color: 'var(--color-ink-50)', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '2.5rem' }}>{post.title}</h1>
          <div style={{ width: '3rem', height: '1px', background: 'linear-gradient(90deg, var(--color-brass-600), var(--color-brass-300))', marginBottom: '3rem' }} />
          <div className="article-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        </motion.div>

        {/* CTA */}
        <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--color-ink-900)', border: '1px solid var(--color-ink-800)', borderLeft: '2px solid var(--color-brass-500)' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-brass-500)', marginBottom: '0.75rem' }}>Apply what you've learned</p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink-50)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>Find your actual rate in under a minute</p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--color-ink-300)', lineHeight: 1.7, marginBottom: '1.25rem' }}>Use the RateCrafts calculator to get an hourly rate based on your real costs, taxes, and goals.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/calculator" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.7rem 1.5rem', background: 'var(--color-brass-500)', color: 'var(--color-ink-950)', textDecoration: 'none', display: 'inline-block', fontWeight: 500 }}>Hourly rate calculator →</Link>
            <Link to="/project-calculator" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.7rem 1.5rem', border: '1px solid var(--color-ink-700)', color: 'var(--color-ink-300)', textDecoration: 'none', display: 'inline-block' }}>Project pricing calculator →</Link>
          </div>
        </div>

        {/* Related posts — card grid */}
        {relatedPosts.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-ink-500)', marginBottom: '1.25rem' }}>Related Articles</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2px', background: 'var(--color-ink-800)' }}>
              {relatedPosts.map((related) => {
                const fullPost = ALL_POSTS.find((p) => p.id === related.id);
                return (
                  <RelatedCard
                    key={related.id}
                    id={related.id}
                    title={related.title}
                    excerpt={fullPost?.excerpt || ''}
                    category={related.category}
                  />
                );
              })}
            </div>
          </div>
        )}

        {/* Prev / Next */}
        <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'var(--color-ink-800)' }}>
          {prevPost ? <PrevNextLink post={prevPost} direction="prev" /> : <div style={{ background: 'var(--color-ink-950)' }} />}
          {nextPost ? <PrevNextLink post={nextPost} direction="next" /> : <div style={{ background: 'var(--color-ink-950)' }} />}
        </div>
      </article>

      {/* Footer breadcrumb */}
      <div style={{ maxWidth: '700px', margin: '0 auto', padding: '2rem 1.5rem 5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {[
          { label: '← All articles',          to: '/blog'               },
          { label: 'Hourly rate calculator',   to: '/calculator'         },
          { label: 'Project price calculator', to: '/project-calculator' },
          { label: 'About RateCrafts',         to: '/about'              },
        ].map((l) => (
          <Link key={l.to} to={l.to} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-ink-600)', textDecoration: 'none' }}>{l.label}</Link>
        ))}
      </div>
    </div>
  );
}

function RelatedCard({ id, title, excerpt, category }: { id: string; title: string; excerpt: string; category: string }) {
  const [hovered, setHovered] = useState(false);
  const catColor = CATEGORY_COLORS[category] || 'var(--color-brass-400)';
  return (
    <Link to={`/blog/${id}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? 'var(--color-ink-800)' : 'var(--color-ink-900)', padding: '1.25rem', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', transition: 'background 0.15s' }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: catColor, border: `1px solid ${catColor}33`, padding: '0.15rem 0.45rem', alignSelf: 'flex-start' }}>{category}</span>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-ink-100)', lineHeight: 1.3, letterSpacing: '-0.01em' }}>{title}</p>
      {excerpt && <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', fontWeight: 300, color: 'var(--color-ink-500)', lineHeight: 1.55 }}>{excerpt.slice(0, 90)}{excerpt.length > 90 ? '…' : ''}</p>}
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--color-brass-500)', marginTop: 'auto' }}>Read →</span>
    </Link>
  );
}

function PrevNextLink({ post, direction }: { post: typeof ALL_POSTS[0]; direction: 'prev' | 'next' }) {
  const [hovered, setHovered] = useState(false);
  const isPrev = direction === 'prev';
  return (
    <Link to={`/blog/${post.id}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ background: hovered ? 'var(--color-ink-800)' : 'var(--color-ink-900)', padding: '1.5rem', textDecoration: 'none', textAlign: isPrev ? 'left' : 'right', transition: 'background 0.2s' }}>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.56rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-ink-700)', marginBottom: '0.5rem' }}>{isPrev ? '← Previous' : 'Next →'}</p>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-ink-300)', lineHeight: 1.3 }}>{post.title}</p>
    </Link>
  );
}