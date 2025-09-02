'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  address: string;
  phoneNumber: string;
}

export default function Footer({ address, phoneNumber }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-brand-black to-neutral-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Brand */}
          <div className="md:col-span-1">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src="/AdonaiTattooLogo.png"
                  alt="Adonai Tattoo Logo"
                  fill
                  className="object-cover rounded-lg"
                  sizes="80px"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Adonai Tattoo</h3>
              <p className="text-gray-400 text-center md:text-left text-sm">
                Where Faith Meets Artistry
              </p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-brand-red transition-colors">About</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-brand-red transition-colors">Gallery</a></li>
              <li><a href="#location" className="text-gray-300 hover:text-brand-red transition-colors">Location</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-brand-red transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4 text-brand-red" />
                <span className="text-sm">{phoneNumber}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4 text-brand-red" />
                <span className="text-sm">{address}</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Clock className="w-4 h-4 text-brand-red" />
                <span className="text-sm">By Appointment</span>
              </li>
            </ul>
          </div>
          
          {/* Business Hours */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Tuesday - Saturday</li>
              <li>By Appointment Only</li>
              <li className="mt-4">
                <span className="text-brand-red font-semibold">Walk-ins Welcome</span>
                <br />
                <span className="text-xs">Subject to availability</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider Line */}
        <div className="border-t border-gray-700 mb-8"></div>
        
        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 mb-2">© 2024 Adonai Tattoo. All rights reserved.</p>
            <p className="text-gray-500 text-sm">
              Honoring God through art and community in {address}
            </p>
          </div>
          
          {/* Social/Additional Links */}
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
