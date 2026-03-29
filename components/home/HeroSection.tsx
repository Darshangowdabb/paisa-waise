import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border border-green-100 dark:border-green-900 mb-5">
            <Sparkles size={12} />
            Made for India&apos;s 18–30 generation
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
            Learn money the way{' '}
            <span className="text-green-600">your friend explains it</span>
          </h1>

          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-xl">
            SIP, mutual funds, ITR, credit score — all explained simply. No jargon. No finance degree needed. Just plain advice for real salaries.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-600 text-white font-semibold text-sm hover:bg-green-700 transition-colors shadow-sm"
            >
              Read articles
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/calculators"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold text-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              Try SIP calculator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
