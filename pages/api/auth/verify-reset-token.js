// API endpoint for token verification
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { token } = req.query;

  if (!token) {
    return res.status(400).json({ error: 'Token is required' });
  }

  try {
    // In production, check database for token validity and expiration
    const tokenData = await getResetTokenData(token);
    
    if (!tokenData) {
      return res.status(400).json({ valid: false, error: 'Token not found' });
    }

    const now = new Date();
    const expiresAt = new Date(tokenData.expiresAt);

    if (now > expiresAt) {
      return res.status(400).json({ valid: false, error: 'Token expired' });
    }

    res.status(200).json({ valid: true });

  } catch (error) {
    console.error('Token verification error:', error);
    res.status(500).json({ valid: false, error: 'Internal server error' });
  }
}

// Mock token data retrieval (implement with database)
async function getResetTokenData(token) {
  // In production, query database for token
  console.log('Checking token:', token);
  
  // Mock token data
  return {
    token,
    email: 'user@example.com',
    expiresAt: new Date(Date.now() + 3600000), // 1 hour from now
    createdAt: new Date()
  };
}
