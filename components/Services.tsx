'use client';

import { motion } from 'framer-motion';
import { Zap, Scissors, Skull } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-10 h-10" />,
      title: "CORTE LÁSER",
      desc: "Estilismo de precisión utilizando análisis geométrico avanzado para el contorno perfecto.",
      color: "text-neon-cyan",
      shadow: "shadow-neon-cyan"
    },
    {
      icon: <Skull className="w-10 h-10" />,
      title: "BARBA ESCULPIDA",
      desc: "Aseo mejorado cibernéticamente para el guerrero urbano moderno.",
      color: "text-neon-violet",
      shadow: "shadow-neon-violet"
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: "TRATAMIENTO FACIAL",
      desc: "Limpieza profunda y revitalización de la piel con tecnología de punta.",
      color: "text-white",
      shadow: "shadow-white"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4">
            <span className="text-white">NUESTROS </span>
            <span className="text-neon-cyan">PROTOCOLOS</span>
          </h2>
          <div className="h-1 w-20 bg-neon-violet mx-auto" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-xl group relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${service.color}`}>
                {service.icon}
              </div>
              
              <div className={`mb-6 p-4 rounded-full bg-white/5 w-fit ${service.color} group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all`}>
                {service.icon}
              </div>
              
              <h3 className="text-xl font-orbitron font-bold mb-3 tracking-wider text-white">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
