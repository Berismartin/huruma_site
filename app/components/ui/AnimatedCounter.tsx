'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  delay?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
  delay = 0
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const startTime = Date.now();
    const startValue = 0;

    const timer = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = (currentTime - startTime) / 1000;

      if (elapsed >= duration) {
        setCount(end);
        clearInterval(timer);
      } else {
        const progress = elapsed / duration;
        const currentValue = Math.floor(startValue + (end - startValue) * progress);
        setCount(currentValue);
      }
    }, 16);

    return () => clearInterval(timer);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <span className="text-4xl md:text-6xl font-bold text-green-600">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    </motion.div>
  );
};

export default AnimatedCounter; 