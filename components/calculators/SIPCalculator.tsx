'use client';

import { useState } from 'react';
import { calcSIP, formatINR, formatINRFull } from '@/lib/utils';

export function SIPCalculator() {
  const [monthly, setMonthly]   = useState(5000);
  const [rate, setRate]         = useState(12);
  const [years, setYears]       = useState(10);

  const result = calcSIP(monthly, rate, years);
  const gainPct = ((result.returns / result.invested) * 100).toFixed(0);

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">SIP Calculator</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Inputs */}
        <div className="space-y-6">
          {[
            { label: 'Monthly SIP amount', value: monthly, setter: setMonthly, min: 500, max: 100000, step: 500, format: (v: number) => `₹${v.toLocaleString('en-IN')}` },
            { label: 'Expected return rate (% p.a.)', value: rate, setter: setRate, min: 4, max: 30, step: 0.5, format: (v: number) => `${v}%` },
            { label: 'Investment period (years)', value: years, setter: setYears, min: 1, max: 40, step: 1, format: (v: number) => `${v} years` },
          ].map(({ label, value, setter, min, max, step, format }) => (
            <div key={label}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500 dark:text-gray-400">{label}</span>
                <span className="font-semibold text-gray-900 dark:text-white">{format(value)}</span>
              </div>
              <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => setter(Number(e.target.value))}
                className="w-full accent-green-600 cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-300 dark:text-gray-600 mt-1">
                <span>{format(min)}</span>
                <span>{format(max)}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Result */}
        <div className="flex flex-col justify-center">
          <div className="bg-green-50 dark:bg-green-950/50 border border-green-100 dark:border-green-900 rounded-xl p-5 mb-4">
            <p className="text-xs text-green-600 dark:text-green-500 font-medium mb-1">Total corpus</p>
            <p className="text-4xl font-bold text-green-700 dark:text-green-400 mb-3">
              {formatINR(result.total)}
            </p>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Amount invested</span>
                <span className="font-medium text-gray-900 dark:text-white">{formatINRFull(result.invested)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Estimated returns</span>
                <span className="font-medium text-green-600 dark:text-green-400">+{formatINRFull(result.returns)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Gain percentage</span>
                <span className="font-medium text-green-600 dark:text-green-400">+{gainPct}%</span>
              </div>
            </div>
          </div>

          {/* Visual bar */}
          <div className="space-y-1">
            <div className="flex gap-1 h-4 rounded-full overflow-hidden">
              <div
                className="bg-gray-200 dark:bg-gray-700 rounded-l-full transition-all duration-500"
                style={{ width: `${(result.invested / result.total) * 100}%` }}
              />
              <div
                className="bg-green-500 rounded-r-full transition-all duration-500"
                style={{ width: `${(result.returns / result.total) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-400 dark:text-gray-500">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600 inline-block" />Invested</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 inline-block" />Returns</span>
            </div>
          </div>

          <p className="text-xs text-gray-400 dark:text-gray-500 mt-4">
            * Estimated at {rate}% p.a. Actual returns may vary. This is not investment advice.
          </p>
        </div>
      </div>
    </div>
  );
}
