'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Heart, 
  Users, 
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Star,
  Award,
  Globe,
  Lightbulb,
  Shield,
  Target
} from 'lucide-react';
import Footer from '../components/Footer';

const TeamPage = () => {
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

  const boardMembers = [
    {
      name: "Nabukalu Diana",
      role: "Chair",
      image: "/team/diana nabukalu.jpg",
      title: "The Founding Catalyst",
      bio: "Nabukalu Diana is the Founding Catalyst behind Huruma Global Support Initiative (HGSI). Her journey began with a quiet ache—witnessing children and families brimming with unfulfilled potential, weighed down not by a lack of ability but by a lack of opportunity. What began as empathy grew into a powerful conviction: that compassion must be translated into action—strategic, persistent, and deeply rooted in dignity.",
      quote: "Empathy must evolve into strategy. Dignity is not given it is restored. And that is the work of HGSI.",
      socials: {
        email: "diana@hurumaglobalsupportinitiative.org"
      }
    },
    {
      name: "Nabatanzi Edna",
      role: "Vice Chair",
      image: "/team/edna nabatanzi.jpg",
      title: "The Trust Builder",
      bio: "Raised on sacrifice and resilience, I know what it means to go without — and act like all is well. My mother's strength put me through school when we had nothing. Through the Huruma Global Support Initiative, I now work to ensure no Ugandan has to act, sacrifice alone, or lose hope. One life at a time, we rise together.",
      quote: "Raised on sacrifice and resilience, I know what it means to go without — and act like all is well. One life at a time, we rise together.",
      socials: {
        email: "edna@hurumaglobalsupportinitiative.org"
      }
    },
    {
      name: "Mbaguta Brian",
      role: "Board Secretary",
      image: "/team/brian mbaguta.jpg",
      title: "The Advocate for the Forgotten",
      bio: "I joined HGSI because I could not ignore the silent cries of children and women who simply need someone to believe in them. Huruma is more than a team—it's a family, with a mission to restore dignity, create opportunity, and bring light where there's been darkness for too long. Every step we take brings hope to someone who thought they were forgotten. Being part of this journey is not just my calling—it's my purpose.",
      quote: "I joined HGSI because I could not ignore the silent cries of children and women who simply need someone to believe in them.",
      socials: {
        email: "brian@hurumaglobalsupportinitiative.org"
      }
    },
    {
      name: "Lukermoi-Agaba Ryan",
      role: "Board Member",
      image: "/team/ryan lukermoi.jpg",
      title: "The Youth Empowerment Voice/Legacy bearer",
      bio: "Raised by a mother who led with compassion, I saw firsthand how care can be a form of power. She didn't just employ people—she nurtured them, educated them, and treated each like family. That legacy shaped me. Through HGSI, I carry her example forward, working to ensure every Ugandan feels seen, supported, and valued. We don't just change lives—we carry each other forward, a step at a time.",
      quote: "Young people are not just beneficiaries—they are leaders in motion.",
      socials: {
        email: "ryan@hurumaglobalsupportinitiative.org"
      }
    },
    {
      name: "Richard Jones Odong",
      role: "Board Member",
      image: "/team/richard odong.jpg",
      title: "The Narrative Weaver",
      bio: "Odong is the storyteller behind the movement—the keeper of Huruma Global Support Initiative's voice and soul. As Director of Communications and Storytelling and a Co-Founder & Board Member, Odong ensures that the heart of the work is not only felt—but heard, seen, and remembered.",
      quote: "Stories don't just move people—they move people to act. That's how change begins.",
      socials: {
        email: "odong@hurumaglobalsupportinitiative.org"
      }
    }
  ];

  const leadershipTeam = [
    {
      name: "Nabukalu Diana",
      role: "CEO",
      image: "/team/diana nabukalu.jpg",
      title: "The Founding Catalyst",
      bio: "Nabukalu Diana is the Founding Catalyst behind Huruma Global Support Initiative (HGSI). Her journey began with a quiet ache—witnessing children and families brimming with unfulfilled potential, weighed down not by a lack of ability but by a lack of opportunity. What began as empathy grew into a powerful conviction: that compassion must be translated into action—strategic, persistent, and deeply rooted in dignity.",
      quote: "Empathy must evolve into strategy. Dignity is not given it is restored. And that is the work of HGSI.",
      socials: {
        email: "diana@hurumaglobalsupportinitiative.org"
      }
    },
    {
      name: "Nabatanzi Edna",
      role: "Head Finance and Administration",
      image: "/team/edna nabatanzi.jpg",
      title: "The Trust Builder",
      bio: "Raised on sacrifice and resilience, I know what it means to go without — and act like all is well. My mother's strength put me through school when we had nothing. Through the Huruma Global Support Initiative, I now work to ensure no Ugandan has to act, sacrifice alone, or lose hope. One life at a time, we rise together.",
      quote: "Raised on sacrifice and resilience, I know what it means to go without — and act like all is well. One life at a time, we rise together.",
      socials: {
        email: "edna@hurumaglobalsupportinitiative.org"
      }
    },
    {
      name: "Mbaguta Brian",
      role: "Head Programs",
      image: "/team/brian mbaguta.jpg",
      title: "The Advocate for the Forgotten",
      bio: "I joined HGSI because I could not ignore the silent cries of children and women who simply need someone to believe in them. Huruma is more than a team—it's a family, with a mission to restore dignity, create opportunity, and bring light where there's been darkness for too long. Every step we take brings hope to someone who thought they were forgotten. Being part of this journey is not just my calling—it's my purpose.",
      quote: "I joined HGSI because I could not ignore the silent cries of children and women who simply need someone to believe in them.",
      socials: {
        email: "brian@hurumaglobalsupportinitiative.org"
      }
    },
    {
      name: "Lukermoi-Agaba Ryan",
      role: "Head Youth and Volunteer Engagement",
      image: "/team/ryan lukermoi.jpg",
      title: "The Youth Empowerment Voice/Legacy bearer",
      bio: "Raised by a mother who led with compassion, I saw firsthand how care can be a form of power. She didn't just employ people—she nurtured them, educated them, and treated each like family. That legacy shaped me. Through HGSI, I carry her example forward, working to ensure every Ugandan feels seen, supported, and valued. We don't just change lives—we carry each other forward, a step at a time.",
      quote: "Young people are not just beneficiaries—they are leaders in motion.",
      socials: {
        email: "ryan@hurumaglobalsupportinitiative.org"
      }
    },
    {
      name: "Richard Jones Odong",
      role: "Head Communications and Storytelling",
      image: "/team/richard odong.jpg",
      title: "The Narrative Weaver",
      bio: "Odong is the storyteller behind the movement—the keeper of Huruma Global Support Initiative's voice and soul. As Director of Communications and Storytelling and a Co-Founder & Board Member, Odong ensures that the heart of the work is not only felt—but heard, seen, and remembered.",
      quote: "Stories don't just move people—they move people to act. That's how change begins.",
      socials: {
        email: "odong@hurumaglobalsupportinitiative.org"
      }
    },
    {
      name: "Mbaguta Henry",
      role: "Head ICT",
      image: "/team/henry mbaguta.jpg",
      title: "The Digital Strategist",
      bio: "Mbaguta leads HGSI's ICT operations with vision, precision, and purpose. With a background in Information Technology, management, and corporate relations, Mbaguta is the driving force behind building the digital backbone that powers the HGSI's mission—from secure data systems and field connectivity to partner communications and reporting platforms.",
      quote: "When partners believe in the cause, transformation becomes unstoppable.",
      socials: {
        email: "henry@hurumaglobalsupportinitiative.org"
      }
    },
    {
      name: "Eric Okiria",
      role: "Head Impact and Learning",
      image: "/team/eric okiria.jpg",
      title: "The Impact Architect",
      bio: "I joined the Huruma Global Support Initiative team because I believe every child deserves to feel known, valued, and equipped for the future. Volunteering here has shown me that change happens not just through grand gestures, but through daily acts of care and belief in each child's potential. I'm proud to stand with HGSI, helping build a community where each child can grow up loved, educated, and ready to give back.",
      quote: "We don't just measure outcomes. We measure what matters to the people we serve.",
      socials: {
        email: "eric@hurumaglobalsupportinitiative.org"
      }
    }
  ];

  const extendedTeam = [
    {
      name: "Luyima Fredrick",
      role: "Head Partnerships",
      image: "/team/fred luyima.jpg",
      title: "The Connector",
      bio: "Luyima is the strategic force behind Huruma Global Support Initiative's partnerships, fundraising, and external relations. With a strong background in management and corporate engagement, Luyima leads efforts to mobilize the resources that turn vision into reality—one partnership, one investment, one purpose-driven collaboration at a time.",
      quote: "When people believe in the vision, they invest—not just with money, but with purpose and then transformation becomes unstoppable.",
      socials: {
        email: "fredrick@hurumaglobalsupportinitiative.org"
      }
    },

    {
      name: "Ssebuguzi Alex",
      role: "Program Officer Sustainable Livelihoods",
      image: "/team/alex ssebuguzi.jpg",
      title: "Program Officer",
      bio: "Huruma inspired me by helping struggling entrepreneurs and supporting school children with fees and materials across different districts. That impact touched me deeply—and that's why I chose to join and work with HGSI.",
      quote: "Huruma inspired me by helping struggling entrepreneurs and supporting school children with fees and materials across different districts.",
      socials: {
        email: "alex@hurumaglobalsupportinitiative.org"
      }
    },
    {
      name: "Bwire Simon Peter",
      role: "Procurement Officer",
      image: "/team/bwire peter.jpg",
      title: "Procurement Officer",
      bio: "I was drawn to HGSI's 'Empathy in Action' because it perfectly aligns with my values of compassion and community service. I'm excited to use my skills to make a tangible impact and be part of a team truly dedicated to meaningful support for others.",
      quote: "I was drawn to HGSI's 'Empathy in Action' because it perfectly aligns with my values of compassion and community service.",
      socials: {
        email: "peter@hurumaglobalsupportinitiative.org"
      }
    }
  ];

  const voicesOfHuruma = [
    {
      name: "Lule Muganwa Edward",
      role: "Respected Elder and Mentor",
      quote: "It may be a small contribution, but to me, it is noteworthy. I thank the HGSI directors for giving me the chance to serve, even in this way.",
      icon: "👴",
      image: "/team/edward.jpg"
    },
    {
      name: "Charles",
      role: "The Boda Boda Rider with a Mission",
      quote: "These books, these supplies—they're heavy. But I carry them like they're gold. Because they are.",
      icon: "🛵",
      image: "/team/charles.jpg"
    },
    {
      name: "Ronnie & Friends",
      role: "The Laptop Lifesavers",
      quote: "I may not be rich, but I can give what I have. Giving is my quiet way of building a better future for Uganda's children.",
      icon: "💻",
      image: "/team/ronnie.jpg"
    },
    {
      name: "Tisha",
      role: "The Silent Analyst",
      quote: "You won't see me at the front. But in the numbers, I make sure every child counts.",
      icon: "📊",
      image: "/team/tisha.jpg"
    },
    {
      name: "Maggie",
      role: "The Growing TikToker with a Big Heart",
      quote: "I use my platform to show that giving is cool, and kindness is powerful.",
      icon: "📱",
      image: "/team/maggie.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-green-600 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/team/diana nabukalu.jpg')] bg-cover bg-center opacity-30"></div>
        
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
              Meet Our Team
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Behind every life transformed, every community strengthened and every brighter future at HGSI, you'll find a team driven by deep empathy and unwavering dedication.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Team Introduction */}
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
              Meet the Hands Behind the Hope
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a diverse group of passionate individuals, united by the belief that compassion can change the world. Our hands-on commitment, local understanding, and shared vision are the driving force behind the Huruma Global Support Initiative and bring hope as we put EMPATHY IN ACTION.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Board Members Section */}
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
              Meet Our Board
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our board of directors provides strategic guidance and governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-green-300 font-semibold">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio.substring(0, 150)}...</p>
                  <a 
                    href={`mailto:${member.socials.email}`} 
                    className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
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
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the faces and stories of the HGSI team who make it all possible
            </p>
          </motion.div>

          <div className="space-y-20">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
              >
                {/* Large Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
                      <p className="text-xl text-green-300 font-semibold mb-1">{member.role}</p>
                      <p className="text-lg text-blue-300">{member.title}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">About {member.name.split(' ')[0]}</h4>
                    <p className="text-gray-600 leading-relaxed text-lg">{member.bio}</p>
                  </div>
                  
                  {member.quote && (
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-green-500">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-2xl">💬</span>
                        </div>
                        <div>
                          <p className="text-gray-700 italic text-lg leading-relaxed">"{member.quote}"</p>
                          <p className="text-sm text-gray-500 mt-2">- {member.name}</p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex justify-center">
                    <a 
                      href={`mailto:${member.socials.email}`} 
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Get in Touch</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extended Team Section */}
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
              Our Extended Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals working together to create lasting impact
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {extendedTeam.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-sm text-green-300 font-semibold">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-3">{member.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">{member.bio}</p>
                  {member.quote && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-gray-700 italic text-sm">"{member.quote}"</p>
                    </div>
                  )}
                  <a 
                    href={`mailto:${member.socials.email}`} 
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact {member.name.split(' ')[0]}
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Voices of Huruma Section */}
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
              Voices of Huruma
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Because this movement is built by many hands, hearts, and voices
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {voicesOfHuruma.map((voice, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-100"
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 shadow-lg overflow-hidden">
                    {voice.image ? (
                      <Image
                        src={voice.image}
                        alt={voice.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <span className="text-3xl">{voice.icon}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{voice.name}</h3>
                    <p className="text-sm text-gray-600">{voice.role}</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-700 italic leading-relaxed">"{voice.quote}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Our Team Section */}
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
              Ready to be part of a team that's making a real difference? We'd love to hear from you.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Phone className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-green-100">+256 748 020 214</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Mail className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-green-100">info@hurumaglobalsupportini
                  tiative.org</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <MapPin className="w-8 h-8 text-white mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-green-100">Makonzi zone Sserwadda Close Bukoto</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors duration-300 flex items-center mx-auto"
            >
              Get Involved
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

export default TeamPage; 