'use client';

import { useEffect, useState } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';

interface CoreValue {
  id: number;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: React.ReactNode;
  color: string;
}

const coreValues: CoreValue[] = [
  {
    id: 1,
    title: "Compassion",
    shortDescription: "Deep empathy drives our mission to help those in need.",
    longDescription: "We respond with genuine care and dedicated action to foster hope and make a tangible difference in the lives of those we serve. Our compassion extends beyond sympathy to active engagement in creating positive change.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    ),
    color: "text-red-500"
  },
  {
    id: 2,
    title: "Excellence",
    shortDescription: "We strive for the highest quality in everything we do.",
    longDescription: "We maintain rigorous standards in our programs, ensuring that every initiative delivers measurable impact and sustainable results. Our commitment to excellence drives continuous improvement and innovation in our approach to education and community development.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    color: "text-yellow-500"
  },
  {
    id: 3,
    title: "Integrity",
    shortDescription: "Honest, transparent, and ethical in all our actions.",
    longDescription: "We operate with complete transparency, ensuring that every decision and action aligns with our values and serves the best interests of our community. Our integrity builds trust and strengthens our relationships with stakeholders.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    color: "text-blue-500"
  },
  {
    id: 4,
    title: "Innovation",
    shortDescription: "Creative solutions to address complex social challenges.",
    longDescription: "We embrace new ideas and approaches, constantly seeking innovative ways to improve educational outcomes and community development. Our innovative spirit enables us to adapt to changing needs and maximize our impact.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    color: "text-green-500"
  },
  {
    id: 5,
    title: "Collaboration",
    shortDescription: "Working together with communities and partners for impact.",
    longDescription: "We believe in the power of partnerships and community engagement. By working collaboratively with local communities, government agencies, and other organizations, we create sustainable solutions that address root causes and build lasting change.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    color: "text-purple-500"
  },
  {
    id: 6,
    title: "Sustainability",
    shortDescription: "Creating lasting positive change for future generations.",
    longDescription: "We design our programs and initiatives to create long-term, sustainable impact that benefits current and future generations. Our approach focuses on building capacity within communities to ensure continued progress and development.",
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    color: "text-teal-500"
  }
];

export default function CoreValuesSection() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const { elementRef: titleRef, fadeInUp } = useGSAPScroll<HTMLDivElement>();
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
    fadeInUp(0, 0.6); // Reduced from 1 to 0.6 seconds
    staggerChildren(0.1, 0.2); // Reduced stagger from 0.2 to 0.1, duration from 0.3 to 0.2
  }, [fadeInUp, staggerChildren]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
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
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These principles guide every program, interaction, and decision we make.
          </p>
        </div>

        {/* Core Values Grid */}
        <div 
          ref={valuesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {coreValues.map((value, index) => {
            const isExpanded = expandedCards.includes(value.id);
            
            return (
              <div
                key={value.id}
                className="group relative bg-white rounded-xl p-8 text-center hover:bg-gray-50 transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Value Card Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="absolute top-2 right-2 w-6 h-6 bg-[#4e8046] rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 bg-[#4f9aa9] rounded-full"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-center mb-6">
                    <div 
                      className="p-4 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                      style={{ backgroundColor: `${value.color}15` }}
                    >
                      <div style={{ color: value.color }}>
                        {value.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#4e8046] transition-colors duration-300">
                    {value.title}
                  </h4>
                  
                                     <div className="space-y-4">
                     <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm leading-relaxed">
                       {value.shortDescription}
                     </p>
                     
                                           <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-gray-600 text-sm leading-relaxed transform transition-transform duration-500 ease-in-out">
                          {value.longDescription}
                        </p>
                      </div>
                     
                     <button
                       onClick={() => toggleCard(value.id)}
                       className={`text-xs font-medium transition-all duration-300 ${
                         isExpanded
                           ? 'text-[#002b4a] hover:text-[#4e8046]'
                           : 'text-[#4e8046] hover:text-[#002b4a]'
                       } underline decoration-dotted underline-offset-4 hover:decoration-solid`}
                     >
                       {isExpanded ? 'Read Less' : 'Read More'}
                     </button>
                   </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 