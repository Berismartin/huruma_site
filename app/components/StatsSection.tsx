'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import AnimatedCounter from './ui/AnimatedCounter';

export default function StatsSection() {
  const { elementRef: titleRef, fadeInUp } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: statsRef, staggerChildren } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    // Faster animations
    fadeInUp(0, 0.5);
    staggerChildren(0.1, 0.3);
  }, [fadeInUp, staggerChildren]);

  const stats = [
    {
      number: 175,
      suffix: "+",
      label: "Students Supported",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      )
    },
    {
      number: 11,
      suffix: "",
      label: "Dedicated Teachers",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      )
    },
    {
      number: 5,
      suffix: "",
      label: "Years of Impact",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      number: 1000,
      suffix: "+",
      label: "Lives Touched",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#4e8046] to-[#4f9aa9] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div 
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 loading-fast">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real change, measurable results, and lasting impact in the communities we serve.
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <div className="flex justify-center mb-4">
                  <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2" style={{
                      fontSize: '2rem',
                      fontWeight: 'bold',
                      color: 'white',
                      textShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                    }}>
                  <AnimatedCounter 
                    end={stat.number} 
                    duration={2}
                    suffix={stat.suffix}
                  />
                </div>
                <div className="text-white/90 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 