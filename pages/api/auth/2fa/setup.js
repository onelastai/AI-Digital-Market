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

  try {
    // Generate secret for 2FA
    const secret = speakeasy.generateSecret({
      name: `OneLastAI (${session.user.email})`,
      issuer: 'OneLastAI',
      length: 32
    });

    // In production, store the temporary secret in database
    console.log('Generated 2FA secret for user:', session.user.email);

    // Create OTP Auth URL for QR code
    const otpAuthUrl = speakeasy.otpauthURL({
      secret: secret.ascii,
      label: session.user.email,
      issuer: 'OneLastAI',
      encoding: 'ascii'
    });

    res.status(200).json({
      secret: secret.base32,
      otpAuthUrl: otpAuthUrl,
      qrCodeUrl: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(otpAuthUrl)}`
    });

  } catch (error) {
    console.error('2FA setup error:', error);
    res.status(500).json({ error: 'Failed to setup 2FA' });
  }
}
