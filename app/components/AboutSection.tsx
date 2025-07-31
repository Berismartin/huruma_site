'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import TypewriterText from './TypewriterText';
import Image from 'next/image';

export default function AboutSection() {
  const { elementRef: titleRef, textReveal } = useGSAPScroll<HTMLHeadingElement>();
  const { elementRef: contentRef, fadeInLeft } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: imageRef, fadeInRight } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: valuesRef, staggerChildren } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    textReveal(0.5);
    fadeInLeft(0.8, 1.2);
    fadeInRight(1.0, 1.2);
    staggerChildren(0.15, 1.5);
  }, [textReveal, fadeInLeft, fadeInRight, staggerChildren]);

  const values = [
    {
      icon: "❤️",
      title: "Compassion",
      description: "Deep empathy for those facing poverty and educational challenges drives us."
    },
    {
      icon: "⚖️",
      title: "Integrity",
      description: "We uphold the highest ethical standards in all we do."
    },
    {
      icon: "👑",
      title: "Dignity",
      description: "Every individual has inherent worth and deserves respect."
    },
    {
      icon: "🤝",
      title: "Service",
      description: "Our dedication is to actively serve those in need."
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Parallax Background Layer */}
      <div 
        className="absolute inset-0 parallax-bg parallax-bg--slow opacity-10"
        style={{
          backgroundImage: 'url(/images/IMG_0343.webp)',
          filter: 'brightness(0.8) saturate(0.5)',
        }}
      ></div>
      
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Organic Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#4e8046]/3 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#4f9aa9]/3 rounded-full translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#002b4a]/3 rounded-full -translate-x-28 translate-y-28"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#4e8046]/3 rounded-full translate-x-20 translate-y-20"></div>
        
        {/* Medium Shapes */}
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-[#4f9aa9]/5 rounded-full"></div>
        <div className="absolute top-2/3 right-1/4 w-16 h-16 bg-[#4e8046]/5 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-[#002b4a]/5 rounded-full"></div>
        
        {/* Small Accent Shapes */}
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-[#4e8046]/8 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-[#4f9aa9]/8 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#002b4a]/8 rounded-full transform -translate-x-2 -translate-y-2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            <span className="text-[#4e8046] font-dancing-script">About Our Foundation</span>
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#002b4a] mb-6">
            <TypewriterText 
              text="We are on a mission to uplift marginalized communities"
              speed={80}
              delay={500}
              className="font-dancing-script"
            />
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A dynamic social enterprise committed to transforming lives in marginalized communities through education, 
            economic empowerment, and sustainable development.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Text Content */}
          <div ref={contentRef}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At Huruma Global Support Initiative Limited, we create positive, lasting change by equipping men, women, and children with the resources, education, and opportunities they need to break the cycle of poverty and build brighter futures — together.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Our work is deeply rooted in the principles of long-term sustainability and is guided by the United Nations Sustainable Development Goals (SDGs), with a strong focus on SDG 1: No Poverty and SDG 4: Quality Education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#4e8046] hover:bg-[#002b4a] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Learn More
              </button>
              <button className="border-2 border-[#4e8046] text-[#4e8046] hover:bg-[#4e8046] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Our Story
              </button>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images/IMG_0319.webp"
                alt="Huruma Global Support Initiative"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#4e8046]">175+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 bg-[#4e8046] text-white rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">11</div>
                <div className="text-sm opacity-90">Teachers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        {/* <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide every program, interaction, and decision we make.
          </p>
        </div> */}

        {/* <div 
          ref={valuesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-300 relative overflow-hidden group"
            >
               <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className="absolute top-2 right-2 w-6 h-6 bg-[#4e8046] rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-[#4f9aa9] rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Vision Statement */}
        <div className="mt-20 bg-gradient-to-r from-[#002b4a] to-[#4f9aa9] rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          {/* Vision Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
            <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full"></div>
            <div className="absolute bottom-4 left-8 w-14 h-14 bg-white rounded-full"></div>
            <div className="absolute bottom-8 right-4 w-10 h-10 bg-white rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Our Vision
            </h3>
            <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
              We envision a world where the cycle of poverty is decisively broken, and brighter futures are a reality for all. 
              We dream of a future where every individual—every man, woman, boy, and girl—regardless of their starting point, 
              has the genuine opportunity to thrive, empowered by education, dignity, and unwavering hope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 