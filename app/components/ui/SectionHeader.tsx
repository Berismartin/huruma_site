'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  variant?: 'default' | 'large' | 'minimal';
  showDivider?: boolean;
  className?: string;
  delay?: number;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
  variant = 'default',
  showDivider = true,
  className = '',
  delay = 0
}) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const variants = {
    default: {
      title: 'text-3xl md:text-4xl font-bold text-gray-800 mb-4',
      subtitle: 'text-lg text-gray-600 max-w-3xl'
    },
    large: {
      title: 'text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-handwriting',
      subtitle: 'text-xl text-gray-600 max-w-3xl'
    },
    minimal: {
      title: 'text-2xl md:text-3xl font-bold text-gray-800 mb-2',
      subtitle: 'text-base text-gray-600 max-w-2xl'
    }
  };

  return (
    <motion.div
      className={`${alignClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.h2 
        className={variants[variant].title}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.1 }}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          className={`${variants[variant].subtitle} ${align === 'center' ? 'mx-auto' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      
      {showDivider && (
        <motion.div 
          className={`w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''} mt-6`}
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
        />
      )}
    </motion.div>
  );
};

export default SectionHeader; 