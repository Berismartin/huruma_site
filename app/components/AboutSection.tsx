'use client';

import { useEffect, useState } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import TypewriterText from './TypewriterText';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const { elementRef: titleRef, textReveal } = useGSAPScroll<HTMLHeadingElement>();
  const { elementRef: contentRef, fadeInLeft } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: imageRef, fadeInRight } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: valuesRef, staggerChildren } = useGSAPScroll<HTMLDivElement>();

  const toggleCard = (id: number) => {
    setExpandedCards(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    // Faster animations with shorter delays
    textReveal(0.3); // Reduced from 0.5 to 0.3 seconds
    fadeInLeft(0.4, 0.6); // Reduced delay from 0.8 to 0.4, duration from 1.2 to 0.6
    fadeInRight(0.5, 0.6); // Reduced delay from 1.0 to 0.5, duration from 1.2 to 0.6
    staggerChildren(0.08, 0.15); // Reduced stagger from 0.15 to 0.08, duration from 1.5 to 0.15
  }, [textReveal, fadeInLeft, fadeInRight, staggerChildren]);

  const values = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ),
      title: "Compassion",
      shortDescription: "Deep empathy drives our mission to help those in need.",
      longDescription: "We respond with genuine care and dedicated action to foster hope and make a tangible difference in the lives of those we serve. Our compassion extends beyond sympathy to active engagement in creating positive change."
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      title: "Integrity",
      shortDescription: "Honest, transparent, and ethical in all our actions.",
      longDescription: "We uphold the highest ethical standards in all we do. Transparency, accountability, and honesty ensure that every contribution is utilized effectively and responsibly to achieve our mission."
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      title: "Dignity",
      shortDescription: "Every individual has inherent worth and deserves respect.",
      longDescription: "Our programs empower men, women, and children to lead dignified lives, building self-reliance and enabling them to shape their own prosperous futures. We treat everyone with the respect they deserve."
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: "Respect",
      shortDescription: "We deeply respect local knowledge and cultures.",
      longDescription: "We deeply respect the local knowledge, cultures, and aspirations of the communities we serve. Our initiatives are collaborative, culturally sensitive, and inclusive, valuing every individual's unique contribution."
    },
    {
      id: 5,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H17c-.8 0-1.54.37-2.01 1l-4.7 6.3c-.33.44-.49.98-.49 1.53V20c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2zM12.5 11.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5S11 9.17 11 10s.67 1.5 1.5 1.5zM5.5 6c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zm2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6.5h1.5V22h4z"/>
        </svg>
      ),
      title: "Service",
      shortDescription: "Our dedication is to actively serve those in need.",
      longDescription: "We provide essential resources, education, and opportunities to overcome poverty, focusing on long-term impact and a more equitable future for all. Our service is driven by genuine commitment to community transformation."
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
              delay={200}
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
              <Link href={'/our-work'} className="bg-[#4e8046] hover:bg-[#002b4a] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Learn More
              </Link>
              <Link href={'/about'} className="border-2 border-[#4e8046] text-[#4e8046] hover:bg-[#4e8046] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200">
                Our Story
              </Link>
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
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide every program, interaction, and decision we make.
          </p>
        </div>

        <div 
          ref={valuesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {values.map((value, index) => (
            <div
              key={value.id}
              className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-all duration-300 relative overflow-hidden group transform hover:-translate-y-1 hover:shadow-lg"
            >
               <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                <div className="absolute top-2 right-2 w-6 h-6 bg-[#4e8046] rounded-full"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-[#4f9aa9] rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-4">
                  <div className="p-2 rounded-full bg-[#4e8046]/10 text-[#4e8046] group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#4e8046] transition-colors duration-300">
                  {value.title}
                </h4>
                                 <div className="space-y-3">
                   <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm leading-relaxed">
                     {value.shortDescription}
                   </p>
                   
                                       <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        expandedCards.includes(value.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-gray-600 text-sm leading-relaxed transform transition-transform duration-500 ease-in-out">
                        {value.longDescription}
                      </p>
                    </div>
                   
                   <button
                     onClick={() => toggleCard(value.id)}
                     className={`text-xs font-medium transition-all duration-300 ${
                       expandedCards.includes(value.id)
                         ? 'text-[#002b4a] hover:text-[#4e8046]'
                         : 'text-[#4e8046] hover:text-[#002b4a]'
                     } underline decoration-dotted underline-offset-4 hover:decoration-solid`}
                   >
                     {expandedCards.includes(value.id) ? 'Read Less' : 'Read More'}
                   </button>
                 </div>
              </div>
            </div>
          ))}
        </div>

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