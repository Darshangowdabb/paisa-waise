export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  date: string;
  readingTime: string;
  category: ArticleCategory;
  tags: string[];
  featured?: boolean;
  coverGradient?: string;
}

export type ArticleCategory = 'Investing' | 'Tax' | 'Credit' | 'Apps' | 'Savings';

export interface ArticleWithContent extends Article {
  content: string;
}

export interface SIPResult {
  invested: number;
  returns: number;
  total: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TrendingTopic {
  rank: number;
  title: string;
  href: string;
  hot?: boolean;
}
