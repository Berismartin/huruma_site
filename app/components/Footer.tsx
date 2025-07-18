'use client';

import { useEffect } from 'react';
import { useGSAPScroll } from '../hooks/useGSAPScroll';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const { elementRef: footerRef, fadeInUp } = useGSAPScroll<HTMLElement>();

  useEffect(() => {
    fadeInUp(0, 1);
  }, [fadeInUp]);

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      ref={footerRef}
      className="bg-[#002b4a] text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#4e8046] rounded-full -translate-x-32 -translate-y-32"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#4f9aa9] rounded-full translate-x-24 -translate-y-24"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#4e8046] rounded-full -translate-x-28 translate-y-28"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Organization Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#4e8046] mb-2">Huruma Global Support Initiative</h3>
                <p className="text-gray-300 leading-relaxed">
                  Empowering communities through education, economic development, and sustainable change in Uganda.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#4e8046]" />
                  <span className="text-gray-300">info@hurumaglobalsupportinitiative.org</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#4e8046]" />
                  <span className="text-gray-300">+256 748 020 214</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#4e8046]" />
                  <span className="text-gray-300">P.O. Box 180486, Kampala - Uganda</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#mission" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                    Our Mission
                  </a>
                </li>
                <li>
                  <a href="#impact" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                    Our Impact
                  </a>
                </li>
                <li>
                  <a href="#values" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                    Core Values
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Programs */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Our Programs</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#education" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                    Education Support
                  </a>
                </li>
                <li>
                  <a href="#economic" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                    Economic Empowerment
                  </a>
                </li>
                <li>
                  <a href="#community" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                    Community Development
                  </a>
                </li>
                <li>
                  <a href="#water" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                    Clean Water Projects
                  </a>
                </li>
                <li>
                  <a href="#sanitation" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                    Sanitation Facilities
                  </a>
                </li>
                <li>
                  <a href="#volunteer" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                    Volunteer Opportunities
                  </a>
                </li>
              </ul>
            </div>

            {/* Donation & Contact */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Get Involved</h4>
              
              {/* Donation Info */}
              <div className="bg-[#4e8046]/20 rounded-lg p-4 mb-6">
                <h5 className="font-semibold text-[#4e8046] mb-2">Make a Donation</h5>
                <p className="text-sm text-gray-300 mb-3">
                  Your support helps us create lasting change in communities.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Airtel Pay:</span>
                    <span className="text-white font-mono">4392361</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Bank:</span>
                    <span className="text-white font-mono">DFCU Bank</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Account:</span>
                    <span className="text-white font-mono">01490016746558</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h5 className="font-semibold text-white mb-3">Follow Us</h5>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-[#4e8046] hover:bg-[#4f9aa9] rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-[#4e8046] hover:bg-[#4f9aa9] rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-[#4e8046] hover:bg-[#4f9aa9] rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-[#4e8046] hover:bg-[#4f9aa9] rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-white">Stay Updated</h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates about our projects, impact stories, and ways to get involved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-[#4e8046] transition-colors duration-200"
              />
              <button className="bg-[#4e8046] hover:bg-[#4f9aa9] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Huruma Global Support Initiative. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-300 hover:text-[#4e8046] transition-colors duration-200">
                Sitemap
              </a>
            </div>
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for Uganda</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 