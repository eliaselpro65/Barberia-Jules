'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing = () => {
  const prices = [
    { name: "Corte Rápido", price: "$25", features: ["Corte Básico", "Afeitado de Cuello", "Estilizado"] },
    { name: "Experiencia Neo", price: "$45", features: ["Corte de Precisión", "Arreglo de Barba", "Toalla Caliente", "Bebida Incluida"], highlight: true },
    { name: "Revisión Total", price: "$75", features: ["Corte Completo", "Tratamiento Facial", "Masaje", "Estilo Premium"] },
  ];

  return (
    <section id="prices" className="py-24 bg-black/50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neon-violet/10 via-black to-black" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-orbitron font-bold mb-4 text-white">
            CRÉDITOS <span className="text-neon-violet">&</span> PAQUETES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {prices.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 ${
                plan.highlight 
                  ? 'glass bg-neon-violet/5 border-neon-violet/50 shadow-[0_0_30px_rgba(188,19,254,0.1)]' 
                  : 'glass border-white/10 hover:border-neon-cyan/50'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-neon-violet text-white text-xs font-orbitron tracking-widest rounded-full shadow-[0_0_10px_#bc13fe]">
                  POPULAR
                </div>
              )}

              <h3 className="text-xl font-orbitron text-gray-300 mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-6 font-orbitron">
                {plan.price}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <Check className={`w-5 h-5 ${plan.highlight ? 'text-neon-violet' : 'text-neon-cyan'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 font-orbitron tracking-wider transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-neon-violet text-white hover:bg-white hover:text-black shadow-[0_0_15px_rgba(188,19,254,0.4)]' 
                  : 'border border-white/20 text-white hover:border-neon-cyan hover:text-neon-cyan'
              }`}>
                SELECCIONAR
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
