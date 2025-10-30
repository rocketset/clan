import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const menuLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'A Clan', href: '#a-clan' },
    { name: 'Oportunidades', href: '#oportunidades' },
    { name: 'Termos de uso', href: '#termos' }
  ];

  return (
    <footer className="bg-[#00274a] text-white py-8 overflow-hidden">
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Coluna 1: Menu */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Sobre</h3>
            <ul className="space-y-2">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 2: Informações de Contato */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Fale conosco:</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white/80" />
                <a 
                  href="tel:+558432053776" 
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                >
                  (84) 3205-3776
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white/80" />
                <a 
                  href="mailto:comercial@leiteclan.com.br" 
                  className="text-white/80 hover:text-white transition-colors duration-300 text-sm"
                >
                  comercial@leiteclan.com.br
                </a>
              </div>
              <div className="flex gap-4 mt-4">
                <a 
                  href="https://wa.me/558432053776" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/leiteclan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 3: Logo */}
          <div className="flex items-center justify-center">
            <img 
              src="/assets/footer/logofooter.png" 
              alt="Clan Logo" 
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Coluna 4: Vaquinha */}
          <div className="flex items-end justify-center -mb-8">
            <img 
              src="/assets/footer/vaca02.png" 
              alt="Vaquinha Clan" 
              className="h-48 lg:h-56 w-auto object-contain object-bottom"
            />
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
