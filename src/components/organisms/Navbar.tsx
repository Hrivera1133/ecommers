'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useCartStore } from '@/stores/cartStore';
import { Badge } from '@/components/atoms/Badge';

export const Navbar: React.FC = () => {
  const totalItems = useCartStore((state) => state.totalItems());
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch for persisted store
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-black tracking-tighter text-black">
              ECOMMERS.
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
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
          </div>
        </div>
      </div>
    </nav>
  );
};
