import { useState, useEffect, useRef } from 'react';

interface UseCounterAnimationProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  suffix?: string;
}

export function useCounterAnimation({ 
  end, 
  start = 0, 
  duration = 2000, 
  delay = 0,
  suffix = '' 
}: UseCounterAnimationProps) {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating) {
            setIsAnimating(true);
            
            // Disconnect the observer immediately to prevent retriggering
            if (observerRef.current) {
              observerRef.current.disconnect();
            }
            
            // Start animation after delay
            setTimeout(() => {
              const startTime = performance.now();
              const difference = end - start;

              const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = Math.floor(start + difference * easeOutQuart);
                
                setCount(currentCount);

                if (progress < 1) {
                  animationRef.current = requestAnimationFrame(animate);
                }
              };

              animationRef.current = requestAnimationFrame(animate);
            }, delay);
          }
        });
      },
      { threshold: 0.5 }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, start, duration, delay, isAnimating]);

  return {
    count,
    elementRef,
    displayValue: `${count}${suffix}`
  };
} 