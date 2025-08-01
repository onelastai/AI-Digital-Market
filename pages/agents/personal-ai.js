import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function PersonalAIAgent() {
  const [memories, setMemories] = useState([]);
  const [newMemory, setNewMemory] = useState('');
  const [query, setQuery] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const addMemory = async () => {
    if (!newMemory.trim()) {
      return;
    }

    try {
      const response = await fetch('/api/personal-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'add_memory',
          memory: newMemory
        })
      });

      const data = await response.json();
      if (data.success) {
        setMemories(prev => [...prev, { content: newMemory, timestamp: new Date() }]);
        setNewMemory('');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const queryAI = async () => {
    if (!query.trim()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/personal-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'query',
          query: query
        })
      });

      const data = await response.json();
      if (data.success) {
        setAiResponse(data.data.response);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Personal AI Agent - OneLastAI</title>
        <meta name="description" content="Your personal AI assistant with memory and contextual understanding" />
        <link rel="canonical" href="https://onelastai.com/agents/personal-ai" />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Personal AI Agent</h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Your intelligent personal assistant that learns from your interactions, remembers your preferences, 
              and provides personalized responses based on your unique context and history.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Persistent Memory</h3>
              <p className="text-gray-600">Remembers your conversations, preferences, and important information.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Responses</h3>
              <p className="text-gray-600">Tailored responses based on your unique context and interaction history.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Private & Secure</h3>
              <p className="text-gray-600">Your personal data is encrypted and kept completely private.</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Memory Management */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4">
                <h2 className="text-xl font-semibold text-white">Memory Bank</h2>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Add a memory</label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newMemory}
                      onChange={(e) => setNewMemory(e.target.value)}
                      placeholder="e.g., I prefer morning meetings, My favorite color is blue..."
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500"
                      onKeyPress={(e) => e.key === 'Enter' && addMemory()}
                    />
                    <button
                      onClick={addMemory}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                    >
                      Add
                    </button>
                  </div>
                </div>

                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {memories.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">No memories stored yet. Add some personal information!</p>
                  ) : (
                    memories.map((memory, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-md">
                        <p className="text-gray-700">{memory.content}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          Added: {memory.timestamp.toLocaleString()}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* AI Interaction */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
                <h2 className="text-xl font-semibold text-white">Ask Your Personal AI</h2>
              </div>
              
              <div className="p-6">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your question</label>
                  <textarea
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Ask me anything based on your memories and preferences..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 resize-none"
                    rows="3"
                  />
                  <button
                    onClick={queryAI}
                    disabled={isLoading || !query.trim()}
                    className="mt-3 w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 disabled:opacity-50"
                  >
                    {isLoading ? 'Thinking...' : 'Ask AI'}
                  </button>
                </div>

                {aiResponse && (
                  <div className="bg-purple-50 p-4 rounded-md">
                    <h3 className="font-medium text-purple-900 mb-2">AI Response:</h3>
                    <p className="text-purple-800">{aiResponse}</p>
                  </div>
                )}

                {isLoading && (
                  <div className="text-center py-4">
                    <div className="inline-flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-gray-600">Processing your request...</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Capabilities */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What Your Personal AI Can Do</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Schedule Management</h3>
                <p className="text-gray-600 text-sm">Remember your preferences for meeting times, locations, and scheduling conflicts.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Task Planning</h3>
                <p className="text-gray-600 text-sm">Plan tasks based on your work style, deadlines, and personal commitments.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Personal Recommendations</h3>
                <p className="text-gray-600 text-sm">Suggest activities, content, and decisions based on your interests and history.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Learning & Growth</h3>
                <p className="text-gray-600 text-sm">Track your learning goals and suggest resources based on your interests.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Reminders & Alerts</h3>
                <p className="text-gray-600 text-sm">Set up intelligent reminders based on your patterns and preferences.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Contextual Help</h3>
                <p className="text-gray-600 text-sm">Provide assistance that considers your current situation and past experiences.</p>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">Privacy & Security</h3>
                <p className="mt-1 text-sm text-blue-700">
                  Your personal memories and data are encrypted and stored securely. They are never shared with third parties 
                  and remain completely private to you. You can delete your memories at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
