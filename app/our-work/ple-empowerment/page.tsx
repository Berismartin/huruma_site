'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGSAPScroll } from '../../hooks/useGSAPScroll';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PLEEmpowermentPage() {
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
                PLE Empowerment Project
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                "A Bright Future Begins with a Book"
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
                  Empowering Primary Leaving Examination Candidates
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our PLE Empowerment Project is a comprehensive initiative designed to support 
                  Primary Leaving Examination candidates in marginalized communities. We believe 
                  that every child deserves the tools and resources needed to succeed in their 
                  educational journey.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Through this project, we provide essential scholastic materials, revision guides, 
                  and support systems that enable students to approach their final primary school 
                  examinations with confidence and preparation.
                </p>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/pens4.jpg"
                  alt="PLE Students receiving materials"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* What We Provide */}
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
                Essential Materials We Provide
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive support packages designed to meet all the needs of PLE candidates
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Past Papers & Revision Guides",
                  description: "Comprehensive question banks and study materials to help students prepare effectively for their examinations.",
                  icon: "📚"
                },
                {
                  title: "Writing Materials",
                  description: "Pens, pencils, erasers, mathematical sets, and rulers to ensure students have all necessary tools.",
                  icon: "✏️"
                },
                {
                  title: "Study Support",
                  description: "Additional resources and guidance to help students develop effective study habits and exam strategies.",
                  icon: "🎯"
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

        {/* Impact Story */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-[#4e8046] to-[#002b4a] text-white p-8 md:p-12 rounded-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Pilot Success at Murambo
              </h2>
              <p className="text-lg mb-6 leading-relaxed">
                Our pilot program at Murambo Catholic Nursery and Primary School demonstrated 
                the transformative power of providing basic educational materials. We witnessed 
                the undeniable sparkle of hope in children's eyes as they received their 
                scholastic materials.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                The relief in struggling parents' sighs and the gratitude of teachers showed us 
                that even small gestures can yield huge returns. This success has inspired us to 
                expand our reach to more schools across Uganda.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">15</div>
                  <div className="text-sm">Students Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1</div>
                  <div className="text-sm">School Transformed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Support Our PLE Empowerment Project
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Help us provide essential educational materials to more PLE candidates 
                across Uganda. Your support can make a lasting difference in a child's future.
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
                  Get Involved
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