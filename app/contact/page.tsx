'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Users,
  Building,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Footer from '../components/Footer';
import ContactHeader from '../components/ContactHeader';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using our API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitting(false);
        
        // Show success popup first
        setShowSuccessPopup(true);
        
        // Hide popup after 3 seconds and show form success message
        setTimeout(() => {
          setShowSuccessPopup(false);
          setIsSubmitted(true);
          
          // Reset form after additional 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }, 5000);
        }, 3000);
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
      
    } catch (error: any) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      
      // Create mailto link as fallback
      const mailtoLink = `mailto:info@hurumaglobalsupportinitiative.org?subject=${encodeURIComponent(
        `${formData.subject} - Contact from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      // Show error and offer fallback
      const useMailto = confirm(
        `Email sending failed: ${error.message}\n\nWould you like to open your email client as a fallback?`
      );
      
      if (useMailto) {
        window.location.href = mailtoLink;
        setShowSuccessPopup(true);
        setTimeout(() => {
          setShowSuccessPopup(false);
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }, 5000);
        }, 3000);
      }
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+256 748 020 214",
      description: "Reach us at any time",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@hurumaglobalsupportinit\niative.org",
      description: "We'll respond within 24 hours",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MapPin,
      title: "Address",
      value: "Makonzi zone Sserwadda Close Bukoto",
      description: "Main office location",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Donation",
      value: "Airtel pay code: 4392361",
      description: "DFCU Bank: 01490016746558",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Fri: 8:00 AM - 5:00 PM",
      description: "Uganda Standard Time (EAT)",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const teamContacts = [
    {
      name: "Nabukalu Diana",
      role: "CEO & Co-Founder",
      email: "diana@hurumaglobalsupportinitiative.org",
      phone: "+256 748 020 214",
      image: "/team/diana nabukalu.jpg",
      department: "Leadership"
    },
    {
      name: "Nabatanzi Edna",
      role: "Head Finance and Administration",
      email: "edna@hurumaglobalsupportinitiative.org",
      phone: "+256 XXX XXX XXX",
      image: "/team/edna nabatanzi.jpg",
      department: "Finance"
    },
    {
      name: "Mbaguta Brian",
      role: "Head of Programs",
      email: "brian@hurumaglobalsupportinitiative.org",
      phone: "+256 XXX XXX XXX",
      image: "/team/brian mbaguta.jpg",
      department: "Programs"
    }
  ];

  const faqs = [
    {
      question: "How can I volunteer with Huruma?",
      answer: "You can volunteer by filling out our volunteer application form, attending our orientation sessions, or contacting us directly. We have various opportunities for different skill sets and time commitments."
    },
    {
      question: "How do I make a donation?",
      answer: "You can donate through our secure online platform, bank transfer, or by contacting our finance team. We accept both one-time and recurring donations."
    },
    {
      question: "Can I visit your projects in person?",
      answer: "Yes! We welcome visitors to our projects. Please contact us in advance to arrange a site visit and ensure we can provide you with the best experience."
    },
    {
      question: "How can my organization partner with Huruma?",
      answer: "We're always open to partnerships! Please reach out to our partnerships team with details about your organization and how you'd like to collaborate."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <ContactHeader />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-green-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/IMG_E2860.webp"
            alt="Contact Us Background"
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
              Contact Us
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get in touch with our team and let's work together to create positive change
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
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
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Reach out to us through any of these channels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                <p className="text-gray-600 mb-2 font-medium text-sm leading-relaxed">{info.value}</p>
                <p className="text-xs text-gray-500">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Have a question, suggestion, or want to get involved? We'd love to hear from you.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-2xl p-8 text-center shadow-lg"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Message Sent Successfully!</h3>
                  <p className="text-green-700 text-lg leading-relaxed">Your message has been sent directly to our team at <span className="font-semibold">info@hurumaglobalsupportinitiative.org</span>. We've received your inquiry and will respond promptly.</p>
                  <p className="text-green-600 text-sm mt-4">We'll get back to you within 24 hours!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm text-black placeholder-gray-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm text-black placeholder-gray-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-black mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm text-black"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunities</option>
                      <option value="donation">Donation Information</option>
                      <option value="partnership">Partnership Inquiry</option>
                      <option value="media">Media/Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white shadow-sm text-black placeholder-gray-500"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map and Office Info */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Visit Our Office</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 mb-8 text-center shadow-lg">
                <Globe className="w-20 h-20 text-green-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Kampala, Uganda</h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Our main office is located in the heart of Kampala, serving communities across Uganda.
                </p>
                <div className="bg-white rounded-xl p-6 space-y-3 text-left shadow-sm">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600 text-sm">P.O. Box 180486, Kampala - Uganda</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Hours</p>
                      <p className="text-gray-600 text-sm">Monday - Friday, 8:00 AM - 5:00 PM EAT</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600 text-sm">+256 748 020 214</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">+256 748 020 214</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">info@hurumaglobalsupportinitiative.org</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">24/7 Emergency Support Available</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect directly with our leadership team for specific inquiries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamContacts.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center mb-6">
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-green-600 font-semibold">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.department}</p>
                </div>
                
                <div className="space-y-3">
                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">{member.email}</span>
                  </a>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{member.phone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about getting involved with Huruma
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
              Whether you want to volunteer, donate, or partner with us, we're here to help you make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/get-involved"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center justify-center shadow-lg"
              >
                <span>Get Involved</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors duration-300 flex items-center justify-center"
              >
                <span>Learn More</span>
                <MessageCircle className="w-5 h-5 ml-2" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Popup */}
      {showSuccessPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-3xl p-8 text-center shadow-2xl max-w-md w-full"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", duration: 0.6 }}
              className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <motion.div
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <CheckCircle className="w-12 h-12 text-white" />
              </motion.div>
            </motion.div>
            
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl font-bold text-gray-800 mb-4"
            >
              Email Sent Successfully!
            </motion.h3>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-gray-600 leading-relaxed"
            >
              Your message has been delivered to our team. We'll respond within 24 hours.
            </motion.p>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1, duration: 0.3 }}
              className="mt-6"
            >
              <div className="w-full bg-green-100 rounded-full h-1">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 3 }}
                  className="bg-green-500 h-1 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage; 