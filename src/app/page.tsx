// src/app/page.tsx
import Image from 'next/image';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Usman Website</h1>
      <p className="mb-4">This is the home page of a simple Next.js site which i build.</p>
      <Image
        src="/jia.jpg" // Place your image in `public/hero.jpg`
        alt="Hero Image"
        width={800}
        height={400}
        className="rounded shadow-lg"
      />
    </div>
  );
};

export default HomePage;
