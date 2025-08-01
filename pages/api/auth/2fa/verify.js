import speakeasy from 'speakeasy';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const session = await getSession({ req });
  
  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const { token, secret } = req.body;

  if (!token || !secret) {
    return res.status(400).json({ error: 'Token and secret are required' });
  }

  try {
    // Verify the token
    const verified = speakeasy.totp.verify({
      secret: secret,
      encoding: 'base32',
      token: token,
      window: 2 // Allow some time drift
    });

    if (!verified) {
      return res.status(400).json({ error: 'Invalid verification code' });
    }

    // Generate backup codes
    const backupCodes = generateBackupCodes();

    // In production, save 2FA secret and backup codes to database
    const userData = {
      userId: session.user.id || session.user.email,
      twoFactorSecret: secret,
      backupCodes: backupCodes,
      twoFactorEnabled: true,
      enabledAt: new Date()
    };

    console.log('2FA enabled for user:', session.user.email);
    console.log('Backup codes generated:', backupCodes);

    res.status(200).json({
      message: '2FA enabled successfully',
      backupCodes: backupCodes
    });

  } catch (error) {
    console.error('2FA verification error:', error);
    res.status(500).json({ error: 'Failed to verify 2FA' });
  }
}

// Generate backup codes
function generateBackupCodes() {
  const codes = [];
  for (let i = 0; i < 10; i++) {
    // Generate 8-character backup code
    const code = Math.random().toString(36).substring(2, 10).toUpperCase();
    codes.push(code);
  }
  return codes;
}
