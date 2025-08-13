'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Heart, ArrowRight, Home, Star, Sparkles, Gift, Trophy } from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Firework component
const Firework = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 1 }}
      animate={{ 
        scale: [0, 1.5, 0], 
        opacity: [1, 1, 0],
        rotate: [0, 180, 360] 
      }}
      transition={{ 
        duration: 2,
        delay,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: Math.random() * 3 + 2
      }}
      className="absolute"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 60 + 10}%`
      }}
    >
      <motion.div 
        className="relative"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-8 bg-gradient-to-t from-yellow-400 via-red-500 to-purple-600 rounded-full"
            style={{
              transform: `rotate(${i * 45}deg)`,
              transformOrigin: 'bottom center'
            }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 1.5,
              delay: i * 0.1,
              repeat: Infinity,
              repeatDelay: Math.random() * 2 + 1
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

// Confetti piece component
const ConfettiPiece = ({ delay = 0 }: { delay?: number }) => {
  const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 'bg-purple-500', 'bg-pink-500'];
  const shapes = ['rounded-full', 'rounded-none', 'rounded-sm'];
  
  return (
    <motion.div
      initial={{ 
        y: -100, 
        x: Math.random() * window.innerWidth,
        opacity: 1,
        rotate: 0
      }}
      animate={{ 
        y: window.innerHeight + 100,
        x: Math.random() * window.innerWidth,
        rotate: 720,
        opacity: [1, 1, 0]
      }}
      transition={{ 
        duration: Math.random() * 3 + 2,
        delay,
        ease: "easeIn",
        repeat: Infinity,
        repeatDelay: Math.random() * 2 + 1
      }}
      className={`absolute w-3 h-3 ${colors[Math.floor(Math.random() * colors.length)]} ${shapes[Math.floor(Math.random() * shapes.length)]}`}
    />
  );
};

// Floating heart component
const FloatingHeart = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      initial={{ 
        y: window.innerHeight + 50,
        x: Math.random() * window.innerWidth,
        scale: 0,
        opacity: 0
      }}
      animate={{ 
        y: -100,
        x: Math.random() * window.innerWidth,
        scale: [0, 1, 0.8, 1, 0],
        opacity: [0, 1, 1, 1, 0],
        rotate: [0, 15, -15, 0]
      }}
      transition={{ 
        duration: Math.random() * 4 + 3,
        delay,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: Math.random() * 3 + 2
      }}
      className="absolute text-red-500"
    >
      <Heart className="w-6 h-6 fill-current" />
    </motion.div>
  );
};

// Sparkle component
const Sparkle = ({ delay = 0 }: { delay?: number }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        rotate: [0, 180, 360]
      }}
      transition={{ 
        duration: 1.5,
        delay,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: Math.random() * 2 + 1
      }}
      className="absolute text-yellow-400"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    >
      <Sparkles className="w-4 h-4" />
    </motion.div>
  );
};

export default function DonationSuccessPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    setTimeout(() => setShowCelebration(true), 500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
      <Header />
      
      {/* Background Animations */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {/* Fireworks */}
        {showCelebration && Array.from({ length: 6 }).map((_, i) => (
          <Firework key={`firework-${i}`} delay={i * 0.5} />
        ))}
        
        {/* Confetti */}
        {showCelebration && Array.from({ length: 50 }).map((_, i) => (
          <ConfettiPiece key={`confetti-${i}`} delay={i * 0.1} />
        ))}
        
        {/* Floating Hearts */}
        {showCelebration && Array.from({ length: 12 }).map((_, i) => (
          <FloatingHeart key={`heart-${i}`} delay={i * 0.3} />
        ))}
        
        {/* Sparkles */}
        {showCelebration && Array.from({ length: 20 }).map((_, i) => (
          <Sparkle key={`sparkle-${i}`} delay={i * 0.2} />
        ))}
      </div>
      
      <section className="pt-20 pb-20 px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {isLoaded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              {/* Success Icon with Crazy Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                }}
                transition={{ 
                  delay: 0.3, 
                  duration: 1.2, 
                  type: "spring",
                  bounce: 0.6
                }}
                className="relative mx-auto mb-8"
              >
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="w-40 h-40 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl border-8 border-white"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <CheckCircle className="w-20 h-20 text-white" />
                  </motion.div>
                </motion.div>
                
                {/* Orbiting Stars */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      width: "200px",
                      height: "200px",
                      left: "50%",
                      top: "50%",
                      marginLeft: "-100px",
                      marginTop: "-100px"
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8 + i * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <motion.div
                      className="absolute top-0 left-1/2 transform -translate-x-1/2"
                      animate={{ 
                        scale: [0.8, 1.2, 0.8],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                      }}
                    >
                      <Star className="w-6 h-6 text-yellow-400 fill-current" />
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Success Message with Crazy Typography Animation */}
              <motion.div className="mb-8">
                <motion.h1
                  initial={{ y: 50, opacity: 0, scale: 0.5 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.8, 
                    duration: 1, 
                    type: "spring",
                    bounce: 0.4
                  }}
                  className="text-6xl md:text-8xl font-bold mb-4 font-handwriting"
                >
                  <motion.span
                    animate={{ 
                      color: ["#10B981", "#3B82F6", "#8B5CF6", "#EF4444", "#F59E0B", "#10B981"],
                      textShadow: [
                        "0 0 20px rgba(16, 185, 129, 0.5)",
                        "0 0 30px rgba(59, 130, 246, 0.5)",
                        "0 0 40px rgba(139, 92, 246, 0.5)",
                        "0 0 30px rgba(239, 68, 68, 0.5)",
                        "0 0 20px rgba(245, 158, 11, 0.5)",
                        "0 0 20px rgba(16, 185, 129, 0.5)"
                      ]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    AMAZING!
                  </motion.span>
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
                  className="relative"
                >
                  <motion.h2
                    animate={{ 
                      scale: [1, 1.05, 1],
                      rotate: [0, 1, -1, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
                  >
                    🎉 YOU'RE A HERO! 🦸‍♂️
                  </motion.h2>
                  
                  {/* Pulsing Trophy */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.5, duration: 1, type: "spring", bounce: 0.6 }}
                    className="inline-block"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, 10, -10, 0],
                        y: [0, -10, 0]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.8 }}
                className="text-2xl text-gray-700 mb-8 leading-relaxed font-semibold"
              >
                <motion.span
                  animate={{ 
                    backgroundPosition: ["0%", "100%", "0%"]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_100%]"
                >
                  Your incredible generosity just changed lives forever! 💫
                </motion.span>
              </motion.p>

              {/* Animated Impact Section */}
              <motion.div
                initial={{ y: 50, opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ delay: 2.2, duration: 1, type: "spring", bounce: 0.4 }}
                className="relative mb-8"
              >
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 30px rgba(16, 185, 129, 0.3)",
                      "0 0 60px rgba(59, 130, 246, 0.4)",
                      "0 0 30px rgba(16, 185, 129, 0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="bg-gradient-to-br from-white via-green-50 to-blue-50 rounded-3xl p-8 border-4 border-gradient-to-r from-green-400 to-blue-400 relative overflow-hidden"
                >
                  {/* Animated Background Elements */}
                  <div className="absolute inset-0 opacity-10">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                        animate={{
                          x: [0, Math.random() * 400 - 200],
                          y: [0, Math.random() * 200 - 100],
                          scale: [0.5, 1, 0.5],
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{
                          duration: Math.random() * 8 + 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.5
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center justify-center space-x-4 mb-6"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <motion.div
                        animate={{ 
                          rotate: [0, 20, -20, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                      >
                        <Heart className="w-10 h-10 text-red-500 fill-current" />
                      </motion.div>
                      
                      <motion.h2
                        animate={{ 
                          color: ["#1F2937", "#059669", "#2563EB", "#1F2937"]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="text-3xl font-bold"
                      >
                        YOUR SUPERPOWER IN ACTION!
                      </motion.h2>
                      
                      <motion.div
                        animate={{ 
                          rotate: [0, -20, 20, 0],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      >
                        <Heart className="w-10 h-10 text-red-500 fill-current" />
                      </motion.div>
                    </motion.div>
                    
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.5, duration: 1 }}
                      className="text-xl text-gray-700 leading-relaxed font-medium"
                    >
                      <motion.span
                        animate={{ 
                          backgroundPosition: ["0%", "100%", "0%"]
                        }}
                        transition={{ 
                          duration: 5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="bg-gradient-to-r from-green-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_100%]"
                      >
                        🌟 Your amazing donation is already working magic! 🌟
                        <br />
                        Communities are being empowered, children are getting educated, 
                        and families are building sustainable futures - all because of YOUR heroic heart! 💖
                      </motion.span>
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

              {/* What's Next */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.6 }}
                className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 mb-8"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-6">What happens next?</h3>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Email Receipt</h4>
                    <p className="text-sm text-gray-600">You'll receive a tax-deductible receipt via email</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Impact Updates</h4>
                    <p className="text-sm text-gray-600">We'll keep you updated on how your donation is being used</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-white">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-800 mb-2">Stories</h4>
                    <p className="text-sm text-gray-600">Receive stories from the communities you're helping</p>
                  </div>
                </div>
              </motion.div>

              {/* Epic Action Buttons */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 3.5, duration: 1, type: "spring", bounce: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, 2, -2, 0],
                    transition: { rotate: { duration: 0.5 } }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/">
                    <motion.button
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(16, 185, 129, 0.5)",
                          "0 0 40px rgba(16, 185, 129, 0.8)",
                          "0 0 20px rgba(16, 185, 129, 0.5)"
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="relative overflow-hidden inline-flex items-center justify-center bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 border-4 border-white"
                    >
                      {/* Button Background Animation */}
                      <motion.div
                        animate={{ 
                          backgroundPosition: ["0%", "100%", "0%"]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-[length:200%_100%] opacity-80"
                      />
                      
                      <motion.div
                        animate={{ 
                          rotate: [0, 360]
                        }}
                        transition={{ 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: "linear" 
                        }}
                        className="relative z-10 mr-3"
                      >
                        <Home className="w-6 h-6" />
                      </motion.div>
                      
                      <span className="relative z-10">🏠 Return Home</span>
                      
                      {/* Sparkle Effects */}
                      {Array.from({ length: 3 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full"
                          animate={{
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0],
                            x: [0, Math.random() * 40 - 20],
                            y: [0, Math.random() * 40 - 20]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.3,
                            ease: "easeOut"
                          }}
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`
                          }}
                        />
                      ))}
                    </motion.button>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -2, 2, 0],
                    transition: { rotate: { duration: 0.5 } }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link href="/our-work">
                    <motion.button
                      animate={{ 
                        borderColor: [
                          "rgba(16, 185, 129, 1)",
                          "rgba(59, 130, 246, 1)",
                          "rgba(139, 92, 246, 1)",
                          "rgba(16, 185, 129, 1)"
                        ]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                      className="relative overflow-hidden inline-flex items-center justify-center bg-white text-green-600 hover:text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 border-4 shadow-lg"
                    >
                      <span className="relative z-10">🌟 See Our Work</span>
                      
                      <motion.div
                        animate={{ 
                          x: [0, 5, -5, 0],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="relative z-10 ml-3"
                      >
                        <ArrowRight className="w-6 h-6" />
                      </motion.div>
                      
                      {/* Animated Background */}
                      <motion.div
                        animate={{ 
                          scale: [0, 1.5, 0],
                          opacity: [0, 0.1, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut" 
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl"
                      />
                    </motion.button>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}