'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
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
  const { elementRef: titleRef, fadeInUp } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: statsRef, staggerChildren } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    // Faster animations
    fadeInUp(0, 0.5);
    staggerChildren(0.1, 0.3);
  }, [fadeInUp, staggerChildren]);

  // Counter animations for each stat
  const studentsCounter = useCounterAnimation({ end: 175, suffix: '+', delay: 200 });
  const teachersCounter = useCounterAnimation({ end: 11, delay: 400 });
  const pillarsCounter = useCounterAnimation({ end: 3, delay: 600 });
  const communityCounter = useCounterAnimation({ end: 100, suffix: '%', delay: 800 });

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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real change, measurable results, and lasting impact in the communities we serve.
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          ref={statsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
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
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {studentsCounter.count}+
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Students Supported
              </div>
              <div className="text-sm text-gray-600">
                Children receiving educational materials and support
              </div>
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
                <div className="p-3 bg-[#4f9aa9]/10 rounded-full text-[#4f9aa9] group-hover:bg-[#4f9aa9]/20 transition-colors duration-300">
                  <GraduationCap className="w-8 h-8" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {teachersCounter.count}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Teachers Empowered
              </div>
              <div className="text-sm text-gray-600">
                Educators receiving training and resources
              </div>
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
                <div className="p-3 bg-[#002b4a]/10 rounded-full text-[#002b4a] group-hover:bg-[#002b4a]/20 transition-colors duration-300">
                  <Target className="w-8 h-8" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {pillarsCounter.count}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Strategic Pillars
              </div>
              <div className="text-sm text-gray-600">
                Holistic approach to community development
              </div>
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
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {communityCounter.count}%
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                Community Focused
              </div>
              <div className="text-sm text-gray-600">
                Dedicated to sustainable local impact
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
} 