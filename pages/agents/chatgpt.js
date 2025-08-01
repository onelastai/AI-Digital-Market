import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function ChatGPTAgent() {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setIsLoading(true);
    const userMessage = { role: 'user', content: message };
    setConversation(prev => [...prev, userMessage]);

    try {
      const response = await fetch('/api/ai-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agent: 'chatgpt',
          messages: [...conversation, userMessage]
        })
      });

      const data = await response.json();
      if (data.success) {
        setConversation(prev => [...prev, { role: 'assistant', content: data.data.message }]);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setMessage('');
    }
  };

  return (
    <>
      <Head>
        <title>ChatGPT Agent - OneLastAI</title>
        <meta name="description" content="Advanced conversational AI powered by ChatGPT" />
        <link rel="canonical" href="https://onelastai.com/agents/chatgpt" />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">ChatGPT Agent</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Advanced conversational AI that understands context, provides intelligent responses, 
              and helps with a wide range of tasks from writing to problem-solving.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Conversations</h3>
              <p className="text-gray-600">Engage in human-like conversations with advanced context understanding.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Assistant</h3>
              <p className="text-gray-600">Get help with writing, brainstorming, and creative problem-solving.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Get instant responses powered by the latest GPT models.</p>
            </div>
          </div>

          {/* Chat Interface */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">Chat with ChatGPT Agent</h2>
            </div>
            
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {conversation.length === 0 ? (
                <div className="text-center text-gray-500 py-20">
                  <p>Start a conversation with the ChatGPT Agent!</p>
                </div>
              ) : (
                conversation.map((msg, index) => (
                  <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-sm lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg ${
                      msg.role === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                ))
              )}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="border-t p-6">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !message.trim()}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Popular Use Cases</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold mb-2">Content Writing</h3>
                <p className="text-gray-600 text-sm">Generate articles, blogs, emails, and marketing copy.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold mb-2">Code Assistance</h3>
                <p className="text-gray-600 text-sm">Get help with programming, debugging, and code review.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold mb-2">Research & Analysis</h3>
                <p className="text-gray-600 text-sm">Analyze data, summarize information, and conduct research.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold mb-2">Language Translation</h3>
                <p className="text-gray-600 text-sm">Translate text between multiple languages accurately.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold mb-2">Educational Support</h3>
                <p className="text-gray-600 text-sm">Get explanations, homework help, and learning assistance.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold mb-2">Business Planning</h3>
                <p className="text-gray-600 text-sm">Create business plans, strategies, and market analysis.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
