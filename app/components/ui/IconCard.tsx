'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface IconCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'default' | 'gradient' | 'outlined';
  iconColor?: string;
  bgColor?: string;
  className?: string;
  delay?: number;
}

const IconCard: React.FC<IconCardProps> = ({
  icon: Icon,
  title,
  description,
  variant = 'default',
  iconColor = 'text-green-600',
  bgColor = 'bg-green-100',
  className = '',
  delay = 0
}) => {
  const variants = {
    default: 'bg-white shadow-lg hover:shadow-xl',
    gradient: 'bg-gradient-to-br from-green-50 to-blue-50 shadow-lg hover:shadow-xl',
    outlined: 'bg-white border-2 border-gray-200 hover:border-green-300'
  };

  return (
    <motion.div
      className={`rounded-2xl p-6 transition-all duration-300 ${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      <motion.div 
        className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-6`}
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </motion.div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default IconCard; 