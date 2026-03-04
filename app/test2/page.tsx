// app/page.tsx
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Plane, 
  Phone, 
  Shield, 
  Clock, 
  Hotel, 
  Users, 
  Car, 
  Award,
  Star,
  CheckCircle,
  MapPin,
  Compass,
  Heart
} from 'lucide-react';

export default function Home() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const stats = [
    { icon: Award, value: "56+", label: "YEARS OF EXCELLENCE", color: "from-amber-500 to-orange-500" },
    { icon: Users, value: "175+", label: "STAFF MEMBERS", color: "from-blue-500 to-cyan-500" },
    { icon: Car, value: "300+", label: "CHAUFFEUR GUIDES", color: "from-green-500 to-emerald-500" },
    { icon: Hotel, value: "600+", label: "PARTNER HOTELS", color: "from-purple-500 to-pink-500" }
  ];

  const features = [
    { 
      icon: Plane, 
      title: "24/7 Airport Counter", 
      description: "Round-the-clock assistance at the airport",
      color: "bg-blue-500"
    },
    { 
      icon: Phone, 
      title: "24/7 Call Center", 
      description: "Always here to help you",
      color: "bg-green-500"
    },
    { 
      icon: Shield, 
      title: "Secure Booking", 
      description: "Hassle-free and seamless reservations",
      color: "bg-purple-500"
    },
    { 
      icon: Clock, 
      title: "Free Cancellation", 
      description: "Up to 24 hours on all transport",
      color: "bg-orange-500"
    },
    { 
      icon: Hotel, 
      title: "600+ Audited Hotels", 
      description: "All health & safety checked",
      color: "bg-red-500"
    },
    { 
      icon: Heart, 
      title: "Custom Itineraries", 
      description: "Tailored just for you",
      color: "bg-pink-500"
    }
  ];

  const partners = [
    { name: "Booking.com", icon: Star },
    { name: "TripAdvisor", icon: Star },
    { name: "Expedia", icon: Star },
    { name: "Agoda", icon: Star }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              borderRadius: ["20%", "50%", "20%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
              borderRadius: ["30%", "60%", "30%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl"
          />
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-20 text-emerald-500/20"
        >
          <Compass size={80} />
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-20 text-teal-500/20"
        >
          <MapPin size={100} />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeInUp}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
              Sri Lanka's Leading Destination Management Company
            </span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-transparent bg-clip-text"
          >
            Experience the Enchantment
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            of Sri Lanka with Walkers Tours
          </motion.p>

          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 mb-12 max-w-4xl mx-auto"
          >
            For over five decades of excellence, organizing inbound tours for couples on holiday or honeymoon, 
            for individual adventurers and nature lovers, as well as for special interest and incentives 
            holiday groups and convention delegates.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Start Your Journey
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Explore Tours
            </motion.button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-8 items-center"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <Award className="text-emerald-600" size={20} />
              <span className="text-sm font-semibold">Largest Conglomerate Subsidiary</span>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <CheckCircle className="text-emerald-600" size={20} />
              <span className="text-sm font-semibold">Trusted Global Partner</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Book Section */}
      <motion.section 
        ref={featuresRef}
        initial="hidden"
        animate={isFeaturesInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="py-24 px-4 relative"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Why Book with <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">Walkers Tours?</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          >
            We customize each itinerary to fit your preferences, ensuring a unique experience
          </motion.p>

          <motion.div 
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}
                >
                  <feature.icon size={32} />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                
                <motion.div 
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  className="h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 mt-4"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        ref={statsRef}
        initial="hidden"
        animate={isStatsInView ? "visible" : "hidden"}
        variants={staggerChildren}
        className="py-24 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden"
      >
        {/* Animated Background Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Numbers Speak Themselves
          </motion.h2>

          <motion.div 
            variants={staggerChildren}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1 }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    delay: index * 0.5,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className="inline-block mb-4"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto shadow-xl group-hover:shadow-2xl transition-shadow`}>
                    <stat.icon size={40} />
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-4xl md:text-5xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                
                <div className="text-sm md:text-base opacity-90 font-medium tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block"
            >
              <span className="text-2xl font-bold">600+</span>
              <span className="text-lg ml-2 opacity-90">VEHICLES AT YOUR SERVICE</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Partners Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3 
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-center text-gray-500 mb-8"
          >
            Trusted Partners
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="flex items-center gap-2 text-gray-400 hover:text-emerald-600 transition-colors cursor-pointer"
              >
                <partner.icon size={24} />
                <span className="font-semibold">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer CTA */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-3xl p-12 shadow-2xl"
          >
            <motion.h3 
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Experience Sri Lanka?
            </motion.h3>
            
            <p className="text-xl mb-8 opacity-90">
              Let us create your perfect journey today
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-emerald-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Contact Us Now
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}