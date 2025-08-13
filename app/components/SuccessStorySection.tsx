'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import Image from 'next/image';
import Link from 'next/link';

export default function SuccessStorySection() {
  const { elementRef: contentRef, fadeInLeft } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: imageRef, fadeInRight } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    fadeInLeft(0, 1);
    fadeInRight(0.3, 1);
  }, [fadeInLeft, fadeInRight]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 parallax-bg parallax-bg--slow"
        style={{
          backgroundImage: 'url(/images/IMG_0319.webp)',
          filter: 'brightness(0.3) saturate(1.2)',
        }}
      ></div>
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4e8046]/80 to-[#4f9aa9]/80"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full translate-x-40 translate-y-40"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/3 rounded-full transform -translate-x-32 -translate-y-32"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/images2/IMG_3589.jpg"
                alt="Children receiving educational materials at Murambo School"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#4e8046] text-white rounded-lg p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold">15</div>
                <div className="text-sm opacity-90">Students Helped</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div ref={contentRef} className="text-white">
            <div className="bg-[#4e8046] rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full"></div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-white rounded-full"></div>
                <div className="absolute bottom-4 left-8 w-14 h-14 bg-white rounded-full"></div>
                <div className="absolute bottom-8 right-4 w-10 h-10 bg-white rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                {/* Category Tag */}
                <div className="text-[#4e8046] bg-white/20 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block mb-6">
                  Success Stories
                </div>

                {/* Main Headline */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  Education Is Life.<br />
                  We Successfully Provide<br />
                  Learning Materials in Uganda
                </h2>

                {/* Description */}
                <p className="text-lg mb-6 opacity-90 leading-relaxed">
                  Our "A Bright Future Begins with a Book" campaign at Murambo Catholic Nursery and Primary School 
                  provided essential PLE materials to 15 students, bringing hope and renewed determination to children 
                  in a community where education often remains an unreachable dream.
                </p>

                {/* Achievement Highlight */}
                <div className="bg-white/10 rounded-lg p-4 mb-8">
                  <div className="text-2xl font-bold mb-2">We have helped 175+ students</div>
                  <div className="text-sm opacity-80">Across multiple schools in Uganda</div>
                </div>

                {/* Call to Action Button */}
                <Link 
                  href="/full-story" 
                  className="inline-block bg-white text-[#4e8046] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 uppercase tracking-wide"
                >
                  Read The Full Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 