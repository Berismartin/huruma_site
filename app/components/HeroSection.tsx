'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import TypewriterText from './TypewriterText';

export default function HeroSection() {
  const { elementRef: titleRef, textReveal } = useGSAPScroll<HTMLHeadingElement>();
  const { elementRef: subtitleRef, fadeInUp } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: ctaRef, fadeInUp: ctaFadeIn } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    // Faster, more immediate animations
    textReveal(0.2);
    fadeInUp(0.3, 0.5);
    ctaFadeIn(0.4, 0.5);
  }, [textReveal, fadeInUp, ctaFadeIn]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4e8046] via-[#4f9aa9] to-[#002b4a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div 
          ref={titleRef}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
            <span className="font-dancing-script text-[#4e8046]">Huruma</span>
            <br />
            <span className="text-white">Global Support</span>
          </h1>
        </div>

        <div 
          ref={subtitleRef}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-white/90 mb-6">
            <TypewriterText 
              text="Empowering communities through education and sustainable development"
              speed={60}
              delay={100}
              className="font-dancing-script"
            />
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Transforming lives in marginalized communities through innovative programs, 
            education, and economic empowerment initiatives.
          </p>
        </div>

        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-white text-[#4e8046] hover:bg-[#4e8046] hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Get Involved
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-[#4e8046] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 