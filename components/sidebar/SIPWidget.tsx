'use client';

import { useState } from 'react';
import Link from 'next/link';
import { calcSIP, formatINR } from '@/lib/utils';

export function SIPWidget() {
  const [monthly, setMonthly] = useState(3000);
  const [years, setYears] = useState(10);

  const result = calcSIP(monthly, 12, years);

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl p-4">
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
        SIP calculator
      </h3>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-gray-500 dark:text-gray-400">Monthly SIP</span>
            <span className="font-semibold text-gray-900 dark:text-white">
              ₹{monthly.toLocaleString('en-IN')}
            </span>
          </div>
          <input
            type="range"
            min={500}
            max={25000}
            step={500}
            value={monthly}
            onChange={(e) => setMonthly(Number(e.target.value))}
            className="w-full accent-green-600 h-1.5 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-300 dark:text-gray-600 mt-0.5">
            <span>₹500</span><span>₹25K</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-gray-500 dark:text-gray-400">Duration</span>
            <span className="font-semibold text-gray-900 dark:text-white">{years} years</span>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full accent-green-600 h-1.5 cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-300 dark:text-gray-600 mt-0.5">
            <span>1 yr</span><span>30 yrs</span>
          </div>
        </div>
      </div>

      <div className="mt-4 bg-green-50 dark:bg-green-950/50 rounded-xl p-3 border border-green-100 dark:border-green-900">
        <p className="text-xs text-green-600 dark:text-green-500 mb-1">Estimated value (@ 12%)</p>
        <p className="text-2xl font-bold text-green-700 dark:text-green-400">
          {formatINR(result.total)}
        </p>
        <div className="flex gap-3 mt-2 text-xs text-gray-500 dark:text-gray-400">
          <span>Invested: {formatINR(result.invested)}</span>
          <span>·</span>
          <span>Returns: {formatINR(result.returns)}</span>
        </div>
      </div>

      <Link
        href="/calculators"
        className="mt-3 text-xs text-green-600 dark:text-green-400 font-medium hover:underline flex items-center gap-1"
      >
        Advanced calculator →
      </Link>
    </div>
  );
}
