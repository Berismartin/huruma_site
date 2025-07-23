'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface CarouselSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
}

const carouselData: CarouselSlide[] = [
  {
    id: 1,
    image: '/images/IMG_0404.webp',
    title: 'Empowering Communities',
    subtitle: 'Breaking the Cycle of Poverty',
    description: 'We provide men, women, and children with the resources, education, and opportunities necessary to build brighter futures.',
    ctaText: 'Learn About Our Work',
    ctaLink: '/work'
  },
  {
    id: 2,
    image: '/images/IMG_0372.webp',
    title: 'Quality Education for All',
    subtitle: 'A Bright Future Begins with a Book',
    description: 'Ensuring every child, regardless of gender or circumstance, has access to quality education and a nurturing learning environment.',
    ctaText: 'Support Education',
    ctaLink: '/donate'
  },
  {
    id: 3,
    image: '/images/IMG_0343 (1).webp',
    title: 'Sustainable Development',
    subtitle: 'Building Resilient Communities',
    description: 'Our holistic approach focuses on economic empowerment, infrastructure improvement, and community development.',
    ctaText: 'See Our Impact',
    ctaLink: '/impact'
  },
  {
    id: 4,
    image: '/images/IMG_0319.webp',
    title: 'Compassion in Action',
    subtitle: 'Putting Empathy into Practice',
    description: 'Driven by deep empathy and unwavering dedication, we transform lives in underserved communities across Uganda.',
    ctaText: 'Join Our Mission',
    ctaLink: '/about'
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [showInfoCard, setShowInfoCard] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={carouselData[currentSlide].image}
            alt={carouselData[currentSlide].title}
            fill
            className="object-cover"
            priority
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                    {carouselData[currentSlide].title}
                  </h1>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-6 text-[#5bc54b]">
                    {carouselData[currentSlide].subtitle}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                    {carouselData[currentSlide].description}
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <button className="bg-[#5bc54b] hover:bg-[#002b4a] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {carouselData[currentSlide].ctaText}
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {carouselData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>

      {/* Organization Info Overlay - Fly in animation */}
      {/* <AnimatePresence>
        {showInfoCard && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 20,
              delay: 1.2 
            }}
            className="absolute top-20 right-4 md:right-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white max-w-xs border border-white/20"
          >
             <button
              onClick={() => setShowInfoCard(false)}
              className="absolute -top-2 -right-2 w-6 h-6 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
              aria-label="Close info card"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h3 className="font-semibold text-lg mb-2 pr-6">Huruma Global Support Initiative</h3>
            <p className="text-sm opacity-90 mb-3">
              Transforming lives in underserved communities through education, economic empowerment, and sustainable development.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Kampala, Uganda</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  );
} 