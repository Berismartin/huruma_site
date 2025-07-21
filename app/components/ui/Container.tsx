'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
  animate?: boolean;
  delay?: number;
}

const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
  animate = false,
  delay = 0
}) => {
  const sizes = {
    sm: 'max-w-4xl',
    md: 'max-w-5xl',
    lg: 'max-w-7xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  const classes = `mx-auto px-4 ${sizes[size]} ${className}`;

  if (animate) {
    return (
      <motion.div
        className={classes}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Container; 