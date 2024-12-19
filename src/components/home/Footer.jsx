// src/components/Footer.tsx
import React from 'react';
import { MapPin, Mail, Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={18} className="text-gray-300" />
            <span className="text-gray-300">Orange, California</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-gray-300" />
            <a href="mailto:cklnoonan@gmail.com" className="text-gray-300 hover:text-white transition-colors">
		cklnoonan@gmail.com
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Navigation</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="/shop" className="text-gray-300 hover:text-white transition-colors">
                Merch
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 border-t border-gray-700 pt-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Copyright size={18} className="text-gray-300" />
          <span className="text-gray-300">
            {new Date().getFullYear()} Chance Noonan. All rights reserved.
          </span>
        </div>
        <div>
          <span className="text-gray-300">
            Made with ❤️ in 0s and 1s
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
