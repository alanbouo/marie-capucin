'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isRomansOpen, setIsRomansOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <header className="py-6 px-8 flex justify-between items-center max-w-6xl mx-auto">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Marie Capucin"
          width={180}
          height={60}
          className="h-16 w-auto"
          priority
        />
      </Link>
      
      <nav className="flex gap-8 text-sm">
        <div 
          className="relative"
          onMouseEnter={() => setIsAboutOpen(true)}
          onMouseLeave={() => setIsAboutOpen(false)}
        >
          <Link href="/qui-est-marie-capucin" className="hover:text-emerald-500 flex items-center gap-1">
            Qui est Marie Capucin ?
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          {isAboutOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50">
              <Link href="/qui-est-marie-capucin" className="block px-4 py-2 hover:bg-gray-100">
                Biographie
              </Link>
              <Link href="/blog" className="block px-4 py-2 hover:bg-gray-100">
                Blog / Podcast
              </Link>
            </div>
          )}
        </div>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsRomansOpen(true)}
          onMouseLeave={() => setIsRomansOpen(false)}
        >
          <Link href="/romans" className="hover:text-emerald-500 flex items-center gap-1">
            Romans
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          {isRomansOpen && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 min-w-[200px] z-50">
              <Link href="/romans/je-te-hais" className="block px-4 py-2 hover:bg-gray-100">
                Je te hais
              </Link>
              <Link href="/romans/tu-ne-seras-pas" className="block px-4 py-2 hover:bg-gray-100">
                Tu ne seras pas
              </Link>
              <Link href="/romans/le-costume-de-soi" className="block px-4 py-2 hover:bg-gray-100">
                Le Costume de Soi
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
