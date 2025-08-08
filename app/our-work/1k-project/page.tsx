'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGSAPScroll } from '../../hooks/useGSAPScroll';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function OneKProjectPage() {
  const { elementRef: titleRef, fadeInUp } = useGSAPScroll<HTMLDivElement>();
  const { elementRef: contentRef, staggerChildren } = useGSAPScroll<HTMLDivElement>();

  useEffect(() => {
    fadeInUp(0, 0.8);
    staggerChildren(0.1, 0.3);
  }, [fadeInUp, staggerChildren]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#4e8046] to-[#002b4a] text-white">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-handwriting">
                1K Project
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Peer-Funding Model for Educational Excellence
              </p>
            </motion.div>
          </div>
        </section>

        {/* Program Overview */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              ref={contentRef}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Innovative Peer-Funding for Schools
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The 1K Project is our innovative peer-funding model designed to address the 
                  critical infrastructure and resource gaps in marginalized schools across Uganda. 
                  We believe that sustainable change comes from collaborative community efforts.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Through this model, we mobilize resources from multiple stakeholders to provide 
                  comprehensive support for schools, ensuring that every child has access to 
                  quality education in a safe and conducive learning environment.
                </p>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/IMG_0314.webp"
                  alt="Students in classroom"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                How the 1K Project Works
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our collaborative approach brings together multiple stakeholders to create lasting impact
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Community Mobilization",
                  description: "We engage local communities, parents, and stakeholders to identify critical needs and mobilize resources.",
                  icon: "🤝"
                },
                {
                  title: "Resource Pooling",
                  description: "Multiple donors and partners contribute to create a comprehensive funding pool for school improvements.",
                  icon: "💰"
                },
                {
                  title: "Sustainable Impact",
                  description: "Funds are used for infrastructure development, teacher support, and essential learning resources.",
                  icon: "🏗️"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Focus Areas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive support addressing the most critical needs in marginalized schools
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Infrastructure Development",
                  description: "Building and renovating classrooms, latrines, water systems, and other essential facilities to create safe learning environments.",
                  icon: "🏫"
                },
                {
                  title: "Teacher Support",
                  description: "Providing training, resources, and fair compensation to ensure teachers can deliver quality education effectively.",
                  icon: "👨‍🏫"
                },
                {
                  title: "Learning Resources",
                  description: "Supplying textbooks, teaching aids, and technology to enhance the learning experience for all students.",
                  icon: "📖"
                },
                {
                  title: "Community Engagement",
                  description: "Fostering strong partnerships between schools, parents, and communities to ensure sustainable educational development.",
                  icon: "🌍"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Story */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-[#4e8046] to-[#002b4a] text-white p-8 md:p-12 rounded-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Addressing Critical Needs
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Our work at schools like Murambo Catholic Nursery and Primary School has revealed 
                the urgent need for comprehensive infrastructure support. We've witnessed classrooms 
                serving multiple purposes, inadequate sanitation facilities, and teachers working 
                without pay for months.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                The 1K Project is our response to these systemic challenges. By pooling resources 
                from multiple stakeholders, we can address the root causes of educational inequality 
                and create lasting positive change in communities across Uganda.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">175+</div>
                  <div className="text-sm">Students Impacted</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">11</div>
                  <div className="text-sm">Teachers Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-sm">Focus Areas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <div className="text-sm">Future Potential</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Join the 1K Project Movement
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Be part of our innovative peer-funding model that's transforming education 
                in marginalized communities across Uganda. Every contribution makes a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/donate"
                  className="bg-[#4e8046] hover:bg-[#002b4a] text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Donate Now
                </Link>
                <Link
                  href="/contact"
                  className="bg-white text-[#4e8046] hover:bg-gray-100 border-2 border-[#4e8046] px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 