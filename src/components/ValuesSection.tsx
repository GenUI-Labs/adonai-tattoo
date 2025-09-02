'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, Zap } from 'lucide-react';

export default function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: "Faith & Community",
      description: "Building relationships through shared faith and meaningful conversations."
    },
    {
      icon: Shield,
      title: "Excellence & Artistry",
      description: "21 years of experience delivering exceptional tattoo artistry."
    },
    {
      icon: Zap,
      title: "Excellence & Artistry",
      description: "21 years of experience delivering exceptional tattoo artistry."
    }
  ];

  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Our Values
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 rounded-lg bg-neutral-800 hover:bg-neutral-700 transition-colors duration-300"
              >
                <IconComponent className="w-12 h-12 text-brand-red mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
