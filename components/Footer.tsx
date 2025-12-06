import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-orbitron font-bold text-white mb-6">
              NEO<span className="text-neon-cyan">-CUT</span>
            </h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Redefiniendo el cuidado personal para la era digital. Únete al futuro del estilo.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-2 bg-white/5 rounded-full hover:bg-neon-cyan hover:text-black transition-all duration-300">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-orbitron text-white mb-6 tracking-wider">CONTACTO</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-neon-cyan shrink-0" />
                <span>101 Cyber Avenue, Sector 7<br/>Neo-Tokyo, NT 2077</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-neon-cyan shrink-0" />
                <span>+1 (555) 019-2077</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-neon-cyan shrink-0" />
                <span>contact@neocut.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-orbitron text-white mb-6 tracking-wider">HORARIOS</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>LUN - VIE</span>
                <span className="text-white">10:00 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>SÁBADO</span>
                <span className="text-white">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>DOMINGO</span>
                <span className="text-neon-violet">CERRADO</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Pseudo-Map using CSS/Image */}
        <div className="w-full h-48 bg-gray-900 rounded-lg relative overflow-hidden mb-8 grayscale hover:grayscale-0 transition-all duration-500 border border-white/10">
            {/* Abstract grid representing a map */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,243,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    <div className="w-4 h-4 bg-neon-cyan rounded-full animate-ping absolute opacity-75" />
                    <MapPin className="text-neon-cyan w-8 h-8 relative z-10 -mt-7" />
                </div>
            </div>
            <div className="absolute bottom-2 right-4 text-xs text-gray-500 font-orbitron">
                SECTOR 7 // LOCAL GRID
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} NEO-CUT BARBERSHOP. TODOS LOS DERECHOS RESERVADOS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
