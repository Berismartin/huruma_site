'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Map, ExternalLink, Home, Users, Phone, Heart, FileText, Book } from 'lucide-react';

const SitemapPage = () => {
  const siteStructure = [
    {
      icon: Home,
      title: "Main Pages",
      links: [
        { name: "Home", url: "/", description: "Welcome to Huruma Global Support Initiative" },
        { name: "About Us", url: "/about", description: "Learn about our mission and values" },
        { name: "Our Work", url: "/our-work", description: "Discover our programs and projects" },
        { name: "Our Team", url: "/team", description: "Meet our dedicated team members" }
      ]
    },
    {
      icon: Book,
      title: "Programs & Projects",
      links: [
        { name: "1K Project", url: "/our-work/1k-project", description: "Education support initiative" },
        { name: "PLE Empowerment", url: "/our-work/ple-empowerment", description: "Primary leaving examination support" },
        { name: "Sustainable Livelihoods", url: "/our-work/sustainable-livelihoods", description: "Economic empowerment programs" },
        { name: "Our Full Story", url: "/full-story", description: "Complete story of our impact" }
      ]
    },
    {
      icon: Heart,
      title: "Get Involved",
      links: [
        { name: "Get Involved", url: "/get-involved", description: "Ways to support our cause" },
        { name: "Donate", url: "/donate", description: "Make a donation to support our work" },
        { name: "Donation Success", url: "/donation-success", description: "Thank you for your donation" },
        { name: "Contact Us", url: "/contact", description: "Get in touch with our team" }
      ]
    },
    {
      icon: FileText,
      title: "Legal & Policies",
      links: [
        { name: "Privacy Policy", url: "/privacy", description: "How we protect your information" },
        { name: "Terms of Service", url: "/terms", description: "Terms and conditions of use" },
        { name: "Sitemap", url: "/sitemap", description: "Complete site navigation" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <Map className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-handwriting">
              Sitemap
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Navigate through all pages and sections of our website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Website Navigation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find any page on our website quickly and easily. All our content is organized 
              into these main sections.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {siteStructure.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      whileHover={{ scale: 1.02 }}
                      className="block p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg hover:from-green-100 hover:to-blue-100 transition-all duration-300 group"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors duration-200">
                            {link.name}
                          </h4>
                          <p className="text-sm text-gray-600 mt-1">{link.description}</p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors duration-200" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Website Overview</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-green-100">Total Pages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">4</div>
                  <div className="text-green-100">Main Sections</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-green-100">Program Pages</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-green-100">Mobile Friendly</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-white rounded-2xl p-8 text-center shadow-lg"
          >
            <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Can't Find What You're Looking For?</h3>
            <p className="text-gray-600 mb-6">
              If you need help finding specific information or have questions about our website, 
              please don't hesitate to contact us.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <span>Contact Us</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SitemapPage;
