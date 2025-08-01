import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchBlogPosts();
    fetchCategories();
  }, []);

  const fetchBlogPosts = async () => {
    // Mock data - replace with actual API calls
    const mockPosts = [
      // AI History Series
      {
        id: 1,
        title: 'The Birth of Artificial Intelligence: From Turing to McCarthy (1940s-1950s)',
        excerpt: 'Explore the foundational years of AI, from Alan Turing\'s groundbreaking theories to John McCarthy coining the term "Artificial Intelligence".',
        content: 'Full blog content here...',
        author: 'AI History Team',
        date: '2025-08-02',
        category: 'AI History',
        readTime: '12 min read',
        image: '/images/blog/ai-history-1940s-1950s.jpg',
        tags: ['AI History', 'Turing', 'McCarthy', 'Foundations']
      },
      {
        id: 2,
        title: 'The Golden Age of AI: Expert Systems and Early Breakthroughs (1960s-1970s)',
        excerpt: 'Discover how AI flourished in the 60s and 70s with expert systems, LISP programming, and the first AI winter.',
        content: 'Full blog content here...',
        author: 'AI History Team',
        date: '2025-08-01',
        category: 'AI History',
        readTime: '10 min read',
        image: '/images/blog/ai-history-golden-age.jpg',
        tags: ['AI History', 'Expert Systems', 'LISP', '1960s', '1970s']
      },
      {
        id: 3,
        title: 'AI Winter and Revival: The Rise of Machine Learning (1980s-1990s)',
        excerpt: 'Learn about AI\'s challenging winter period and its triumphant return through machine learning and neural networks.',
        content: 'Full blog content here...',
        author: 'AI History Team',
        date: '2025-07-31',
        category: 'AI History',
        readTime: '11 min read',
        image: '/images/blog/ai-winter-revival.jpg',
        tags: ['AI History', 'AI Winter', 'Machine Learning', 'Neural Networks']
      },
      {
        id: 4,
        title: 'The Internet Age: AI Goes Mainstream (2000s-2010s)',
        excerpt: 'How the internet revolution and big data transformed AI from academic curiosity to practical technology.',
        content: 'Full blog content here...',
        author: 'AI History Team',
        date: '2025-07-30',
        category: 'AI History',
        readTime: '9 min read',
        image: '/images/blog/ai-internet-age.jpg',
        tags: ['AI History', 'Internet', 'Big Data', '2000s', '2010s']
      },
      {
        id: 5,
        title: 'The Deep Learning Revolution: From ImageNet to GPT (2010s-Present)',
        excerpt: 'Witness the explosion of deep learning that changed everything - from computer vision to natural language processing.',
        content: 'Full blog content here...',
        author: 'AI History Team',
        date: '2025-07-29',
        category: 'AI History',
        readTime: '13 min read',
        image: '/images/blog/deep-learning-revolution.jpg',
        tags: ['AI History', 'Deep Learning', 'ImageNet', 'GPT', 'Transformers']
      },
      {
        id: 6,
        title: 'AI Pioneers: The Visionaries Who Shaped Our Future',
        excerpt: 'Meet the brilliant minds behind AI - from Alan Turing and Marvin Minsky to Geoffrey Hinton and Yann LeCun.',
        content: 'Full blog content here...',
        author: 'AI History Team',
        date: '2025-07-28',
        category: 'AI History',
        readTime: '15 min read',
        image: '/images/blog/ai-pioneers.jpg',
        tags: ['AI History', 'Pioneers', 'Turing', 'Hinton', 'LeCun', 'Bengio']
      },
      // Current AI Technology
      {
        id: 7,
        title: 'The Future of AI Agents in Business Automation',
        excerpt: 'Discover how AI agents are revolutionizing business processes and increasing productivity across industries.',
        content: 'Full blog content here...',
        author: 'OneLastAI Team',
        date: '2025-07-27',
        category: 'AI Technology',
        readTime: '5 min read',
        image: '/images/blog/ai-business-automation.jpg',
        tags: ['AI', 'Business', 'Automation']
      },
      {
        id: 8,
        title: 'Building Secure AI Applications: Best Practices',
        excerpt: 'Learn the essential security measures every AI application should implement to protect user data and maintain trust.',
        content: 'Full blog content here...',
        author: 'Security Team',
        date: '2025-07-26',
        category: 'Security',
        readTime: '8 min read',
        image: '/images/blog/ai-security.jpg',
        tags: ['Security', 'AI', 'Best Practices']
      },
      {
        id: 9,
        title: 'Getting Started with Personal AI Assistants',
        excerpt: 'A beginner\'s guide to setting up and maximizing the potential of your personal AI assistant.',
        content: 'Full blog content here...',
        author: 'Product Team',
        date: '2025-07-25',
        category: 'Tutorials',
        readTime: '6 min read',
        image: '/images/blog/personal-ai-guide.jpg',
        tags: ['Tutorial', 'Personal AI', 'Getting Started']
      },
      {
        id: 10,
        title: 'AI Ethics: Building Responsible AI Systems',
        excerpt: 'Exploring the ethical considerations and guidelines for developing AI systems that benefit everyone.',
        content: 'Full blog content here...',
        author: 'Ethics Committee',
        date: '2025-07-24',
        category: 'Ethics',
        readTime: '10 min read',
        image: '/images/blog/ai-ethics.jpg',
        tags: ['Ethics', 'AI', 'Responsibility']
      },
      {
        id: 11,
        title: 'Case Study: How Company X Increased Efficiency by 300%',
        excerpt: 'Real-world success story showing how AI agents transformed a company\'s operations and boosted productivity.',
        content: 'Full blog content here...',
        author: 'Case Study Team',
        date: '2025-07-23',
        category: 'Case Studies',
        readTime: '7 min read',
        image: '/images/blog/case-study-efficiency.jpg',
        tags: ['Case Study', 'Success Story', 'Efficiency']
      }
    ];
    setPosts(mockPosts);
  };

  const fetchCategories = async () => {
    const mockCategories = [
      'AI History',
      'AI Technology',
      'Security',
      'Tutorials',
      'Ethics',
      'Case Studies',
      'Industry News'
    ];
    setCategories(mockCategories);
  };

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Blog - OneLastAI</title>
        <meta name="description" content="Latest insights, tutorials, and news about AI technology and digital innovation" />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">OneLastAI Blog</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Insights, tutorials, and the latest news about AI technology and digital innovation
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Categories Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-2 rounded-full font-medium transition duration-200 ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Posts
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 && (
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <div className="h-64 md:h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-lg">Featured Image</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                        {filteredPosts[0].category}
                      </span>
                      <span className="ml-3 text-gray-500 text-sm">{filteredPosts[0].readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{filteredPosts[0].title}</h2>
                    <p className="text-gray-700 mb-6">{filteredPosts[0].excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gray-300 rounded-full mr-3"></div>
                        <div>
                          <p className="font-medium text-gray-900">{filteredPosts[0].author}</p>
                          <p className="text-sm text-gray-500">{new Date(filteredPosts[0].date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <Link href={`/blog/${filteredPosts[0].id}`} className="text-blue-600 hover:text-blue-800 font-medium">
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-200">
                <div className="h-48 bg-gradient-to-r from-gray-400 to-gray-600 flex items-center justify-center">
                  <span className="text-white">Blog Image</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="ml-2 text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <Link href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Read →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition duration-200">
              Load More Posts
            </button>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h2>
              <p className="text-gray-600 mb-6">Subscribe to our newsletter to get the latest blog posts and AI insights.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-200">
                  Subscribe
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
