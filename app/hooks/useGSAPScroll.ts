'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPScroll = <T extends HTMLElement = HTMLElement>() => {
  const elementRef = useRef<T>(null);

  const fadeInUp = (delay: number = 0, duration: number = 1) => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  const fadeInLeft = (delay: number = 0, duration: number = 1) => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  const fadeInRight = (delay: number = 0, duration: number = 1) => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        x: 50,
      },
      {
        opacity: 1,
        x: 0,
        duration,
        delay,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  const scaleIn = (delay: number = 0, duration: number = 1) => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current,
      {
        opacity: 0,
        scale: 0.8,
      },
      {
        opacity: 1,
        scale: 1,
        duration,
        delay,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  const staggerChildren = (stagger: number = 0.1, delay: number = 0) => {
    if (!elementRef.current) return;

    gsap.fromTo(
      elementRef.current.children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elementRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  };

  const parallax = (speed: number = 0.5) => {
    if (!elementRef.current) return;

    gsap.to(elementRef.current, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  };

  const textReveal = (delay: number = 0) => {
    if (!elementRef.current) return;

    const text = elementRef.current.textContent || '';
    elementRef.current.innerHTML = '';
    
    const chars = text.split('').map(char => 
      char === ' ' ? '&nbsp;' : char
    );
    
    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.innerHTML = char;
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      elementRef.current?.appendChild(span);
    });

    gsap.to(elementRef.current.children, {
      opacity: 1,
      duration: 0.05,
      stagger: 0.02,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elementRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });
  };

  const counterAnimation = (targetValue: number, duration: number = 2) => {
    if (!elementRef.current) return;

    const startValue = 0;
    const increment = targetValue / (duration * 60); // 60fps
    let currentValue = startValue;

    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        clearInterval(timer);
      }
      if (elementRef.current) {
        elementRef.current.textContent = Math.floor(currentValue).toString();
      }
    }, 1000 / 60);

    ScrollTrigger.create({
      trigger: elementRef.current,
      start: "top 80%",
      onEnter: () => {
        // Animation starts when element comes into view
      },
    });
  };

  useEffect(() => {
    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return {
    elementRef,
    fadeInUp,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    staggerChildren,
    parallax,
    textReveal,
    counterAnimation,
  };
}; 