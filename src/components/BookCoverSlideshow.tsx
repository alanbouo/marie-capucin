'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface BookCoverSlideshowProps {
  frontCover: string;
  backCover: string;
  alt: string;
}

export default function BookCoverSlideshow({ frontCover, backCover, alt }: BookCoverSlideshowProps) {
  const [showFront, setShowFront] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFront((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-xl">
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          showFront ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src={frontCover}
          alt={`${alt} - Couverture`}
          fill
          className="object-contain"
        />
      </div>
      <div
        className={`absolute inset-0 transition-opacity duration-700 ${
          showFront ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Image
          src={backCover}
          alt={`${alt} - 4ème de couverture`}
          fill
          className="object-contain"
        />
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <button
          onClick={() => setShowFront(true)}
          className={`w-2 h-2 rounded-full transition-colors ${
            showFront ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label="Voir la couverture"
        />
        <button
          onClick={() => setShowFront(false)}
          className={`w-2 h-2 rounded-full transition-colors ${
            !showFront ? 'bg-white' : 'bg-white/50'
          }`}
          aria-label="Voir la 4ème de couverture"
        />
      </div>
    </div>
  );
}
