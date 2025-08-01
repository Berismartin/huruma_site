'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

export default function WhatWeDoSection() {
  const { elementRef: titleRef, fadeInUp } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: servicesRef, staggerChildren } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    // Faster animations
    fadeInUp(0, 0.5);
    staggerChildren(0.1, 0.3);
  }, [fadeInUp, staggerChildren]);

  const services = [
    {
      title: "Education Programs",
      description: "Providing quality education and learning resources to children in marginalized communities.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
        </svg>
      ),
      color: "#4e8046"
    },
    {
      title: "Economic Empowerment",
      description: "Supporting sustainable livelihoods through skills training and micro-enterprise development.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      color: "#4f9aa9"
    },
    {
      title: "Community Development",
      description: "Building stronger communities through infrastructure projects and social programs.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      color: "#002b4a"
    },
    {
      title: "Health & Wellness",
      description: "Promoting health awareness and providing access to basic healthcare services.",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      color: "#4e8046"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4e8046]/3 rounded-full translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4f9aa9]/3 rounded-full -translate-x-24 translate-y-24"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div 
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to community development and empowerment.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">
                <div 
                  className="p-4 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <div style={{ color: service.color }}>
                    {service.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#4e8046] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 