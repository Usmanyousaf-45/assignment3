// src/app/layout.tsx
import './globals.css';
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Simple Website',
  description: 'A basic Next.js 15 website',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-blue-600 text-white p-4 flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main className="p-8 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
