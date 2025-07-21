'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Heart, 
  Users, 
  BookOpen, 
  Globe,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Shield,
  CheckCircle,
  Gift,
  Target,
  Lightbulb,
  Award
} from 'lucide-react';
import Footer from '../components/Footer';

const DonatePage = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('general');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    anonymous: false
  });

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

  const donationAmounts = [
    { amount: 10, label: 'School Supplies', description: 'Provides basic school materials for one child' },
    { amount: 25, label: 'Monthly Support', description: 'Supports a child\'s education for one month' },
    { amount: 50, label: 'Family Empowerment', description: 'Helps a family with livelihood training' },
    { amount: 100, label: 'Community Impact', description: 'Funds community development projects' },
    { amount: 250, label: 'Sustainable Change', description: 'Creates lasting impact in communities' },
    { amount: 500, label: 'Transformational Gift', description: 'Transforms multiple lives and communities' }
  ];

  const programs = [
    {
      id: 'general',
      name: 'General Fund',
      description: 'Support our overall mission and allow us to allocate funds where they\'re needed most',
      icon: Heart,
      color: 'green'
    },
    {
      id: 'education',
      name: 'Education Programs',
      description: 'Help provide quality education, school supplies, and learning opportunities for children',
      icon: BookOpen,
      color: 'blue'
    },
    {
      id: 'livelihood',
      name: 'Livelihood Training',
      description: 'Support vocational training and business mentorship for adults',
      icon: Target,
      color: 'purple'
    },
    {
      id: 'community',
      name: 'Community Development',
      description: 'Fund infrastructure projects like clean water and sanitation facilities',
      icon: Globe,
      color: 'orange'
    }
  ];

  const impactStories = [
    {
      title: "Sarah's Journey to Education",
      description: "Sarah, a 12-year-old girl from Murambo village, received school supplies and now dreams of becoming a teacher.",
      image: "/images/IMG_0296.webp",
      impact: "Your donation helps children like Sarah access quality education"
    },
    {
      title: "Community Water Project",
      description: "A new clean water system in a rural community now serves 500 families, reducing waterborne diseases.",
      image: "/images/IMG_0307 (1).webp",
      impact: "Your donation builds sustainable infrastructure"
    },
    {
      title: "Business Training Success",
      description: "Maria started a small business after receiving training and seed funding. She now supports her family.",
      image: "/images/image 5.webp",
      impact: "Your donation empowers families economically"
    }
  ];

  const handleDonationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission logic here
    console.log('Donation submitted:', {
      amount: selectedAmount || customAmount,
      program: selectedProgram,
      donorInfo
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
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
              Make a Difference
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your donation transforms lives, builds communities, and creates lasting change
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-2xl font-bold">Airtel Pay: 4392361</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <span className="text-lg">Secure Online Donation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
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
              Your Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your donations are making a real difference in communities
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Children Supported</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">15</h3>
              <p className="text-gray-600">Communities Reached</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">200+</h3>
              <p className="text-gray-600">Families Empowered</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="text-center"
            >
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">5</h3>
              <p className="text-gray-600">Water Projects</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Donation Options Section */}
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
              Choose Your Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select an amount that fits your budget and see the direct impact of your donation
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {donationAmounts.map((option, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${
                  selectedAmount === option.amount 
                    ? 'border-green-500 bg-green-50' 
                    : 'border-gray-100 hover:border-green-300'
                }`}
                onClick={() => setSelectedAmount(option.amount)}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-2">
                    ${option.amount}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {option.label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {option.description}
                  </p>
                  {selectedAmount === option.amount && (
                    <div className="mt-4">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Custom Amount */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Custom Amount
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold text-gray-800">$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                  }}
                  placeholder="Enter amount"
                  className="flex-1 text-2xl font-bold text-gray-800 bg-transparent border-none outline-none"
                />
              </div>
              <p className="text-gray-600 text-sm mt-2 text-center">
                Every dollar makes a difference
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Selection Section */}
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
              Choose Your Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Direct your donation to the area that matters most to you
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {programs.map((program, index) => (
              <motion.div
                key={program.id}
                variants={fadeInUp}
                className={`bg-gradient-to-br from-${program.color}-50 to-${program.color}-100 rounded-2xl p-8 cursor-pointer border-2 transition-all duration-300 ${
                  selectedProgram === program.id 
                    ? `border-${program.color}-500 shadow-xl` 
                    : 'border-transparent hover:border-gray-300'
                }`}
                onClick={() => setSelectedProgram(program.id)}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-${program.color}-500 rounded-full flex items-center justify-center`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {program.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                    {selectedProgram === program.id && (
                      <div className="mt-4 flex items-center text-green-600">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        <span className="font-semibold">Selected</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
              Complete Your Donation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your information is secure and will only be used to process your donation
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-xl"
            >
              <form onSubmit={handleDonationSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Donation Amount
                  </label>
                  <div className="text-2xl font-bold text-green-600">
                    ${selectedAmount || customAmount || '0'}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Program
                  </label>
                  <div className="text-lg text-gray-800">
                    {programs.find(p => p.id === selectedProgram)?.name}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={donorInfo.phone}
                    onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={donorInfo.anonymous}
                    onChange={(e) => setDonorInfo({...donorInfo, anonymous: e.target.checked})}
                    className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-700">
                    Make this donation anonymous
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <CreditCard className="w-5 h-5" />
                  <span>Complete Donation</span>
                </motion.button>
              </form>
            </motion.div>

            {/* Security & Trust */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Secure & Trusted</h3>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>SSL encrypted transactions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>PCI DSS compliant</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span>Your data is protected</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Gift className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Tax Deductible</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Your donation is tax-deductible. You'll receive a receipt for your records.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600">
                    <strong>Organization:</strong> Huruma Global Support Initiative Limited<br/>
                    <strong>Address:</strong> P.O. Box 180486, Kampala - Uganda<br/>
                    <strong>Phone:</strong> +256 748 020 214
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Alternative Ways to Give</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Airtel Money</h4>
                    <p className="text-lg font-bold text-green-600">4392361</p>
                    <p className="text-sm text-gray-600">Send to: Huruma Global Support Initiative</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Bank Transfer</h4>
                    <p className="text-sm text-gray-600">Contact us for bank details</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
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
              Stories of Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your donations are transforming lives and communities
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {impactStories.map((story, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {story.description}
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-600">
                      {story.impact}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Questions About Donating?
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
              We're here to help. Contact us for any questions about your donation.
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
                <p className="text-green-100">info@hurumaglobalsupportinitiative.org</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-green-100">P.O. Box 180486, Kampala - Uganda</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center mx-auto"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DonatePage; 