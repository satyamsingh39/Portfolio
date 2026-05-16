import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/portfolioData';

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background-darker">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <span className="subheading">Solutions</span>
          <h2 className="text-4xl md:text-6xl font-black text-text-white tracking-tight uppercase">Services I Provide</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-10 group hover:border-accent/50 hover:shadow-[0_0_30px_rgba(29,155,240,0.1)] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent/20 transition-colors"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-500">
                <service.icon className="text-3xl text-accent" />
              </div>
              
              <h3 className="text-2xl font-black text-text-white mb-4 tracking-tight uppercase">
                {service.title}
              </h3>
              <p className="text-text-gray leading-relaxed text-sm">
                {service.description}
              </p>
              
              <div className="mt-8 h-1 w-0 bg-accent group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
