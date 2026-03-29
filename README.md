# PaisaWise — Finance Blog for Young India

A production-ready Next.js 14 finance blog targeting young Indians (18–30). Built with TypeScript, Tailwind CSS, MDX articles, dark mode, SIP/EMI calculators, SEO, and Vercel-ready deployment.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| Content | MDX (gray-matter + next-mdx-remote) |
| Themes | next-themes (dark/light/system) |
| Icons | lucide-react |
| Forms | react-hook-form + zod |
| Deployment | Vercel (zero config) |

---

## Project Structure

```
paisawise/
├── app/
│   ├── layout.tsx              # Root layout (Navbar + Footer + ThemeProvider)
│   ├── page.tsx                # Home page
│   ├── not-found.tsx           # Custom 404
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # robots.txt
│   ├── globals.css             # Tailwind + MDX typography
│   ├── articles/
│   │   ├── page.tsx            # Articles listing (filterable by category)
│   │   └── [slug]/page.tsx     # Individual article page
│   ├── calculators/
│   │   └── page.tsx            # SIP + EMI calculators
│   └── api/
│       └── subscribe/route.ts  # Newsletter subscribe API
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav with mobile menu + dark toggle
│   │   ├── Footer.tsx
│   │   └── ThemeToggle.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedArticle.tsx
│   │   └── ArticleCard.tsx
│   ├── sidebar/
│   │   ├── SIPWidget.tsx       # Interactive SIP calculator widget
│   │   ├── TrendingWidget.tsx
│   │   └── NewsletterWidget.tsx
│   ├── calculators/
│   │   ├── SIPCalculator.tsx   # Full SIP calculator with chart
│   │   └── EMICalculator.tsx   # Full EMI calculator
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       └── Card.tsx
│
├── content/
│   └── articles/               # Add .mdx files here to publish articles
│       ├── sip-500-month-2026.mdx
│       ├── itr-filing-freshers-guide.mdx
│       ├── cibil-score-explained.mdx
│       ├── zerodha-vs-groww-vs-indmoney.mdx
│       └── fd-vs-mutual-fund.mdx
│
├── lib/
│   ├── articles.ts             # Article data layer (reads MDX files)
│   ├── constants.ts            # Site config, nav links, categories
│   └── utils.ts                # cn(), formatINR(), calcSIP(), calcEMI()
│
├── types/
│   └── index.ts                # All TypeScript interfaces
│
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Quick Start (Run Locally in VS Code)

### 1. Install dependencies

```bash
cd paisawise
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. That's it!

No database. No .env needed to start. Everything works out of the box.

---

## How to Add a New Article

Create a new `.mdx` file in `content/articles/`:

```mdx
---
title: "Your article title here"
excerpt: "One sentence summary shown on listing page"
author: "Your Name"
authorRole: "Your Role"
date: "2026-04-01"
category: "Investing"          # Investing | Tax | Credit | Apps | Savings
tags: ["SIP", "beginners"]
featured: false                # Set true for one article to pin it as featured
coverGradient: "from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-900"
---

Your article content in **Markdown** here.

## Section heading

Regular paragraph text, lists, tables all work.
```

Save the file → it instantly appears on your blog. No restart needed in dev.

---

## Environment Variables (Optional)

Create a `.env.local` file for optional features:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

To connect a real newsletter (e.g. Mailchimp or ConvertKit), edit `app/api/subscribe/route.ts` and add your API key.

---

## Deploy to Vercel (Free)

```bash
# 1. Push your project to GitHub
git init && git add . && git commit -m "initial commit"
git remote add origin https://github.com/yourusername/paisawise.git
git push -u origin main

# 2. Go to vercel.com → New Project → Import your repo
# 3. Vercel auto-detects Next.js — click Deploy
# Done! Your blog is live.
```

No build configuration needed. Vercel handles everything.

---

## AdSense Integration

Once your site has 20+ articles and gets approved by Google AdSense:

1. Add this to `app/layout.tsx` inside `<head>`:
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX" crossorigin="anonymous"></script>
```

2. Place `<ins class="adsbygoogle">` ad units in your article pages or sidebar.

---

## Production Checklist

- [x] TypeScript strict mode enabled
- [x] All pages have proper metadata (title, description, OG tags)
- [x] sitemap.xml auto-generated from articles
- [x] robots.txt configured
- [x] Security headers set in next.config.js
- [x] Dark mode with system preference detection
- [x] Mobile-responsive (Navbar collapses on mobile)
- [x] 404 page with navigation
- [x] Newsletter API with Zod validation
- [x] No hardcoded secrets or API keys
- [x] Images optimized via next/image
- [x] Zero runtime errors (all TypeScript types defined)

---

## License

MIT — free to use and modify.
