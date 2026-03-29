import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { Article, ArticleWithContent } from '@/types';

const ARTICLES_DIR = path.join(process.cwd(), 'content', 'articles');

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''));
}

export function getArticleBySlug(slug: string): ArticleWithContent | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title ?? '',
    excerpt: data.excerpt ?? '',
    author: data.author ?? 'PaisaWise Team',
    authorRole: data.authorRole ?? 'Finance Writer',
    date: data.date ?? '',
    readingTime: rt.text,
    category: data.category ?? 'Investing',
    tags: data.tags ?? [],
    featured: data.featured ?? false,
    coverGradient: data.coverGradient ?? 'from-green-50 to-emerald-100',
    content,
  };
}

export function getAllArticles(): Article[] {
  return getAllArticleSlugs()
    .map((slug) => getArticleBySlug(slug))
    .filter((a): a is ArticleWithContent => a !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedArticle(): Article | null {
  const all = getAllArticles();
  return all.find((a) => a.featured) ?? all[0] ?? null;
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const article = getArticleBySlug(slug);
  if (!article) return [];
  return getAllArticles()
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, limit);
}
