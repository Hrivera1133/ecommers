import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/organisms/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ecommers | Premium Catalog',
  description: 'A high-performance e-commerce catalog built with Next.js 14',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-50 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-white border-t border-zinc-200 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-zinc-500 text-sm">
            &copy; 2026 Ecommers Store. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
