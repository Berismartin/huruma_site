'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'gradient';
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  hover = false,
  onClick
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white shadow-lg hover:shadow-xl',
    elevated: 'bg-white shadow-2xl hover:shadow-3xl',
    outlined: 'bg-white border-2 border-gray-200 hover:border-green-300',
    gradient: 'bg-gradient-to-br from-green-50 to-blue-50 shadow-lg hover:shadow-xl'
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (onClick) {
    return (
      <motion.div
        className={classes}
        onClick={onClick}
        whileHover={hover ? { scale: 1.02, y: -5 } : {}}
        whileTap={{ scale: 0.98 }}
        cursor="pointer"
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={classes}
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
    >
      {children}
    </motion.div>
  );
};

export default Card; 