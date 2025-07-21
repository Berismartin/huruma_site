'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Globe } from 'lucide-react';

interface Pillar {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  color: string;
  bgColor: string;
}

interface StrategicPillarsSectionProps {
  title: string;
  subtitle: string;
  pillars: Pillar[];
  className?: string;
}

const StrategicPillarsSection: React.FC<StrategicPillarsSectionProps> = ({
  title,
  subtitle,
  pillars,
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

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp} 
              className={`bg-gradient-to-br ${pillar.bgColor} rounded-2xl p-8 about-card-hover`}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={`w-16 h-16 ${pillar.color} rounded-full flex items-center justify-center mb-6`}
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <pillar.icon className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {pillar.title}
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {pillar.description}
              </motion.p>
              <motion.ul 
                className="text-sm text-gray-600 space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {pillar.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + featureIndex * 0.1 }}
                  >
                    • {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StrategicPillarsSection; 