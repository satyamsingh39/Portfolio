import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-padding bg-background-darker relative overflow-hidden">
      <div className="bg-glow-blob w-[300px] h-[300px] bg-accent/10 top-1/2 -right-24 animate-blob"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square max-w-[450px] mx-auto overflow-hidden rounded-[2.5rem] border border-white/10 glass-card p-3 group">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-background-dark relative group">
                <img 
                  src="/profile.jpg" 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
            {/* Background decorative circles */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute -top-10 -right-10 w-60 h-60 border border-white/5 rounded-full"></div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="subheading">About Me</span>
            <h2 className="text-4xl md:text-5xl font-black text-text-white mb-8 leading-tight tracking-tight">
              I AM AVAILABLE FOR <span className="text-accent">AI & FULL STACK</span> PROJECTS
            </h2>
            <p className="text-lg text-text-gray mb-10 leading-relaxed">
              {personalInfo.about} I am dedicated to bridging the gap between sophisticated AI models and user-friendly web interfaces. My approach combines rigorous problem-solving with a keen eye for modern design.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {personalInfo.stats.map((stat, index) => (
                <div key={stat.label} className="p-6 glass-card border-white/5 hover:border-accent/30 transition-colors">
                  <div className="text-3xl font-black text-text-white mb-1">{stat.value}</div>
                  <div className="text-xs font-bold text-text-gray uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="glow-button inline-block">
              Get In Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
