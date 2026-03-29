import { NavLink, TrendingTopic } from '@/types';

export const SITE_NAME = 'PaisaWise';
export const SITE_TAGLINE = 'Smart money for young India';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://paisawise.in';
export const SITE_DESCRIPTION =
  'Simple, jargon-free finance guides for Indians aged 18–30. SIP, mutual funds, ITR filing, credit score — explained the way your friend would.';

export const NAV_LINKS: NavLink[] = [
  { label: 'Investing', href: '/articles?category=Investing' },
  { label: 'Tax', href: '/articles?category=Tax' },
  { label: 'Credit', href: '/articles?category=Credit' },
  { label: 'Calculators', href: '/calculators' },
  { label: 'Apps', href: '/articles?category=Apps' },
];

export const TRENDING_TOPICS: TrendingTopic[] = [
  { rank: 1, title: 'Best SIP plan 2026', href: '/articles?category=Investing', hot: true },
  { rank: 2, title: 'ITR filing last date', href: '/articles?category=Tax' },
  { rank: 3, title: 'Groww vs Zerodha', href: '/articles?category=Apps' },
  { rank: 4, title: 'Credit card for students', href: '/articles?category=Credit' },
  { rank: 5, title: 'ELSS tax saving fund', href: '/articles?category=Investing' },
];

export const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Investing: {
    bg: 'bg-green-50 dark:bg-green-950/40',
    text: 'text-green-700 dark:text-green-400',
    border: 'border-green-200 dark:border-green-800',
  },
  Tax: {
    bg: 'bg-blue-50 dark:bg-blue-950/40',
    text: 'text-blue-700 dark:text-blue-400',
    border: 'border-blue-200 dark:border-blue-800',
  },
  Credit: {
    bg: 'bg-amber-50 dark:bg-amber-950/40',
    text: 'text-amber-700 dark:text-amber-400',
    border: 'border-amber-200 dark:border-amber-800',
  },
  Apps: {
    bg: 'bg-purple-50 dark:bg-purple-950/40',
    text: 'text-purple-700 dark:text-purple-400',
    border: 'border-purple-200 dark:border-purple-800',
  },
  Savings: {
    bg: 'bg-rose-50 dark:bg-rose-950/40',
    text: 'text-rose-700 dark:text-rose-400',
    border: 'border-rose-200 dark:border-rose-800',
  },
};
