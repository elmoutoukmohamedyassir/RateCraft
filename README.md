# RateCrafts

**Freelance rate and project pricing calculators. Free, client-side only, no signup.**

Live at [ratecrafts.com](https://www.ratecrafts.com)

---

## What it does

Most freelance rate calculators divide a salary goal by 52 weeks and 40 hours. That formula ignores taxes, realistic billable hours, business expenses, and profit margin — producing rates that are consistently too low.

RateCrafts uses a different formula:

```
(income goal + expenses + tax provision + profit margin) ÷ monthly billable hours = hourly rate
```

There are two calculators:

**Hourly Rate Calculator** (`/calculator`)  
Enter your monthly income goal, tax rate, business expenses, billable hours per week, and desired profit margin. Get an hourly rate that covers your actual costs.

**Project Pricing Calculator** (`/project-calculator`)  
Enter your hourly rate, estimated project hours, revision rounds, scope buffer, tax, and margin. Get a complete fixed-price project quote with a full breakdown.

Both calculators support shareable URLs — all inputs are encoded as query parameters so you can send a pre-filled link to a client or save your current scenario.

---

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 18 |
| Language | TypeScript |
| Build tool | Vite 6 |
| Styling | Tailwind CSS v4 (CSS variables, no JIT config file) |
| Routing | React Router v6 |
| Animation | Motion (formerly Framer Motion) |
| SEO | react-helmet-async |
| Icons | lucide-react |

All calculation logic runs entirely in the browser. No backend, no database, no user data is ever transmitted anywhere.

---

## Project structure

```
src/
├── App.tsx                      # Routes
├── index.css                    # Design tokens (CSS variables), Tailwind base
├── main.tsx                     # Entry point
│
├── components/
│   ├── Layout.tsx               # Nav, top trust bar, footer wrapper
│   ├── Footer.tsx               # Footer with links and brand copy
│   ├── SEO.tsx                  # Helmet wrapper — title, OG, Twitter, canonical
│   ├── InputField.tsx           # Reusable number + range input with tooltip
│   └── ResultsDisplay.tsx       # Hourly rate results panel with email capture UI
│
└── pages/
    ├── Home.tsx                 # Landing page
    ├── Calculator.tsx           # Hourly rate calculator
    ├── ProjectCalculator.tsx    # Project pricing calculator
    ├── BlogIndex.tsx            # Blog post list + ALL_POSTS export
    ├── BlogPost.tsx             # Individual post renderer + all article content
    ├── About.tsx
    ├── Contact.tsx
    ├── Privacy.tsx
    ├── Terms.tsx
    └── Disclaimer.tsx
```

The blog content lives entirely in `BlogPost.tsx` as a `POST_CONTENT` record. No CMS, no markdown files, no build step for content. `BlogIndex.tsx` exports `ALL_POSTS` (metadata only) which `BlogPost.tsx` imports for prev/next navigation and related article cards.

---

## Design system

The visual theme is called **Ink & Brass** — a dark editorial palette with a gold accent.

Fonts (loaded from Google Fonts):
- **Playfair Display** — headings and display text
- **DM Mono** — labels, metadata, code, monospace UI elements
- **DM Sans weight 300** — body text

Key CSS variables (defined in `index.css` via `@theme`):

```css
--color-ink-950: #111009;   /* page background */
--color-ink-50:  #faf8f3;   /* primary text */
--color-ink-300: #c8bfa8;   /* body text */
--color-brass-500: #d4a017; /* primary accent */
--font-display: "Playfair Display", Georgia, serif;
--font-mono:    "DM Mono", monospace;
--font-sans:    "DM Sans", sans-serif;
```

Styling approach: inline `style` props for component-specific styles, Tailwind utility classes for responsive layout helpers only (e.g. `lg:grid-cols-12`, `hidden md:flex`). No styled-components, no CSS modules.

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server on port 3000
npm run dev

# Type-check without emitting
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

Requires Node.js 18+.

---

## Calculator logic

### Hourly rate

```
grossNeededForIncome = desiredMonthlyIncome / (1 - taxRate)
baseRequired = grossNeededForIncome + monthlyExpenses
revenueTarget = baseRequired * (1 + profitMargin)
monthlyBillableHours = weeklyBillableHours * weeksWorkedPerMonth
hourlyRate = revenueTarget / monthlyBillableHours
dayRate = hourlyRate * (weeklyBillableHours / 5)
```

Source: `src/utils/calculator.ts` (in the original repo — not included in this redesign output).

### Project price

```
baseProjectCost = hourlyRate * estimatedHours
revisionCost = hourlyRate * revisionRounds * hoursPerRevision
subtotalRaw = baseProjectCost + revisionCost
bufferAmount = subtotalRaw * bufferPercentage
subtotalWithBuffer = subtotalRaw + bufferAmount
taxAmount = subtotalWithBuffer * taxPercentage
profitAmount = subtotalWithBuffer * profitMarginPercentage
finalPrice = subtotalWithBuffer + taxAmount + profitAmount
```

Source: `calculateProject()` in `src/pages/ProjectCalculator.tsx`.

---

## SEO

Every page uses `react-helmet-async` via the `<SEO>` component for:
- `<title>` and `<meta name="description">`
- Open Graph tags (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`)
- Twitter card tags
- `<link rel="canonical">` pointing to `https://www.ratecrafts.com`
- `<meta name="theme-color">`

Blog posts additionally include `article:published_time` and Schema.org `BlogPosting` JSON-LD structured data.

The blog URL pattern is `/blog/:id` where `id` matches a key in `POST_CONTENT` in `BlogPost.tsx`. There are 21 articles covering freelance rate calculation, project pricing, billable hours, taxes, and related topics.

---

## Shareable calculator URLs

Both calculators read query parameters on load and pre-fill state:

**Hourly rate calculator:**
```
/calculator?income=6000&tax=25&expenses=1000&hours=25&weeks=4&margin=10
```

**Project pricing calculator:**
```
/project-calculator?rate=80&hours=40&rounds=2&hrrev=3&buffer=20&tax=25&margin=15
```

A "Copy share link" button encodes the current state and copies the URL to clipboard.

---

## Deployment

The project builds to a static `dist/` folder and can be deployed anywhere that serves static files:

```bash
npm run build
# deploy dist/ to Vercel, Netlify, Cloudflare Pages, or any static host
```

For Vercel, add a `vercel.json` to handle client-side routing:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Google Analytics is configured in `index.html` — replace `G-11RN4FMZTD` with your own measurement ID or remove it entirely.

---

## Contributing

This is an independent project, not a company. Issues and pull requests are welcome. If you find a bug in the calculation logic or have a suggestion for the content, open an issue.

---

## License

MIT
