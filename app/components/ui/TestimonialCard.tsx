'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
  rating?: number;
  variant?: 'default' | 'featured' | 'minimal';
  className?: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  image,
  rating = 5,
  variant = 'default',
  className = '',
  delay = 0
}) => {
  const variants = {
    default: 'bg-white shadow-lg hover:shadow-xl p-6',
    featured: 'bg-gradient-to-br from-green-50 to-blue-50 shadow-xl hover:shadow-2xl p-8 border-l-4 border-green-500',
    minimal: 'bg-gray-50 hover:bg-white shadow-sm hover:shadow-md p-4'
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
        ★
      </span>
    ));
  };

  return (
    <motion.div
      className={`rounded-2xl transition-all duration-300 ${variants[variant]} ${className}`}
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
      {variant === 'featured' && (
        <Quote className="w-8 h-8 text-green-500 mb-4" />
      )}
      
      <div className="flex items-start space-x-4">
        {image && (
          <div className="flex-shrink-0">
            <Image
              src={image}
              alt={author}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        
        <div className="flex-1">
          <p className="text-gray-700 italic leading-relaxed mb-4">"{quote}"</p>
          
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-800">{author}</h4>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
            
            {rating > 0 && (
              <div className="flex space-x-1">
                {renderStars()}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard; 