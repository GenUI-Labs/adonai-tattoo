'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Phone } from 'lucide-react';

interface LocationCTAProps {
  address: string;
  phoneNumber: string;
}

export default function LocationCTA({ address, phoneNumber }: LocationCTAProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-red-800 to-brand-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 py-20">
        {/* CTA Content - Top */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let&apos;s create something beautiful together. Reach out to schedule your consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={process.env.NEXT_PUBLIC_MESSENGER_URL || '#'}
                className="inline-flex items-center justify-center gap-3 bg-white text-brand-red hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <MessageCircle size={24} />
                Message Us
              </a>
              <a
                href={`tel:${phoneNumber}`}
                className="inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-brand-red font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Phone size={24} />
                Call Us
              </a>
            </div>
          </motion.div>
        </div>

        {/* Location Information - Center */}
        <div className="max-w-4xl mx-auto px-4 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-white">Visit Our Studio</h3>
            <div className="flex items-center justify-center gap-4 text-xl text-gray-200">
              <MapPin className="w-8 h-8 text-white" />
              <span>{address}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Width Map - Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full h-96 relative"
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
          className="w-full h-full"
        />
        <div className="absolute inset-0 pointer-events-none border-t-4 border-white/20"></div>
      </motion.div>
    </section>
  );
}
