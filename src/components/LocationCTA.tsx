'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { useParallaxBackground } from '../hooks/useParallax';

interface LocationCTAProps {
  address: string;
  phoneNumber: string;
}

export default function LocationCTA({ address, phoneNumber }: LocationCTAProps) {
  const parallaxRef = useParallaxBackground({ 
    speed: 0.6, // Slightly increased
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
          src="/adonai_tattoo_shop.jpg"
          alt="Adonai Tattoo Shop Visit Us Background"
          fill
          className="object-contain sm:object-cover object-center"
          style={{ 
            objectPosition: 'center center'
          }}
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
          {/* Location Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Visit Us</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-brand-red mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-200">{address}</p>
                </div>
              </div>
            </div>
            
            {/* CTA Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Journey?</h3>
              <p className="text-lg text-gray-200 mb-6">
                Let&apos;s create something beautiful together. Reach out to schedule your consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={process.env.NEXT_PUBLIC_MESSENGER_URL || '#'}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-red to-brand-red hover:from-red-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <MessageCircle size={20} />
                  Message Us
                </a>
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <Phone size={20} />
                  Call Us
                </a>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden h-96 shadow-2xl"
          >
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Adonai Tattoo Location"
            />
          </motion.div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {/* Location Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white text-center">Visit Us</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-brand-red mt-1" />
                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-gray-200">{address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden h-64 shadow-2xl"
          >
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Adonai Tattoo Location"
            />
          </motion.div>
          
          {/* CTA Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to Start Your Journey?</h3>
            <p className="text-lg text-gray-200 mb-6">
              Let&apos;s create something beautiful together. Reach out to schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={process.env.NEXT_PUBLIC_MESSENGER_URL || '#'}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-brand-red to-brand-red hover:from-red-700 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle size={20} />
                Message Us
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone size={20} />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
