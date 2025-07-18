'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

interface CoreValue {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  color: string;
}

const coreValues: CoreValue[] = [
  {
    id: 1,
    title: "Compassion",
    shortDescription: "Deep empathy for those facing poverty and educational challenges drives us.",
    longDescription: "We respond with genuine care and dedicated action to foster hope and make a tangible difference in the lives of those we serve.",
    icon: "❤️",
    color: "#4e8046"
  },
  {
    id: 2,
    title: "Integrity",
    shortDescription: "We uphold the highest ethical standards in all we do.",
    longDescription: "Transparency, accountability, and honesty ensure that every contribution is utilized effectively and responsibly to achieve our mission.",
    icon: "⚖️",
    color: "#4f9aa9"
  },
  {
    id: 3,
    title: "Dignity",
    shortDescription: "Every individual has inherent worth and deserves respect.",
    longDescription: "Our programs empower men, women, and children to lead dignified lives, building self-reliance and enabling them to shape their own prosperous futures.",
    icon: "👑",
    color: "#002b4a"
  },
  {
    id: 4,
    title: "Service",
    shortDescription: "Our dedication is to actively serve those in need.",
    longDescription: "We provide essential resources, education, and opportunities to overcome poverty, focusing on long-term impact and a more equitable future for all.",
    icon: "🤝",
    color: "#4e8046"
  }
];

export default function CoreValuesSection() {
  const { elementRef: titleRef, fadeInUp } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: valuesRef, staggerChildren } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    fadeInUp(0, 1);
    staggerChildren(0.2, 0.3);
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
              className="group relative bg-white rounded-lg p-6 text-center hover:bg-gray-100 transition-colors duration-300 relative overflow-hidden"
            >
              {/* Value Card Background Pattern */}
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