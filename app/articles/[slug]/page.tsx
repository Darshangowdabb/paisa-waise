import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Clock, User, ArrowLeft, ArrowRight } from 'lucide-react';
import { getArticleBySlug, getAllArticleSlugs, getRelatedArticles } from '@/lib/articles';
import { CategoryBadge } from '@/components/ui/Badge';
import { NewsletterWidget } from '@/components/sidebar/NewsletterWidget';
import { SIPWidget } from '@/components/sidebar/SIPWidget';
import { formatDate } from '@/lib/utils';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `${SITE_URL}/articles/${article.slug}`,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      siteName: SITE_NAME,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(params.slug, 3);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Article */}
        <div className="lg:col-span-2">
          <Link
            href="/articles"
            className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 mb-6 transition-colors"
          >
            <ArrowLeft size={14} /> All articles
          </Link>

          {/* Cover */}
          <div className={`h-48 sm:h-64 rounded-2xl bg-gradient-to-br ${article.coverGradient} mb-6 flex items-end p-5`}>
            <CategoryBadge category={article.category} />
          </div>

          {/* Header */}
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-3">
            {article.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-5">
            {article.excerpt}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 dark:text-gray-500 pb-6 border-b border-gray-100 dark:border-gray-800 mb-8">
            <span className="flex items-center gap-1.5">
              <User size={14} />
              <span className="text-gray-700 dark:text-gray-300 font-medium">{article.author}</span>
              <span>· {article.authorRole}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {article.readingTime}
            </span>
            <span>{formatDate(article.date)}</span>
          </div>

          {/* MDX Content */}
          <div className="prose-article">
            <MDXRemote source={article.content} />
          </div>

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-gray-100 dark:border-gray-800">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Related articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((rel) => (
                  <Link key={rel.slug} href={`/articles/${rel.slug}`} className="group block">
                    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                      <CategoryBadge category={rel.category} className="mb-2" />
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-snug group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-1">
                        {rel.title}
                      </h3>
                      <span className="text-xs text-green-600 dark:text-green-400 font-medium flex items-center gap-1">
                        Read <ArrowRight size={11} />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-5">
          <SIPWidget />
          <NewsletterWidget />
        </aside>
      </div>
    </div>
  );
}
