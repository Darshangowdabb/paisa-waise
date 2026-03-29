import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';
import { Article } from '@/types';
import { CategoryBadge } from '@/components/ui/Badge';
import { formatDate } from '@/lib/utils';

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <article className="flex items-start gap-4 py-4 border-b border-gray-50 dark:border-gray-800 last:border-0 hover:bg-gray-50/50 dark:hover:bg-gray-800/30 -mx-3 px-3 rounded-xl transition-colors">
        {index !== undefined && (
          <span className="text-sm font-mono text-gray-300 dark:text-gray-600 min-w-[20px] mt-0.5">
            {String(index + 1).padStart(2, '0')}
          </span>
        )}
        <div className="flex-1 min-w-0">
          <CategoryBadge category={article.category} className="mb-2" />
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug mb-1 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            {article.title}
          </h3>
          <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
            <span className="flex items-center gap-1">
              <Clock size={11} /> {article.readingTime}
            </span>
            <span>·</span>
            <span>{formatDate(article.date)}</span>
          </div>
        </div>
        <ArrowRight
          size={14}
          className="text-gray-300 dark:text-gray-600 group-hover:text-green-500 mt-1 shrink-0 transition-colors"
        />
      </article>
    </Link>
  );
}
