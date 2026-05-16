import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo, techStrip } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background-deep pt-20">
      {/* Background Glow Blobs */}
      <div className="bg-glow-blob w-[500px] h-[500px] bg-accent -top-24 -left-24 animate-blob"></div>
      <div className="bg-glow-blob w-[400px] h-[400px] bg-accent-light -bottom-24 -right-24 animate-blob delay-1000"></div>
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="text-accent text-xs font-black tracking-widest uppercase">
                {personalInfo.title}
              </span>
            </div>
            
            <h1 className="heading-hero text-text-white mb-2">
              HEY! I'M <span className="text-accent">{personalInfo.name}</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-text-gray mb-8 h-12">
              I BUILD <span className="text-white">
                <Typewriter
                  words={['AI-POWERED EXPERIENCES', 'SCALABLE WEB APPS', 'INTELLIGENT SYSTEMS']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </h2>

            <p className="text-lg text-text-gray mb-10 max-w-xl leading-relaxed">
              {personalInfo.subheading} I specialize in combining modern full-stack engineering with cutting-edge AI technologies.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#contact" className="glow-button">Get In Touch</a>
              <a 
                href={personalInfo.resumeUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="px-8 py-3 rounded-full border border-white/20 font-bold hover:bg-white/5 transition-all"
              >
                Download Resume
              </a>
            </div>

            <div className="flex space-x-6">
              {personalInfo.socials.map((social) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-2xl text-text-gray hover:text-accent transition-all hover:scale-110"
                >
                  <social.icon />
                </a>
              ))}
              <a href={`mailto:${personalInfo.email}`} className="text-2xl text-text-gray hover:text-accent transition-all hover:scale-110">
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 w-[450px] h-[450px] mx-auto">
              {/* Profile Image Container */}
              <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 glass-card p-2 group hover:scale-[1.02] transition-transform duration-500">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-background-darker relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-transparent to-transparent z-10"></div>
                   <img 
                      src="/profile.jpg" 
                      alt={personalInfo.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 glass-card p-6 border-accent/30 shadow-[0_0_30px_rgba(29,155,240,0.2)]"
              >
                <div className="text-accent text-3xl font-black">AI</div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 glass-card p-4 border-white/5"
              >
                 <div className="flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-accent animate-ping"></div>
                    <div className="text-[10px] font-bold text-text-gray uppercase tracking-widest">System Active</div>
                 </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Tech Strip */}
        <div className="mt-32 border-y border-white/5 py-10 overflow-hidden relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techStrip, ...techStrip].map((tech, i) => (
              <div key={i} className="flex items-center mx-12 space-x-4 opacity-40 hover:opacity-100 transition-opacity">
                <tech.icon className="text-3xl text-text-white" />
                <span className="text-lg font-black text-text-white uppercase tracking-tight">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
