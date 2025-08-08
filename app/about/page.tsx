'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Heart, 
  Target, 
  Users, 
  BookOpen, 
  Lightbulb, 
  Shield,
  Award,
  Globe,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Footer from '../components/Footer';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Deep empathy for those facing poverty and educational challenges drives us. We respond with genuine care and dedicated action to foster hope and make a tangible difference."
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all we do. Transparency, accountability, and honesty ensure that every contribution is utilized effectively and responsibly."
    },
    {
      icon: Award,
      title: "Dignity",
      description: "Every individual has inherent worth. Our programs empower men, women, and children to lead dignified lives, building self-reliance and enabling them to shape their own prosperous futures."
    },
    {
      icon: Users,
      title: "Respect",
      description: "We deeply respect the local knowledge, cultures, and aspirations of the communities we serve. Our initiatives are collaborative, culturally sensitive, and inclusive."
    },
    {
      icon: Star,
      title: "Service",
      description: "Our dedication is to actively serve those in need. We provide essential resources, education, and opportunities to overcome poverty, focusing on long-term impact."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-green-600 to-blue-600 overflow-hidden">
      {/* <section className="relative h-[60vh] bg-black  overflow-hidden"> */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/IMG_0314.webp')] bg-cover bg-center opacity-30"></div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div 
            className="text-center text-white px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 font-handwriting"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              About Huruma
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming lives through compassion, education, and sustainable development
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving change through compassion, education, and sustainable development
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Mission */}
            <motion.div 
              variants={fadeInUp} 
              className="bg-white rounded-2xl p-8 shadow-xl border border-green-100 about-card-hover"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Target className="w-6 h-6 text-green-600" />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </motion.div>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                To create a positive and lasting impact by equiping men, women and children with the resources, education, and opportunities necessary to break the cycle of poverty and build brighter futures.
              </motion.p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              variants={fadeInUp} 
              className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 about-card-hover"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="flex items-center mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </motion.div>
              <motion.p 
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                We envision a world where the cycle of poverty is decisively broken, and brighter futures are a reality for all. We dream of a future where every individual has the genuine opportunity to thrive, empowered by education, dignity, and unwavering hope.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
              Our Story
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 md:p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  From Murambo Village to Global Impact
                </h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    It started, as so many profound things do, with a simple, almost forgotten place: Murambo village. Our family's roots there had seemed to wither after we lost loved ones. But a casual family chat, a reunion in a WhatsApp group, sparked a question that refused to be silenced: What about the family we didn't know?
                  </p>
                  <p>
                    That question led to action, beginning with the local primary school. There were only seven P7 students, desperate for scholastic materials and revision guides. We dipped into our own pockets, a small gesture that yielded a huge return: the undeniable sparkle of hope in those children's eyes.
                  </p>
                  <p>
                    We knew then, with absolute clarity, this couldn't be a one-off. It had to be bigger. It had to be sustainable. So, we registered a social enterprise, establishing the foundational structure to scale our initial impact responsibly.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/P7_STUDENTS.png"
                      alt="P7 Students"
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/IMG_0314.webp"
                      alt="Community Impact"
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white">
                  <div className="text-center">
                    <Globe className="w-16 h-16 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">Our Journey</h4>
                    <p className="text-green-100">
                      From family roots in Murambo village to a commitment to fostering hope and opportunity wherever it's needed most.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
              Watch Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the impact of our work and hear from the communities we serve
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-4xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/oOKYI8M6OZo"
                  title="Huruma Global Support Initiative - Our Story"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500 rounded-full opacity-20"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-purple-500 rounded-full opacity-30 transform -translate-y-1/2"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mt-8"
            >
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover how our journey from Murambo village has grown into a global mission to transform lives through education, empowerment, and sustainable development.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
              Our Strategic Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving holistic development through three interconnected pillars
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={fadeInUp} 
              className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 about-card-hover"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Empowering Men & Women
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Fostering economic independence and resilience through peer-to-peer mentorship, vocational training, and seed funding.
              </motion.p>
              <motion.ul 
                className="text-sm text-gray-600 space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >• Financial Literacy Training</motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >• Business Mentorship</motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >• Seed Funding Programs</motion.li>
              </motion.ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 about-card-hover"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <BookOpen className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Quality Education
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Ensuring every child has access to quality education and nurturing learning environments.
              </motion.p>
              <motion.ul 
                className="text-sm text-gray-600 space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >• PLE Empowerment Project</motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >• "1K Project" Peer Funding</motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >• Holistic Support Programs</motion.li>
              </motion.ul>
            </motion.div>

            <motion.div 
              variants={fadeInUp} 
              className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 about-card-hover"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-6"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Globe className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Community Development
              </motion.h3>
              <motion.p 
                className="text-gray-600 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Strengthening communities through sustainable infrastructure and essential services.
              </motion.p>
              <motion.ul 
                className="text-sm text-gray-600 space-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >• Clean Water Systems</motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >• Sanitation Facilities</motion.li>
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >• Renewable Energy Solutions</motion.li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles are woven into every program, interaction, and decision we make
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="w-8 h-8 text-green-600" />
                </motion.div>
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {value.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                >
                  {value.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Behind every life transformed, every community strengthened and every brighter future at HGSI, you'll find a team driven by deep empathy and unwavering dedication.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-green-100 mb-8"
            >
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Leadership Team</h3>
                  <p className="text-sm text-gray-600">Visionary leaders driving change</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Extended Team</h3>
                  <p className="text-sm text-gray-600">Dedicated professionals creating impact</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Voices of Huruma</h3>
                  <p className="text-sm text-gray-600">Community members and supporters</p>
                </div>
              </div>
            </motion.div>

            <Link href="/team">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center mx-auto"
              >
                <Users className="w-5 h-5 mr-2" />
                Meet the Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-handwriting">
              Get In Touch
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
              Ready to join us in making a difference? We'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-green-100">+256 748 020 214</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-green-100">info@hurumaglobalsupportinit
                  iative.org</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-green-100">P.O. Box 180486, Kampala - Uganda</p>
              </div>
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center mx-auto"
              >
                Join Our Mission
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutPage; 