import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// One Last AI - Revolutionary AI Agents Platform
export default function Home() {
  const [currentAgent, setCurrentAgent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentAgent((prev) => (prev + 1) % aiAgents.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const aiAgents = [
    { name: 'Sonnet', domain: 'sonnet.onelastai.com', desc: 'Poetry & Creative Writing', icon: '✍️' },
    { name: 'Vision', domain: 'vision.onelastai.com', desc: 'Image Generation & Analysis', icon: '👁️' },
    { name: 'Logic', domain: 'logic.onelastai.com', desc: 'Problem Solving & Analytics', icon: '🧠' },
    { name: 'Voice', domain: 'voice.onelastai.com', desc: 'Speech & Audio Processing', icon: '🎙️' },
    { name: 'Code', domain: 'code.onelastai.com', desc: 'Programming & Development', icon: '💻' },
    { name: 'Data', domain: 'data.onelastai.com', desc: 'Big Data & Insights', icon: '📊' }
  ];

  return (
    <>
      <Head>
        <title>One Last AI - Revolutionary AI Agents Army | onelast.ai</title>
        <meta name="description" content="The ultimate AI agents platform that will challenge the global marketplace. Deploy intelligent agents for every task." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="One Last AI - Revolutionary AI Agents Army" />
        <meta property="og:description" content="The platform that will shock the global AI marketplace" />
        <meta property="og:url" content="https://onelast.ai" />
        <meta property="og:type" content="website" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "One Last AI",
              "description": "Revolutionary AI agents platform",
              "url": "https://onelast.ai",
              "applicationCategory": "BusinessApplication"
            })
          }}
        />
      </Head>

      <div className="min-h-screen bg-black relative overflow-hidden">
        {/* Crystal Dark Foggy Glass Background */}
        <div className="absolute inset-0">
          {/* Base dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900/20"></div>
          
          {/* Animated fog layers */}
          <motion.div
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-blue-600/10 to-cyan-400/10 blur-3xl"
          />
          
          {/* Glass morphism overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
          
          {/* Floating glass orbs */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md border border-white/10"
              style={{
                width: Math.random() * 200 + 100,
                height: Math.random() * 200 + 100,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Header Navigation */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-50 p-6"
        >
          <nav className="flex items-center justify-between max-w-7xl mx-auto">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div>
                <div className="text-white font-bold text-2xl">One Last AI</div>
                <div className="text-purple-400 text-sm font-medium">onelast.ai</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/agents" className="text-gray-300 hover:text-purple-400 transition-colors">
                🤖 Agents
              </Link>
              <Link href="/test-agents" className="text-gray-300 hover:text-purple-400 transition-colors">
                🧪 Test AI
              </Link>
              <Link href="https://subscribe.onelastai.com" className="text-gray-300 hover:text-purple-400 transition-colors">
                💎 Subscribe
              </Link>
              <Link 
                href="https://pay.onelastai.com"
                className="bg-gradient-to-r from-purple-500 to-blue-600 px-6 py-3 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
              >
                🚀 Deploy Agent
              </Link>
            </div>
          </nav>
        </motion.header>

        {/* Hero Section */}
        <main className="relative z-40 flex items-center justify-center min-h-screen px-6">
          <div className="max-w-6xl mx-auto text-center">
            
            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <h1 className="text-6xl md:text-8xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                  ONE LAST
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                  AI
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
                The <span className="text-purple-400 font-semibold">Revolutionary AI Agents Army</span> that will 
                <span className="text-blue-400 font-semibold"> shock the global marketplace</span>
              </p>
              
              <p className="text-lg text-gray-400 mb-12">
                Deploy intelligent agents for every task • Self-learning • Always evolving
              </p>
            </motion.div>

            {/* Agent Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-12"
            >
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-4">Meet Your AI Agent</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {aiAgents.map((agent, index) => (
                      <motion.div
                        key={agent.name}
                        className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                          currentAgent === index
                            ? 'bg-gradient-to-br from-purple-600/30 to-blue-600/30 border-purple-400/50'
                            : 'bg-white/5 border-white/10 hover:border-purple-400/30'
                        }`}
                        onClick={() => setCurrentAgent(index)}
                      >
                        <div className="text-3xl mb-2">{agent.icon}</div>
                        <div className="text-white font-semibold text-sm">{agent.name}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentAgent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="text-6xl mb-4">{aiAgents[currentAgent].icon}</div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {aiAgents[currentAgent].name} Agent
                    </h3>
                    <p className="text-gray-300 mb-4">{aiAgents[currentAgent].desc}</p>
                    <div className="text-purple-400 font-mono text-sm mb-6">
                      {aiAgents[currentAgent].domain}
                    </div>
                    <Link
                      href={`https://${aiAgents[currentAgent].domain}`}
                      className="inline-block bg-gradient-to-r from-purple-500 to-blue-600 px-8 py-4 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      Deploy {aiAgents[currentAgent].name} →
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6"
            >
              <Link
                href="/test-agents"
                className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full text-white font-bold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
              >
                <span>🧪</span>
                <span>Test AI Agents</span>
              </Link>
              
              <Link
                href="/github-showcase"
                className="bg-gradient-to-r from-gray-700 to-gray-900 px-8 py-4 rounded-full text-white font-bold text-lg hover:shadow-xl hover:shadow-gray-500/25 transition-all duration-300 flex items-center space-x-2"
              >
                <span>🚀</span>
                <span>GitHub Empire</span>
              </Link>
              
              <Link
                href="https://subscribe.onelastai.com"
                className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full text-white font-bold text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                <span>💎</span>
                <span>Join the Army</span>
              </Link>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-40 mt-20 border-t border-white/10 bg-black/50 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              
              {/* Left - GitHub Links */}
              <div className="flex items-center space-x-6 mb-6 md:mb-0">
                <Link 
                  href="https://github.com/1-manarmy"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>1-manarmy</span>
                </Link>
                
                <Link 
                  href="https://github.com/my-checkmate"
                  className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>my-checkmate</span>
                </Link>
              </div>

              {/* Center - King Logo */}
              <div className="flex items-center space-x-4 mb-6 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">👑</span>
                </div>
                <div>
                  <div className="text-white font-bold">Claude Sonnet King</div>
                  <div className="text-purple-400 text-sm">AI Supremacy</div>
                </div>
              </div>

              {/* Right - Quick Links */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <Link href="https://support.onelastai.com" className="text-gray-400 hover:text-purple-400">Support</Link>
                <Link href="https://tc.onelastai.com" className="text-gray-400 hover:text-purple-400">Terms</Link>
                <Link href="https://pp.onelastai.com" className="text-gray-400 hover:text-purple-400">Privacy</Link>
                <Link href="https://about.onelastai.com" className="text-gray-400 hover:text-purple-400">About</Link>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
              <p>© 2025 One Last AI. The revolution begins here. 🚀</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
