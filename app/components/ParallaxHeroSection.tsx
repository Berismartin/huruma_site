'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

export default function ParallaxHeroSection() {
  const { elementRef: contentRef, fadeInUp } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    fadeInUp(0, 1);
  }, [fadeInUp]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 parallax-bg parallax-bg--deep" 
        style={{
          backgroundImage: 'url(/images/IMG_0319.webp)',
          filter: 'brightness(0.2) saturate(1.5)',
        }}
      ></div>
      
      {/* Middle Parallax Layer */}
      <div className="absolute inset-0 parallax-bg parallax-bg--medium"
        style={{
          backgroundImage: 'url(/images/IMG_0335.webp)',
          filter: 'brightness(0.4) saturate(1.3)',
          mixBlendMode: 'overlay',
        }}
      ></div>
      
      {/* Foreground Parallax Layer */}
      <div className="absolute inset-0 parallax-bg parallax-bg--fast"
        style={{
          backgroundImage: 'url(/images/IMG_0341.webp)',
          filter: 'brightness(0.6) saturate(1.1)',
          mixBlendMode: 'soft-light',
        }}
      ></div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4e8046]/20 to-[#4e8046]/60"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#002b4a]/40 via-transparent to-[#4f9aa9]/40"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-sm animate-float"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-[#4f9aa9]/20 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-[#4e8046]/20 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/10 rounded-full blur-sm animate-float" style={{ animationDelay: '3s' }}></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div 
          ref={contentRef}
          className="text-center text-white px-4 max-w-6xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block text-[#4e8046]">Huruma</span>
            <span className="block">Global Support</span>
            <span className="block">Initiative</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 max-w-4xl mx-auto leading-relaxed">
            Empowering communities through education, economic development, and sustainable change in Uganda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-[#4e8046] hover:bg-[#002b4a] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Learn More
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#4e8046] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105">
              Donate Now
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 