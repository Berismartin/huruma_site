'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Lock, Eye, UserCheck, FileText, Calendar } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us or making donations",
        "Contact details including name, email address, and phone number",
        "Donation history and payment information (processed securely)",
        "Website usage data and analytics information"
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "To process donations and provide tax receipts",
        "To communicate about our programs and impact",
        "To send newsletters and updates (with your consent)",
        "To improve our website and services"
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information",
        "We may share information with trusted service providers",
        "We comply with legal requirements when necessary",
        "Anonymous data may be used for research and reporting"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access and update your personal information",
        "Opt-out of communications at any time",
        "Request deletion of your data",
        "Withdraw consent for data processing"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-handwriting">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we protect and use your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span>Last updated: {new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="prose prose-lg max-w-none mb-16"
          >
            <p className="text-xl text-gray-700 leading-relaxed">
              Huruma Global Support Initiative is committed to protecting your privacy and personal information. 
              This Privacy Policy explains how we collect, use, and safeguard your information when you visit 
              our website or interact with our services.
            </p>
          </motion.div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8"
          >
            <div className="text-center">
              <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions About This Policy?</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy or how we handle your information, 
                please don't hesitate to contact us.
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> info@hurumaglobalsupportinitiative.org</p>
                <p><strong>Phone:</strong> +256 748 020 214</p>
                <p><strong>Address:</strong> P.O. Box 180486, Kampala - Uganda</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
