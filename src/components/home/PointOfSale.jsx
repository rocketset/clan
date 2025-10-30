import React from 'react';

const PointOfSale = () => {
  return (
    <section className="bg-white pb-0 pt-16 lg:pt-20 overflow-hidden">
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          
          {/* Lado esquerdo - Imagem da geladeira */}
          <div className="flex justify-center lg:justify-start items-end h-full" data-aos="fade-right">
            <img 
              src="/assets/home/geladeira.png" 
              alt="CLAN no ponto de venda" 
              className="w-full max-w-md lg:max-w-lg object-contain object-bottom drop-shadow-xl"
              style={{ marginBottom: 0 }}
            />
          </div>

          {/* Lado direito - Conteúdo */}
          <div className="space-y-6 flex flex-col justify-center mb-48 lg:mb-64" data-aos="fade-left" data-aos-delay="100">
            
            {/* Título */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#00274a] leading-tight" style={{ fontFamily: "'Baloo 2', sans-serif" }}>
              CLAN no ponto de venda
            </h2>
            
            {/* Descrição */}
            <div className="space-y-4 text-[#00274a] text-base lg:text-lg leading-relaxed">
              <p>
                Mais do que qualidade e sabor em cada produto, a CLAN leva ao ponto 
                de venda um time de profissionais comprometidos em oferecer um 
                atendimento de excelência.
              </p>
              
              <p>
                Colocamos à disposição dos clientes um mix completo de produtos 
                de alto giro, garantindo variedade, praticidade e confiança em cada 
                escolha.
              </p>
            </div>

          </div>
          
        </div>

      </div>
    </section>
  );
};

export default PointOfSale;
