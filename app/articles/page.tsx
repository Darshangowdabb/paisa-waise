import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { getAllArticles } from '@/lib/articles';
import { CategoryBadge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';
import { ArticleCategory } from '@/types';

export const metadata: Metadata = {
  title: 'All Articles',
  description: 'Finance guides for young Indians — investing, tax, credit, and more.',
};

const CATEGORIES: ArticleCategory[] = ['Investing', 'Tax', 'Credit', 'Apps', 'Savings'];

export default function ArticlesPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const allArticles = getAllArticles();
  const activeCategory = searchParams.category as ArticleCategory | undefined;
  const filtered = activeCategory
    ? allArticles.filter((a) => a.category === activeCategory)
    : allArticles;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
        All articles
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        {filtered.length} guides to help you build wealth.
      </p>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/articles"
          className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
            !activeCategory
              ? 'bg-green-600 text-white border-green-600'
              : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600'
          }`}
        >
          All
        </Link>
        {CATEGORIES.map((cat) => (
          <Link
            key={cat}
            href={`/articles?category=${cat}`}
            className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
              activeCategory === cat
                ? 'bg-green-600 text-white border-green-600'
                : 'border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Article grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((article) => (
          <Link key={article.slug} href={`/articles/${article.slug}`} className="group block">
            <article className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
              <div className={`h-24 bg-gradient-to-br ${article.coverGradient}`} />
              <div className="p-4">
                <CategoryBadge category={article.category} className="mb-2" />
                <h2 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {article.title}
                </h2>
                <p className="text-xs text-gray-400 dark:text-gray-500 line-clamp-2 mb-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock size={11} /> {article.readingTime}
                  </span>
                  <span className="flex items-center gap-1 text-green-600 dark:text-green-400 font-medium group-hover:gap-2 transition-all">
                    Read <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400 dark:text-gray-500">
          <p className="text-lg mb-2">No articles yet in this category.</p>
          <Link href="/articles" className="text-green-600 dark:text-green-400 text-sm hover:underline">
            View all articles →
          </Link>
        </div>
      )}
    </div>
  );
}
