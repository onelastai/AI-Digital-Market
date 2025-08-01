// API endpoint for password reset requests
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Generate reset token (in production, use crypto.randomBytes)
    const resetToken = Math.random().toString(36).substring(2, 15) + 
                      Math.random().toString(36).substring(2, 15);
    
    // In production, save token to database with expiration time
    const resetTokenData = {
      email,
      token: resetToken,
      expiresAt: new Date(Date.now() + 3600000), // 1 hour
      createdAt: new Date()
    };

    console.log('Password reset requested:', resetTokenData);

    // Send email with reset link (implement with your email service)
    const resetLink = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`;
    
    // Mock email sending (replace with actual email service)
    const emailSent = await sendPasswordResetEmail(email, resetLink);

    if (emailSent) {
      res.status(200).json({ 
        message: 'Password reset email sent',
        // Don't expose token in production
        ...(process.env.NODE_ENV === 'development' && { token: resetToken })
      });
    } else {
      res.status(500).json({ error: 'Failed to send email' });
    }

  } catch (error) {
    console.error('Password reset error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Mock email function (replace with actual email service)
async function sendPasswordResetEmail(email, resetLink) {
  // In production, integrate with SendGrid, SES, or similar
  console.log(`Sending password reset email to: ${email}`);
  console.log(`Reset link: ${resetLink}`);
  
  // Mock successful email sending
  return true;
}
