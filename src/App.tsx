/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scissors, 
  Calendar, 
  MapPin, 
  Phone, 
  Clock, 
  Star, 
  CheckCircle2, 
  Instagram, 
  Menu, 
  X, 
  ChevronRight,
  Sparkles,
  Heart
} from 'lucide-react';

const BOOKING_URL = "https://www.vagaro.com/hdbac4v";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-beige-50/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Scissors className="w-6 h-6 text-gold-500 group-hover:rotate-12 transition-transform" />
          <span className="text-xl font-serif font-semibold tracking-tight">Hair Dreams <span className="text-gold-500 italic">by Maria</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-gold-500 transition-colors">
              {link.name}
            </a>
          ))}
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-softblack text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gold-600 transition-all shadow-lg hover:shadow-gold-500/20"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-softblack" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-beige-50 border-t border-beige-200 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="block text-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-softblack text-white text-center py-4 rounded-xl font-bold"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with blur effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1920" 
          alt="Salon background" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-beige-50/50 via-beige-50/80 to-beige-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-beige-50 bg-beige-200 flex items-center justify-center">
                  <Star className="w-4 h-4 text-gold-500 fill-gold-500" />
                </div>
              ))}
            </div>
            <span className="text-sm font-semibold text-gold-600 uppercase tracking-widest">5★ Client Experience</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-6">
            Custom Hair Color & <span className="text-gold-500 italic">Styling</span> in Davis, CA
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
            Personalized consultations. Healthy, beautiful results tailored to you. Experience the art of transformation with Maria.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-softblack text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-gold-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-softblack/10"
            >
              Book Your Appointment
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services"
              className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-softblack/10 hover:border-gold-500 hover:text-gold-500 transition-all text-center"
            >
              View Services
            </a>
          </div>

          <div className="mt-12 flex items-center gap-6 text-sm font-medium text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold-500" />
              8+ Years Experience
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-gold-500" />
              Color Specialist
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/salon.png" 
              alt="Salon interior" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-beige-200/50 rounded-full blur-3xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialProof = () => {
  const testimonials = [
    { text: "Best hair experience I’ve had. Maria really takes the time to understand what you want.", author: "Sarah M." },
    { text: "She really listens and my color has never looked better. I'm so happy with my transformation!", author: "Jessica L." },
    { text: "Professional, talented, and so kind. Maria is a true artist when it comes to hair health.", author: "Emily R." },
    { text: "I've been going to Maria for years. She's the only one I trust with my color.", author: "Amanda K." },
  ];

  return (
    <div className="bg-softblack py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="max-w-xs text-center"
            >
              <div className="flex justify-center mb-3">
                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 text-gold-500 fill-gold-500" />)}
              </div>
              <p className="text-beige-100 italic text-sm mb-2">"{t.text}"</p>
              <p className="text-gold-500 font-bold text-xs uppercase tracking-widest">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-beige-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/maria.png" 
                alt="Maria - Professional Stylist" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl max-w-xs">
              <p className="text-gold-500 font-serif text-3xl mb-1 italic">Maria</p>
              <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Master Stylist & Colorist</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-600 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">The Artist</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Meet Your Stylist</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                With over <span className="text-softblack font-semibold">8 years of experience</span> in the industry, I have dedicated my career to the art of hair transformation and health.
              </p>
              <p>
                My approach is centered around a deep, personalized consultation. I believe that every client deserves a look that not only enhances their natural beauty but also fits their lifestyle and personality.
              </p>
              <p>
                Specializing in advanced color techniques and custom styling, I prioritize the integrity and health of your hair above all else. Your journey to beautiful hair starts with a conversation and ends with a result you'll love.
              </p>
            </div>
            <div className="mt-10">
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-softblack text-white px-8 py-4 rounded-full font-bold hover:bg-gold-600 transition-all shadow-lg"
              >
                Book With Maria
                <Calendar className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { name: "Blowout", desc: "Professional wash and style for a voluminous, smooth finish that lasts for days.", icon: <Sparkles className="w-6 h-6" /> },
    { name: "Color only", desc: "Achieve rich, dimensional color tailored to your skin tone and personal style.", icon: <Sparkles className="w-6 h-6" /> },
    { name: "Cut and color", desc: "A complete transformation combining precision cutting with custom color artistry.", icon: <Scissors className="w-6 h-6" /> },
    { name: "Chemical treatment", desc: "Specialized treatments to restore health, add shine, or manage texture effectively.", icon: <Sparkles className="w-6 h-6" /> },
    { name: "Haircut", desc: "Expertly crafted cuts designed to frame your face and enhance your natural features.", icon: <Scissors className="w-6 h-6" /> },
    { name: "Hair styling", desc: "Custom styling for special occasions or everyday elegance that turns heads.", icon: <Heart className="w-6 h-6" /> },
  ];

  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold-600 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Premium Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Every service begins with a thorough consultation to ensure your results are as unique as you are.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-8 rounded-3xl border border-beige-200 hover:border-gold-500 transition-all hover:shadow-2xl hover:shadow-gold-500/5"
            >
              <div className="w-12 h-12 bg-beige-100 rounded-2xl flex items-center justify-center mb-6 text-gold-600 group-hover:bg-gold-500 group-hover:text-white transition-colors">
                {s.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{s.name}</h3>
              <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
              <div className="flex items-center text-gold-600 font-bold text-sm uppercase tracking-widest group-hover:gap-2 transition-all">
                Book This Service <ChevronRight className="w-4 h-4" />
              </div>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10"></a>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-softblack text-white px-10 py-5 rounded-full font-bold hover:bg-gold-600 transition-all shadow-xl"
          >
            See Availability & Book Now
          </a>
        </div>
      </div>
    </section>
  );
};

const OurWork = () => {
  const gallery = [
    { title: "Custom Color Transformation", img: "/gallery1.jpg" },
    { title: "Precision Cut & Style", img: "/gallery2.jpg" },
    { title: "Dimensional Balayage", img: "/gallery3.jpg" },
    { title: "Healthy Hair Journey", img: "/gallery4.jpg" },
    { title: "Vibrant Color Artistry", img: "/gallery5.jpg" },
    { title: "Elegant Event Styling", img: "/gallery6.jpg" },
    { title: "Modern Hair Transformation", img: "/gallery7.jpg" },
    { title: "Signature Salon Result", img: "/gallery8.jpg" },
  ];

  return (
    <section id="our-work" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-gold-600 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Our Gallery</span>
            <h2 className="text-4xl md:text-5xl font-serif">Our Work</h2>
          </div>
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-softblack font-bold border-b-2 border-gold-500 pb-1 hover:text-gold-600 transition-colors"
          >
            Start Your Transformation
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gallery.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-softblack/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-serif text-xl">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "Personalized Consultations", desc: "We listen to your goals and analyze your hair to create a plan that works for you.", icon: <Sparkles className="w-6 h-6" /> },
    { title: "Focus on Hair Health", desc: "We use premium products and techniques that prioritize the integrity of your hair.", icon: <Heart className="w-6 h-6" /> },
    { title: "High-Quality Color", desc: "Master-level color techniques for dimensional, long-lasting, and vibrant results.", icon: <Star className="w-6 h-6" /> },
    { title: "Consistent Results", desc: "Experience the same high-end quality and attention to detail at every single visit.", icon: <CheckCircle2 className="w-6 h-6" /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-600 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">The Difference</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Why Clients Choose Maria</h2>
            <div className="space-y-8">
              {reasons.map((r, i) => (
                <motion.div 
                  key={r.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-beige-100 rounded-full flex items-center justify-center text-gold-600">
                    {r.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{r.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/gallery2.jpg" 
                alt="Salon interior" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-6 -left-6 bg-gold-500 text-white p-8 rounded-2xl shadow-xl hidden md:block">
              <p className="text-4xl font-serif mb-1">100%</p>
              <p className="text-xs font-bold uppercase tracking-widest">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BookingBlock = () => {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-beige-100 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-softblack/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif mb-6">Ready for Your New Look?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Appointments fill quickly. Reserve your spot now to experience the transformation you've been dreaming of.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-softblack text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-gold-600 transition-all shadow-2xl shadow-softblack/20 flex items-center gap-4"
              >
                Book Appointment Now
                <Calendar className="w-8 h-8" />
              </a>
              <div className="flex items-center gap-2 text-gold-600 font-bold uppercase tracking-widest animate-pulse">
                <Clock className="w-5 h-5" />
                Limited weekly availability
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Location = () => {
  const hours = [
    { day: "Monday", time: "9:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "Closed", closed: true },
    { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
    { day: "Thursday", time: "Closed", closed: true },
    { day: "Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "9:00 AM – 6:00 PM" },
  ];

  return (
    <section id="location" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-600 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">Visit Us</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">Location & Hours</h2>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gold-600 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Address</h3>
                  <p className="text-gray-600 text-lg">132 E St suite 350, Davis, CA 95616</p>
                  <a 
                    href="https://www.google.com/maps/dir/?api=1&destination=132+E+St+suite+350,+Davis,+CA+95616" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold-600 font-bold mt-4 hover:gap-3 transition-all"
                  >
                    Get Directions <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gold-600 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <p className="text-gray-600 text-lg">(530) 908-0195</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-gold-600 flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-4">Hours</h3>
                  <div className="space-y-3">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between items-center border-b border-beige-200 pb-2">
                        <span className="font-medium">{h.day}</span>
                        <span className={h.closed ? "text-red-400 font-bold" : "text-gray-600"}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
                    Address: 132 E St suite 350, Davis, CA 95616<br/>
                    Phone: (530) 908-0195<br/>
                    Hours: Open · Closes 7PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl relative"
          >
            {/* Map Placeholder */}
            <div className="absolute inset-0 bg-beige-200 flex flex-col items-center justify-center text-center p-8">
              <MapPin className="w-16 h-16 text-gold-500 mb-4" />
              <h3 className="text-2xl font-serif mb-2">Find Us in Davis</h3>
              <p className="text-gray-500 mb-8">132 E St suite 350, Davis, CA 95616</p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=132+E+St+suite+350,+Davis,+CA+95616" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-softblack text-white px-8 py-4 rounded-full font-bold shadow-lg"
              >
                Open in Google Maps
              </a>
            </div>
            {/* Real embed if possible, but placeholder is safer for now as per instructions */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  return (
    <section className="py-24 bg-softblack text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/gallery3.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif mb-6 italic">Your Best Hair Starts Here</h2>
        <p className="text-xl text-beige-100/80 mb-12 max-w-2xl mx-auto">
          Book your appointment today and experience the difference of a personalized, premium salon experience.
        </p>
        <a 
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-4 bg-gold-500 text-softblack px-12 py-6 rounded-full text-2xl font-black hover:bg-white transition-all shadow-2xl shadow-gold-500/20"
        >
          Book Now
          <ChevronRight className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-beige-50 pt-20 pb-10 border-t border-beige-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <a href="#" className="flex items-center gap-2 mb-6">
              <Scissors className="w-6 h-6 text-gold-500" />
              <span className="text-2xl font-serif font-semibold tracking-tight">Hair Dreams <span className="text-gold-500 italic">by Maria</span></span>
            </a>
            <p className="text-gray-500 leading-relaxed mb-8">
              Premium hair color and styling services in Davis, CA. Dedicated to healthy, beautiful results tailored to your unique style.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-softblack hover:bg-gold-500 hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-softblack hover:bg-gold-500 hover:text-white transition-all shadow-sm">
                <Sparkles className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-500 hover:text-gold-500 transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-500 hover:text-gold-500 transition-colors">About Maria</a></li>
              <li><a href="#our-work" className="text-gray-500 hover:text-gold-500 transition-colors">Our Work</a></li>
              <li><a href="#location" className="text-gray-500 hover:text-gold-500 transition-colors">Location & Hours</a></li>
              <li><a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-gold-600 font-bold">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-500">
                <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0" />
                132 E St suite 350, Davis, CA 95616
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                (530) 908-0195
              </li>
              <li className="flex items-center gap-3 text-gray-500">
                <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                Mon, Wed, Fri-Sun: 9AM - 6PM
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-beige-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Hair Dreams by Maria. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold-500/30 selection:text-softblack">
      <Nav />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Services />
        <OurWork />
        <WhyChooseUs />
        <BookingBlock />
        <Location />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
