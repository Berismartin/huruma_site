'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Heart, 
  Users, 
  HandHeart, 
  Building2, 
  Megaphone,
  ArrowRight,
  Calendar,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Gift,
  Globe,
  BookOpen,
  Shield,
  TrendingUp
} from 'lucide-react';
import Footer from '../components/Footer';
import GetInvolvedHeader from '../components/GetInvolvedHeader';

const GetInvolvedPage = () => {
  const involvementOptions = [
    {
      icon: Heart,
      title: "Donate",
      description: "Your financial support directly impacts lives and communities. Every contribution makes a difference.",
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      features: [
        "One-time donations",
        "Monthly recurring gifts",
        "Project-specific funding",
        "Transparent fund allocation"
      ],
      cta: "Donate Now",
      link: "#donate"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and contribute your time, skills, and passion to our mission.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      features: [
        "Local community projects",
        "Skills-based volunteering",
        "Remote support opportunities",
        "Training and mentorship"
      ],
      cta: "Join Our Team",
      link: "#volunteer"
    },
    {
      icon: Building2,
      title: "Partnerships",
      description: "Partner with us to create lasting impact. We collaborate with organizations, businesses, and institutions.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      features: [
        "Corporate partnerships",
        "NGO collaborations",
        "Academic partnerships",
        "Community alliances"
      ],
      cta: "Partner With Us",
      link: "#partnerships"
    },
    {
      icon: Megaphone,
      title: "Advocacy",
      description: "Help us raise awareness about our mission and the communities we serve. Your voice matters.",
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      features: [
        "Social media advocacy",
        "Community outreach",
        "Event participation",
        "Story sharing"
      ],
      cta: "Spread the Word",
      link: "#advocacy"
    }
  ];

  const volunteerRoles = [
    {
      title: "Education Support",
      description: "Help with tutoring, mentoring, and educational program delivery.",
      commitment: "2-4 hours/week",
      location: "Local communities",
      skills: ["Teaching", "Patience", "Communication"],
      icon: BookOpen
    },
    {
      title: "Community Outreach",
      description: "Engage with communities, conduct needs assessments, and build relationships.",
      commitment: "3-5 hours/week",
      location: "Various locations",
      skills: ["Communication", "Cultural sensitivity", "Organization"],
      icon: Users
    },
    {
      title: "Administrative Support",
      description: "Assist with office tasks, data entry, and program coordination.",
      commitment: "5-10 hours/week",
      location: "Kampala office",
      skills: ["Organization", "Computer skills", "Attention to detail"],
      icon: Shield
    },
    {
      title: "Fundraising",
      description: "Help organize fundraising events and donor engagement activities.",
      commitment: "Flexible",
      location: "Remote/Local",
      skills: ["Networking", "Event planning", "Communication"],
      icon: Gift
    }
  ];

  const donationTiers = [
    {
      name: "Supporter",
      amount: "50,000 UGX",
      description: "Provides school supplies for one student",
      benefits: [
        "Monthly impact report",
        "Thank you certificate",
        "Social media recognition"
      ],
      color: "border-green-200 bg-green-50"
    },
    {
      name: "Champion",
      amount: "100,000 UGX",
      description: "Supports a family's basic needs for a month",
      benefits: [
        "Quarterly impact report",
        "Personal thank you letter",
        "Invitation to events",
        "Impact story sharing"
      ],
      color: "border-blue-200 bg-blue-50"
    },
    {
      name: "Partner",
      amount: "500,000 UGX",
      description: "Funds a complete educational program",
      benefits: [
        "Personalized impact reports",
        "Direct communication with team",
        "Site visit opportunities",
        "Naming rights for programs"
      ],
      color: "border-purple-200 bg-purple-50"
    }
  ];

  const upcomingEvents = [
    {
      title: "Community Health Fair",
      date: "March 15, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Murambo Village",
      description: "Free health screenings, education, and wellness activities for the community.",
      volunteers: "20 needed",
      icon: Heart
    },
    {
      title: "Youth Skills Workshop",
      date: "March 22, 2024",
      time: "10:00 AM - 2:00 PM",
      location: "Kampala Community Center",
      description: "Computer skills, entrepreneurship, and leadership training for young people.",
      volunteers: "15 needed",
      icon: BookOpen
    },
    {
      title: "Fundraising Gala",
      date: "April 5, 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Kampala Serena Hotel",
      description: "Annual fundraising event with dinner, entertainment, and impact stories.",
      volunteers: "30 needed",
      icon: Gift
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <GetInvolvedHeader />
      
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
              Get Involved
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Join our mission to transform lives and build stronger communities
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Ways to Get Involved */}
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
              Ways to Get Involved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many ways you can support our mission and make a difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {involvementOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${option.bgColor} rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${option.color} rounded-full flex items-center justify-center mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>{option.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
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
              Volunteer Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our dedicated team of volunteers and make a direct impact in communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {volunteerRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <role.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{role.title}</h3>
                    <p className="text-gray-600 mb-4">{role.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{role.commitment}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{role.location}</span>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-2">Skills needed:</p>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
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
              Donation Tiers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose a donation level that works for you and see the direct impact of your contribution
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {donationTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`border-2 rounded-2xl p-8 ${tier.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">{tier.amount}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-300">
                  Donate Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
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
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us at these events and make a difference in person
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <event.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{event.volunteers}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{event.description}</p>
                
                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full font-semibold transition-colors duration-300">
                  Register to Volunteer
                </button>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
              Join our community of changemakers and help us create lasting impact in communities across Uganda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center justify-center">
                <span>Start Volunteering</span>
                <Users className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300 flex items-center justify-center">
                <span>Make a Donation</span>
                <Heart className="w-5 h-5 ml-2" />
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

export default GetInvolvedPage; 