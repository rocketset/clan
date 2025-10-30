import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-32 lg:pt-40">
      {/* Background com imagem - lazy load */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[#386ba8]"
        style={{
          backgroundImage: `url('/assets/home/bgHero.png')`
        }}
      >
        {/* Preload da imagem de fundo */}
        <link rel="preload" as="image" href="/assets/home/bgHero.png" />
        {/* Overlay para melhor contraste do texto */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        
        {/* Título principal */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl leading-tight drop-shadow-lg" 
          style={{ fontFamily: "'Baloo 2', sans-serif" }}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <span 
            className="block text-[#386ba8] font-normal drop-shadow-xl"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Do campo para
          </span>
          <span 
            className="block text-[#386ba8] font-extrabold drop-shadow-xl" 
            style={{ 
              textShadow: '3px 3px 0px rgba(255,255,255,0.8), -1px -1px 0px rgba(0,0,0,0.3)' 
            }}
            data-aos="fade-left"
            data-aos-delay="400"
          >
            sua casa
          </span>
        </h1>

      </div>

      {/* Indicador de scroll */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Elementos decorativos nas bordas */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Montanhas ao fundo */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg viewBox="0 0 1200 300" className="w-full h-auto opacity-30">
            <path d="M0,300 L0,200 Q200,150 400,180 T800,160 Q1000,140 1200,170 L1200,300 Z" fill="#2d5016" opacity="0.6"/>
            <path d="M0,300 L0,220 Q300,180 600,200 T1200,190 L1200,300 Z" fill="#3d6b23" opacity="0.4"/>
          </svg>
        </div>
      </div>

    </section>
  );
};

export default Hero;