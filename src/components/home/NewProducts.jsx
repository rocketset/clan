import React from 'react';

const NewProducts = () => {
  return (
    <section className="relative bg-[#cae2ec] pt-16 lg:pt-20 pb-0 overflow-hidden">
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:items-end">
          
          {/* Lado esquerdo - Conteúdo e produtos */}
          <div className="space-y-6 text-center order-2 lg:order-1 py-8 lg:py-0 lg:mb-28">
            
            {/* Título */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00274a]" data-aos="fade-right">
              A Clan está de cara nova!
            </h2>
            
            {/* Descrição */}
            <p 
              className="text-base sm:text-lg text-[#00274a] font-bold leading-tight" 
              style={{ fontSize: '22px', lineHeight: '1.4', marginTop: '30px' }}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Novos produtos, embalagens modernas e uma mascote que transborda 
              saúde e energia para acompanhar você em todos os momentos.
            </p>

            {/* Imagem dos produtos */}
            <div className="flex justify-center mt-8" data-aos="fade-up" data-aos-delay="200">
              <img 
                src="/assets/home/produtos01.png" 
                alt="Novos produtos Clan" 
                className="w-full max-w-7xl lg:max-w-3xl object-contain drop-shadow-lg"
              />
            </div>
          </div>

          {/* Lado direito - Mascote da vaca */}
          <div className="flex justify-center lg:justify-end order-3 lg:order-2 mb-0 lg:-mb-0" data-aos="fade-left" data-aos-delay="300">
            <img 
              src="/assets/home/vaca01.png" 
              alt="Mascote Clan" 
              className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[550px] lg:h-[550px] xl:w-[650px] xl:h-[650px] object-contain object-bottom drop-shadow-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default NewProducts;
