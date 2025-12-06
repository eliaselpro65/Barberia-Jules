'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '#home' },
    { name: 'SERVICIOS', href: '#services' },
    { name: 'PRECIOS', href: '#prices' },
    { name: 'UBICACIÓN', href: '#footer' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <Scissors className="w-8 h-8 text-neon-cyan group-hover:text-neon-violet transition-colors duration-300" />
          <span className="font-orbitron text-2xl font-bold tracking-wider text-white">
            NEO<span className="text-neon-cyan">-CUT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-orbitron tracking-widest text-gray-300 hover:text-neon-cyan hover:drop-shadow-[0_0_5px_#00f3ff] transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
          <button className="px-6 py-2 border border-neon-cyan text-neon-cyan font-orbitron text-sm tracking-wider hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,243,255,0.2)] hover:shadow-[0_0_20px_#00f3ff]">
            RESERVAR TURNO
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-neon-cyan transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-neon-cyan/20 overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-4 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-orbitron tracking-widest text-white hover:text-neon-cyan"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="mt-4 px-8 py-3 bg-neon-cyan text-black font-orbitron font-bold tracking-wider hover:bg-white transition-colors w-full">
                RESERVAR TURNO
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
