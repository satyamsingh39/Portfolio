import React from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background-deep relative overflow-hidden">
      <div className="bg-glow-blob w-[400px] h-[400px] bg-accent/20 -top-24 -right-24 animate-blob"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="subheading">Contact</span>
            <h2 className="text-4xl md:text-7xl font-black text-text-white mb-8 tracking-tight uppercase leading-none">
              LET'S <span className="text-accent">WORK</span> TOGETHER
            </h2>
            <p className="text-lg text-text-gray mb-12 max-w-md leading-relaxed">
              I'm always looking for interesting projects and collaborations in the AI and Full Stack space. Reach out and let's build something amazing.
            </p>

            <div className="space-y-6">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-4 p-6 glass-card border-white/5 hover:border-accent/30 transition-all max-w-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <FaEnvelope size={20} />
                </div>
                <div className="text-lg font-bold text-text-white tracking-tighter truncate">{personalInfo.email}</div>
              </a>

              <a 
                href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                className="flex items-center space-x-4 p-6 glass-card border-white/5 hover:border-accent/30 transition-all max-w-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                  <FaPhone size={18} />
                </div>
                <div className="text-lg font-bold text-text-white tracking-tighter">{personalInfo.phone}</div>
              </a>

              <div className="flex space-x-4 pt-6">
                {personalInfo.socials.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-14 h-14 rounded-2xl glass-card border-white/5 flex items-center justify-center text-2xl text-text-gray hover:text-white hover:bg-accent hover:border-accent transition-all duration-300"
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 md:p-12 border-white/10"
          >
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-accent uppercase tracking-widest ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Satyam Singh"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-text-white focus:outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-accent uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="satyam@example.com"
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-text-white focus:outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-accent uppercase tracking-widest ml-1">Your Message</label>
                <textarea 
                  rows="5" 
                  placeholder="I have a project for you..."
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-text-white focus:outline-none focus:border-accent/50 focus:bg-white/[0.05] transition-all resize-none"
                ></textarea>
              </div>
              <button className="glow-button w-full py-5 text-lg uppercase tracking-widest font-black flex items-center justify-center space-x-4 group">
                <span>Send Message</span>
                <FaPaperPlane size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
