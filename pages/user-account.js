import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function UserAccount() {
  const { data: session, status } = useSession();
  const [userStats, setUserStats] = useState({
    agentsUsed: 0,
    totalQueries: 0,
    accountSince: '',
    subscription: 'Free'
  });
  const [activeTab, setActiveTab] = useState('profile');

  useEffect(() => {
    if (session) {
      fetchUserStats();
    }
  }, [session]);

  const fetchUserStats = async () => {
    // Mock data - replace with actual API calls
    setUserStats({
      agentsUsed: 8,
      totalQueries: 1247,
      accountSince: '2024-01-15',
      subscription: 'Pro'
    });
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please Sign In</h2>
          <Link href="/auth/signin" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>My Account - OneLastAI</title>
        <meta name="description" content="Manage your OneLastAI account and preferences" />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">
                    {session.user?.name?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="text-white">
                  <h1 className="text-2xl font-bold">{session.user?.name || 'User'}</h1>
                  <p className="text-blue-100">{session.user?.email}</p>
                  <p className="text-sm text-blue-200">
                    Member since {new Date(userStats.accountSince).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8 px-6">
                {['profile', 'usage', 'billing', 'security'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm capitalize ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {activeTab === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Profile Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        defaultValue={session.user?.name || ''}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={session.user?.email || ''}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                      <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                        <option>UTC</option>
                        <option>EST</option>
                        <option>PST</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                      <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500">
                        <option>English</option>
                        <option>Spanish</option>
                        <option>French</option>
                      </select>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                    Save Changes
                  </button>
                </div>
              )}

              {activeTab === 'usage' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Usage Statistics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-blue-900">Agents Used</h3>
                      <p className="text-3xl font-bold text-blue-600">{userStats.agentsUsed}</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-green-900">Total Queries</h3>
                      <p className="text-3xl font-bold text-green-600">{userStats.totalQueries.toLocaleString()}</p>
                    </div>
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-medium text-purple-900">Subscription</h3>
                      <p className="text-3xl font-bold text-purple-600">{userStats.subscription}</p>
                    </div>
                  </div>
                  
                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-2 border-b">
                        <span>Personal AI Assistant</span>
                        <span className="text-gray-500">2 hours ago</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b">
                        <span>Analytics Dashboard</span>
                        <span className="text-gray-500">1 day ago</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span>Test Agents</span>
                        <span className="text-gray-500">3 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'billing' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Billing & Subscription</h2>
                  
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
                    <h3 className="text-xl font-bold">Current Plan: {userStats.subscription}</h3>
                    <p className="text-purple-100">Unlimited AI agent access</p>
                    <div className="mt-4">
                      <button className="bg-white text-purple-600 px-4 py-2 rounded font-medium hover:bg-gray-100">
                        Manage Subscription
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Billing History</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center py-3 border-b">
                        <div>
                          <p className="font-medium">Pro Plan - Monthly</p>
                          <p className="text-sm text-gray-500">Aug 1, 2025</p>
                        </div>
                        <span className="font-bold">$29.99</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b">
                        <div>
                          <p className="font-medium">Pro Plan - Monthly</p>
                          <p className="text-sm text-gray-500">Jul 1, 2025</p>
                        </div>
                        <span className="font-bold">$29.99</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold">Security Settings</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">Two-Factor Authentication</h3>
                        <p className="text-sm text-gray-600">Add an extra layer of security</p>
                      </div>
                      <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Enable
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">Password</h3>
                        <p className="text-sm text-gray-600">Change your password</p>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Change
                      </button>
                    </div>

                    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h3 className="font-medium">Active Sessions</h3>
                        <p className="text-sm text-gray-600">Manage your active sessions</p>
                      </div>
                      <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                        View All
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
