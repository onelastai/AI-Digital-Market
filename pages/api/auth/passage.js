// Passage Authentication API - OneLastAI
// Powered by 1Password for secure authentication

export default async function handler(req, res) {
  const PASSAGE_API_KEY = 'JmwUm8Neu0.rgjpGngA6DmmyegFJAtWlXajAzBsCaxn5fZYwxXNHRo4PFfQa2pr1tgJ9pcIreJN';
  const PASSAGE_APP_ID = process.env.PASSAGE_APP_ID || 'your-passage-app-id';

  if (req.method === 'POST') {
    try {
      const { action, token, userData } = req.body;

      switch (action) {
        case 'verify':
          return await verifyToken(token, res);
        
        case 'create_user':
          return await createUser(userData, res);
        
        case 'get_user':
          return await getUser(token, res);
        
        default:
          return res.status(400).json({ error: 'Invalid action' });
      }
    } catch (error) {
      console.error('Passage API error:', error);
      return res.status(500).json({ error: 'Authentication failed' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });

  // Verify Passage token
  async function verifyToken(token, res) {
    const response = await fetch(`https://auth.passage.id/v1/apps/${PASSAGE_APP_ID}/tokens/verify`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PASSAGE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    const data = await response.json();
    return res.status(200).json({ 
      success: true, 
      user: data.user,
      verified: true 
    });
  }

  // Create new user
  async function createUser(userData, res) {
    const response = await fetch(`https://auth.passage.id/v1/apps/${PASSAGE_APP_ID}/users`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${PASSAGE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        phone: userData.phone || null,
        user_metadata: userData.metadata || {}
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      return res.status(400).json({ error: data.error || 'Failed to create user' });
    }

    return res.status(201).json({ 
      success: true, 
      user: data.user 
    });
  }

  // Get user info
  async function getUser(token, res) {
    const response = await fetch(`https://auth.passage.id/v1/apps/${PASSAGE_APP_ID}/currentuser`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const data = await response.json();
    return res.status(200).json({ 
      success: true, 
      user: data.user 
    });
  }
}
