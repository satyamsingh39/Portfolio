import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-background-deep relative">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <span className="subheading">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-black text-text-white tracking-tight uppercase">Recent Projects</h2>
          </div>
          <div className="flex space-x-2">
             <div className="w-12 h-1 bg-accent rounded-full"></div>
             <div className="w-4 h-1 bg-white/20 rounded-full"></div>
             <div className="w-4 h-1 bg-white/20 rounded-full"></div>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex space-x-8 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="min-w-[320px] md:min-w-[500px] snap-center"
            >
              <div className="glass-card group h-full flex flex-col overflow-hidden hover:border-accent/40 transition-all duration-500">
                {/* Image Section */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-deep via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] font-black uppercase tracking-widest bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-black text-text-white mb-4 tracking-tighter uppercase group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-gray text-sm leading-relaxed mb-8 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-white hover:bg-accent hover:scale-110 transition-all border border-white/10"
                        title="GitHub"
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href={project.demo} 
                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-white hover:bg-accent hover:scale-110 transition-all border border-white/10"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt size={14} />
                      </a>
                    </div>
                    <a href={project.demo} className="text-xs font-black text-accent uppercase tracking-widest group-hover:mr-2 transition-all">
                      View Details →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
