'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Voice {
  name: string;
  role: string;
  quote: string;
  emoji: string;
  bgColor: string;
}

interface VoicesSectionProps {
  title: string;
  subtitle: string;
  voices: Voice[];
  images: {
    src: string;
    alt: string;
  }[];
  className?: string;
}

const VoicesSection: React.FC<VoicesSectionProps> = ({
  title,
  subtitle,
  voices,
  images,
  className = ""
}) => {
  return (
    <section className={`py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50 ${className}`}>
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              {voices.map((voice, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 ${voice.bgColor} rounded-full flex items-center justify-center`}>
                      <span className="text-2xl">{voice.emoji}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{voice.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{voice.role}</p>
                      <p className="text-gray-700 italic">"{voice.quote}"</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                {images.slice(0, 2).map((image, index) => (
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
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="space-y-4 pt-8">
                {images.slice(2, 4).map((image, index) => (
                  <motion.div
                    key={index}
                    className="rounded-xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VoicesSection; 