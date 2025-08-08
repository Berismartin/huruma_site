'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGSAPScroll } from '../../hooks/useGSAPScroll';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SustainableLivelihoodsPage() {
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
                Sustainable Livelihoods
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Empowering Men and Women for Economic Independence
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
                  Breaking the Cycle of Poverty
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our Sustainable Livelihoods program is dedicated to fostering economic 
                  independence and resilience among adults in marginalized communities. We 
                  believe that empowered individuals create stronger families and communities.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Through comprehensive training, mentorship, and seed funding, we equip 
                  men and women with the essential skills, knowledge, and resources needed 
                  to generate sustainable income and uplift their households.
                </p>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/IMG_0316.webp"
                  alt="Community members working together"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
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
                Our Holistic Approach
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide comprehensive support that addresses the full spectrum of needs for sustainable economic development
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Peer-to-Peer Mentorship",
                  description: "Connecting participants with successful entrepreneurs and community leaders who provide guidance and support.",
                  icon: "🤝"
                },
                {
                  title: "Vocational Training",
                  description: "Practical skills training in high-demand trades and crafts that can generate immediate income.",
                  icon: "🔧"
                },
                {
                  title: "Financial Literacy",
                  description: "Essential money management skills including budgeting, saving, and investment strategies.",
                  icon: "💰"
                },
                {
                  title: "Business Mentorship",
                  description: "One-on-one guidance from experienced business professionals to help develop and grow enterprises.",
                  icon: "📈"
                },
                {
                  title: "Seed Funding",
                  description: "Initial capital support to help participants start or expand their income-generating activities.",
                  icon: "🌱"
                },
                {
                  title: "Market Access",
                  description: "Connecting participants with markets and customers to ensure sustainable income streams.",
                  icon: "🛒"
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

        {/* Success Stories */}
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
                Voices of Transformation
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real stories from participants who have transformed their lives through our program
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">👨‍🌾</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Ssebuguzi Alex</h3>
                <p className="text-gray-600 mb-4 italic">
                  "Huruma inspired me by helping struggling entrepreneurs and supporting school 
                  children with fees and materials across different districts. That impact touched 
                  me deeply—and that's why I chose to join and work with HGSI."
                </p>
                <p className="text-gray-600 text-sm">
                  Now serves as Program Officer, Sustainable Livelihoods, bringing his personal 
                  experience as a farmer and small business owner to help others succeed.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Community Entrepreneurs</h3>
                <p className="text-gray-600 mb-4 italic">
                  "Through HGSI's support, we've been able to start our own businesses, 
                  provide for our families, and contribute to our community's development."
                </p>
                <p className="text-gray-600 text-sm">
                  Multiple participants have successfully launched businesses in agriculture, 
                  crafts, retail, and services, creating sustainable income streams.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Metrics */}
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
                Our Impact on Economic Empowerment
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Through our Sustainable Livelihoods program, we're creating lasting change 
                by empowering individuals to become self-sufficient and economically independent. 
                Our comprehensive approach ensures that participants not only gain skills but 
                also the confidence and resources to succeed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm">Entrepreneurs Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">6</div>
                  <div className="text-sm">Program Areas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">85%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <div className="text-sm">Future Generations</div>
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
                Support Economic Empowerment
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Help us empower more men and women to achieve economic independence. 
                Your support creates lasting positive change in communities across Uganda.
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