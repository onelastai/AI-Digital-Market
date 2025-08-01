import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function VoiceTest() {
  const [text, setText] = useState('Hello! This is a test of the ElevenLabs voice API.');
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);

  const generateVoice = async () => {
    if (!text.trim()) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/voice', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      });

      const data = await response.json();
      
      if (data.success) {
        // Convert base64 to audio URL
        const audioBlob = new Blob(
          [Uint8Array.from(atob(data.data.audioData), c => c.charCodeAt(0))], 
          { type: 'audio/mpeg' }
        );
        const url = URL.createObjectURL(audioBlob);
        setAudioUrl(url);
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to generate voice');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Voice Test - OneLastAI</title>
        <meta name="description" content="Test ElevenLabs voice integration" />
      </Head>
      
      <Header />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-8">🎤 Voice API Test</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Text to Speech</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full p-3 border rounded-md"
                rows="3"
                placeholder="Enter text to convert to speech..."
              />
            </div>
            
            <button
              onClick={generateVoice}
              disabled={isLoading || !text.trim()}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {isLoading ? 'Generating...' : 'Generate Voice'}
            </button>
            
            {audioUrl && (
              <div className="mt-6">
                <h3 className="font-medium mb-2">Generated Audio:</h3>
                <audio controls className="w-full">
                  <source src={audioUrl} type="audio/mpeg" />
                  Your browser does not support audio playback.
                </audio>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
}
