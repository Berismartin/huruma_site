'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface ContactInfo {
  icon: React.ComponentType<any>;
  title: string;
  value: string;
}

interface ContactSectionProps {
  title: string;
  subtitle: string;
  contactInfo: ContactInfo[];
  ctaText: string;
  className?: string;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  subtitle,
  contactInfo,
  ctaText,
  className = ""
}) => {
  return (
    <section className={`py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600 ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-handwriting">
            {title}
          </h2>
          <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <info.icon className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                <p className="text-green-100">{info.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center mx-auto"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection; 