'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

interface CoreValue {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: React.ReactNode;
  color: string;
}

const coreValues: CoreValue[] = [
  {
    id: 1,
    title: "Compassion",
    shortDescription: "Deep empathy for those facing poverty and educational challenges drives us.",
    longDescription: "We respond with genuine care and dedicated action to foster hope and make a tangible difference in the lives of those we serve.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    color: "#4e8046"
  },
  {
    id: 2,
    title: "Integrity",
    shortDescription: "We uphold the highest ethical standards in all we do.",
    longDescription: "Transparency, accountability, and honesty ensure that every contribution is utilized effectively and responsibly to achieve our mission.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    color: "#4f9aa9"
  },
  {
    id: 3,
    title: "Dignity",
    shortDescription: "Every individual has inherent worth and deserves respect.",
    longDescription: "Our programs empower men, women, and children to lead dignified lives, building self-reliance and enabling them to shape their own prosperous futures.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
      </svg>
    ),
    color: "#002b4a"
  },
  {
    id: 4,
    title: "Service",
    shortDescription: "Our dedication is to actively serve those in need.",
    longDescription: "We provide essential resources, education, and opportunities to overcome poverty, focusing on long-term impact and a more equitable future for all.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.3c-.33.44-.49.98-.49 1.53V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6.5h1.5V22h4z"/>
      </svg>
    ),
    color: "#4e8046"
  }
];

export default function CoreValuesSection() {
  const { elementRef: titleRef, fadeInUp } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: valuesRef, staggerChildren } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    // Faster animations with shorter delays
    fadeInUp(0, 0.6); // Reduced from 1 to 0.6 seconds
    staggerChildren(0.1, 0.2); // Reduced stagger from 0.2 to 0.1, duration from 0.3 to 0.2
  }, [fadeInUp, staggerChildren]);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#4e8046]/3 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#4f9aa9]/3 rounded-full translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#002b4a]/3 rounded-full -translate-x-28 translate-y-28"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#4e8046]/3 rounded-full translate-x-20 translate-y-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div 
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These principles guide every program, interaction, and decision we make.
          </p>
        </div>

        {/* Core Values Grid */}
        <div 
          ref={valuesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {coreValues.map((value, index) => (
            <div
              key={value.id}
              className="group relative bg-white rounded-lg p-6 text-center hover:bg-gray-100 transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {/* Value Card Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className="absolute top-2 right-2 w-6 h-6 bg-[#4e8046] rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-[#4f9aa9] rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div 
                    className="p-3 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                    style={{ backgroundColor: `${value.color}20` }}
                  >
                    <div style={{ color: value.color }}>
                      {value.icon}
                    </div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#4e8046] transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {value.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 