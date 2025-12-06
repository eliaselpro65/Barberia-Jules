'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[size:40px_40px] opacity-20" />
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-neon-violet/20 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-neon-cyan font-orbitron tracking-[0.2em] mb-4 text-sm md:text-base">
            EST. 2077
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-orbitron mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            EL FUTURO DE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-violet">
              TU ESTILO
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
            Experimenta un corte de precisión con estética de vanguardia. 
            Donde la tradición se encuentra con la era cibernética.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-transparent overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-neon-cyan/10 border border-neon-cyan skew-x-[-12deg] group-hover:bg-neon-cyan group-hover:shadow-[0_0_20px_#00f3ff] transition-all duration-300" />
            <span className="relative font-orbitron font-bold tracking-widest text-neon-cyan group-hover:text-black transition-colors duration-300">
              RESERVAR TURNO
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.3em] text-gray-500 font-orbitron">SCROLL</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-neon-cyan to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
