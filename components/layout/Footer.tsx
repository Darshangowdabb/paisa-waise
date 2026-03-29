import Link from 'next/link';
import { TrendingUp } from 'lucide-react';
import { SITE_NAME, SITE_TAGLINE, NAV_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg mb-2">
              <span className="bg-green-600 text-white w-7 h-7 rounded-lg flex items-center justify-center">
                <TrendingUp size={14} />
              </span>
              <span className="text-green-600">{SITE_NAME.slice(0, 5)}</span>
              <span className="text-gray-900 dark:text-white">{SITE_NAME.slice(5)}</span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {SITE_TAGLINE}. Simple guides for Indians aged 18–30.
            </p>
          </div>

          {/* Topics */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Topics</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Legal</h3>
            <ul className="space-y-2">
              {[
                { label: 'Disclaimer', href: '/disclaimer' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'About', href: '/about' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-400 dark:text-gray-500">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <p>Built with Next.js · Hosted on Vercel · Not SEBI registered. Educational content only.</p>
        </div>
      </div>
    </footer>
  );
}
