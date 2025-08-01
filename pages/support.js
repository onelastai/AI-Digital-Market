import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    priority: 'medium'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle support ticket submission
    console.log('Support ticket:', formData);
    alert('Support ticket submitted successfully!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>Support - OneLastAI</title>
        <meta name="description" content="Get help and support for OneLastAI services" />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
            <p className="text-xl text-gray-600">We're here to help you with any questions or issues</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-6">Submit a Support Ticket</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                  <select
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200"
                >
                  Submit Ticket
                </button>
              </form>
            </div>

            {/* FAQ & Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Help</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Email Support</h4>
                    <p className="text-gray-600">support@onelastai.com</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Response Time</h4>
                    <p className="text-gray-600">24-48 hours for most inquiries</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone Support</h4>
                    <p className="text-gray-600">Coming Soon</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Common Issues</h3>
                <div className="space-y-3">
                  <details className="border-b pb-2">
                    <summary className="cursor-pointer font-medium">AI Agent Not Responding</summary>
                    <p className="mt-2 text-gray-600">Try refreshing the page or check your internet connection.</p>
                  </details>
                  <details className="border-b pb-2">
                    <summary className="cursor-pointer font-medium">Account Access Issues</summary>
                    <p className="mt-2 text-gray-600">Reset your password or contact support if you're locked out.</p>
                  </details>
                  <details className="border-b pb-2">
                    <summary className="cursor-pointer font-medium">Billing Questions</summary>
                    <p className="mt-2 text-gray-600">Check your dashboard or email us for billing inquiries.</p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
