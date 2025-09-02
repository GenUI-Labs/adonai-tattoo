'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cross, Heart, Bird, Crown, Fish, Star } from 'lucide-react';

export default function GallerySection() {
  const galleryItems = [
    {
      id: 1,
      title: "Celtic Cross",
      icon: Cross,
      description: "Traditional Celtic cross with intricate knotwork",
      gradient: "from-amber-500 to-orange-600"
    },
    {
      id: 2,
      title: "Sacred Heart",
      icon: Heart,
      description: "Sacred heart with flame and thorns",
      gradient: "from-red-500 to-rose-600"
    },
    {
      id: 3,
      title: "Holy Dove",
      icon: Bird,
      description: "Dove with olive branch and scripture",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      id: 4,
      title: "Crown of Thorns",
      icon: Crown,
      description: "Crown of thorns with scripture verse",
      gradient: "from-purple-500 to-violet-600"
    },
    {
      id: 5,
      title: "Christian Fish",
      icon: Fish,
      description: "Ichthys symbol with flowing design",
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      id: 6,
      title: "Star of David",
      icon: Star,
      description: "Star of David with Hebrew scripture",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
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
              className="group relative aspect-square bg-neutral-800 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                <item.icon 
                  size={48} 
                  className="text-white mb-4 group-hover:scale-110 transition-transform duration-300" 
                />
                <h3 className="text-white font-semibold mb-2 text-lg">{item.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              
              {/* Border Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-white/20 rounded-lg transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 text-sm mb-4">
            *Actual portfolio images will be displayed here
          </p>
          <p className="text-gray-500 text-xs max-w-lg mx-auto">
            These are representative examples of Christian tattoo themes. The final gallery will showcase 
            Steve's actual completed works with client permission.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
