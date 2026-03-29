'use client';

import { useState } from 'react';
import { calcEMI, formatINRFull } from '@/lib/utils';

export function EMICalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate]           = useState(10);
  const [years, setYears]         = useState(5);

  const emi = calcEMI(principal, rate, years);
  const totalPay = emi * years * 12;
  const totalInterest = totalPay - principal;

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-6">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">EMI Calculator</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          {[
            { label: 'Loan amount', value: principal, setter: setPrincipal, min: 10000, max: 10000000, step: 10000, format: (v: number) => `₹${(v/100000).toFixed(1)}L` },
            { label: 'Interest rate (% p.a.)', value: rate, setter: setRate, min: 4, max: 24, step: 0.25, format: (v: number) => `${v}%` },
            { label: 'Loan tenure (years)', value: years, setter: setYears, min: 1, max: 30, step: 1, format: (v: number) => `${v} years` },
          ].map(({ label, value, setter, min, max, step, format }) => (
            <div key={label}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-500 dark:text-gray-400">{label}</span>
                <span className="font-semibold text-gray-900 dark:text-white">{format(value)}</span>
              </div>
              <input type="range" min={min} max={max} step={step} value={value}
                onChange={(e) => setter(Number(e.target.value))}
                className="w-full accent-green-600 cursor-pointer" />
              <div className="flex justify-between text-xs text-gray-300 dark:text-gray-600 mt-1">
                <span>{format(min)}</span><span>{format(max)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <div className="bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900 rounded-xl p-5 mb-4">
            <p className="text-xs text-blue-600 dark:text-blue-400 font-medium mb-1">Monthly EMI</p>
            <p className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-3">
              {formatINRFull(emi)}
            </p>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Principal amount</span>
                <span className="font-medium text-gray-900 dark:text-white">{formatINRFull(principal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Total interest</span>
                <span className="font-medium text-red-500">+{formatINRFull(totalInterest)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500 dark:text-gray-400">Total payment</span>
                <span className="font-medium text-gray-900 dark:text-white">{formatINRFull(totalPay)}</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            * Actual EMI may vary by lender. Not financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}
