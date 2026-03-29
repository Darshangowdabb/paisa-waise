import Link from 'next/link';
import { Flame } from 'lucide-react';
import { TRENDING_TOPICS } from '@/lib/constants';

export function TrendingWidget() {
  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
        Trending searches
      </h3>
      <ul className="space-y-2.5">
        {TRENDING_TOPICS.map((topic) => (
          <li key={topic.rank}>
            <Link
              href={topic.href}
              className="flex items-center gap-3 group"
            >
              <span className="text-xs font-mono text-gray-300 dark:text-gray-600 w-4 shrink-0">
                {topic.rank}
              </span>
              <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors flex-1">
                {topic.title}
              </span>
              {topic.hot && (
                <span className="flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 rounded-full bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900">
                  <Flame size={10} /> Hot
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
