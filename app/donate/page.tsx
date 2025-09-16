'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
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
  Award,
  X,
  AlertTriangle
} from 'lucide-react';
import Footer from '../components/Footer';
import Header from '../components/Header';

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

  // Ref for the donation form section
  const donationFormRef = React.useRef<HTMLDivElement>(null);

  const [errorDialog, setErrorDialog] = useState({
    show: false,
    title: '',
    message: ''
  });

  const [paymentModal, setPaymentModal] = useState({
    show: false,
    checkoutUrl: '',
    orderTrackingId: ''
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
    { amount: 50000, label: 'School Supplies', description: 'Provides basic school materials for one child' },
    { amount: 100000, label: 'Monthly Support', description: 'Supports a child\'s education for one month' },
    { amount: 150000, label: 'Family Empowerment', description: 'Helps a family with livelihood training' },
    { amount: 200000, label: 'Community Impact', description: 'Funds community development projects' },
    { amount: 250000, label: 'Sustainable Change', description: 'Creates lasting impact in communities' },
    { amount: 300000, label: 'Transformational Gift', description: 'Transforms multiple lives and communities' }
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
      image: "/images2/IMG_0898.jpg",
      impact: "Your donation empowers families economically"
    }
  ];

  const [isProcessing, setIsProcessing] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const showError = (title: string, message: string) => {
    setErrorDialog({
      show: true,
      title,
      message
    });
  };

  const closeErrorDialog = () => {
    setErrorDialog({
      show: false,
      title: '',
      message: ''
    });
  };

  const closePaymentModal = () => {
    setPaymentModal({
      show: false,
      checkoutUrl: '',
      orderTrackingId: ''
    });
    setIframeLoaded(false);
  };

  // Function to scroll to donation form
  const scrollToDonationForm = () => {
    if (donationFormRef.current) {
      donationFormRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to handle donation amount selection
  const handleAmountSelection = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount(''); // Clear custom amount when preset is selected
    // Scroll to form after a short delay to ensure state is updated
    setTimeout(() => {
      scrollToDonationForm();
    }, 100);
  };

  // Function to handle custom amount input
  const handleCustomAmountChange = (value: string) => {
    if (value === '' || parseInt(value) >= 0) {
      setCustomAmount(value);
      setSelectedAmount(null);
      // Scroll to form if amount is valid
      if (parseInt(value) > 0) {
        setTimeout(() => {
          scrollToDonationForm();
        }, 300);
      }
    }
  };

  const checkPaymentStatus = async (orderTrackingId: string) => {
    try {
      const response = await fetch('/api/pesapal/status', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderTrackingId })
      });

      const result = await response.json();
      
      if (response.ok) {
        // Payment was successful, redirect to success page
        if (result.status === 'COMPLETED' || result.status === 'SUCCESS') {
          window.location.href = '/donation-success';
        } else {
          showError('Payment Status', `Payment status: ${result.status}`);
        }
      } else {
        showError('Status Check Failed', result.error || 'Could not verify payment status');
      }
    } catch (error: any) {
      console.error('Error checking payment status:', error);
      showError('Status Check Error', 'Could not check payment status. Please contact support.');
    }
  };

  const handleDonationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const donationAmount = selectedAmount || parseInt(customAmount) || 0;
    
    if (donationAmount <= 0) {
      showError('Invalid Amount', 'Please select or enter a valid donation amount');
      return;
    }

    if (!donorInfo.name || !donorInfo.email) {
      showError('Missing Information', 'Please fill in all required fields (Name and Email)');
      return;
    }

    setIsProcessing(true);

    try {
      // Call our API to initiate payment
      const response = await fetch('/api/pesapal/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: donationAmount,
          email: donorInfo.email,
          phone: donorInfo.phone,
          name: donorInfo.name,
          program: programs.find(p => p.id === selectedProgram)?.name || 'General Fund'
        })
      });

      const result = await response.json();

      if (response.ok && result.checkoutUrl) {
        // Show payment modal with iframe instead of redirecting
        setIframeLoaded(false);
        setPaymentModal({
          show: true,
          checkoutUrl: result.checkoutUrl,
          orderTrackingId: result.transactionId || ''
        });
      } else {
        throw new Error(result.error || 'Payment initiation failed');
      }
      
    } catch (error: any) {
      console.error('Error processing donation:', error);
      showError(
        'Payment Failed', 
        error.message || 'There was an error processing your donation. Please try again later.'
      );
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 relative">
      <Header />
      

      
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-r from-green-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_0339.webp"
            alt="Donation Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/80 to-blue-600/80"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
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

             {/* Donation Form Section - Side by Side Layout */}
       <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50 relative">
         <div className="max-w-7xl mx-auto">
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
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Your information is secure and will only be used to process your donation
             </p>
           </motion.div>

           <div className="grid lg:grid-cols-2 gap-12">
             {/* Left Side - Donation Amount Selection */}
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="space-y-8"
             >
               <div className="bg-white rounded-2xl p-8 shadow-xl">
                 <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                   Choose Your Impact
                 </h3>
                 
                 {/* Donation Amount Options */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                   {donationAmounts.map((option, index) => (
                     <motion.div
                       key={index}
                       className={`bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 cursor-pointer border-2 transition-all duration-300 ${
                         selectedAmount === option.amount 
                           ? 'border-green-500 bg-green-50' 
                           : 'border-gray-200 hover:border-green-300'
                       }`}
                       onClick={() => handleAmountSelection(option.amount)}
                       whileHover={{ scale: 1.02 }}
                     >
                       <div className="text-center">
                         <div className="text-xl font-bold text-gray-800 mb-1">
                           UGX {option.amount.toLocaleString()}
                         </div>
                         <h4 className="text-sm font-semibold text-gray-800 mb-1">
                           {option.label}
                         </h4>
                         <p className="text-xs text-gray-600">
                           {option.description}
                         </p>
                         {selectedAmount === option.amount && (
                           <div className="mt-2">
                             <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                           </div>
                         )}
                       </div>
                     </motion.div>
                   ))}
                 </div>

                 {/* Custom Amount */}
                 <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl p-6 border border-green-200">
                   <h4 className="text-lg font-bold text-gray-800 mb-4 text-center">
                     💰 Custom Amount
                   </h4>
                   <div className="relative">
                     <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg font-bold text-green-600">
                       UGX
                     </div>
                     <input
                       type="number"
                       value={customAmount}
                       onChange={(e) => handleCustomAmountChange(e.target.value)}
                       placeholder="Enter amount"
                       className="w-full pl-16 pr-12 py-3 text-xl font-bold text-gray-800 bg-white border-2 border-green-300 rounded-xl focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-300"
                     />
                     <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                       <Gift className="w-6 h-6 text-green-500" />
                     </div>
                   </div>
                   <div className="mt-3 text-center">
                     <p className="text-green-600 font-semibold text-sm">
                       No limit on generosity
                     </p>
                   </div>
                   {customAmount && parseInt(customAmount) > 0 && (
                     <motion.div
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={{ opacity: 1, scale: 1 }}
                       className="mt-3 bg-green-100 rounded-lg p-3 text-center"
                     >
                       <p className="text-green-800 font-semibold text-sm">
                         UGX {parseInt(customAmount).toLocaleString()} will make a meaningful impact
                       </p>
                     </motion.div>
                   )}
                 </div>
               </div>
             </motion.div>

             {/* Right Side - Donation Form */}
             <motion.div
               ref={donationFormRef}
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-white rounded-2xl p-8 shadow-xl"
             >
              <form onSubmit={handleDonationSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Donation Amount
                  </label>
                  <div className="text-2xl font-bold text-green-600">
                    UGX {(selectedAmount || parseInt(customAmount) || 0).toLocaleString()}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Program
                  </label>
                  <div className="text-lg text-gray-800">
                    {programs.find(p => p.id === selectedProgram)?.name}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={donorInfo.name}
                    onChange={(e) => setDonorInfo({...donorInfo, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm text-black placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={donorInfo.email}
                    onChange={(e) => setDonorInfo({...donorInfo, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm text-black placeholder-gray-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={donorInfo.phone}
                    onChange={(e) => setDonorInfo({...donorInfo, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm text-black placeholder-gray-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  {/* <input
                    type="checkbox"
                    id="anonymous"
                    checked={donorInfo.anonymous}
                    onChange={(e) => setDonorInfo({...donorInfo, anonymous: e.target.checked})}
                    className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                  />
                  <label htmlFor="anonymous" className="text-sm text-gray-700">
                    Make this donation anonymous
                  </label> */}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={(!selectedAmount && !customAmount) || !donorInfo.name || !donorInfo.email || isProcessing}
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:cursor-not-allowed"
                >
                  {isProcessing ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                  <CreditCard className="w-5 h-5" />
                      <span>Pay with Pesapal</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                    🔒 Secure payment powered by <span className="font-semibold text-blue-600">Pesapal</span>
                  </p>
                  <div className="flex justify-center items-center space-x-4 mt-2">
                    {/* <span className="text-xs text-gray-500">Accepts:</span>
                    <div className="flex space-x-2">
                      <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                      <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                      <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">MTN</div>
                      <div className="w-8 h-5 bg-yellow-600 rounded text-white text-xs flex items-center justify-center font-bold">AIR</div>
                  </div> */}
                  </div>
                </div>
              </form>
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

            <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center mx-auto"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Payment Modal */}
      {paymentModal.show && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl w-full max-w-4xl h-[80vh] shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Secure Payment</h3>
                  <p className="text-green-100 text-sm">Powered by Pesapal</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    if (paymentModal.orderTrackingId) {
                      checkPaymentStatus(paymentModal.orderTrackingId);
                    }
                  }}
                  className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 flex items-center space-x-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Check Status</span>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closePaymentModal}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <X className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Loading State */}
            <div className="relative h-full">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: iframeLoaded ? 0 : 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gray-50 flex items-center justify-center z-10 pointer-events-none"
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full mx-auto mb-4"
                  />
                  <p className="text-gray-600 font-semibold">Loading secure payment...</p>
                </div>
              </motion.div>

              {/* Iframe Container */}
              <div className="h-full p-4">
                <iframe
                  src={paymentModal.checkoutUrl}
                  className="w-full h-full border-0 rounded-lg"
                  title="Pesapal Payment Checkout"
                  allow="payment; microphone; camera"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-top-navigation allow-popups"
                  onLoad={() => {
                    setIframeLoaded(true);
                  }}
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 border-t">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>Your payment is protected by 256-bit SSL encryption</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closePaymentModal}
                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg font-semibold transition-colors duration-200"
                  >
                    Cancel Payment
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      if (paymentModal.orderTrackingId) {
                        checkPaymentStatus(paymentModal.orderTrackingId);
                      }
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-lg font-semibold transition-all duration-200 flex items-center space-x-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Verify Payment</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Error Dialog */}
      {errorDialog.show && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
          >
            {/* Animated X Icon */}
            <div className="flex justify-center mb-6">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2,
                  ease: "easeOut"
                }}
                className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <X className="w-8 h-8 text-red-600" />
                </motion.div>
              </motion.div>
            </div>

            {/* Error Content */}
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="text-2xl font-bold text-gray-800 mb-4"
              >
                {errorDialog.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="text-gray-600 leading-relaxed mb-6"
              >
                {errorDialog.message}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={closeErrorDialog}
                  className="flex-1 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  Try Again
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    closeErrorDialog();
                    // Optionally scroll to contact section or show contact info
                  }}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                >
                  Get Help
                </motion.button>
              </motion.div>

              {/* Additional Help Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="text-sm text-gray-500 mt-4"
              >
                If the problem persists, please contact our support team
              </motion.p>
            </div>

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              onClick={closeErrorDialog}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4 text-gray-600" />
            </motion.button>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DonatePage; 