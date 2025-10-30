import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const menuItems = [
    { name: 'Início', href: '#inicio', active: true },
    { name: 'A Clan', href: '#a-clan' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Receitas', href: '#receitas' },
    { name: 'Imprensa', href: '#imprensa' },
    { name: 'Trabalhe conosco', href: '#trabalhe-conosco' },
    { name: 'Vamos conversar?', href: '#contato' }
  ];

  return (
    <header className="relative">
      {/* Barra superior azul claro */}
      <div className="bg-[#8eb9e1] relative z-10">
        <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between lg:justify-end h-20 sm:h-24">
            
            {/* Logo CLAN no mobile - ao lado da pesquisa */}
            <div className="flex items-center lg:hidden -ml-2">
              <img 
                src="/assets/logo.png" 
                alt="CLAN - Delícias da vaquinha" 
                className="h-20 w-auto"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Campo de busca */}
            <div className="flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Pesquisar aqui..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/30 backdrop-blur-sm text-gray-700 placeholder-gray-600 border border-white/40 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-white/60 focus:bg-white/40 transition-all duration-200 text-sm"
                  style={{ width: '200px' }}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 w-4 h-4" />
              </div>
            </div>

            {/* Botão menu mobile */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Barra de navegação azul escuro */}
      <div className="bg-[#386ba8] relative z-0">
        <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hidden lg:flex items-center justify-end space-x-8 h-14">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`text-[#E8F4FD]/80 hover:text-white transition-colors duration-200 font-medium ${
                  item.active ? 'font-semibold' : ''
                }`}
                style={{ fontSize: '17px', fontFamily: "'Baloo 2', sans-serif" }}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Logo CLAN - Posicionada absolutamente para desktop/tablet */}
      <div className="hidden lg:block absolute left-12 sm:left-20 lg:left-32 top-0 sm:top-0 lg:top-0 z-20">
        <img 
          src="/assets/logo.png" 
          alt="CLAN - Delícias da vaquinha" 
          className="h-56 sm:h-64 lg:h-72 w-auto drop-shadow-2xl"
          onError={(e) => {
            // Fallback se a imagem não carregar
            e.target.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.className = 'bg-white rounded-full px-12 py-8 shadow-2xl';
            fallback.innerHTML = `
              <div class="text-center">
                <div class="text-blue-600 font-black text-6xl tracking-wider">CLAN</div>
                <div class="text-blue-500 text-lg font-bold -mt-1">Delícias da vaquinha</div>
              </div>
            `;
            e.target.parentElement.appendChild(fallback);
          }}
        />
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#386ba8] border-t border-blue-400">
          <nav className="w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`text-white hover:text-gray-200 transition-colors duration-200 font-medium py-2 ${
                    item.active ? 'bg-blue-700 px-4 rounded-lg font-semibold' : ''
                  }`}
                  style={{ fontFamily: "'Baloo 2', sans-serif" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;