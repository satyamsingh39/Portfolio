import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding bg-background-darker">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <span className="subheading">Milestones</span>
          <h2 className="text-4xl md:text-6xl font-black text-text-white tracking-tight uppercase">Achievements</h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 flex items-start space-x-6 border-white/5 hover:border-accent/40 transition-all duration-500 group"
            >
              <div className="w-16 h-16 shrink-0 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-3xl text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(29,155,240,0.1)]">
                <item.icon />
              </div>
              <div>
                <div className="text-accent text-[10px] font-black uppercase tracking-widest mb-2 opacity-60">
                  {item.date}
                </div>
                <h3 className="text-xl font-black text-text-white mb-2 tracking-tight uppercase group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-gray text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
