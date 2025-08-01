import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function AboutUs() {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and machine learning',
      image: '/images/team/alex-chen.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Expert in AI architecture and scalable systems',
      image: '/images/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Research',
      bio: 'PhD in Computer Science, specializing in neural networks',
      image: '/images/team/michael-rodriguez.jpg'
    },
    {
      name: 'Emily Park',
      role: 'Head of Product',
      bio: 'Product strategist focused on user-centric AI solutions',
      image: '/images/team/emily-park.jpg'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI technology.',
      icon: '🚀'
    },
    {
      title: 'Trust',
      description: 'We build secure, reliable AI systems that users can depend on.',
      icon: '🔒'
    },
    {
      title: 'Accessibility',
      description: 'We make advanced AI technology accessible to everyone, regardless of technical expertise.',
      icon: '🌍'
    },
    {
      title: 'Ethics',
      description: 'We develop AI responsibly, considering the impact on society and individuals.',
      icon: '⚖️'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'OneLastAI was founded with a vision to democratize AI technology.'
    },
    {
      year: '2024',
      title: 'First AI Agent Launch',
      description: 'Launched our first personal AI assistant to 1,000 beta users.'
    },
    {
      year: '2024',
      title: 'Series A Funding',
      description: 'Raised $10M in Series A funding to accelerate development.'
    },
    {
      year: '2025',
      title: 'Platform Launch',
      description: 'Officially launched the OneLastAI platform with multiple AI agents.'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - OneLastAI</title>
        <meta name="description" content="Learn about OneLastAI's mission, team, and journey in AI innovation" />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About OneLastAI</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              We're on a mission to make AI accessible, powerful, and beneficial for everyone. 
              Our platform brings together the most advanced AI agents to help individuals and 
              businesses achieve more than ever before.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  To democratize artificial intelligence by creating intuitive, powerful, and 
                  ethical AI agents that enhance human capabilities and solve real-world problems.
                </p>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where AI seamlessly integrates into daily life, empowering every 
                  person and organization to achieve their full potential through intelligent automation.
                </p>
              </div>
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg p-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">AI for Everyone</h3>
                  <p className="text-gray-700">
                    Making advanced AI technology accessible, understandable, and beneficial for all users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600">The brilliant minds behind OneLastAI</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-lg">Photo</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Timeline */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones in our company's growth</p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">By the Numbers</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">AI Agents</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 mb-2">1M+</div>
                <div className="text-gray-600">Queries Processed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-600 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of users who are already experiencing the power of AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup" className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition duration-200">
                Get Started Free
              </Link>
              <Link href="/support" className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition duration-200">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
