// API Route: /api/ai-agent
// Handles all AI agent requests for onelastai.com

const { AIAgentManager } = require('../../lib/ai-agents');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { serviceType, prompt, userId, options = {} } = req.body;

    // Validate required fields
    if (!serviceType || !prompt) {
      return res.status(400).json({ 
        error: 'Missing required fields: serviceType and prompt' 
      });
    }

    // Check API keys are configured
    if (!process.env.OPENAI_API_KEY) {
      return res.status(500).json({ 
        error: 'AI services not configured. Please add API keys.' 
      });
    }

    // Check user limits (if userId provided)
    if (userId) {
      const withinLimits = await UsageTracker.checkLimits(userId, serviceType);
      if (!withinLimits) {
        return res.status(429).json({ 
          error: 'Usage limit exceeded. Please upgrade your plan.' 
        });
      }
    }

    // Create appropriate AI agent
    const agent = AIAgentFactory.createAgent(serviceType);
    let result;

    // Handle different service types
    switch (serviceType) {
      case 'chat':
      case 'chatbot':
        const messages = Array.isArray(prompt) ? prompt : [
          { role: 'user', content: prompt }
        ];
        result = await agent.chat(messages, userId);
        break;

      case 'image':
      case 'art':
        result = await agent.generateImage(prompt, userId);
        break;

      case 'content':
      case 'writing':
        if (options.type === 'blog') {
          result = await agent.generateBlogPost(
            prompt, 
            options.keywords || [], 
            options.wordCount || 1000
          );
        } else if (options.type === 'product') {
          result = await agent.generateProductDescription(
            prompt, 
            options.features || []
          );
        } else {
          // Generic content generation
          const messages = [
            { 
              role: 'system', 
              content: 'You are a professional content writer for onelastai.com. Create high-quality, engaging content.' 
            },
            { role: 'user', content: prompt }
          ];
          const chatAgent = AIAgentFactory.createAgent('chat');
          result = await chatAgent.chat(messages, userId);
        }
        break;

      case 'analytics':
      case 'insights':
        if (options.type === 'behavior') {
          result = await agent.analyzeUserBehavior(options.data);
        } else if (options.type === 'report') {
          result = await agent.generateReport(options.metrics);
        } else {
          return res.status(400).json({ 
            error: 'Analytics requires type: behavior or report' 
          });
        }
        break;

      default:
        return res.status(400).json({ 
          error: `Unsupported service type: ${serviceType}` 
        });
    }

    // Track usage for billing
    if (userId && result.success) {
      await UsageTracker.trackUsage(userId, serviceType, result.usage);
    }

    // Return result
    res.status(200).json({
      success: result.success,
      data: result.data,
      usage: result.usage,
      error: result.error,
      serviceType,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('AI Agent API Error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}

// Helper function to validate API keys
export function validateAPIKeys() {
  const requiredKeys = ['OPENAI_API_KEY'];
  const missing = requiredKeys.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    throw new Error(`Missing required API keys: ${missing.join(', ')}`);
  }
  
  return true;
}
