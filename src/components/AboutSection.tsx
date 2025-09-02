'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useParallaxBackground } from '../hooks/useParallax';

export default function AboutSection() {
  const parallaxRef = useParallaxBackground({ 
    speed: 0.8, // Increased for more noticeable effect
    disabled: false // Enable on mobile too
  });

  return (
    <section 
      ref={parallaxRef}
      className="relative py-20 overflow-hidden parallax-container"
    >
      {/* Background Image with Parallax */}
      <div className="parallax-bg z-0">
        <Image
          src="/VisitUs.jpg"
          alt="Adonai Tattoo Shop Interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">About Adonai</h2>
            <p className="text-lg text-gray-200 mb-6">
              For over two decades, I&apos;ve had the privilege of creating meaningful art that tells stories, 
              celebrates faith, and connects people. At Adonai Tattoo, every piece is crafted with 
              purpose, precision, and prayer.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              My passion isn&apos;t just about tattooing—it&apos;s about the conversations, the relationships, 
              and the opportunity to create something beautiful that honors both the client and our Creator.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-6 italic text-gray-200">
              &ldquo;She is clothed with strength and dignity; she can laugh at the days to come.&rdquo; 
              <br />— Proverbs 31:25
            </blockquote>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Profile Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20">
              <div className="w-64 h-80 mx-auto relative rounded-xl overflow-hidden shadow-xl mb-4">
                <Image
                  src="/adonai_tattoo_profile.jpg"
                  alt="Steve White - Owner of Adonai Tattoo"
                  fill
                  className="object-cover"
                  sizes="256px"
                />
              </div>
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Steve White</h3>
                <p className="text-lg text-gray-200 mb-3">Owner & Master Artist</p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  With over 21 years of experience in the tattoo industry, Steve has dedicated his life 
                  to creating meaningful art that tells stories of faith, hope, and personal growth. 
                  His passion extends beyond tattooing to building lasting relationships with clients 
                  and sharing God&apos;s love through his craft.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
