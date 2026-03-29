import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with PaisaWise for questions, feedback, or collaborations.',
};

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        Have a question, feedback, or want to collaborate? We'd love to hear from you!
      </p>

      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 space-y-4">
        <div>
          <h2 className="font-semibold text-lg mb-1">📧 Email</h2>
          <a href="mailto:dasrhanbbgowda@gmail.com" className="text-green-600 hover:underline">
            dasrhanbbgowda@gmail.com
          </a>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">⏱ Response Time</h2>
          <p className="text-gray-600 dark:text-gray-400">We typically reply within 24–48 hours.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg mb-1">💡 What to write about?</h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
            <li>Article suggestions or requests</li>
            <li>Corrections or feedback</li>
            <li>Advertising or collaboration inquiries</li>
            <li>General finance questions</li>
          </ul>
        </div>
      </div>
    </div>
  );
}