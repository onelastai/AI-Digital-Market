import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const [stats, setStats] = useState({
    totalUsers: 0,
    activeAgents: 0,
    totalRevenue: 0,
    supportTickets: 0
  });

  useEffect(() => {
    // Fetch admin stats
    fetchAdminStats();
  }, []);

  const fetchAdminStats = async () => {
    // Mock data - replace with actual API calls
    setStats({
      totalUsers: 1250,
      activeAgents: 45,
      totalRevenue: 125000,
      supportTickets: 23
    });
  };

  if (status === 'loading') return <div>Loading...</div>;
  if (!session) return <div>Access Denied - Admin Only</div>;

  return (
    <>
      <Head>
        <title>Admin Dashboard - OneLastAI</title>
        <meta name="description" content="OneLastAI Admin Dashboard" />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Overview and management of OneLastAI platform</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Users</p>
                  <p className="text-2xl font-semibold text-gray-900">{stats.totalUsers.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Active Agents</p>
                  <p className="text-2xl font-semibold text-gray-900">{stats.activeAgents}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-yellow-100 text-yellow-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-semibold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-red-100 text-red-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 11-9.75 9.75A9.75 9.75 0 0112 2.25z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Support Tickets</p>
                  <p className="text-2xl font-semibold text-gray-900">{stats.supportTickets}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Management Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* User Management */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">User Management</h2>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-gray-50 rounded hover:bg-gray-100 transition duration-200">
                  View All Users
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded hover:bg-gray-100 transition duration-200">
                  Manage Subscriptions
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded hover:bg-gray-100 transition duration-200">
                  User Activity Reports
                </button>
              </div>
            </div>

            {/* Agent Management */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Agent Management</h2>
              <div className="space-y-3">
                <button className="w-full text-left p-3 bg-gray-50 rounded hover:bg-gray-100 transition duration-200">
                  Deploy New Agents
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded hover:bg-gray-100 transition duration-200">
                  Monitor Agent Performance
                </button>
                <button className="w-full text-left p-3 bg-gray-50 rounded hover:bg-gray-100 transition duration-200">
                  Update Agent Models
                </button>
              </div>
            </div>

            {/* System Health */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">System Health</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span>API Status</span>
                  <span className="text-green-600 font-medium">Operational</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                  <span>Database</span>
                  <span className="text-green-600 font-medium">Healthy</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                  <span>AI Models</span>
                  <span className="text-yellow-600 font-medium">Updating</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-200">
                  Send Platform Announcement
                </button>
                <button className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700 transition duration-200">
                  Generate Reports
                </button>
                <button className="w-full bg-orange-600 text-white p-3 rounded hover:bg-orange-700 transition duration-200">
                  Maintenance Mode
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
