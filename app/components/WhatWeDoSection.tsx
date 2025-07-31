'use client';

import { useEffect, useState } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isHighlighted?: boolean;
}

const services: Service[] = [
  {
    id: 1,
    title: "Economic Empowerment",
    description: "We empower men and women to build sustainable livelihoods by providing peer-to-peer mentorship, hands-on vocational training, and comprehensive business development support — unlocking opportunities for lasting success.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m4.5-9.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5m-7 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5Z"/>
      </svg>
    ),
    isHighlighted: false
  },
  {
    id: 2,
    title: "Quality Education",
    description: "Enhancing access to quality education for all children through our PLE Empowerment Project, peer-funding models, and holistic support programs.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3L1 9l11 6l9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82Z"/>
      </svg>
    ),
    isHighlighted: true
  },
  {
    id: 3,
    title: "Community Development",
    description: "Strengthening communities through infrastructure improvement including clean water systems, sanitation facilities, and renewable energy solutions.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-3.7 4.9c-.36.47-.56 1.05-.56 1.66V20h-2v-5.44c0-.61-.2-1.19-.56-1.66L8.01 9A2.5 2.5 0 0 0 6 8H5.46c-.8 0-1.54.37-2.01 1L.95 16.63A1.5 1.5 0 0 0 2.5 18H5v6h2v-6h1v6h2v-6h1v6h2v-6h1v6h2Z"/>
      </svg>
    ),
    isHighlighted: false
  }
];

// Animated Arc Component
const AnimatedArc = ({ isHovered, color }: { isHovered: boolean; color: string }) => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 Q50,50 100,0"
          fill="none"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.6"
          className={`transition-all duration-700 ${
            isHovered ? 'animate-pulse' : ''
          }`}
          style={{
            strokeDasharray: '100',
            strokeDashoffset: isHovered ? '0' : '100',
            transition: 'stroke-dashoffset 0.8s ease-in-out',
          }}
        />
        <path
          d="M100,100 Q50,50 0,100"
          fill="none"
          stroke={color}
          strokeWidth="0.5"
          opacity="0.4"
          className={`transition-all duration-700 ${
            isHovered ? 'animate-pulse' : ''
          }`}
          style={{
            strokeDasharray: '100',
            strokeDashoffset: isHovered ? '0' : '100',
            transition: 'stroke-dashoffset 0.8s ease-in-out 0.2s',
          }}
        />
      </svg>
    </div>
  );
};

// Service Card Component
const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-lg p-6 transition-all duration-500 cursor-pointer group ${
        service.isHighlighted 
          ? 'bg-[#4e8046] text-white' 
          : 'bg-white text-gray-900 border border-gray-100'
      } ${
        isHovered ? 'scale-105 shadow-2xl z-10' : 'hover:shadow-xl'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'scale(1.05) translateY(-8px)' : 'scale(1) translateY(0px)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Animated Arc Background */}
      <AnimatedArc 
        isHovered={isHovered} 
        color={service.isHighlighted ? '#ffffff' : '#4e8046'} 
      />
      
      {/* Animated Background Gradient */}
      <div 
        className={`absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 ${
          service.isHighlighted 
            ? 'bg-gradient-to-br from-[#5a9152] to-[#4e8046]' 
            : 'bg-gradient-to-br from-[#4e8046]/10 to-[#4f9aa9]/10'
        }`}
        style={{
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon and Title Row */}
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={`flex-shrink-0 p-3 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 ${
            service.isHighlighted 
              ? 'bg-white text-[#4e8046]' 
              : 'bg-[#4e8046] text-white'
          } ${
            isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'
          }`}>
            {service.icon}
          </div>

          {/* Title and Description */}
          <div className="flex-1">
            <h4 className={`text-xl font-semibold mb-3 transition-colors duration-300 ${
              service.isHighlighted ? 'text-white' : 'text-[#002b4a]'
            }`}>
              {service.title}
            </h4>

            <p className={`text-sm leading-relaxed transition-colors duration-300 ${
              service.isHighlighted ? 'text-white opacity-90' : 'text-gray-600'
            }`}>
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className={`absolute top-2 right-2 w-2 h-2 rounded-full transition-all duration-500 ${
        service.isHighlighted ? 'bg-white/30' : 'bg-[#4e8046]/30'
      } ${
        isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-50'
      }`} />
      <div className={`absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full transition-all duration-500 ${
        service.isHighlighted ? 'bg-white/20' : 'bg-[#4f9aa9]/20'
      } ${
        isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-30'
      }`} />
    </div>
  );
};

export default function WhatWeDoSection() {
  const { elementRef: titleRef, fadeInUp } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: imageRef, fadeInLeft } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: servicesRef, staggerChildren } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    fadeInUp(0, 1);
    fadeInLeft(0.3, 1);
    staggerChildren(0.2, 0.5);
  }, [fadeInUp, fadeInLeft, staggerChildren]);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#4e8046]/3 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#4f9aa9]/3 rounded-full translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#002b4a]/3 rounded-full -translate-x-28 translate-y-28"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#4e8046]/3 rounded-full translate-x-20 translate-y-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div 
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="text-[#4e8046] text-lg font-medium mb-4">
            What We Are Doing
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002b4a] mb-6">
            We are on a mission to uplift and empower<br />the most vulnerable
          </h3>
        </div>

        {/* Main Content - Image and Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div 
            ref={imageRef}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Slash Background */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="/images/bg-sss.png" 
                  alt="Background splash" 
                  className="w-full h-full object-cover opacity-50"
                />
              </div>
              
              <img 
                src="/images/P7_STUDENTS.png" 
                alt="P7 Students at Huruma Global Support Initiative" 
                className="relative z-10 w-full h-auto object-cover"
              />
              
              {/* Overlay gradient */}
              {/* <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#4e8046]/20 to-transparent"></div> */}
            </div>
            
            {/* Floating elements around the image */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#4e8046] rounded-full opacity-20 animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#4f9aa9] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-1/2 -right-6 w-4 h-4 bg-[#002b4a] rounded-full opacity-15 animate-ping"></div>
          </div>

          {/* Right Side - Services Cards */}
          <div 
            ref={servicesRef}
            className="space-y-6"
          >
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 