'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb } from 'lucide-react';

interface MissionVisionSectionProps {
  mission: string;
  vision: string;
  className?: string;
}

const MissionVisionSection: React.FC<MissionVisionSectionProps> = ({
  mission,
  vision,
  className = ""
}) => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className={`py-20 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving change through compassion, education, and sustainable development
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {/* Mission */}
          <motion.div 
            variants={fadeInUp} 
            className="bg-white rounded-2xl p-8 shadow-xl border border-green-100 about-card-hover"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div 
                className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Target className="w-6 h-6 text-green-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            </motion.div>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {mission}
            </motion.p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            variants={fadeInUp} 
            className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 about-card-hover"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.div 
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </motion.div>
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            </motion.div>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {vision}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVisionSection; 