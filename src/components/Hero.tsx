'use client';

import { useState, useEffect } from 'react';

const images = [
  '/exterior.jpg',
  '/interior01.jpg',
  '/interior02.jpg',
  '/interior03.jpg'
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // 5 second intervals

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden flex justify-center items-center">
      {/* Background Images with staggered animations */}
      {images.map((image, index) => {
        const isActive = index === currentImageIndex;

        let opacity = 'opacity-0';
        let zIndex = 'z-0';

        if (isActive) {
          opacity = 'opacity-100';
          zIndex = 'z-10';
        }

        return (
          <div
            key={`${index}-${currentImageIndex}`} // Key change forces remount and animation restart
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1500 ${opacity} ${zIndex}`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('${image}')`,
              animation: isActive ? 'kenBurnsSmooth 7s ease-out forwards' : 'none',
            }}
          />
        );
      })}

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-slate-50 mb-6">
          Scéal eile
        </h1>
        <h2 className="text-1xl md:text-3xl font-thin text-slate-50 mb-6">
          Your Local Pub in Ryogoku
        </h2>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Smooth Ken Burns Effect */}
      <style jsx>{`
        @keyframes kenBurnsSmooth {
          0% {
            transform: scale(1.02);
          }
          100% {
            transform: scale(1.12);
          }
        }
      `}</style>
    </section>
  );
}
