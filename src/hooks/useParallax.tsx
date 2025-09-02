'use client';

import { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
  speed?: number;
  disabled?: boolean;
  offset?: number;
}

export const useParallax = ({ 
  speed = 0.5, 
  disabled = false,
  offset = 0 
}: ParallaxOptions = {}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;

    let ticking = false;

    const updateScrollY = () => {
      setScrollY(window.scrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [disabled]);

  useEffect(() => {
    if (!elementRef.current || disabled) return;

    const element = elementRef.current;
    const rect = element.getBoundingClientRect();
    const elementTop = rect.top + window.scrollY;
    const elementHeight = rect.height;
    const windowHeight = window.innerHeight;

    // Calculate if element is in viewport
    const isInView = (
      scrollY + windowHeight > elementTop &&
      scrollY < elementTop + elementHeight
    );

    if (isInView) {
      // Calculate parallax offset
      const yPos = -(scrollY - elementTop + offset) * speed;
      element.style.transform = `translate3d(0, ${yPos}px, 0)`;
    }
  }, [scrollY, speed, disabled, offset]);

  return elementRef;
};

export const useParallaxBackground = ({ 
  speed = 0.3, 
  disabled = false 
}: ParallaxOptions = {}) => {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    if (disabled || typeof window === 'undefined') return;

    let ticking = false;

    const updateScrollY = () => {
      setScrollY(window.scrollY);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [disabled]);

  useEffect(() => {
    if (!containerRef.current || disabled) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const containerTop = rect.top + window.scrollY;
    const containerHeight = rect.height;
    const windowHeight = window.innerHeight;

    // Extended viewport check for better parallax range
    const isInView = (
      scrollY + windowHeight + 200 > containerTop &&
      scrollY < containerTop + containerHeight + 200
    );

    if (isInView) {
      // Find background element (image or video)
      const backgroundElement = container.querySelector('.parallax-bg') as HTMLElement;
      
      if (backgroundElement) {
        // Enhanced parallax calculation with mobile optimization
        const isMobile = window.innerWidth < 768;
        const adjustedSpeed = isMobile ? speed * 0.5 : speed; // Reduce speed on mobile for performance
        const yPos = (scrollY - containerTop) * adjustedSpeed;
        const scale = isMobile ? 1.05 : 1.1;
        backgroundElement.style.transform = `translate3d(0, ${yPos}px, 0) scale(${scale})`;
      }
    }
  }, [scrollY, speed, disabled]);

  return containerRef;
};
