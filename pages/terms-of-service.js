import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service - OneLastAI</title>
        <meta name="description" content="OneLastAI Terms of Service and Conditions" />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using OneLastAI's platform and services, you accept and agree to be bound 
                by the terms and provision of this agreement. If you do not agree to abide by the above, 
                please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Description of Service</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                OneLastAI provides an AI digital marketplace platform that includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>AI agent services and tools</li>
                <li>Personal AI assistants</li>
                <li>Analytics and dashboard features</li>
                <li>Integration capabilities</li>
                <li>Support and documentation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Accounts</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Account Creation</h3>
                  <p className="text-gray-700">
                    You must create an account to access certain features. You are responsible for 
                    maintaining the confidentiality of your account credentials.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Account Responsibilities</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Provide accurate and complete information</li>
                    <li>Keep your account information updated</li>
                    <li>Maintain security of your credentials</li>
                    <li>Notify us of any unauthorized access</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptable Use Policy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Permitted Uses</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Business and personal productivity</li>
                    <li>Educational and research purposes</li>
                    <li>Creative and innovative projects</li>
                    <li>Integration with your applications</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Prohibited Uses</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Illegal or harmful activities</li>
                    <li>Harassment or abusive behavior</li>
                    <li>Spam or unsolicited communications</li>
                    <li>Intellectual property infringement</li>
                    <li>Malicious code or security threats</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Payment and Billing</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Fees are charged according to your selected plan</li>
                <li>Payment is due in advance for subscription services</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We may change pricing with 30 days notice</li>
                <li>Failure to pay may result in service suspension</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Intellectual Property</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Our Rights</h3>
                  <p className="text-gray-700">
                    OneLastAI retains all rights, title, and interest in our platform, AI models, 
                    and related technologies.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Your Content</h3>
                  <p className="text-gray-700">
                    You retain ownership of content you submit, but grant us license to use it 
                    for providing our services.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed">
                OneLastAI shall not be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700 leading-relaxed">
                We may terminate or suspend your account and access to our services at our sole discretion, 
                without prior notice, for conduct that we believe violates these Terms or is harmful to 
                other users, us, or third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                Questions about the Terms of Service should be sent to us at:
              </p>
              <div className="mt-4 text-gray-700">
                <p>Email: legal@onelastai.com</p>
                <p>Address: OneLastAI Legal Team</p>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
