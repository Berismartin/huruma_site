'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Globe } from 'lucide-react';

interface HistorySectionProps {
  title: string;
  subtitle: string;
  story: {
    title: string;
    paragraphs: string[];
  };
  images: {
    src: string;
    alt: string;
  }[];
  journeyCard: {
    title: string;
    description: string;
  };
  className?: string;
}

const HistorySection: React.FC<HistorySectionProps> = ({
  title,
  subtitle,
  story,
  images,
  journeyCard,
  className = ""
}) => {
  return (
    <section className={`py-20 px-4 bg-white ${className}`}>
      <div className="max-w-6xl mx-auto">
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
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {story.title}
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {story.paragraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 mb-6">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="rounded-xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-center">
                  <Globe className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">{journeyCard.title}</h4>
                  <p className="text-green-100">
                    {journeyCard.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HistorySection; 