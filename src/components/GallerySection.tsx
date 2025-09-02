'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParallaxBackground } from '../hooks/useParallax';

export default function GallerySection() {
  const parallaxRef = useParallaxBackground({ 
    speed: 0.4,
    disabled: false
  });
  const galleryItems = [
    {
      id: 1,
      title: "Featured Artwork",
      image: "/gallery_images/FB_IMG_1756778136286.jpg",
      description: "Professional tattoo artistry"
    },
    {
      id: 2,
      title: "Custom Design",
      image: "/gallery_images/FB_IMG_1756778165287.jpg",
      description: "Unique and meaningful artwork"
    },
    {
      id: 3,
      title: "Detailed Work",
      image: "/gallery_images/FB_IMG_1756778176648.jpg",
      description: "Precision and attention to detail"
    },
    {
      id: 4,
      title: "Portfolio Piece",
      image: "/gallery_images/Screenshot_20250901_205637_Facebook.jpg",
      description: "Creative and artistic expression"
    },
    {
      id: 5,
      title: "Client Showcase",
      image: "/gallery_images/Screenshot_20250901_205657_Facebook.jpg",
      description: "Beautiful finished work"
    },
    {
      id: 6,
      title: "Artistic Excellence",
      image: "/gallery_images/Screenshot_20250901_205749_Facebook.jpg",
      description: "Quality craftsmanship and artistry"
    }
  ];

  return (
    <section 
      ref={parallaxRef}
      className="relative py-20 overflow-hidden parallax-container"
    >
      {/* Background Image with Parallax */}
      <div className="parallax-bg z-0">
        <Image
          src="/Gallery_background.png"
          alt="Adonai Tattoo Gallery Background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Our Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 text-center mb-16 max-w-2xl mx-auto"
        >
          Each piece tells a story of faith, hope, and personal journey. Browse our collection of Christian-inspired artwork.
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="gallery-item group relative aspect-square bg-neutral-800 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl min-h-[200px] border border-white/10 hover:border-brand-red/30"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  priority={index < 3}
                  unoptimized={true}
                  onError={(e) => {
                    // Fallback to regular img tag if Next.js Image fails
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallbackImg = document.createElement('img');
                    fallbackImg.src = item.image;
                    fallbackImg.alt = item.title;
                    fallbackImg.className = 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-500';
                    target.parentNode?.appendChild(fallbackImg);
                  }}
                />
              </div>
              
              {/* Enhanced Overlay for better contrast */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-end p-4 text-center">
                <h3 className="text-white font-semibold mb-1 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.title}</h3>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
              
              {/* Enhanced Border Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-brand-red/50 rounded-lg transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 text-sm bg-black/30 backdrop-blur-sm rounded-lg px-4 py-2 inline-block border border-white/10">
            Hover over each image to see more details about our work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
