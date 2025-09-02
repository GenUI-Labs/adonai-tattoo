'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Heart, Cross, HandHeart, Shield, Users, Star, Paintbrush, Sparkles } from 'lucide-react';

export default function ValuesSection() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [activeValue, setActiveValue] = React.useState<number>(0);

  const values = [
    {
      icon: Cross,
      title: "Faith First",
      description: "Christ is at the center of everything we do, guiding our hands and hearts in every design.",
      position: { x: 50, y: 5 } // Top of cross
    },
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "We create art with love, treating every client as family in our sacred space.",
      position: { x: 78, y: 15 } // Upper right
    },
    {
      icon: Shield,
      title: "Excellence & Integrity",
      description: "21 years of faithful service, delivering exceptional artistry with honest hearts.",
      position: { x: 88, y: 37 } // Right of horizontal beam
    },
    {
      icon: Star,
      title: "Hope & Transformation",
      description: "Every design tells a story of God's grace and the beauty of spiritual transformation.",
      position: { x: 78, y: 60 } // Lower right
    },
    {
      icon: HandHeart,
      title: "Prayer & Purpose",
      description: "Each tattoo begins with prayer, ensuring God's blessing on the artwork and journey.",
      position: { x: 50, y: 85 } // Bottom of cross
    },
    {
      icon: Users,
      title: "Community & Fellowship",
      description: "Building lasting relationships through shared faith and meaningful conversations.",
      position: { x: 22, y: 60 } // Lower left
    },
    {
      icon: Paintbrush,
      title: "Sacred Artistry",
      description: "Every tattoo is a sacred expression, honoring both the client's story and God's creative spirit.",
      position: { x: 12, y: 37 } // Left of horizontal beam
    },
    {
      icon: Sparkles,
      title: "Healing & Restoration",
      description: "Through art and faith, we help people find healing and express their journey of restoration.",
      position: { x: 22, y: 15 } // Upper left
    }
  ];

  // Auto-cycle through values
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % values.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [values.length]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Clear existing content
    svg.innerHTML = '';

    // Create a proper cross shape (not plus sign)
    const createCross = () => {
      // Vertical beam of cross - longer and moved up
      const verticalRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      verticalRect.setAttribute('x', '48'); // Center horizontally
      verticalRect.setAttribute('y', '15'); // Start higher up
      verticalRect.setAttribute('width', '4'); // Width of beam
      verticalRect.setAttribute('height', '65'); // Much longer height for proper cross
      verticalRect.setAttribute('fill', '#dc2626');
      verticalRect.setAttribute('opacity', '0.6');
      verticalRect.setAttribute('rx', '2'); // Rounded corners
      
      // Horizontal beam of cross - positioned higher on vertical beam
      const horizontalRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      horizontalRect.setAttribute('x', '30'); // Start further left
      horizontalRect.setAttribute('y', '35'); // Higher up on the vertical beam
      horizontalRect.setAttribute('width', '40'); // Width of beam
      horizontalRect.setAttribute('height', '4'); // Height of beam
      horizontalRect.setAttribute('fill', '#dc2626');
      horizontalRect.setAttribute('opacity', '0.6');
      horizontalRect.setAttribute('rx', '2'); // Rounded corners

      svg.appendChild(verticalRect);
      svg.appendChild(horizontalRect);

      // Add subtle glow effect
      const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
      const filter = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
      filter.setAttribute('id', 'glow');
      
      const feGaussianBlur = document.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
      feGaussianBlur.setAttribute('stdDeviation', '3');
      feGaussianBlur.setAttribute('result', 'coloredBlur');
      
      const feMerge = document.createElementNS('http://www.w3.org/2000/svg', 'feMerge');
      const feMergeNode1 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
      feMergeNode1.setAttribute('in', 'coloredBlur');
      const feMergeNode2 = document.createElementNS('http://www.w3.org/2000/svg', 'feMergeNode');
      feMergeNode2.setAttribute('in', 'SourceGraphic');
      
      feMerge.appendChild(feMergeNode1);
      feMerge.appendChild(feMergeNode2);
      filter.appendChild(feGaussianBlur);
      filter.appendChild(feMerge);
      defs.appendChild(filter);
      svg.appendChild(defs);

      // Apply glow to cross elements
      verticalRect.setAttribute('filter', 'url(#glow)');
      horizontalRect.setAttribute('filter', 'url(#glow)');
    };

    createCross();
  }, []);

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background Lines */}
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-radial from-brand-red/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-brand-red bg-clip-text text-transparent">
              Our Sacred Values
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Faith, artistry, and compassion woven together to create meaningful expressions of God&apos;s love through ink and intention.
          </p>
        </motion.div>

        {/* Values Cross Layout */}
        <div className="relative">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            const isActive = activeValue === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                style={{
                  left: `${value.position.x}%`,
                  top: `${value.position.y}%`,
                }}
                onClick={() => setActiveValue(index)}
                onMouseEnter={() => setActiveValue(index)}
              >
                <div className="group relative">
                  {/* Icon Circle */}
                  <div className={`w-20 h-20 bg-gradient-to-br from-brand-red to-red-800 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 border-4 ${
                    isActive ? 'border-white/40 scale-125' : 'border-white/10 scale-100'
                  }`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  {/* Value Content - Always show for active value with smart positioning */}
                  <div 
                    className={`absolute w-80 text-center transition-all duration-500 ${
                      isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                    style={{
                      top: value.position.y > 50 ? '-120px' : '80px', // Position above if bottom half, below if top half
                      left: value.position.x > 50 ? '-320px' : '0px', // Position left if right side, right if left side
                      transform: value.position.x > 50 ? 'translateX(0)' : 'translateX(-50%)'
                    }}
                  >
                    <div className="bg-neutral-900/95 backdrop-blur-sm rounded-xl p-6 border border-brand-red/20 shadow-2xl">
                      <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                    </div>
                  </div>

                  {/* Enhanced pulse animation for active value */}
                  {isActive && (
                    <div className="absolute inset-0 w-20 h-20 bg-brand-red/40 rounded-full animate-ping"></div>
                  )}
                  
                  {/* Subtle pulse for inactive values */}
                  {!isActive && (
                    <div className="absolute inset-0 w-20 h-20 bg-brand-red/20 rounded-full animate-pulse"></div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom spacing for absolute positioned elements */}
        <div className="h-96"></div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex gap-2">
            {values.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveValue(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeValue === index ? 'bg-brand-red scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
