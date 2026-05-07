'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/stores/cartStore';
import { useAuthStore } from '@/stores/authStore';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';
import { AuthModal } from '@/components/organisms/AuthModal';

export const Navbar: React.FC = () => {
  const totalItems = useCartStore((state) => state.totalItems());
  const { user, logout } = useAuthStore();
  const [mounted, setMounted] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-black tracking-tighter text-black">
                ECOMMERS.
              </Link>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-black transition-colors">
                Catalog
              </Link>
              <Link href="/cart" className="relative group p-2">
                <span className="text-sm font-medium text-zinc-600 group-hover:text-black transition-colors">
                  Cart
                </span>
                {mounted && totalItems > 0 && (
                  <span className="absolute -top-1 -right-1">
                    <Badge variant="error">{totalItems}</Badge>
                  </span>
                )}
              </Link>

              {mounted && user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-semibold text-black">Hi, {user.name.split(' ')[0]}</span>
                  <button 
                    onClick={logout}
                    className="text-xs font-bold text-zinc-400 hover:text-red-600 transition-colors uppercase tracking-widest"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Button 
                  variant="secondary" 
                  size="sm" 
                  onClick={() => setIsAuthOpen(true)}
                >
                  Sign In
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </>
  );
};
