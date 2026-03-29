'use client';

import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

export function NewsletterWidget() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4 text-center">
        <CheckCircle className="text-green-500 mx-auto mb-2" size={28} />
        <p className="text-sm font-semibold text-gray-900 dark:text-white">You&apos;re in!</p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          Weekly money tips every Sunday.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4">
      <div className="flex items-center gap-2 mb-2">
        <Mail size={15} className="text-green-600" />
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Weekly money tips</h3>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">
        Join 8,400+ young Indians getting smarter about money every Sunday. Free, forever.
      </p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full text-sm font-semibold py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors disabled:opacity-60"
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe free'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-xs text-red-500 mt-1">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}
