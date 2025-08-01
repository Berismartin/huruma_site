'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

export default function MissionVisionSection() {
  const { elementRef: titleRef, fadeInUp } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: missionRef, fadeInLeft } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: visionRef, fadeInRight } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    // Faster animations
    fadeInUp(0, 0.5);
    fadeInLeft(0.2, 0.5);
    fadeInRight(0.3, 0.5);
  }, [fadeInUp, fadeInLeft, fadeInRight]);

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#4e8046]/5 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#4f9aa9]/5 rounded-full translate-x-24 translate-y-24"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div 
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving positive change through sustainable development and community empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div 
            ref={missionRef}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#4e8046] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To create positive, lasting change by equipping men, women, and children with the resources, 
              education, and opportunities they need to break the cycle of poverty and build brighter futures — together.
            </p>
          </div>

          {/* Vision */}
          <div 
            ref={visionRef}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#4f9aa9] rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              A world where the cycle of poverty is decisively broken, and brighter futures are a reality for all. 
              Every individual has the genuine opportunity to thrive, empowered by education, dignity, and unwavering hope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 