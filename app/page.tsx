import { HeroSection } from '@/components/home/HeroSection';
import { FeaturedArticle } from '@/components/home/FeaturedArticle';
import { ArticleCard } from '@/components/home/ArticleCard';
import { SIPWidget } from '@/components/sidebar/SIPWidget';
import { TrendingWidget } from '@/components/sidebar/TrendingWidget';
import { NewsletterWidget } from '@/components/sidebar/NewsletterWidget';
import { getAllArticles, getFeaturedArticle } from '@/lib/articles';

export default function HomePage() {
  const featured = getFeaturedArticle();
  const articles = getAllArticles().filter((a) => !a.featured).slice(0, 6);

  return (
    <>
      <HeroSection />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-8">
            {featured && (
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">
                  Featured
                </h2>
                <FeaturedArticle article={featured} />
              </div>
            )}

            {articles.length > 0 && (
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2">
                  Latest articles
                </h2>
                <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl px-3 py-1">
                  {articles.map((article, i) => (
                    <ArticleCard key={article.slug} article={article} index={i} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">
            <SIPWidget />
            <TrendingWidget />
            <div id="newsletter">
              <NewsletterWidget />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
