'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  BookOpen, 
  Users, 
  Globe, 
  Heart, 
  Target, 
  Award,
  ArrowRight,
  Play,
  Calendar,
  MapPin,
  Users2,
  TrendingUp,
  CheckCircle,
  Star
} from 'lucide-react';
import Footer from '../components/Footer';
import OurWorkHeader from '../components/OurWorkHeader';

const OurWorkPage = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "PLE Empowerment Project",
      description: "Supporting Primary 7 students with scholastic materials, revision guides, and mentorship to excel in their final examinations.",
      impact: "500+ students supported",
      status: "Active",
      color: "green",
      image: "/images/P7_STUDENTS.png",
      features: [
        "Scholastic materials provision",
        "Revision guides and textbooks",
        "Mentorship and guidance",
        "Exam preparation support"
      ]
    },
    {
      icon: Users,
      title: "1K Project - Peer Funding",
      description: "A community-driven initiative where members contribute 1,000 shillings monthly to support educational needs and community projects.",
      impact: "1,000+ monthly contributors",
      status: "Active",
      color: "blue",
      image: "/images/IMG_0314.webp",
      features: [
        "Monthly peer contributions",
        "Educational support fund",
        "Community project funding",
        "Transparent fund management"
      ]
    },
    {
      icon: Globe,
      title: "Sustainable Livelihoods",
      description: "Empowering communities through vocational training, business mentorship, and seed funding for sustainable economic development.",
      impact: "200+ entrepreneurs supported",
      status: "Active",
      color: "purple",
      image: "/images/IMG_0372.webp",
      features: [
        "Vocational skills training",
        "Business mentorship",
        "Seed funding programs",
        "Market access support"
      ]
    }
  ];

  const impactAreas = [
    {
      title: "Education",
      description: "Ensuring every child has access to quality education and the resources they need to succeed.",
      icon: BookOpen,
      stats: "500+",
      metric: "Students Supported",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Community Development",
      description: "Building stronger, more resilient communities through sustainable infrastructure and essential services.",
      icon: Globe,
      stats: "50+",
      metric: "Communities Served",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Economic Empowerment",
      description: "Creating opportunities for financial independence through skills training and business support.",
      icon: TrendingUp,
      stats: "200+",
      metric: "Entrepreneurs Empowered",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Health & Wellbeing",
      description: "Improving community health through clean water, sanitation, and healthcare access programs.",
      icon: Heart,
      stats: "1000+",
      metric: "Lives Impacted",
      color: "from-red-500 to-red-600"
    }
  ];

  const successStories = [
    {
      title: "A Bright Future Begins with a Book",
      location: "Murambo Catholic Nursery and Primary School",
      description: "Our first major project that started it all. We provided scholastic materials to seven P7 students who were desperate for revision guides.",
      impact: "100% pass rate achieved",
      image: "/images/P7_STUDENTS.png",
      quote: "The sparkle of hope in those children's eyes was undeniable. We knew this couldn't be a one-off.",
      author: "Nabukalu Diana",
      role: "CEO & Co-Founder"
    },
    {
      title: "From Boda Boda to Business Owner",
      location: "Kampala Metropolitan Area",
      description: "Supporting Charles, a boda boda rider, to expand his business and provide better education for his children.",
      impact: "Family income increased by 300%",
      image: "/images/IMG_0296.webp",
      quote: "These books, these supplies—they're heavy. But I carry them like they're gold. Because they are.",
      author: "Charles",
      role: "Community Member"
    }
  ];

  const upcomingProjects = [
    {
      title: "Clean Water Initiative",
      description: "Installing clean water systems in rural communities to improve health and reduce waterborne diseases.",
      target: "5 communities",
      timeline: "Q2 2024",
      status: "Planning",
      icon: Globe
    },
    {
      title: "Digital Literacy Program",
      description: "Providing computer skills training to youth and adults to improve employability and digital access.",
      target: "100 participants",
      timeline: "Q3 2024",
      status: "Planning",
      icon: BookOpen
    },
    {
      title: "Women's Entrepreneurship Hub",
      description: "Creating a dedicated space for women entrepreneurs to access training, mentorship, and networking opportunities.",
      target: "50 women",
      timeline: "Q4 2024",
      status: "Planning",
      icon: Users2
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <OurWorkHeader />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-green-600 to-blue-600 overflow-hidden">
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
              Our Work
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming lives through sustainable programs and community-driven initiatives
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Impact Overview */}
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
              Our Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable change across communities through our comprehensive programs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${area.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <area.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                <div className="text-3xl font-bold text-green-600">{area.stats}</div>
                <p className="text-sm text-gray-500">{area.metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Programs */}
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
              Active Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our core initiatives that are creating lasting change in communities
            </p>
          </motion.div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold">{program.impact}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          program.color === 'green' ? 'bg-green-500' :
                          program.color === 'blue' ? 'bg-blue-500' :
                          'bg-purple-500'
                        }`}>
                          {program.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${
                      program.color === 'green' ? 'from-green-500 to-green-600' :
                      program.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      'from-purple-500 to-purple-600'
                    } rounded-full flex items-center justify-center`}>
                      <program.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-800">{program.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">{program.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real impact, real stories from the communities we serve
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{story.title}</h3>
                    <p className="text-green-300 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {story.location}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  
                  <div className="bg-green-50 rounded-lg p-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-800">{story.impact}</span>
                    </div>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-gray-700 italic">"{story.quote}"</p>
                    <p className="text-sm text-gray-500 mt-2">- {story.author}, {story.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
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
              Upcoming Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exciting new initiatives in development to expand our impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <project.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Target:</span>
                    <span className="font-semibold text-gray-800">{project.target}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Timeline:</span>
                    <span className="font-semibold text-gray-800">{project.timeline}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Status:</span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                      {project.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-handwriting">
              Join Our Mission
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
              Be part of the change. Support our programs and help us create lasting impact in communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center justify-center">
                <span>Donate Now</span>
                <Heart className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300 flex items-center justify-center">
                <span>Volunteer</span>
                <Users className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurWorkPage; 