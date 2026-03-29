import type { Metadata } from 'next';
import { SIPCalculator } from '@/components/calculators/SIPCalculator';
import { EMICalculator } from '@/components/calculators/EMICalculator';

export const metadata: Metadata = {
  title: 'Financial Calculators',
  description: 'Free SIP and EMI calculators for Indian investors. Calculate your mutual fund returns and loan EMI instantly.',
};

export default function CalculatorsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2">
        Financial calculators
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-10">
        Free tools to help you plan your finances. No signup required.
      </p>

      <div className="space-y-6">
        <SIPCalculator />
        <EMICalculator />
      </div>

      <p className="text-xs text-gray-400 dark:text-gray-500 mt-6 text-center">
        These calculators are for educational purposes only. Results are estimates and not financial advice.
        Consult a SEBI-registered advisor before investing.
      </p>
    </div>
  );
}
