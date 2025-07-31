'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  quote?: string;
  socials: {
    email: string;
  };
}

interface LeadershipTeamSectionProps {
  title: string;
  subtitle: string;
  teamMembers: TeamMember[];
  className?: string;
}

const LeadershipTeamSection: React.FC<LeadershipTeamSectionProps> = ({
  title,
  subtitle,
  teamMembers,
  className = ""
}) => {
  return (
    <section className={`py-20 px-4 bg-white ${className}`}>
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

        <div className="space-y-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
            >
              {/* Large Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill

                    className="object-cover  transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                    <p className="text-xl text-green-300 font-semibold">{member.role}</p>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">About {member.name.split(' ')[0]}</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">{member.bio}</p>
                </div>
                
                {member.quote && (
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-2xl">💬</span>
                      </div>
                      <div>
                        <p className="text-gray-700 italic text-lg leading-relaxed">"{member.quote}"</p>
                        <p className="text-sm text-gray-500 mt-2">- {member.name}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="flex justify-center">
                  <a 
                    href={`mailto:${member.socials.email}`} 
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Get in Touch</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeamSection; 