'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TextOverlaySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const text = textRef.current;

    if (section && text) {
      gsap.fromTo(
        text,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/IMG_0314.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content container */}
      <div
        ref={textRef}
        className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-['Dancing_Script']"
        >
          Join Our Mission
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 leading-relaxed"
        >
          Together, we can create lasting change in communities across Uganda. 
          Every contribution, no matter how small, makes a difference in the lives 
          of children and families.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="/donate"
            tabIndex={-1}
            className="inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1B4D3E] hover:bg-[#2D5A4A] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300 shadow-lg"
              type="button"
            >
              Donate Now
            </motion.button>
          </a>
          
          <a
            href="/contact"
            tabIndex={-1}
            className="inline-block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#1B4D3E] transition-all duration-300"
              type="button"
            >
              Volunteer With Us
            </motion.button>
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-lg"
        >
          <p className="mb-2">📍 Located in the heart of Uganda</p>
          <p className="text-[#A8DADC] font-medium">
            Making education accessible to every child
          </p>
        </motion.div>
      </div>
      
      {/* Floating elements for visual interest */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full blur-sm"
      />
      
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-20 right-10 w-12 h-12 bg-[#A8DADC]/20 rounded-full blur-sm"
      />
    </section>
  );
};

export default TextOverlaySection; 