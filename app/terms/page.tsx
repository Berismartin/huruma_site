'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Scale, FileText, Calendar, AlertCircle, CheckCircle, Users } from 'lucide-react';

const TermsOfServicePage = () => {
  const sections = [
    {
      icon: Users,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using this website, you accept and agree to be bound by these terms",
        "If you do not agree to these terms, please do not use our website",
        "We reserve the right to modify these terms at any time",
        "Continued use of the website constitutes acceptance of modified terms"
      ]
    },
    {
      icon: CheckCircle,
      title: "Use of Website",
      content: [
        "You may use our website for lawful purposes only",
        "You agree not to use the website in any way that could damage or impair it",
        "You may not attempt to gain unauthorized access to any part of the website",
        "Content on this website is for informational purposes"
      ]
    },
    {
      icon: Scale,
      title: "Donations and Payments",
      content: [
        "All donations are voluntary and non-refundable",
        "We use secure payment processing systems",
        "Tax receipts will be provided for eligible donations",
        "We reserve the right to refuse donations in certain circumstances"
      ]
    },
    {
      icon: AlertCircle,
      title: "Limitation of Liability",
      content: [
        "We provide website content on an 'as is' basis",
        "We do not guarantee the accuracy or completeness of information",
        "We are not liable for any indirect or consequential damages",
        "Our liability is limited to the maximum extent permitted by law"
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
              Terms of Service
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Please read these terms carefully before using our website and services.
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
              These Terms of Service govern your use of the Huruma Global Support Initiative website 
              and services. By accessing or using our website, you agree to be bound by these terms 
              and all applicable laws and regulations.
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
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.title}</h2>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Governing Law</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                These terms shall be governed by and construed in accordance with the laws of Uganda. 
                Any disputes arising from these terms or your use of our website shall be subject to 
                the exclusive jurisdiction of the courts of Uganda.
              </p>
              <p>
                If any provision of these terms is found to be invalid or unenforceable, the remaining 
                provisions shall remain in full force and effect.
              </p>
            </div>
          </motion.div>

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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Questions About These Terms?</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms of Service, please contact us.
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

export default TermsOfServicePage;
