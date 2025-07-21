'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote?: string;
}

interface TeamCarouselSectionProps {
  title: string;
  subtitle: string;
  teamMembers: TeamMember[];
  className?: string;
}

const TeamCarouselSection: React.FC<TeamCarouselSectionProps> = ({
  title,
  subtitle,
  teamMembers,
  className = ""
}) => {
  return (
    <section className={`py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50 overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Auto-scrolling container */}
        <div className="relative overflow-hidden">
          {/* Blur edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-green-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-50 to-transparent z-10"></div>
          
          {/* First row */}
          <div className="team-scroll-row mb-12" style={{ animationDelay: '0s' }}>
            <div className="flex space-x-12 animate-scroll">
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <div key={index} className="flex-shrink-0 w-96">
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    {/* Gradient overlay that appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Touch light effect at bottom */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:animate-touch-light"></div>
                    
                    {/* Content that appears on hover */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                        <p className="text-lg text-green-300 mb-4">{member.role}</p>
                        {member.quote && (
                          <p className="text-sm text-gray-200 italic">"{member.quote}"</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row */}
          <div className="team-scroll-row mb-12" style={{ animationDelay: '3s' }}>
            <div className="flex space-x-12 animate-scroll-reverse">
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <div key={index} className="flex-shrink-0 w-96">
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    {/* Gradient overlay that appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Touch light effect at bottom */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:animate-touch-light"></div>
                    
                    {/* Content that appears on hover */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                        <p className="text-lg text-blue-300 mb-4">{member.role}</p>
                        {member.quote && (
                          <p className="text-sm text-gray-200 italic">"{member.quote}"</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Third row */}
          <div className="team-scroll-row" style={{ animationDelay: '6s' }}>
            <div className="flex space-x-12 animate-scroll">
              {[...teamMembers, ...teamMembers].map((member, index) => (
                <div key={index} className="flex-shrink-0 w-96">
                  <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                    />
                    {/* Gradient overlay that appears on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Touch light effect at bottom */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out group-hover:animate-touch-light"></div>
                    
                    {/* Content that appears on hover */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                        <p className="text-lg text-purple-300 mb-4">{member.role}</p>
                        {member.quote && (
                          <p className="text-sm text-gray-200 italic">"{member.quote}"</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamCarouselSection; 