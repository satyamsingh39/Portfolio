import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-16 bg-background-deep border-t border-white/5 relative">
       <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
       <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-10">
            <div className="text-3xl font-black text-text-white tracking-tight mb-2">{personalInfo.name.toUpperCase()}</div>
            <div className="text-[10px] font-black text-accent uppercase tracking-[0.5em]">AI & Full Stack Developer</div>
          </div>
          
          <div className="flex justify-center space-x-10 mb-12">
            {personalInfo.socials.map((social) => (
              <a 
                key={social.name}
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className="text-text-gray hover:text-accent transition-all hover:scale-125"
                title={social.name}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-[10px] font-bold text-text-gray uppercase tracking-widest">
              © {new Date().getFullYear()} Designed & Developed by <span className="text-text-white">{personalInfo.fullName}</span>
            </div>
            <div className="flex space-x-8 text-[10px] font-bold text-text-gray uppercase tracking-widest">
              <a href="#home" className="hover:text-accent transition-colors">Home</a>
              <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
       </div>
    </footer>
  );
};

export default Footer;
