import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function ImageGenerationAgent() {
  const [prompt, setPrompt] = useState('');
  const [generatedImages, setGeneratedImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/ai-agent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agent: 'image-generation',
          prompt: prompt
        })
      });

      const data = await response.json();
      if (data.success) {
        setGeneratedImages(prev => [...prev, {
          url: data.data.imageUrl,
          prompt: prompt,
          revisedPrompt: data.data.revisedPrompt,
          timestamp: new Date()
        }]);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setPrompt('');
    }
  };

  return (
    <>
      <Head>
        <title>Image Generation Agent - OneLastAI</title>
        <meta name="description" content="Create stunning images from text descriptions using DALL-E AI" />
        <link rel="canonical" href="https://onelastai.com/agents/image-generation" />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Image Generation Agent</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Transform your imagination into stunning visuals. Create unique images from simple text descriptions 
              using state-of-the-art AI technology powered by DALL-E.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">High-Quality Images</h3>
              <p className="text-gray-600">Generate 1024x1024 high-resolution images with exceptional detail.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h4zM5 10v8a2 2 0 002 2h10a2 2 0 002-2v-8M10 15h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Styles</h3>
              <p className="text-gray-600">Support for various artistic styles from photorealistic to abstract art.</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Generation</h3>
              <p className="text-gray-600">Create images in seconds with our powerful AI infrastructure.</p>
            </div>
          </div>

          {/* Image Generation Interface */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
              <h2 className="text-xl font-semibold text-white">Create Your Image</h2>
            </div>
            
            <div className="p-6">
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Describe your image</label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., A serene mountain landscape at sunset with a lake reflecting the orange sky..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 resize-none"
                  rows="3"
                  disabled={isLoading}
                />
              </div>

              <button
                onClick={generateImage}
                disabled={isLoading || !prompt.trim()}
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isLoading ? 'Generating Image...' : 'Generate Image'}
              </button>

              {isLoading && (
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-gray-600">Creating your masterpiece...</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Generated Images Gallery */}
          {generatedImages.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Generated Images</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {generatedImages.reverse().map((image, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="aspect-square bg-gray-200 flex items-center justify-center">
                      <img 
                        src={image.url} 
                        alt={image.prompt}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center text-gray-500">
                        Image unavailable
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 mb-2">
                        <strong>Prompt:</strong> {image.prompt}
                      </p>
                      <p className="text-xs text-gray-500">
                        Generated: {image.timestamp.toLocaleString()}
                      </p>
                      <div className="mt-3 flex space-x-2">
                        <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                          Download
                        </button>
                        <button className="text-gray-600 hover:text-gray-800 text-sm font-medium">
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Example Prompts */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Try These Example Prompts</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "A futuristic cityscape with flying cars and neon lights at night",
                "A peaceful garden with blooming cherry blossoms and a stone bridge",
                "An abstract painting with vibrant colors and geometric shapes",
                "A vintage-style portrait of a person reading in a cozy library",
                "A majestic dragon flying over a medieval castle",
                "A minimalist design of a coffee cup on a wooden table"
              ].map((examplePrompt, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(examplePrompt)}
                  className="text-left p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 border border-gray-200 hover:border-purple-300"
                >
                  <p className="text-gray-700">{examplePrompt}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Perfect For</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Marketing</h3>
                <p className="text-gray-600 text-sm">Create unique visuals for campaigns and social media.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Content Creation</h3>
                <p className="text-gray-600 text-sm">Generate illustrations for blogs and articles.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4v16h10V4M9 8h6M9 12h6M9 16h6" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Product Design</h3>
                <p className="text-gray-600 text-sm">Prototype and visualize product concepts.</p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Personal Projects</h3>
                <p className="text-gray-600 text-sm">Create art for personal use and gifts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
