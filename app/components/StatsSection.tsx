'use client';

import { useEffect } from 'react';
import { useCounterAnimation } from '../hooks/useCounterAnimation';
import { Users, GraduationCap, Target, Heart } from 'lucide-react';

interface Stat {
  id: number;
  number: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const stats: Stat[] = [
  {
    id: 1,
    number: 175,
    suffix: '+',
    label: 'Students Supported',
    description: 'Children receiving educational materials and support',
    icon: <Users className="w-8 h-8" />
  },
  {
    id: 2,
    number: 11,
    suffix: '',
    label: 'Teachers Empowered',
    description: 'Educators receiving training and resources',
    icon: <GraduationCap className="w-8 h-8" />
  },
  {
    id: 3,
    number: 3,
    suffix: '',
    label: 'Strategic Pillars',
    description: 'Holistic approach to community development',
    icon: <Target className="w-8 h-8" />
  },
  {
    id: 4,
    number: 100,
    suffix: '%',
    label: 'Community Focused',
    description: 'Dedicated to sustainable local impact',
    icon: <Heart className="w-8 h-8" />
  }
];

export default function StatsSection() {
  // Counter animations for each stat
  const studentsCounter = useCounterAnimation({ end: 175, suffix: '+', delay: 200 });
  const teachersCounter = useCounterAnimation({ end: 11, delay: 400 });
  const pillarsCounter = useCounterAnimation({ end: 3, delay: 600 });
  const communityCounter = useCounterAnimation({ end: 100, suffix: '%', delay: 800 });

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      {/* Parallax Background Layer */}
      <div 
        className="absolute inset-0 parallax-bg parallax-bg--medium opacity-5"
        style={{
          backgroundImage: 'url(/images/IMG_0372.webp)',
          filter: 'brightness(0.9) saturate(0.3)',
        }}
      ></div>
      
      {/* Background Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large Circle */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#4e8046]/5 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-[#4f9aa9]/5 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-[#002b4a]/5 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#4e8046]/5 rounded-full"></div>
        
        {/* Small Dots */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#4f9aa9]/10 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#4e8046]/10 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#002b4a]/10 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-[#4f9aa9]/10 rounded-full"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-[#4e8046]/5 rotate-45"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 bg-[#002b4a]/5 rounded-full"></div>
        <div className="absolute bottom-1/2 left-1/4 w-8 h-8 bg-[#4f9aa9]/5 rotate-12"></div>
        <div className="absolute bottom-1/2 right-1/4 w-10 h-10 bg-[#4e8046]/5 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Through our dedicated work in marginalized communities, we've made measurable progress in education, 
            economic empowerment, and community development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Students Counter */}
          <div
            ref={studentsCounter.elementRef}
            className="bg-white rounded-lg p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <div className="absolute top-2 right-2 w-8 h-8 bg-[#4e8046] rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-[#4f9aa9] rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#4e8046]/10 rounded-full text-[#4e8046] group-hover:bg-[#4e8046]/20 transition-colors duration-300">
                  <Users className="w-8 h-8" />
                </div>
              </div>
              <div className="mb-4">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4e8046]">
                  {studentsCounter.displayValue}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Students Supported
              </h3>
              <p className="text-gray-600 text-sm">
                Children receiving educational materials and support
              </p>
            </div>
          </div>

          {/* Teachers Counter */}
          <div
            ref={teachersCounter.elementRef}
            className="bg-white rounded-lg p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <div className="absolute top-2 right-2 w-8 h-8 bg-[#4e8046] rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-[#4f9aa9] rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#4e8046]/10 rounded-full text-[#4e8046] group-hover:bg-[#4e8046]/20 transition-colors duration-300">
                  <GraduationCap className="w-8 h-8" />
                </div>
              </div>
              <div className="mb-4">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4e8046]">
                  {teachersCounter.displayValue}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Teachers Empowered
              </h3>
              <p className="text-gray-600 text-sm">
                Educators receiving training and resources
              </p>
            </div>
          </div>

          {/* Strategic Pillars Counter */}
          <div
            ref={pillarsCounter.elementRef}
            className="bg-white rounded-lg p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <div className="absolute top-2 right-2 w-8 h-8 bg-[#4e8046] rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-[#4f9aa9] rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#4e8046]/10 rounded-full text-[#4e8046] group-hover:bg-[#4e8046]/20 transition-colors duration-300">
                  <Target className="w-8 h-8" />
                </div>
              </div>
              <div className="mb-4">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4e8046]">
                  {pillarsCounter.displayValue}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Strategic Pillars
              </h3>
              <p className="text-gray-600 text-sm">
                Holistic approach to community development
              </p>
            </div>
          </div>

          {/* Community Focused Counter */}
          <div
            ref={communityCounter.elementRef}
            className="bg-white rounded-lg p-6 md:p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
              <div className="absolute top-2 right-2 w-8 h-8 bg-[#4e8046] rounded-full"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-[#4f9aa9] rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#4e8046]/10 rounded-full text-[#4e8046] group-hover:bg-[#4e8046]/20 transition-colors duration-300">
                  <Heart className="w-8 h-8" />
                </div>
              </div>
              <div className="mb-4">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4e8046]">
                  {communityCounter.displayValue}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Community Focused
              </h3>
              <p className="text-gray-600 text-sm">
                Dedicated to sustainable local impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 