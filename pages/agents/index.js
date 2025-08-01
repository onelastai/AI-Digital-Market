import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function AgentsIndex() {
  const agents = [
    {
      id: 'chatgpt',
      name: 'ChatGPT Agent',
      description: 'Advanced conversational AI for natural language interactions, content creation, and problem-solving.',
      icon: '💬',
      color: 'from-green-600 to-blue-600',
      features: ['Natural Conversations', 'Content Writing', 'Code Assistance', 'Language Translation'],
      path: '/agents/chatgpt'
    },
    {
      id: 'image-generation',
      name: 'Image Generation Agent',
      description: 'Create stunning images from text descriptions using state-of-the-art DALL-E AI technology.',
      icon: '🎨',
      color: 'from-purple-600 to-pink-600',
      features: ['High-Quality Images', 'Creative Styles', 'Instant Generation', 'Commercial Use'],
      path: '/agents/image-generation'
    },
    {
      id: 'personal-ai',
      name: 'Personal AI Agent',
      description: 'Your intelligent personal assistant with memory, learning from your interactions and preferences.',
      icon: '🧠',
      color: 'from-indigo-600 to-purple-600',
      features: ['Persistent Memory', 'Personalized Responses', 'Learning Capability', 'Privacy Focused'],
      path: '/agents/personal-ai'
    },
    {
      id: 'analytics',
      name: 'Analytics Agent',
      description: 'Advanced data analysis and insights generation from your usage patterns and metrics.',
      icon: '📊',
      color: 'from-blue-600 to-cyan-600',
      features: ['Data Analysis', 'Usage Insights', 'Performance Metrics', 'Custom Reports'],
      path: '/analytics'
    },
    {
      id: 'code-assistant',
      name: 'Code Assistant Agent',
      description: 'Intelligent coding companion for development, debugging, and code optimization.',
      icon: '💻',
      color: 'from-gray-700 to-gray-900',
      features: ['Code Generation', 'Bug Detection', 'Code Review', 'Documentation'],
      path: '/agents/code-assistant'
    },
    {
      id: 'content-creator',
      name: 'Content Creator Agent',
      description: 'Specialized AI for creating engaging content across multiple formats and platforms.',
      icon: '✍️',
      color: 'from-orange-600 to-red-600',
      features: ['Blog Writing', 'Social Media', 'SEO Optimization', 'Multi-format'],
      path: '/agents/content-creator'
    },
    {
      id: 'business-advisor',
      name: 'Business Advisor Agent',
      description: 'Strategic business insights and recommendations for growth and decision-making.',
      icon: '📈',
      color: 'from-emerald-600 to-teal-600',
      features: ['Strategy Planning', 'Market Analysis', 'Financial Insights', 'Growth Recommendations'],
      path: '/agents/business-advisor'
    },
    {
      id: 'research-assistant',
      name: 'Research Assistant Agent',
      description: 'Comprehensive research capabilities for academic, business, and personal projects.',
      icon: '🔍',
      color: 'from-violet-600 to-purple-600',
      features: ['Information Gathering', 'Source Verification', 'Summary Generation', 'Citation Management'],
      path: '/agents/research-assistant'
    }
  ];

  const categories = [
    { name: 'Productivity', agents: ['personal-ai', 'analytics', 'research-assistant'] },
    { name: 'Creative', agents: ['image-generation', 'content-creator'] },
    { name: 'Technical', agents: ['chatgpt', 'code-assistant'] },
    { name: 'Business', agents: ['business-advisor', 'analytics'] }
  ];

  return (
    <>
      <Head>
        <title>AI Agents - OneLastAI</title>
        <meta name="description" content="Explore our comprehensive collection of AI agents for every need - from conversation to content creation" />
        <link rel="canonical" href="https://onelastai.com/agents" />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Agents</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover our powerful collection of specialized AI agents designed to enhance your productivity, 
              creativity, and decision-making across every aspect of your work and life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-200">
                Get Started Free
              </Link>
              <Link href="/test-agents" className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition duration-200">
                Try Demo
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-gray-600">AI Agents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
              <div className="text-gray-600">Tasks Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>

          {/* Featured Agents */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured AI Agents</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {agents.slice(0, 6).map((agent) => (
                <Link key={agent.id} href={agent.path} className="group">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className={`h-32 bg-gradient-to-r ${agent.color} flex items-center justify-center`}>
                      <span className="text-6xl">{agent.icon}</span>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {agent.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{agent.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {agent.features.slice(0, 2).map((feature, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                        {agent.features.length > 2 && (
                          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">
                            +{agent.features.length - 2} more
                          </span>
                        )}
                      </div>
                      <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                        Try Now
                        <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <div key={category.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.name}</h3>
                  <div className="space-y-2">
                    {category.agents.map((agentId) => {
                      const agent = agents.find(a => a.id === agentId);
                      return agent ? (
                        <Link key={agentId} href={agent.path} className="block text-blue-600 hover:text-blue-800 text-sm">
                          {agent.icon} {agent.name}
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* All Agents Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">All AI Agents</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {agents.map((agent) => (
                <Link key={agent.id} href={agent.path} className="group">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200">
                    <div className="p-6 flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-r ${agent.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <span className="text-2xl">{agent.icon}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {agent.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{agent.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {agent.features.map((feature, index) => (
                            <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already leveraging the power of AI to transform their work and creativity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-200">
                Start Free Trial
              </Link>
              <Link href="/support" className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition duration-200">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
