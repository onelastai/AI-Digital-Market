import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import QRCode from 'qrcode';

export default function TwoFactorSetup() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [qrCode, setQrCode] = useState('');
  const [secret, setSecret] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [backupCodes, setBackupCodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status]);

  useEffect(() => {
    if (step === 1 && session) {
      generateQRCode();
    }
  }, [step, session]);

  const generateQRCode = async () => {
    try {
      const response = await fetch('/api/auth/2fa/setup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      const data = await response.json();
      
      if (response.ok) {
        setSecret(data.secret);
        const qrCodeUrl = await QRCode.toDataURL(data.otpAuthUrl);
        setQrCode(qrCodeUrl);
      } else {
        setError(data.error || 'Failed to generate QR code');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    }
  };

  const verifyCode = async () => {
    if (!verificationCode || verificationCode.length !== 6) {
      setError('Please enter a 6-digit code');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/2fa/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          token: verificationCode,
          secret: secret
        })
      });

      const data = await response.json();

      if (response.ok) {
        setBackupCodes(data.backupCodes);
        setStep(3);
      } else {
        setError(data.error || 'Invalid verification code');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const downloadBackupCodes = () => {
    const content = `OneLastAI - 2FA Backup Codes\nGenerated: ${new Date().toLocaleString()}\n\n${backupCodes.join('\n')}\n\nKeep these codes safe! Each can only be used once.`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'onelastai-backup-codes.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  if (status === 'loading') {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Two-Factor Authentication Setup - OneLastAI</title>
        <meta name="description" content="Set up 2FA for your OneLastAI account" />
      </Head>

      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Two-Factor Authentication</h1>
              <p className="text-gray-600 mt-2">Secure your account with 2FA</p>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-4">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>1</div>
                <div className="w-16 h-1 bg-gray-200"></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>2</div>
                <div className="w-16 h-1 bg-gray-200"></div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>3</div>
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-6">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            {/* Step 1: Scan QR Code */}
            {step === 1 && (
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">Step 1: Scan QR Code</h2>
                <p className="text-gray-600 mb-6">
                  Use an authenticator app like Google Authenticator or Authy to scan this QR code:
                </p>
                
                {qrCode && (
                  <div className="mb-6">
                    <img src={qrCode} alt="2FA QR Code" className="mx-auto" />
                  </div>
                )}

                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <p className="text-sm text-gray-600 mb-2">Can't scan? Enter this code manually:</p>
                  <code className="text-sm font-mono bg-white px-2 py-1 rounded border">{secret}</code>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
                >
                  Next: Verify Code
                </button>
              </div>
            )}

            {/* Step 2: Verify Code */}
            {step === 2 && (
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-4">Step 2: Verify Code</h2>
                <p className="text-gray-600 mb-6">
                  Enter the 6-digit code from your authenticator app:
                </p>

                <div className="max-w-xs mx-auto mb-6">
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full px-4 py-3 text-center text-2xl font-mono border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    placeholder="000000"
                    maxLength={6}
                  />
                </div>

                <div className="space-x-4">
                  <button
                    onClick={() => setStep(1)}
                    className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-400"
                  >
                    Back
                  </button>
                  <button
                    onClick={verifyCode}
                    disabled={loading || verificationCode.length !== 6}
                    className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 disabled:opacity-50"
                  >
                    {loading ? 'Verifying...' : 'Verify & Enable 2FA'}
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Backup Codes */}
            {step === 3 && (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h2 className="text-xl font-semibold mb-4">2FA Enabled Successfully!</h2>
                <p className="text-gray-600 mb-6">
                  Save these backup codes in a safe place. Each code can only be used once.
                </p>

                <div className="bg-gray-50 p-6 rounded-md mb-6">
                  <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
                    {backupCodes.map((code, index) => (
                      <div key={index} className="font-mono text-sm bg-white p-2 rounded border">
                        {code}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-x-4">
                  <button
                    onClick={downloadBackupCodes}
                    className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700"
                  >
                    Download Codes
                  </button>
                  <button
                    onClick={() => router.push('/user-account')}
                    className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
                  >
                    Go to Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
