import React, { useState, useEffect } from 'react';
import { Link, useParams }            from 'react-router-dom';
import { motion }                     from 'motion/react';
import { SEO }                        from '../components/SEO';
import { ALL_POSTS, CATEGORY_COLORS } from './BlogIndex';

/* ── Types ─────────────────────────────────────────────────────── */
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

/* ── Post content ──────────────────────────────────────────────── */
const POST_CONTENT: Record<string, PostData> = {

  'how-to-calculate-freelance-rate': {
    title: 'How to Calculate Your Freelance Rate: The Math Behind a Number You Can Defend',
    date: 'April 5, 2026', readTime: '10 min read', category: 'Strategy',
    description: 'Most freelancers set their rate by guessing or copying competitors. This guide shows the actual formula — with taxes, expenses, realistic hours, and profit margin built in.',
    relatedIds: ['hidden-costs-of-freelancing', 'billable-hours-guide', 'freelance-pricing-mistakes'],
    content: `
      <p>Here is the dirty secret of freelance pricing: most people set their rate by picking a number that feels defensible and hoping it works. The result is almost always too low — not by a small amount, but by 40–60% in many cases.</p>
      <p>The problem is not courage. It is arithmetic. The standard shortcut — annual salary divided by 52 weeks divided by 40 hours — ignores four things that collectively can double what you actually need to charge. Use the <a href="/calculator">RateCrafts rate calculator</a> to run the real numbers for your situation.</p>
      <h2>The formula that actually works</h2>
      <p>Your correct freelance hourly rate is:</p>
      <p><strong>(Monthly take-home goal + business expenses + tax provision + profit margin) ÷ monthly billable hours</strong></p>
      <p>Let's make that concrete. A developer targeting $5,000/month take-home, with $800/month in business expenses, a 28% combined tax rate, 25 billable hours/week, and a 15% profit margin needs:</p>
      <ul>
        <li>Tax provision: $5,000 ÷ (1 - 0.28) = $6,944 gross needed</li>
        <li>Add expenses: $6,944 + $800 = $7,744</li>
        <li>Add 15% profit: $7,744 × 1.15 = $8,906 monthly revenue target</li>
        <li>Monthly billable hours: 25 hrs × 4.33 weeks = 108 hours</li>
        <li>Required rate: $8,906 ÷ 108 = <strong>$82/hr</strong></li>
      </ul>
      <p>The same developer using the naive salary formula ($60k salary ÷ 52 ÷ 40) gets $28.85/hr. That is a $53/hr gap — or roughly $57,000/year in uncaptured income.</p>
      <h2>Why 40 billable hours is the wrong denominator</h2>
      <p>You might work 40 hours. But those 40 hours include proposals nobody pays for, admin work nobody pays for, client calls that run long, invoicing, learning, and the 20 minutes you spend each morning triaging email. Most freelancers genuinely bill 20–28 hours of the 40 they work. See our guide on <a href="/blog/billable-hours-guide">realistic billable hours</a> for the full breakdown.</p>
      <p>Overestimate this number and your rate comes out too low. If you plug 40 into the calculator instead of 25, you undercharge by about 37% — structurally, every week.</p>
      <h2>Tax is not optional math</h2>
      <p>In the US, self-employed income is subject to self-employment tax (15.3% on the first $168,600) plus federal income tax plus state income tax. An effective combined rate of 28–35% is common. In the UK, freelancers pay income tax plus Class 4 NI (9% on profits between £12,570 and £50,270). Both add up to rates employees never see because their employer absorbs half the NI contribution.</p>
      <p>Our detailed breakdown of <a href="/blog/hidden-costs-of-freelancing">7 hidden costs of freelancing</a> covers exactly what to include in the expenses field.</p>
      <h2>The profit margin is not greed — it is sustainability</h2>
      <p>A rate that hits break-even means one bad month can put you in deficit. Profit margin — 10–20% is typical — is the buffer for slow months, equipment failures, professional development, and actual business growth. See <a href="/blog/profit-margin-for-freelancers">why freelancers need profit margin</a> for a clear explanation of why break-even pricing is fragile.</p>
      <h2>From hourly rate to project pricing</h2>
      <p>Your hourly floor is the foundation. Once you have it, use the <a href="/project-calculator">project pricing calculator</a> to build full fixed-price quotes — including revision rounds, scope buffer, and tax — that hold up under scrutiny.</p>
      <p>If you already have a rate and suspect it might be wrong, the clearest test: run it through the <a href="/calculator">calculator</a> and see whether the output matches what you charge. If the gap is large, read our guide on <a href="/blog/raising-your-rates">raising your rates professionally</a> before the next client negotiation.</p>
    `,
  },

  'hidden-costs-of-freelancing': {
    title: '7 Costs Freelancers Absorb Personally Instead of Building Into Their Rate',
    date: 'April 2, 2026', readTime: '8 min read', category: 'Finance',
    description: 'Software, hardware, insurance, unpaid admin time, slow months — these are business costs, not personal expenses. Here is how to account for each one.',
    relatedIds: ['how-to-calculate-freelance-rate', 'profit-margin-for-freelancers', 'billable-hours-guide'],
    content: `
      <p>Here is a pattern that shows up constantly: a freelancer charges $65/hr, feels like it should be enough, and is still struggling. The issue is not the rate — it is what the rate is supposed to cover. Most freelancers calculate their rate against income alone, and silently absorb business costs from personal funds. The fix is accounting for all of it in the <a href="/calculator">RateCrafts rate calculator</a> before quoting another client.</p>
      <h2>1. Software subscriptions that compound</h2>
      <p>Individually, $10–$15/month subscriptions feel insignificant. Collectively, they create serious overhead. A typical freelance stack: Figma or Adobe CC, GitHub or a cloud dev environment, Notion or project management, invoicing software, email, Zoom or similar, a password manager, cloud storage, and perhaps an AI tool or two. Add them up honestly. $300–$600/month is not unusual for professional setups — and none of it shows up in "take-home salary" calculations.</p>
      <h2>2. Hardware with a lifespan you are ignoring</h2>
      <p>Your laptop cost $2,500 and will need replacing in three to four years. That is $625–$833/year, or $52–$69/month that should live in your rate. Add monitors, peripherals, a phone, and an external drive and you are looking at $80–$150/month in amortised hardware costs that most freelancers never account for.</p>
      <h2>3. Unpaid admin, sales, and revision time</h2>
      <p>This is the biggest one. Writing proposals (that sometimes lose), answering scope questions, managing feedback, revising work, invoicing, chasing late payments, updating your portfolio, cold outreach, LinkedIn — none of this gets billed to clients. But all of it takes time. Our analysis of <a href="/blog/billable-hours-guide">realistic billable hours</a> shows this non-billable overhead typically consumes 30–40% of a freelancer's working week.</p>
      <h2>4. Business insurance you might not have</h2>
      <p>Professional indemnity, public liability, and equipment insurance are real costs for freelancers who do serious work. In the UK, professional indemnity for a tech freelancer can run £300–£800/year. US equivalents vary widely but should be factored in regardless.</p>
      <h2>5. Payment processor and banking fees</h2>
      <p>Stripe charges ~2.9% + $0.30 per transaction. PayPal and wire fees add up similarly. On a $5,000 invoice, that is $145–$175 in fees — a number that compounds significantly over a year of invoicing. Build a small percentage into your pricing to absorb it.</p>
      <h2>6. Slow months, which are guaranteed to happen</h2>
      <p>No freelancer bills 100% capacity every month of the year. Clients go quiet, projects fall through, and vacations happen. If your rate assumes full utilisation, quiet months will cost you money rather than just costing you income. The <a href="/blog/profit-margin-for-freelancers">profit margin buffer</a> in your rate is the structural solution to this problem.</p>
      <h2>7. Professional development you treat as optional</h2>
      <p>Courses, books, conferences, certifications, and time spent learning are business investments. A freelance developer who does not invest in staying current loses relevance and rate-setting power. Budget for it — $100–$300/month is reasonable for most knowledge workers — and include it in your expenses field when you <a href="/calculator">calculate your rate</a>.</p>
      <p>The core insight: none of these are personal expenses. They are the cost of running a professional freelance practice. Once you account for all of them, your correct rate is almost certainly higher than what you are currently charging. If that is uncomfortable, our guide on <a href="/blog/raising-your-rates">raising your rates professionally</a> covers how to make the transition without drama.</p>
    `,
  },

  'freelance-pricing-mistakes': {
    title: '5 Freelance Pricing Mistakes That Are Actually One Mistake in Disguise',
    date: 'April 1, 2026', readTime: '7 min read', category: 'Pricing',
    description: 'Most underpricing comes from the same root error. Here are the five ways it manifests — and how to fix each one before the next client conversation.',
    relatedIds: ['how-to-calculate-freelance-rate', 'freelance-rate-too-low', 'hidden-costs-of-freelancing'],
    content: `
      <p>Most freelance pricing mistakes look different on the surface — copying competitors, low-balling to win the job, never updating rates for years — but they share a root cause: pricing without doing the actual math. Run your real numbers through the <a href="/calculator">RateCrafts calculator</a> first, and most of these mistakes become impossible to repeat.</p>
      <h2>Mistake 1: Setting a rate that "feels about right"</h2>
      <p>Feelings about pricing are almost always anchored too low. We underestimate our value, overestimate market sensitivity to price, and unconsciously adjust downward toward what we think clients want to pay. The fix is to calculate your floor first, then price based on that number — not based on what feels safe. If you are not sure whether your current rate is already too low, the diagnostic in <a href="/blog/freelance-rate-too-low">this article</a> will tell you quickly.</p>
      <h2>Mistake 2: Treating tax as a personal budget problem</h2>
      <p>Taxes are a cost of doing business. Including them in your rate — not managing them from personal income after the fact — is the difference between a sustainable practice and a permanent cash flow anxiety problem. A freelancer in a combined 30% tax bracket who ignores this is effectively working the first 2.4 hours of every 8-hour day for free.</p>
      <h2>Mistake 3: Using 40 billable hours as a planning assumption</h2>
      <p>This is the single most destructive quantitative error in freelance pricing. It inflates your denominator, which shrinks your required rate, which leaves you underpriced. See the full analysis in our <a href="/blog/billable-hours-guide">billable hours guide</a> — but the short version is: 20–28 is realistic for most independent freelancers. Use that, not 40.</p>
      <h2>Mistake 4: Anchoring to what competitors charge</h2>
      <p>A competitor's rate reflects their cost structure, their client base, their location, and their tolerance for risk — none of which are yours. Use competitor research for context, not as a ceiling or floor. Your rate is derived from your numbers. The <a href="/calculator">calculator</a> ignores every competitor; it only knows your actual inputs.</p>
      <h2>Mistake 5: No profit margin — pricing to survive, not to build</h2>
      <p>A rate that covers income, tax, and expenses breaks even — nothing more. One equipment failure, one bad month, one client who delays payment by 60 days, and you are in deficit. Profit margin is not ambition; it is risk management. The <a href="/blog/profit-margin-for-freelancers">article on margin</a> makes this case in more detail, and the calculator has a dedicated field to build it into every number you quote.</p>
      <p>Once you have identified the mistake you are making, the path forward is the same: calculate correctly, then use the <a href="/project-calculator">project pricing calculator</a> to carry the correct margin through to your fixed-price quotes.</p>
    `,
  },

  'raising-your-rates': {
    title: 'How to Raise Your Freelance Rates: The Conversation No One Teaches You',
    date: 'March 28, 2026', readTime: '8 min read', category: 'Business',
    description: 'A practical framework for increasing your freelance rates with existing clients — without damaging the relationship or creating awkward silence.',
    relatedIds: ['how-to-calculate-freelance-rate', 'freelance-rate-too-low', 'quote-a-project-profitably'],
    content: `
      <p>Raising your rate is one of the highest-leverage things a freelancer can do. A 20% rate increase without losing a single client is equivalent to working an extra day per week — with none of the actual extra work. Yet most freelancers avoid it for years because they have never seen the conversation modelled clearly. Before you have it, confirm your new number in the <a href="/calculator">RateCrafts calculator</a> — not as a guess, but as a calculated floor.</p>
      <h2>The psychology of why rate increases feel scary</h2>
      <p>The fear is almost always about client rejection. But the clients most likely to reject a fair rate increase are clients who were primarily buying on price — which means they were already your most marginal relationship. Losing them is, in most cases, a net positive. The clients you want to keep are the ones who value what you deliver, and they are far more likely to stay than you expect.</p>
      <h2>The right timing</h2>
      <p>The best moments to raise rates: after completing a successful project, at the annual renewal of a retainer, or when you have more demand than capacity. Avoid mid-project rate changes unless circumstances have fundamentally changed. If your rate is already too low — see <a href="/blog/freelance-rate-too-low">the diagnostic</a> — fix it at the next natural break point.</p>
      <h2>Four to six weeks notice is professional and legally protective</h2>
      <p>Give clients time to budget. Four weeks minimum, six weeks for long-standing relationships. Frame it as information, not an apology. "Starting [date], my rate will be [amount]" is a complete message. You do not owe a justification, though you can offer one if it feels appropriate.</p>
      <h2>Value framing vs cost framing</h2>
      <p>Do not say your bills have gone up. Say your expertise has increased, your process has improved, or your results have gotten stronger. Clients respond to outcomes, not to your personal cost structure. One example: "I have been investing significantly in [relevant skill] and my work in that area has matured — my new rate reflects that." That is a value conversation, not a hardship conversation.</p>
      <h2>What to say when a client pushes back</h2>
      <p>Have a prepared response: "I understand that is an adjustment. If the full rate works better for a specific phase rather than ongoing work, I am happy to discuss structuring it differently." This offers flexibility without retreating from your number. For the full method behind building a defensible rate, see our guide on <a href="/blog/how-to-calculate-freelance-rate">calculating your freelance rate</a>. For the next project quote at your new rate, use the <a href="/project-calculator">project pricing calculator</a>.</p>
    `,
  },

  'hourly-vs-project-pricing': {
    title: 'Hourly vs Project Pricing: Not Which Is Better, But Which Is Right for This Situation',
    date: 'April 4, 2026', readTime: '9 min read', category: 'Pricing',
    description: 'Hourly and project pricing are not in competition — they solve different problems. Here is a framework for choosing between them on any given engagement.',
    relatedIds: ['how-to-calculate-freelance-rate', 'quote-a-project-profitably', 'daily-rate-calculation'],
    content: `
      <p>The debate between hourly and project pricing often gets framed as a binary choice. It is not. Both models have legitimate use cases, and the best freelancers switch between them based on the specific engagement rather than dogmatic preference. Either way, you need a solid hourly floor to anchor your pricing — start with the <a href="/calculator">RateCrafts rate calculator</a> to establish yours.</p>
      <h2>When hourly pricing has the advantage</h2>
      <p>Hourly pricing is structurally better when scope is ambiguous, when client requirements evolve frequently, or when the relationship is new and trust is still being established. It protects you from the most common project pricing risk: finishing a "small" project that turned into a month of work because the brief was unclear. It also provides a natural mechanism for clients to add scope — they just pay for more hours.</p>
      <h2>When project pricing has the advantage</h2>
      <p>Project pricing rewards efficiency. Once you can estimate your process reliably, getting faster does not reduce your income — it increases your effective hourly rate. It also removes the time-tracking overhead that hourly billing requires and gives clients a predictable number to plan around. Use the <a href="/project-calculator">project pricing calculator</a> to build quotes that include revisions, buffer, tax, and profit in one clean number.</p>
      <h2>A comparison that matters</h2>
      <p>Consider a website redesign priced two ways:</p>
      <ul>
        <li><strong>Hourly:</strong> 60 hours at $80/hr = $4,800. If it takes 75 hours, you bill $6,000. If it takes 45, you bill $3,600.</li>
        <li><strong>Project:</strong> Fixed price of $5,800, built from 60-hour estimate + 15% buffer + 10% margin. If it takes 45 hours, you earn more per hour. If it takes 75, you absorb the overrun.</li>
      </ul>
      <p>The project model rewards you for getting better at your work. The hourly model protects you when uncertainty is high. Neither is universally superior.</p>
      <h2>The day rate: a useful middle ground</h2>
      <p>Day rates work well for on-site, workshop, or consulting engagements where the unit of time is clearly a day but billing by the hour creates unnecessary friction. See our guide on <a href="/blog/daily-rate-calculation">converting your hourly rate to a professional day rate</a> for the calculation.</p>
      <h2>Hybrid approaches used by experienced freelancers</h2>
      <p>Many experienced freelancers estimate internally in hours, present externally as a fixed price, and include a clearly defined revision policy. This captures the predictability clients value in project pricing while protecting the margin that comes from accurate estimation. To avoid the most common project quote errors, see <a href="/blog/quote-a-project-profitably">how to quote a project profitably</a>.</p>
    `,
  },

  'beginner-freelancer-rate': {
    title: 'What Should You Charge as a Beginner Freelancer? Not What You Think',
    date: 'March 30, 2026', readTime: '8 min read', category: 'Beginner',
    description: 'New freelancers almost universally underprice. Here is a math-first approach to setting a floor rate that protects you from day one — regardless of experience.',
    relatedIds: ['how-to-calculate-freelance-rate', 'freelance-pricing-mistakes', 'billable-hours-guide'],
    content: `
      <p>Every new freelancer faces the same pull: charge less to compete, charge less to build a portfolio, charge less because it feels safer. The result is almost universal underpricing that is extremely hard to recover from — because low rates attract low-value clients who expect low prices forever, and raising rates means finding new clients.</p>
      <p>Here is the better approach: use the <a href="/calculator">RateCrafts rate calculator</a> to calculate your minimum viable rate before you quote anything. Then charge that, not less.</p>
      <h2>Why experience level is mostly irrelevant to your floor</h2>
      <p>Your minimum viable rate is determined by what it costs you to work, not by what you know. Taxes, tools, internet, time — these exist regardless of whether you have been freelancing for three months or three years. A beginner charging $15/hr who needs $25/hr to cover their costs is not building a business; they are subsidising a client.</p>
      <h2>What to include in your beginner rate calculation</h2>
      <ul>
        <li>Your actual income need — not a fantasy number, the real minimum you need to meet your obligations</li>
        <li>Tax provision — even 20% is better than nothing, and 25–30% is more accurate for most countries</li>
        <li>Tool and subscription costs — see <a href="/blog/hidden-costs-of-freelancing">the full list of hidden costs</a></li>
        <li>A conservative billable hours estimate — 20 hours per week is realistic for new freelancers; see <a href="/blog/billable-hours-guide">why 40 is a dangerous assumption</a></li>
        <li>A small profit buffer — 10% is enough to start building resilience</li>
      </ul>
      <h2>The practical example</h2>
      <p>A new freelance writer targets $3,000/month take-home, has $300/month in tools and subscriptions, estimates 25% in taxes, and realistically expects to bill 20 hours/week. Their minimum rate: approximately $50/hr. Many beginners would quote $25. That $25 difference, across 80 billable hours/month, is $2,000/month in undercharged income.</p>
      <h2>Your floor is not your ceiling</h2>
      <p>Calculating a minimum rate is not a commitment to charge exactly that forever — it is a protection against quoting work that cannot sustain you. As your portfolio grows and your skills develop, use the calculator to update your rate. And as you start quoting projects rather than hours, use the <a href="/project-calculator">project pricing calculator</a> to build quotes that carry the right margin through.</p>
      <p>Avoid the <a href="/blog/freelance-pricing-mistakes">5 most common pricing mistakes</a> from the start, and you will be ahead of most freelancers who spent their first few years chronically undercharging.</p>
    `,
  },

  'daily-rate-calculation': {
    title: 'Day Rate vs Hourly Rate: How to Convert Between Them Without Losing Margin',
    date: 'March 27, 2026', readTime: '6 min read', category: 'Pricing',
    description: 'A day rate is not just hourly × 8. Here is the correct conversion, with the billable-hours adjustment that most freelancers miss.',
    relatedIds: ['how-to-calculate-freelance-rate', 'hourly-vs-project-pricing', 'billable-hours-guide'],
    content: `
      <p>When a client asks for a day rate, many freelancers multiply their hourly rate by eight. That is almost always wrong — and it consistently produces a day rate that is lower than it should be. The correct conversion depends on how many hours in a day you can actually bill. Start by calculating your hourly floor with the <a href="/calculator">RateCrafts calculator</a>, then apply the right multiplier.</p>
      <h2>Why the ×8 multiplier is inaccurate</h2>
      <p>An 8-hour working day is not 8 billable hours. A realistic day for most knowledge workers includes 1–2 hours of internal communication, breaks, context-switching, and interruptions. That leaves 6–7 hours of genuinely productive billable work. Use 6.5 as a reasonable default and adjust from there based on the nature of the engagement.</p>
      <h2>The correct formula</h2>
      <p><strong>Day rate = hourly rate × realistic daily billable hours</strong></p>
      <p>If your hourly floor is $80 and you bill 6.5 productive hours per day: day rate = $80 × 6.5 = <strong>$520/day</strong>. Using 8 hours: $640/day. The difference is not trivial — a 5-day engagement at the wrong rate costs you $600.</p>
      <h2>Comparison: day rate vs project rate</h2>
      <ul>
        <li><strong>Day rate:</strong> clear, simple, natural for on-site and consultancy work. Protects you if the engagement runs long. Clients pay per day regardless of output.</li>
        <li><strong>Project rate:</strong> better for defined deliverables with clear completion criteria. Use the <a href="/project-calculator">project pricing calculator</a> to build these — it adds revision rounds and scope buffer that a simple day rate does not capture.</li>
      </ul>
      <h2>When to use each</h2>
      <p>Day rates work well for consulting days, workshops, on-site work, and open-ended retainers billed in time units. Project rates work better when there is a clear deliverable. For a deeper comparison, see our guide on <a href="/blog/hourly-vs-project-pricing">hourly vs project pricing</a>. For the underlying hours logic, see <a href="/blog/billable-hours-guide">how many hours are actually billable</a>.</p>
    `,
  },

  'profit-margin-for-freelancers': {
    title: 'Why Freelancers Who Price for Break-Even Never Actually Break Even',
    date: 'March 24, 2026', readTime: '7 min read', category: 'Finance',
    description: 'Break-even pricing sounds sensible. In practice, it guarantees financial fragility. Here is why profit margin is not optional and how much to target.',
    relatedIds: ['how-to-calculate-freelance-rate', 'hidden-costs-of-freelancing', 'freelance-rate-too-low'],
    content: `
      <p>The logic seems sound: set a rate that covers your income, your taxes, and your expenses, and you will be fine. In practice, freelancers who price to break-even rarely do. The reason is structural: break-even assumes perfect, continuous utilisation. Real freelance businesses have slow months, late payers, lost clients, and unexpected costs — none of which break-even pricing can absorb. The fix is a profit margin, and the <a href="/calculator">RateCrafts calculator</a> has a dedicated field for it.</p>
      <h2>What profit margin actually means for a freelancer</h2>
      <p>Profit margin, in this context, is a percentage added to your base rate above and beyond the costs of doing business. If your break-even rate is $70/hr and you add a 15% profit margin, your rate becomes $80.50/hr. That $10.50 per hour — $840/month at 80 billable hours — is what funds your slow months, your equipment replacement fund, your savings, and any growth investment in your business.</p>
      <h2>The break-even trap illustrated</h2>
      <p>A freelance designer breaks even at $65/hr. They bill an average of 80 hours/month. In February, they bill 55 hours — not unusual given how January projects trail off. At break-even pricing, that 25-hour shortfall is a $1,625 hole in their finances. With a 15% margin baked in, their rate is $74.75/hr, and the same 55-hour month still covers costs with a small cushion.</p>
      <h2>How much margin to target</h2>
      <p>For most solo freelancers: 10–20% is a reasonable range. Here is a simple table:</p>
      <ul>
        <li><strong>10%:</strong> Minimal buffer. Absorbs small fluctuations but not extended slow periods.</li>
        <li><strong>15%:</strong> Reasonable resilience. Covers a slow month without touching savings.</li>
        <li><strong>20%+:</strong> Strong cushion. Appropriate for freelancers with irregular income patterns or significant overhead.</li>
      </ul>
      <p>Margin is separate from your income goal — it sits on top of everything else. The <a href="/blog/hidden-costs-of-freelancing">7 hidden costs of freelancing</a> covers what goes in the expenses field before margin is even calculated. If you are not sure whether your current rate includes meaningful margin, run it through the calculator and compare the output to what you charge. The diagnostic in <a href="/blog/freelance-rate-too-low">how to know your rate is too low</a> will help you interpret the gap.</p>
    `,
  },

  'billable-hours-guide': {
    title: 'The 40-Hour Billable Week Is a Myth. Here Is What Freelancers Actually Bill.',
    date: 'March 21, 2026', readTime: '7 min read', category: 'Productivity',
    description: 'Overestimating billable hours is one of the most expensive pricing mistakes a freelancer can make. Here is what the numbers actually look like — and how to use them correctly.',
    relatedIds: ['how-to-calculate-freelance-rate', 'hidden-costs-of-freelancing', 'freelance-pricing-mistakes'],
    content: `
      <p>If you used 40 hours per week when you calculated your freelance rate, you underestimated your required rate by around 37–50%. That is not a rounding error — it is one of the main structural reasons skilled freelancers stay underpaid. The number you use in the <a href="/calculator">rate calculator</a> for billable hours is the most consequential input in the entire formula.</p>
      <h2>Where the non-billable hours go</h2>
      <p>A typical freelance week for a solo practitioner includes:</p>
      <ul>
        <li>Client communication: 3–5 hours (calls, email, Slack, status updates)</li>
        <li>Proposals and sales: 2–4 hours (depends on pipeline activity)</li>
        <li>Admin and invoicing: 1–2 hours</li>
        <li>Revisions not covered by scope: 1–3 hours</li>
        <li>Professional development: 1–2 hours</li>
        <li>Business admin (accounting, contracts, tax): 30–60 minutes</li>
      </ul>
      <p>That is 8–16 hours of weekly work that never appears on an invoice. Applied against a 40-hour week, it leaves 24–32 genuinely billable hours — and that is before accounting for sick days, holidays, or the inevitable slow weeks between projects.</p>
      <h2>Benchmarks by experience level</h2>
      <ul>
        <li><strong>New freelancers (0–2 years):</strong> 15–22 hours. Heavy investment in proposals, learning, and relationship-building reduces billable output significantly.</li>
        <li><strong>Established freelancers (2–5 years):</strong> 22–28 hours. Processes are more efficient; referrals reduce proposal time; less time spent on non-billable learning.</li>
        <li><strong>Experienced freelancers with strong pipelines:</strong> 25–32 hours. Rarely higher, even with excellent systems.</li>
      </ul>
      <h2>The quantitative impact on your rate</h2>
      <p>A freelancer who needs $8,500/month in revenue to cover income, tax, and expenses:</p>
      <ul>
        <li>At 40 billable hours/week (160/month): requires $53/hr</li>
        <li>At 25 billable hours/week (108/month): requires $78/hr</li>
        <li>At 20 billable hours/week (86/month): requires $99/hr</li>
      </ul>
      <p>The gap between the 40-hour assumption and a realistic 25-hour estimate is $25/hr — roughly $2,700/month in chronically uncaptured income. This is why the billable hours input in the <a href="/calculator">RateCrafts calculator</a> defaults to 25, not 40.</p>
      <p>See our companion article on <a href="/blog/hidden-costs-of-freelancing">hidden freelance costs</a> for the expenses side, and <a href="/blog/freelance-pricing-mistakes">5 pricing mistakes</a> for the full picture of how these errors compound.</p>
    `,
  },

  'quote-a-project-profitably': {
    title: 'How to Quote a Freelance Project Without Locking Yourself Into Underpriced Work',
    date: 'March 19, 2026', readTime: '8 min read', category: 'Business',
    description: 'Project quotes go wrong in predictable ways. Here is the structured method for building a quote you can defend — with the math done before the conversation.',
    relatedIds: ['how-to-calculate-freelance-rate', 'hourly-vs-project-pricing', 'raising-your-rates'],
    content: `
      <p>A project quote is not a guess wrapped in professional language. Or it should not be. The most common way freelancers lose money on projects is not by doing bad work — it is by quoting before they have done the arithmetic. The structured method here, supported by the <a href="/project-calculator">project pricing calculator</a>, prevents the three most expensive quoting errors.</p>
      <h2>Error 1: Scoping the deliverable, not the work</h2>
      <p>A client asks for "a website." That is a deliverable, not a scope. The scope includes discovery calls, wireframes, design iterations, development, content integration, testing, revisions, QA, deployment, and handoff. Writing down every phase — with honest hour estimates for each — is what separates a quote that holds from one that bleeds.</p>
      <h2>Error 2: Ignoring revisions</h2>
      <p>Revision rounds are real work that always takes longer than expected. "Two rounds of revisions" sounds small until a round involves a directional change, a new stakeholder, or a replatform request. Price revision rounds explicitly — both in the quote and in your client-facing terms. The <a href="/project-calculator">project pricing calculator</a> has dedicated fields for revision rounds and hours per round.</p>
      <h2>Error 3: No scope buffer</h2>
      <p>Every project takes longer than the estimate. Clients request scope additions, briefs are incomplete, technical blockers appear. A 15–25% buffer on your total estimate is not pessimism — it is professional risk management. Build it in before you send the quote, not after the project goes over.</p>
      <h2>The full project pricing formula</h2>
      <p>Base hours × hourly rate = base cost<br />
      Revision hours × hourly rate = revision cost<br />
      (Base + revision) × buffer% = buffered subtotal<br />
      Buffered subtotal × tax% = tax provision<br />
      Buffered subtotal × margin% = profit<br />
      Total = buffered subtotal + tax + profit</p>
      <p>The <a href="/project-calculator">project calculator</a> does this automatically. Your job is to put the right inputs in — particularly an hourly rate that already accounts for your costs. If you have not calculated that floor yet, start with the <a href="/calculator">hourly rate calculator</a> before opening the project one.</p>
      <p>As your quoting accuracy improves, you will find yourself in a much stronger position when the conversation turns to rate increases — see <a href="/blog/raising-your-rates">how to raise your rates professionally</a> for the negotiation side.</p>
    `,
  },

  'freelance-rate-too-low': {
    title: 'Fully Booked and Still Broke: How to Tell If Your Freelance Rate Is the Problem',
    date: 'March 16, 2026', readTime: '6 min read', category: 'Strategy',
    description: 'A full client calendar does not equal a healthy business. Here are the specific signals that your rate is the problem — and the calculation that confirms it.',
    relatedIds: ['how-to-calculate-freelance-rate', 'raising-your-rates', 'freelance-pricing-mistakes'],
    content: `
      <p>The confusion around freelance rates often comes from conflating being busy with being profitable. A freelancer who is always fully booked at the wrong rate is not running a healthy business — they are running a treadmill. The fastest diagnostic: put your real numbers into the <a href="/calculator">RateCrafts rate calculator</a> and compare what comes out to what you actually charge.</p>
      <h2>The symptoms — specifically</h2>
      <ul>
        <li><strong>Always booked, never saving:</strong> If maximum utilisation still does not generate savings, the rate is the structural problem.</li>
        <li><strong>Cannot afford to turn down bad clients:</strong> Having to take work you would decline if you could is a pricing problem, not a pipeline problem.</li>
        <li><strong>Rate has not changed in 18+ months:</strong> Inflation alone erodes real income. Skill development and business maturity should increase it further.</li>
        <li><strong>You feel resentful about certain projects:</strong> Resentment is often a signal that the price paid does not reflect the work required. This shows up when scope creep goes uncompensated.</li>
        <li><strong>One bad month creates a financial crisis:</strong> If a slow month is an emergency rather than a managed variance, your rate has no margin buffer built in. See <a href="/blog/profit-margin-for-freelancers">why profit margin is not optional</a>.</li>
      </ul>
      <h2>The test: calculate what you should be charging</h2>
      <p>Open the <a href="/calculator">rate calculator</a>. Enter your real income goal, real tax rate, real monthly expenses (see <a href="/blog/hidden-costs-of-freelancing">the full list of what to include</a>), realistic billable hours (see <a href="/blog/billable-hours-guide">the guide on billable hours</a>), and a 10–15% margin buffer. If the output is materially higher than your current rate, that gap is the problem.</p>
      <h2>What to do once you know</h2>
      <p>The answer is almost never "get more clients." More clients at the wrong rate compounds the problem. The answer is a higher rate, applied to new work immediately and phased into existing client relationships over the next contract cycle. See our guide on <a href="/blog/raising-your-rates">raising rates professionally</a> for exactly how to do that without unnecessary tension. For new project quotes, use the <a href="/project-calculator">project pricing calculator</a> to build prices that carry the right margin through from the start.</p>
    `,
  },

  'how-to-price-a-freelance-project': {
    title: 'How to Price a Freelance Project: A Complete Method for Any Engagement',
    date: 'April 8, 2026', readTime: '11 min read', category: 'Business',
    description: 'From hourly floor to final invoice, here is the complete framework for pricing a freelance project — with worked examples and the calculator to run the numbers.',
    relatedIds: ['quote-a-project-profitably', 'freelance-project-pricing-template', 'hourly-vs-project-pricing'],
    content: `
      <p>Project pricing fails at one of three stages: no hourly floor to anchor from, no structured estimate of what the project actually involves, or no buffer for the things that always go differently than planned. Fix all three and you have a quote you can defend. Build your hourly floor first with the <a href="/calculator">hourly rate calculator</a>, then build the project quote with the <a href="/project-calculator">project pricing calculator</a>.</p>
      <h2>Stage 1: Establish your hourly floor</h2>
      <p>Every project price is a multiplied hourly rate. If the rate is wrong, the project price is wrong by the same factor. A freelance developer with a $50/hr floor who needs $75/hr to actually cover their costs will lose $25/hr × however many hours the project takes. On a 60-hour project, that is $1,500 of systematically undercharged work.</p>
      <p>The hourly floor comes from the formula: (income + expenses + taxes + margin) ÷ billable hours. The <a href="/calculator">calculator</a> does this automatically.</p>
      <h2>Stage 2: Build a granular scope estimate</h2>
      <p>Break the project into phases and estimate each one independently. For a web project: discovery (3–5 hrs), wireframes (4–8 hrs), design (10–20 hrs), development (15–40 hrs), revisions (built separately), QA and testing (3–5 hrs), handoff and documentation (2–4 hrs). Total those hours and you have your base estimate. Do not estimate the project as a whole — estimates made at the phase level are systematically more accurate.</p>
      <h2>Stage 3: Price revisions explicitly</h2>
      <p>"Revisions included" is one of the most expensive phrases in freelancing. Define revision rounds precisely: how many, what counts as a revision, and what the additional cost per round is. Clients respect clarity here — it is not hostile, it is professional. The <a href="/project-calculator">project calculator</a> takes revision rounds and hours per round as separate inputs and calculates the cost automatically.</p>
      <h2>Stage 4: Apply buffer and margin</h2>
      <p>Buffer (15–25% on the subtotal) protects against scope creep and estimation errors. Profit margin (10–20%) ensures the project builds the business rather than just covering it. Both are separate: buffer is risk management, margin is business development. Apply them in sequence, then add the tax provision on the final subtotal.</p>
      <h2>Stage 5: Present the number with context</h2>
      <p>A client who understands how a price is built is less likely to push back on it. Showing the base estimate, the revision provision, and a clearly labelled scope buffer communicates professional rigour. Use the template in <a href="/blog/freelance-project-pricing-template">the project pricing template article</a> to structure the presentation.</p>
    `,
  },

  'freelance-project-pricing-template': {
    title: 'The Freelance Project Pricing Template: What to Include in Every Quote',
    date: 'April 7, 2026', readTime: '9 min read', category: 'Business',
    description: 'A structured template for freelance project quotes — covering scope definition, revision policy, pricing breakdown, and payment terms that protect your business.',
    relatedIds: ['how-to-price-a-freelance-project', 'quote-a-project-profitably', 'hourly-vs-project-pricing'],
    content: `
      <p>A project quote is also a legal document, a scope agreement, and a client education tool. Quotes that include only a number and a deliverable list create disputes. Quotes built on this template create clarity — and clear quotes win more work at better rates. Generate your numbers using the <a href="/project-calculator">project pricing calculator</a>, then structure them using the sections below.</p>
      <h2>Section 1: Project scope in plain language</h2>
      <p>Two to three paragraphs describing what is being delivered, the context, and the approach. Not jargon, not a feature list — a clear explanation of what you understand the client needs. This section also protects you: if a client later claims they expected something different, this description is your reference point.</p>
      <h2>Section 2: Deliverables list</h2>
      <p>Specific, concrete, numbered. Not "website" but "five-page website: homepage, about, services, case studies, contact. Each page designed in Figma and developed in [framework]. Responsive across mobile, tablet, and desktop." This level of specificity makes later scope disputes significantly less likely.</p>
      <h2>Section 3: Timeline</h2>
      <p>Not a delivery date — a phase timeline. Discovery (1 week), design (2 weeks), development (3 weeks), review and revisions (1 week), final delivery (2 days). This sets client expectations and gives you a natural milestone structure to invoice against.</p>
      <h2>Section 4: Revision policy</h2>
      <p>This section is the single most important protection in any fixed-price quote. "Two rounds of revisions included. Each round consists of one consolidated set of feedback. Additional rounds are available at [hourly rate] per round." This is not aggressive — it is clear. Clients who plan to give coherent feedback appreciate knowing the structure. Clients who do not plan their feedback will benefit from the structure too.</p>
      <h2>Section 5: Pricing breakdown</h2>
      <p>Show the components transparently: base project cost, revision provision, scope buffer, and the final total. Transparency builds trust. "£5,200 including a 20% scope buffer" reads more professionally than a bare number — it signals that you have thought about risk, which clients want in a professional. Use the <a href="/project-calculator">project calculator</a> to produce this breakdown.</p>
      <h2>Section 6: Payment terms</h2>
      <p>50% upfront, 50% on completion is a common and defensible structure for most projects. For longer projects, milestone payments work better: 30% upfront, 30% at midpoint, 40% on delivery. Include late payment terms explicitly — "invoices unpaid after 30 days are subject to 2% monthly interest" is standard and rarely invoked but important to have in writing.</p>
      <h2>Section 7: What is not included</h2>
      <p>Explicitly: stock photography, third-party tool licences, copywriting, translations, printing, paid advertising, SEO implementation beyond on-page basics. Anything a client might reasonably assume is included but is not — name it. This section prevents more scope disputes than any other.</p>
      <p>For the underlying hourly rate that anchors the numbers, use the <a href="/calculator">rate calculator</a>. For the full project pricing method, see <a href="/blog/how-to-price-a-freelance-project">how to price a freelance project</a>.</p>
    `,
  },

  'how-much-to-charge-per-hour': {
    title: 'How Much Should a Freelancer Charge Per Hour? The Answer Depends on Your Numbers.',
    date: 'April 6, 2026', readTime: '10 min read', category: 'Strategy',
    description: 'Market rate guides give you a range. Your calculator gives you a floor. Here is how to use both together to set a rate you can defend to any client.',
    relatedIds: ['how-to-calculate-freelance-rate', 'freelance-rate-too-low', 'billable-hours-guide'],
    content: `
      <p>Rate guides and market surveys provide useful context, but they cannot tell you your minimum viable rate. That number comes from your specific income goals, tax situation, business costs, and working capacity. Use the <a href="/calculator">RateCrafts calculator</a> to establish your floor, then use market data to position above it.</p>
      <h2>Why market rate guides are context, not answers</h2>
      <p>When a survey says "mid-level web developers charge $75–$150/hr," that range reflects freelancers in different countries, with different cost structures, billing different numbers of hours per week, operating in different tax regimes. The lower end of that range may be financially unsustainable for someone in San Francisco with $2,000/month in business expenses. The upper end may be the right number for a specialist in a high-demand niche.</p>
      <p>Market data tells you what is credible to charge. Your calculation tells you what you must charge to sustain the business.</p>
      <h2>The floor calculation — worked example</h2>
      <p>A freelance UX designer in the UK wants £3,500/month take-home. They have £600/month in expenses (tools, insurance, accountant), estimate 27% tax provision, bill 25 hours/week, and want a 12% profit margin:</p>
      <ul>
        <li>Gross needed for income: £3,500 ÷ 0.73 = £4,795</li>
        <li>Add expenses: £4,795 + £600 = £5,395</li>
        <li>Add 12% margin: £5,395 × 1.12 = £6,042</li>
        <li>Monthly billable hours: 25 × 4.33 = 108</li>
        <li>Required rate: £6,042 ÷ 108 = <strong>£56/hr</strong></li>
      </ul>
      <p>That is the floor. If the market for mid-level UX in the UK is £60–£100/hr, they should be charging at least £60–£65 to align with market while covering their costs. Charging the floor and positioning poorly is a different problem to solve — but the floor comes first.</p>
      <h2>Typical ranges by profession (2026)</h2>
      <ul>
        <li><strong>Web/software development:</strong> $65–$200/hr (junior to senior, US)</li>
        <li><strong>UX/UI design:</strong> $60–$175/hr</li>
        <li><strong>Copywriting / content:</strong> $45–$150/hr</li>
        <li><strong>Digital marketing consultant:</strong> $75–$250/hr</li>
        <li><strong>Technical writing:</strong> $55–$125/hr</li>
      </ul>
      <p>UK rates: typically 65–75% of US equivalents in GBP, with significant variation by niche and client sector. See our specific guide on <a href="/blog/freelance-rate-calculator-uk">freelance rates in the UK</a> for more detail.</p>
      <h2>What to do if your floor is above the market range</h2>
      <p>This is a niche or positioning problem, not a rate problem. Your calculated floor reflects your actual costs — the market range reflects what clients are currently willing to pay for undifferentiated services. The path forward is specialisation, not undercharging. See <a href="/blog/freelance-pricing-mistakes">the most common pricing mistakes</a> for why accepting a rate below your floor never solves the underlying problem.</p>
    `,
  },

  'freelance-rate-calculator-uk': {
    title: 'Freelance Rate Calculator UK: How to Set Your Rate for the British Market',
    date: 'April 9, 2026', readTime: '9 min read', category: 'Strategy',
    description: 'UK freelancers face distinct tax rules, different NI obligations, and IR35 risk. Here is how to calculate a sustainable hourly rate accounting for all of it.',
    relatedIds: ['how-to-calculate-freelance-rate', 'freelance-tax-guide', 'hidden-costs-of-freelancing'],
    content: `
      <p>The UK freelance market has its own tax structure, its own rate norms, and IR35 — a risk that can fundamentally change a contractor's effective tax rate. Generic freelance rate calculators ignore all three. The <a href="/calculator">RateCrafts calculator</a> works for any currency and any tax rate; use the guidance below to enter the right UK-specific numbers.</p>
      <h2>UK self-employment tax: what actually applies</h2>
      <p>As a self-employed freelancer operating as a sole trader, you pay:</p>
      <ul>
        <li><strong>Income tax:</strong> 20% on profits between £12,570 and £50,270; 40% above £50,270</li>
        <li><strong>Class 4 NI:</strong> 9% on profits between £12,570 and £50,270; 2% above</li>
        <li><strong>Class 2 NI:</strong> flat rate contribution (if profits exceed £12,570)</li>
      </ul>
      <p>For a freelancer earning £40,000 in profits, the combined effective rate is approximately 29–31%. For £60,000 in profits, it rises to approximately 32–34% once the higher rate income tax kicks in. For the <a href="/calculator">calculator</a>, use 30% as a starting point for £30–50k profits, and 33–35% for £50–80k.</p>
      <h2>HMRC-deductible expenses that should be in your calculator input</h2>
      <p>Before calculating your tax, HMRC allows you to deduct legitimate business expenses. Include these in the expenses field of the calculator — they reduce your taxable profit, which reduces your tax bill:</p>
      <ul>
        <li>Professional software and subscriptions</li>
        <li>Home office costs (simplified flat rate or proportion of actual costs)</li>
        <li>Professional indemnity and public liability insurance</li>
        <li>Accountancy fees</li>
        <li>Business travel</li>
        <li>Professional development and training</li>
        <li>Equipment (capital allowances)</li>
      </ul>
      <h2>IR35: the rate impact</h2>
      <p>If you operate through a limited company and a client determines your engagement falls inside IR35, your effective tax rate increases substantially — effectively to employment-level rates, with employer NI applied on top. Freelancers working in sectors where IR35 is commonly applied (public sector, large private organisations) should factor a 35–40% tax provision into their rate calculation when bidding on those engagements, compared to the 29–31% applicable to clearly outside-IR35 work. When in doubt, consult an accountant — this is consequential math.</p>
      <h2>UK day rate benchmarks (2026)</h2>
      <ul>
        <li>Mid-level developer: £400–£650/day</li>
        <li>Senior developer / architect: £600–£900/day</li>
        <li>UX/UI designer: £350–£600/day</li>
        <li>Digital marketing consultant: £300–£600/day</li>
        <li>Copywriter: £300–£550/day</li>
      </ul>
      <p>To convert your hourly rate to a UK day rate, multiply by your realistic billable hours per day (typically 6.5–7.5). See our guide on <a href="/blog/daily-rate-calculation">day rate calculation</a> for the full method. For the underlying hourly floor, use the <a href="/calculator">calculator</a> with your UK-specific tax rate and expenses.</p>
    `,
  },

  'best-billable-hours-for-freelancers': {
    title: 'What Is the Right Number of Billable Hours Per Week for a Sustainable Freelance Practice?',
    date: 'April 10, 2026', readTime: '7 min read', category: 'Productivity',
    description: 'There is no single right answer — but there is a right method for finding your number. Here is how to estimate realistic billable hours and why it changes your rate significantly.',
    relatedIds: ['billable-hours-guide', 'how-to-calculate-freelance-rate', 'freelance-pricing-mistakes'],
    content: `
      <p>The question is deceptively simple: how many hours per week should you plan to bill? The answer determines your rate, your workload, and your financial stability — so getting it right matters significantly. Enter your honest estimate in the <a href="/calculator">RateCrafts rate calculator</a> to see how it changes your required rate.</p>
      <h2>Why there is no universal "right" number</h2>
      <p>Billable hours vary enormously based on the type of work (retainer vs project), the stage of your business (building vs established), your niche (creative vs technical vs consulting), and personal factors (health, family, working style). A freelance consultant working mostly on ongoing retainers might bill 28–32 hours consistently. A creative freelancer doing project work with significant proposal overhead might average 18–24. Both are sustainable at the right rate.</p>
      <h2>The formula for finding your personal realistic number</h2>
      <p>Start with your available working hours (typically 40/week for full-time). Then subtract:</p>
      <ul>
        <li>Client communication: 15–20% of total time</li>
        <li>Sales and proposals: 5–15% (higher when building, lower when established)</li>
        <li>Admin and invoicing: 5%</li>
        <li>Professional development: 5–10%</li>
        <li>Unbilled revision work: 5–10%</li>
      </ul>
      <p>That leaves 40–65% of your time genuinely billable. On 40 hours: 16–26 hours. The range is wide; use your own pattern to calibrate.</p>
      <h2>The sweet spot for most freelancers</h2>
      <p>Based on the patterns above, 22–28 hours/week is the range where most established solo freelancers actually operate sustainably. The RateCrafts calculator defaults to 25 for this reason — it is neither optimistic nor pessimistic for a full-time freelancer.</p>
      <h2>Why optimism here is expensive</h2>
      <p>If you assume 35 hours/week and actually bill 22, you have built your entire financial model on a 59% error. Your rate will be 37% too low. On 80 monthly billable hours (the 22-hour scenario), every $1 of undercharging costs $80/month — or $960/year per dollar of rate gap. See our full analysis in the <a href="/blog/billable-hours-guide">billable hours guide</a> and the five ways this compounds in <a href="/blog/freelance-pricing-mistakes">the pricing mistakes article</a>.</p>
    `,
  },

  'common-freelance-pricing-mistakes': {
    title: 'The Most Common Freelance Pricing Mistakes — A Deep-Dive into What Keeps Skilled People Underpaid',
    date: 'April 11, 2026', readTime: '10 min read', category: 'Pricing',
    description: 'Seven specific pricing errors that keep competent freelancers underearning — with the structural fix for each one and the calculator to verify your numbers.',
    relatedIds: ['freelance-pricing-mistakes', 'how-to-calculate-freelance-rate', 'freelance-rate-too-low'],
    content: `
      <p>The average quality gap between a $40/hr freelancer and an $80/hr freelancer is smaller than most people assume. The pricing gap is mostly explained by avoidable process errors — starting with the most consequential: not using a formula. The <a href="/calculator">RateCrafts rate calculator</a> is the structural fix for the majority of these errors.</p>
      <h2>Error 1: Setting rates from market observations, not personal calculations</h2>
      <p>Market rates are averages. They include freelancers in low-cost countries, people who work part-time, specialists who are rarely available, and beginners who undercharge to build a portfolio. Your rate is derived from your situation — anchoring to market data before calculating your floor produces rates that are systematically wrong for your specific context.</p>
      <h2>Error 2: Ignoring self-employment tax</h2>
      <p>Employed workers have half of their National Insurance or Social Security taxes paid by their employer. Freelancers pay both halves. In the US, that is 7.65% of gross income paid in hidden employer contributions that a freelancer now pays themselves. In the UK, it is the difference between Class 1 (shared) and Class 4 NI (self-employed only). See the full UK context in <a href="/blog/freelance-rate-calculator-uk">the UK rate guide</a> and the US tax structure in <a href="/blog/freelance-tax-guide">the freelance tax guide</a>.</p>
      <h2>Error 3: Treating break-even as success</h2>
      <p>A rate that produces break-even financials means a single slow month puts you in deficit. There is no margin for equipment failure, professional development, or business growth. See the full argument in <a href="/blog/profit-margin-for-freelancers">why break-even pricing fails</a>.</p>
      <h2>Error 4: Using 40 billable hours as a planning assumption</h2>
      <p>Covered in depth in <a href="/blog/best-billable-hours-for-freelancers">the billable hours guide</a>, but the short version: 40 billable hours in a 40-hour week requires zero time for proposals, admin, calls, professional development, or the revision work that goes uncompensated. It is not achievable consistently. The rate it produces is systematically too low.</p>
      <h2>Error 5: Not updating rates for inflation or skill development</h2>
      <p>A rate set in 2022 that has not moved is 15–20% lower in real terms due to inflation alone. Add that skill development makes you 20–30% more productive in the same period, and the rate gap compounds further. The prompt to review is simple: the calculator output has changed significantly relative to what you charge, or you are about to start a new client relationship. See <a href="/blog/how-to-raise-your-rates">the professional playbook for raising rates</a>.</p>
      <h2>Error 6: Quoting projects without a structured method</h2>
      <p>Project quotes go wrong predictably: scope is underestimated, revisions are not priced, no buffer is included, and tax is forgotten. The <a href="/project-calculator">project pricing calculator</a> solves all four, but only if you use your correctly calculated hourly floor as the input. See the full project pricing method in <a href="/blog/how-to-price-a-freelance-project">how to price a freelance project</a>.</p>
      <h2>Error 7: Conflating being busy with being profitable</h2>
      <p>Full utilisation at the wrong rate is not a good outcome. If the diagnostic in <a href="/blog/freelance-rate-too-low">the rate-too-low article</a> applies to you, the solution is not more clients — it is a rate correction applied to the next project.</p>
    `,
  },

  'how-to-raise-your-rates': {
    title: 'How to Raise Your Freelance Rates: A Step-by-Step Playbook for Doing It Without Drama',
    date: 'April 12, 2026', readTime: '9 min read', category: 'Business',
    description: 'Most freelancers know they should raise their rates. Few know exactly how. This is the step-by-step process — from calculating the new number to having the client conversation.',
    relatedIds: ['raising-your-rates', 'freelance-rate-too-low', 'how-to-calculate-freelance-rate'],
    content: `
      <p>Freelancers who raise their rates regularly build more financially stable businesses, work with better clients, and spend less time doing work they resent. Freelancers who never raise their rates end up working harder each year for the same or less money in real terms. This playbook covers the full process — from calculating the right new number to sending the message. Start by confirming your floor with the <a href="/calculator">rate calculator</a>.</p>
      <h2>Step 1: Calculate your correct rate first</h2>
      <p>Do not decide what to raise your rate to based on what feels bold. Calculate what it should be based on your actual income goal, tax provision, business expenses, realistic billable hours, and a margin buffer. The <a href="/calculator">RateCrafts calculator</a> gives you this number. If the result is more than 20–25% above your current rate, consider a phased increase rather than a single jump.</p>
      <h2>Step 2: Identify which relationships to address first</h2>
      <p>New clients: raise immediately — there is no existing rate expectation to manage. Ongoing retainers: raise at the next natural renewal point. Project clients between engagements: raise before the next project quote. Clients mid-project: do not change rates during a project unless circumstances have materially changed.</p>
      <h2>Step 3: Give adequate notice</h2>
      <p>Four weeks minimum for all clients. Six weeks for long-standing relationships. Frame it as advance notice, not an apology. The message is information, not a negotiation opener.</p>
      <h2>Step 4: The message — specifics matter</h2>
      <p>"Hi [name], I wanted to let you know that starting [date], my rate will be moving to [amount]. I wanted to give you enough notice to plan accordingly. I'm looking forward to continuing the work on [project/ongoing work]."</p>
      <p>That is the whole message. You do not need to justify it at length. If they ask why: "My pricing reflects the current cost of doing this work professionally, including the tools, time, and expertise involved." If they push back: acknowledge it, offer clarity on what the rate includes, and hold the position.</p>
      <h2>Step 5: Apply the new rate consistently</h2>
      <p>New project quotes go out at the new rate immediately using the <a href="/project-calculator">project pricing calculator</a>. Inconsistency — charging different clients different rates for the same work — creates exactly the kind of opaqueness that erodes professional positioning. The new rate is the rate.</p>
      <p>For the diagnostic that tells you whether your rate is already too low before you decide whether to raise it, see <a href="/blog/freelance-rate-too-low">the rate diagnostic</a>. For the most common reasons rates drift below where they should be, see <a href="/blog/common-freelance-pricing-mistakes">common pricing mistakes</a>.</p>
    `,
  },

  'how-to-quote-without-underpricing': {
    title: 'How to Quote a Project Without Underpricing: The Pre-Send Checklist',
    date: 'April 13, 2026', readTime: '10 min read', category: 'Business',
    description: 'Most project underpricing happens before the client conversation. Here is the pre-send checklist that catches the structural errors before they become unprofitable commitments.',
    relatedIds: ['freelance-project-pricing-template', 'how-to-price-a-freelance-project', 'quote-a-project-profitably'],
    content: `
      <p>The most expensive mistakes in project pricing happen before the quote is sent — not during the client negotiation. Ambiguous scope, missing revision provisions, no buffer, forgotten tax. The <a href="/project-calculator">project pricing calculator</a> catches the numerical ones automatically; this checklist catches the structural ones before you commit to a number you will regret.</p>
      <h2>Check 1: Does your hourly rate reflect your real costs?</h2>
      <p>Every project price is a multiplied hourly rate. If the rate you are using is 20% below what it should be, every hour in the project is undervalued by 20%. Run your rate through the <a href="/calculator">hourly rate calculator</a> before building the project quote. This check happens before any others.</p>
      <h2>Check 2: Have you scoped the work, not just the deliverable?</h2>
      <p>A deliverable is an output. A scope is the work required to produce it. "A website" is a deliverable. "Discovery (4 hours), sitemap and wireframes (6 hours), design (16 hours), development (32 hours), content integration (4 hours), testing (3 hours), revisions (included separately)" is a scope. Quotes built on deliverables under-estimate. Quotes built on scopes are accurate.</p>
      <h2>Check 3: Are revisions priced and defined?</h2>
      <p>Before sending: state how many revision rounds are included, what a revision round means (one consolidated set of feedback per round), and what the cost is for additional rounds. If this is not in the quote, the client will assume revisions are unlimited, and they will not be entirely wrong to do so.</p>
      <h2>Check 4: Is there a scope buffer?</h2>
      <p>Add 15–25% to your time estimate before calculating the price. Not after. Not as a negotiating margin. As a genuine provision for the work always taking longer than scoped. The <a href="/project-calculator">calculator</a> has a buffer percentage field — use it.</p>
      <h2>Check 5: Is tax included?</h2>
      <p>Are you quoting the amount the client pays, or the amount you keep? These should be the same number — and that number should already account for tax. If you quote $5,000 and 30% of it goes to tax, you net $3,500. That is a $1,500 gap from what you planned. Build tax into the project price before it goes out.</p>
      <h2>Check 6: Is there a profit margin?</h2>
      <p>Covering costs is break-even. Profit margin — 10–20% above the buffered subtotal — is what makes the project worthwhile beyond the immediate income it generates. See <a href="/blog/profit-margin-for-freelancers">why margin is not optional</a> if this feels like excess.</p>
      <h2>Check 7: Is what is NOT included explicit?</h2>
      <p>Write the exclusion list. Stock photography, translations, third-party licence fees, printing, copywriting. If you do not name it, clients will assume it is included. Disputes over project scope almost always come from things that were not clearly excluded. For the full quote structure, use the template in <a href="/blog/freelance-project-pricing-template">the project pricing template article</a>.</p>
    `,
  },

  'freelance-rate-vs-salary': {
    title: 'Freelance Day Rate vs Salary: How to Convert Between Them Without the Common Errors',
    date: 'April 14, 2026', readTime: '8 min read', category: 'Finance',
    description: 'Converting between salary and freelance day rate requires more than dividing by 260. Here is the full conversion — with the employer costs, tax differences, and hidden costs that change the answer.',
    relatedIds: ['how-to-calculate-freelance-rate', 'daily-rate-calculation', 'hidden-costs-of-freelancing'],
    content: `
      <p>The naive conversion — annual salary ÷ 260 working days — consistently underestimates the day rate a freelancer needs to match an employment package. The reason: employment packages include costs the employer absorbs that become the freelancer's problem. Run your personal situation through the <a href="/calculator">rate calculator</a> to get a number specific to your costs, not a formula that applies to an average employee.</p>
      <h2>What employment packages include that freelance rates must cover</h2>
      <p>When an employer pays an employee £50,000/year, the total employment cost is substantially higher:</p>
      <ul>
        <li><strong>Employer NI (UK):</strong> ~13.8% above £9,100, adding ~£5,500/year to a £50k salary</li>
        <li><strong>Pension contributions:</strong> minimum 3% employer contribution</li>
        <li><strong>Holiday pay:</strong> 28 days minimum = 11% uplift on daily rate</li>
        <li><strong>Sick pay:</strong> typically covered for months in employment; zero as a freelancer</li>
        <li><strong>Equipment and workspace:</strong> employer-provided in most roles</li>
        <li><strong>Professional development budget:</strong> common in tech roles; yours to fund as a freelancer</li>
      </ul>
      <p>Total employer cost for a £50,000 salary: approximately £60,000–£65,000, depending on benefits. The freelancer must price to cover all of this themselves.</p>
      <h2>The correct conversion formula</h2>
      <p><strong>Required gross freelance income = salary × 1.35–1.5 (to cover employer costs)</strong><br />
      Then: gross income ÷ expected billable days = daily rate</p>
      <p>For a £50,000 salary equivalent:</p>
      <ul>
        <li>Required gross: £50,000 × 1.4 = £70,000</li>
        <li>Billable days (220 working days × 75% utilisation): 165 days</li>
        <li>Required day rate: £70,000 ÷ 165 = <strong>£424/day</strong></li>
      </ul>
      <p>Compare that to the naive conversion: £50,000 ÷ 260 = £192/day. The gap is large — and that gap is why many people who "go freelance" at apparent salary equivalency end up worse off.</p>
      <h2>When the conversion runs the other direction</h2>
      <p>A freelancer charging £450/day and considering an employment offer: £450 × 165 billable days ÷ 1.4 ≈ £53,571 salary equivalent. That is the "break-even" salary — the employment package that would leave them no better or worse off financially. For an offer to be attractive, it needs to come with a salary materially above that number, accounting for stability, benefits, and career considerations. For the full hourly rate context, use the <a href="/calculator">calculator</a>, and for day rate conversion specifically, see <a href="/blog/daily-rate-calculation">the day rate guide</a>.</p>
    `,
  },

  'freelance-tax-guide': {
    title: 'Freelance Tax Guide: What You Need to Provision, When You Pay, and How to Build It Into Your Rate',
    date: 'April 15, 2026', readTime: '11 min read', category: 'Finance',
    description: 'Tax is the most commonly underprovisioned freelance cost. This guide covers what freelancers actually owe, how to calculate the right provision rate, and how to include it correctly in your pricing.',
    relatedIds: ['hidden-costs-of-freelancing', 'how-to-calculate-freelance-rate', 'freelance-rate-calculator-uk'],
    content: `
      <p>Most freelancers underprovision for tax. Not because they are irresponsible — because the tax calculation for self-employed individuals is genuinely more complex than for employees, and the consequences of getting it wrong arrive as a lump sum rather than gradually. The <a href="/calculator">RateCrafts rate calculator</a> lets you build a realistic tax provision directly into your pricing — so the money is accounted for before you spend it.</p>
      <h2>How freelance taxation differs from employment — concretely</h2>
      <p>As an employee, your tax is deducted automatically and your employer pays half your NI contributions. As a freelancer:</p>
      <ul>
        <li>You receive gross income and must provision tax yourself</li>
        <li>You pay self-employment tax / Class 4 NI on top of income tax, covering both the employee and employer shares</li>
        <li>You pay on a schedule, not in real-time — which means the money can be spent before the bill arrives</li>
      </ul>
      <h2>US freelance tax structure</h2>
      <p>In the US, self-employed individuals pay:</p>
      <ul>
        <li><strong>Self-employment tax:</strong> 15.3% on net earnings up to $168,600 (2024), comprising 12.4% Social Security and 2.9% Medicare</li>
        <li><strong>Federal income tax:</strong> marginal rates from 10% to 37% depending on income</li>
        <li><strong>State income tax:</strong> 0% to 13.3% depending on state</li>
      </ul>
      <p>For a freelancer earning $80,000 in a moderate-tax state, the effective combined rate is typically 28–34%. Use 30% as a starting estimate in the calculator; adjust upward if you are in a high-tax state (California, New York) or have significant investment income.</p>
      <h2>UK freelance tax structure</h2>
      <p>See the detailed breakdown in <a href="/blog/freelance-rate-calculator-uk">the UK rate guide</a>. Brief summary: income tax (20%/40%) plus Class 4 NI (9%/2%) produces an effective rate of 29–34% for most freelancers earning £30,000–£80,000. Add Class 2 NI above the small profits threshold.</p>
      <h2>The 30% rule — and when it is not enough</h2>
      <p>Setting aside 30% of every invoice is a simple, widely recommended heuristic that works for most US and UK freelancers at modest income levels. When it breaks down: (a) in high-tax US states, where 35% is safer; (b) for UK freelancers with significant dividend income from a limited company; (c) for anyone with substantial investment income that increases the effective marginal rate.</p>
      <h2>Quarterly vs annual — deadlines that matter</h2>
      <p>US freelancers must make quarterly estimated tax payments: April 15, June 15, September 15, January 15. Missing these incurs penalties and interest. UK freelancers file Self Assessment by January 31 (online) and make payments on account. Treat these deadlines as fixed business expenses, not optional administrative tasks.</p>
      <h2>Deductible expenses that reduce your taxable income</h2>
      <p>These expenses reduce your tax bill — include them in your rate calculation expenses field as well, since they are real business costs:</p>
      <ul>
        <li>Software and professional subscriptions</li>
        <li>Home office (simplified flat rate or actual proportion)</li>
        <li>Business insurance</li>
        <li>Accountant and professional fees</li>
        <li>Business travel</li>
        <li>Professional development</li>
        <li>Equipment (with capital allowance rules in the UK)</li>
      </ul>
      <p>See the full list in <a href="/blog/hidden-costs-of-freelancing">7 hidden freelance costs</a>. The overlap is intentional — everything that is deductible should also be in your rate calculation expenses, because it costs you money to earn your income. Once you have the right provision rate, build it into the <a href="/calculator">calculator</a> and your <a href="/project-calculator">project quotes</a> will automatically account for tax in every number you send to clients.</p>
    `,
  },
};

/* ── BlogPost ───────────────────────────────────────────────────── */
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

  const [copied, setCopied] = useState(false);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
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
    publisher:      { '@type': 'Organization', name: 'RateCrafts', url: SITE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${id}` },
  };

  return (
    <div style={{ background: 'var(--color-ink-950)', minHeight: '100vh' }}>
      <SEO title={`${post.title} | RateCrafts`} description={post.description} ogType="article" articleDate={post.date}>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <link rel="canonical" href={`${SITE_URL}/blog/${id}`} />
      </SEO>

      {/* Sticky top bar */}
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
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-ink-50)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>Find your real rate in under 90 seconds</p>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--color-ink-300)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            Use the calculator to get a rate grounded in your actual costs, taxes, and income goals — not market averages or guesswork.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/calculator" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.7rem 1.5rem', background: 'var(--color-brass-500)', color: 'var(--color-ink-950)', textDecoration: 'none', display: 'inline-block', fontWeight: 500 }}>Hourly rate calculator →</Link>
            <Link to="/project-calculator" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.7rem 1.5rem', border: '1px solid var(--color-ink-700)', color: 'var(--color-ink-300)', textDecoration: 'none', display: 'inline-block' }}>Project pricing →</Link>
          </div>
        </div>

        {/* Related articles */}
        {relatedPosts.length > 0 && (
          <div style={{ marginTop: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--color-ink-500)', marginBottom: '1.25rem' }}>Related Articles</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2px', background: 'var(--color-ink-800)' }}>
              {relatedPosts.map((related) => {
                const fullPost = ALL_POSTS.find((p) => p.id === related.id);
                return <RelatedCard key={related.id} id={related.id} title={related.title} excerpt={fullPost?.excerpt || ''} category={related.category} />;
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

      {/* Breadcrumb */}
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

/* ── Sub-components ────────────────────────────────────────────── */
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