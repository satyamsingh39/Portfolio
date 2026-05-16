import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-background-deep relative">
      <div className="absolute inset-0 bg-grid opacity-10"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="subheading">Expertise</span>
          <h2 className="text-4xl md:text-6xl font-black text-text-white tracking-tight">TECHNICAL STACK</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-10 group hover:border-accent/40 transition-all duration-500"
            >
              <h3 className="text-xl font-black text-text-white mb-8 border-b border-white/5 pb-4 uppercase tracking-tight">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-accent/10 hover:border-accent/20 transition-all duration-300 group/skill"
                  >
                    <skill.icon className="text-3xl text-text-gray group-hover/skill:text-accent group-hover/skill:scale-110 transition-all mb-3" />
                    <span className="text-[10px] font-black text-text-gray group-hover/skill:text-text-white uppercase tracking-widest text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
