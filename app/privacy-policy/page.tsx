import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for PaisaWise — how we collect and use your data.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: March 2026</p>

      <div className="space-y-6 text-gray-600 dark:text-gray-400">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">1. Introduction</h2>
          <p>Welcome to PaisaWise. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website at paisawise.vercel.app.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Email address (if you subscribe to our newsletter)</li>
            <li>Usage data such as pages visited, time spent, and browser type</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">3. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>To send newsletters and updates (only if you subscribed)</li>
            <li>To improve our website content and user experience</li>
            <li>To analyze traffic and usage patterns</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">4. Google AdSense & Cookies</h2>
          <p>We use Google AdSense to display advertisements. Google may use cookies to serve ads based on your prior visits to our website or other websites. You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-green-600 hover:underline">Google Ads Settings</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">5. Third-Party Services</h2>
          <p>We may use third-party services such as Google Analytics, Google AdSense, and newsletter providers. These services have their own privacy policies governing the use of your information.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">6. Data Security</h2>
          <p>We take reasonable measures to protect your information. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">7. Children&apos;s Privacy</h2>
          <p>Our website is not directed to children under 13. We do not knowingly collect personal information from children.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at{' '}
            <a href="mailto:dasrhanbbgowda@gmail.com" className="text-green-600 hover:underline">
              dasrhanbbgowda@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
