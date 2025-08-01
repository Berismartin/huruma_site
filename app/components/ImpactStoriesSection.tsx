'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import Image from 'next/image';

export default function ImpactStoriesSection() {
  const { elementRef: titleRef, fadeInUp } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: storiesRef, staggerChildren } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    // Faster animations
    fadeInUp(0, 0.5);
    staggerChildren(0.1, 0.3);
  }, [fadeInUp, staggerChildren]);

  const stories = [
    {
      name: "Sarah Nakimera",
      role: "Student",
      story: "Thanks to Huruma's education program, I can now read and write. I dream of becoming a teacher to help other children like me.",
      image: "/images/IMG_0314.webp"
    },
    {
      name: "John Muwonge",
      role: "Community Leader",
      story: "The economic empowerment program has transformed our village. We now have sustainable income sources and better living conditions.",
      image: "/images/IMG_0316.webp"
    },
    {
      name: "Maria Nalukenge",
      role: "Parent",
      story: "My children are getting quality education that I never had. This gives me hope for their future and our community's development.",
      image: "/images/IMG_0318.webp"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#4e8046]/3 rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#4f9aa9]/3 rounded-full translate-x-24 translate-y-24"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div 
          ref={titleRef}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Impact Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people whose lives have been transformed through our programs.
          </p>
        </div>

        {/* Stories Grid */}
        <div 
          ref={storiesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={story.image}
                    alt={story.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{story.name}</h3>
                  <p className="text-[#4e8046] text-sm">{story.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">
                "{story.story}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 