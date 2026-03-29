import Link from 'next/link';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Article } from '@/types';
import { CategoryBadge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';

export function FeaturedArticle({ article }: { article: Article }) {
  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5">
        {/* Cover visual */}
        <div className={`h-44 bg-gradient-to-br ${article.coverGradient} flex items-end p-5`}>
          <CategoryBadge category={article.category} />
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            {article.title}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
              <span className="flex items-center gap-1">
                <User size={12} /> {article.author}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} /> {article.readingTime}
              </span>
              <span>{formatDate(article.date)}</span>
            </div>
            <span className="text-xs font-medium text-green-600 dark:text-green-400 flex items-center gap-1 group-hover:gap-2 transition-all">
              Read <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
