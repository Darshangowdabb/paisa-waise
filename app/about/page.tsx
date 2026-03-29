import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about PaisaWise — simple, jargon-free finance guides for young India.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">About PaisaWise</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        PaisaWise is a personal finance blog built for Indians aged 18–30 who want to understand money — without the jargon.
      </p>

      <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        We explain SIP, mutual funds, ITR filing, credit scores, and more — the way a knowledgeable friend would. No finance degree needed. Just plain advice for real salaries.
      </p>

      <h2 className="text-xl font-semibold mb-2">What We Cover</h2>
      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 mb-6 space-y-1">
        <li>Investing — SIP, mutual funds, stocks</li>
        <li>Tax — ITR filing, tax saving, Form 16</li>
        <li>Credit — CIBIL score, credit cards, loans</li>
        <li>Apps — Zerodha, Groww, IndMoney reviews</li>
        <li>Calculators — SIP, EMI, and more</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p className="text-gray-600 dark:text-gray-400">
        Have a question or suggestion? Reach us at{' '}
        <a href="mailto:dasrhanbbgowda@gmail.com" className="text-green-600 hover:underline">
          dasrhanbbgowda@gmail.com
        </a>
      </p>
    </div>
  );
}