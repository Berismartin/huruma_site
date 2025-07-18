'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random increment between 5-20
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (loadingProgress >= 100) {
      // Add a small delay before completing
      const timer = setTimeout(() => {
        setIsLoading(false);
        setTimeout(onLoadingComplete, 1000); // Wait for exit animation
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loadingProgress, onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.2,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[100] bg-gradient-to-br from-[#002b4a] via-[#4f9aa9] to-[#4e8046] flex items-center justify-center"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-20 left-20 w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="absolute top-40 left-40 w-1 h-1 bg-white/15 rounded-full"></div>
              <div className="absolute top-60 left-20 w-1.5 h-1.5 bg-white/25 rounded-full"></div>
              <div className="absolute top-80 left-60 w-1 h-1 bg-white/10 rounded-full"></div>
              <div className="absolute top-32 right-32 w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="absolute top-60 right-20 w-1 h-1 bg-white/15 rounded-full"></div>
              <div className="absolute top-80 right-60 w-1.5 h-1.5 bg-white/25 rounded-full"></div>
              <div className="absolute bottom-32 left-40 w-1 h-1 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-60 left-20 w-2 h-2 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-40 right-40 w-1.5 h-1.5 bg-white/15 rounded-full"></div>
              <div className="absolute bottom-20 right-20 w-1 h-1 bg-white/25 rounded-full"></div>
            </div>
          </div>

          <div className="relative z-10 text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 20,
                duration: 1 
              }}
              className="mb-8"
            >
              <Image
                src="/images/logo.png"
                alt="Huruma Global Support Initiative"
                width={120}
                height={120}
                className="mx-auto"
              />
            </motion.div>

            {/* Organization Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mb-4"
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Huruma Global Support Initiative
              </h1>
              <p className="text-white/80 text-lg">
                Transforming lives through compassion and action
              </p>
            </motion.div>

            {/* Loading Bar */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="w-64 md:w-80 mx-auto mb-4"
            >
              <div className="bg-white/20 rounded-full h-2 overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Loading Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="text-white/70 text-sm"
            >
              {loadingProgress < 30 && "Loading resources..."}
              {loadingProgress >= 30 && loadingProgress < 60 && "Preparing content..."}
              {loadingProgress >= 60 && loadingProgress < 90 && "Almost ready..."}
              {loadingProgress >= 90 && "Welcome!"}
            </motion.div>

            {/* Animated Dots */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex justify-center space-x-2 mt-4"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {/* Top Left */}
            <motion.div
              className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Top Right */}
            <motion.div
              className="absolute top-32 right-32 w-6 h-6 bg-white/15 rounded-full"
              animate={{
                y: [0, -30, 0],
                x: [0, 10, 0],
                opacity: [0.2, 0.6, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            {/* Bottom Left */}
            <motion.div
              className="absolute bottom-24 left-32 w-3 h-3 bg-white/25 rounded-full"
              animate={{
                y: [0, 25, 0],
                opacity: [0.4, 0.9, 0.4]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            
            {/* Bottom Right */}
            <motion.div
              className="absolute bottom-32 right-20 w-5 h-5 bg-white/10 rounded-full"
              animate={{
                y: [0, 20, 0],
                x: [0, -15, 0],
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 