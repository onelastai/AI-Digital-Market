import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Updates() {
  const [updates, setUpdates] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchUpdates();
  }, []);

  const fetchUpdates = async () => {
    // Mock data - replace with actual API calls
    const mockUpdates = [
      {
        id: 1,
        title: 'New AI Agent: Code Review Assistant',
        description: 'Introducing our latest AI agent that can review and suggest improvements for your code.',
        type: 'feature',
        date: '2025-08-01',
        version: '2.1.0',
        image: '/images/code-review-agent.jpg'
      },
      {
        id: 2,
        title: 'Enhanced Personal AI Memory',
        description: 'Your personal AI now remembers context better and provides more personalized responses.',
        type: 'improvement',
        date: '2025-07-28',
        version: '2.0.5',
        image: '/images/memory-enhancement.jpg'
      },
      {
        id: 3,
        title: 'Security Update: Enhanced Encryption',
        description: 'We\'ve upgraded our encryption protocols to ensure your data is even more secure.',
        type: 'security',
        date: '2025-07-25',
        version: '2.0.4',
        image: '/images/security-update.jpg'
      },
      {
        id: 4,
        title: 'Dashboard Performance Improvements',
        description: 'The analytics dashboard now loads 3x faster with improved visualizations.',
        type: 'improvement',
        date: '2025-07-20',
        version: '2.0.3',
        image: '/images/dashboard-update.jpg'
      },
      {
        id: 5,
        title: 'Bug Fix: Agent Response Timeout',
        description: 'Fixed an issue where AI agents would timeout on complex queries.',
        type: 'bugfix',
        date: '2025-07-15',
        version: '2.0.2',
        image: '/images/bug-fix.jpg'
      }
    ];
    setUpdates(mockUpdates);
  };

  const filteredUpdates = filter === 'all' 
    ? updates 
    : updates.filter(update => update.type === filter);

  const getTypeColor = (type) => {
    switch (type) {
      case 'feature': return 'bg-green-100 text-green-800';
      case 'improvement': return 'bg-blue-100 text-blue-800';
      case 'security': return 'bg-red-100 text-red-800';
      case 'bugfix': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Head>
        <title>Updates & News - OneLastAI</title>
        <meta name="description" content="Latest updates, features, and news from OneLastAI" />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Updates & News</h1>
            <p className="text-xl text-gray-600">Stay up to date with the latest features and improvements</p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['all', 'feature', 'improvement', 'security', 'bugfix'].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-4 py-2 rounded-full font-medium capitalize transition duration-200 ${
                  filter === filterType
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {filterType === 'all' ? 'All Updates' : filterType.replace('bugfix', 'Bug Fix')}
              </button>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 mb-12 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Never Miss an Update</h2>
              <p className="mb-6">Subscribe to our newsletter to get the latest updates delivered to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-blue-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Updates List */}
          <div className="space-y-8">
            {filteredUpdates.map((update) => (
              <div key={update.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(update.type)}`}>
                          {update.type.replace('bugfix', 'Bug Fix')}
                        </span>
                        <span className="text-sm text-gray-500">v{update.version}</span>
                        <span className="text-sm text-gray-500">
                          {new Date(update.date).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{update.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{update.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-4">
                      <button className="text-blue-600 hover:text-blue-800 font-medium">
                        Read More
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        Share
                      </button>
                    </div>
                    <div className="text-sm text-gray-500">
                      Release Date: {new Date(update.date).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-200">
              Load More Updates
            </button>
          </div>

          {/* Roadmap Section */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What's Coming Next</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-gray-600 text-sm">More detailed insights and reporting capabilities</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">API Integrations</h3>
                <p className="text-gray-600 text-sm">Connect with more third-party services and tools</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Team Collaboration</h3>
                <p className="text-gray-600 text-sm">Share and collaborate on AI projects with your team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
