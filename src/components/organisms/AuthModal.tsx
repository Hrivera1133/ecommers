'use client';

import React, { useState } from 'react';
import { Modal } from '@/components/atoms/Modal';
import { Button } from '@/components/atoms/Button';
import { useAuthStore } from '@/stores/authStore';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { status, login, verify2FA } = useAuthStore();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const isLoggingIn = status === 'logging_in';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(email);
    } catch {
      setError('Something went wrong. Please try again.');
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await verify2FA(code);
      onClose();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred');
      }
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={status === 'awaiting_2fa' ? 'Verify Identity' : 'Welcome Back'}
    >
      {status === 'awaiting_2fa' ? (
        <form onSubmit={handleVerify} className="space-y-4">
          <p className="text-sm text-zinc-600 mb-4">
            We&apos;ve sent a 6-digit code to your email. Enter it below to
            continue.
          </p>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Verification Code
            </label>
            <input
              type="text"
              maxLength={6}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="123456"
              className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
              required
            />
          </div>
          {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
          <Button fullWidth type="submit" disabled={isLoggingIn}>
            {isLoggingIn ? 'Verifying...' : 'Verify & Sign In'}
          </Button>
        </form>
      ) : (
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 py-2 border border-zinc-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
              required
            />
          </div>
          {error && <p className="text-xs text-red-600 font-medium">{error}</p>}
          <Button fullWidth type="submit" disabled={isLoggingIn}>
            {isLoggingIn ? 'Sending code...' : 'Continue with Email'}
          </Button>
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-zinc-400">Demo Mode</span>
            </div>
          </div>
          <p className="text-xs text-center text-zinc-500">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </form>
      )}
    </Modal>
  );
};
