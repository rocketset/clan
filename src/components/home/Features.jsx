import React from 'react';

const Features = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Lado esquerdo - Selo de 60 anos */}
          <div className="flex justify-center lg:justify-start" data-aos="zoom-in" data-aos-duration="1200">
            <img 
              src="/assets/home/60anos.png" 
              alt="60 anos - Tradição e Sabor Incomparáveis" 
              className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] object-contain drop-shadow-lg"
            />
          </div>

          {/* Lado direito - Conteúdo e imagens */}
          <div className="space-y-8">
            
            {/* Galeria de imagens históricas */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3" data-aos="fade-left" data-aos-delay="200">
              <div className="col-span-4">
                <img 
                  src="/assets/home/l01.png" 
                  alt="História Clan Laticínios" 
                  className="w-full h-32 sm:h-40 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Título - Nossa história */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#00274a] mb-4" style={{ fontFamily: "'Baloo 2', sans-serif" }}>
                Nossa história
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Fundado em 1965 como linasa – projeto de pasteurização de leite e fabricação 
                de manteiga, o empreendimento iniciou suas atividades em 1969. Poucos anos depois, 
                em 1974, nascia a Cooperativa de Laticínios de Natal Ltda. – CLAN, assumindo toda 
                a operação industrial e consolidando uma nova fase de crescimento.
              </p>
            </div>

            {/* Título - Nossa tradição */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#00274a] mb-4" style={{ fontFamily: "'Baloo 2', sans-serif" }}>
                Nossa tradição
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                Desde então, a Clan Laticínios ocupa um lugar de destaque entre as maiores 
                empresas do setor no Nordeste. A cada ano, expandimos nossa presença e 
                diversificamos nosso portfólio, sempre com o compromisso de entregar qualidade, 
                tradição e um sabor incomparável, que já se tornaram a marca registrada da CLAN.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;