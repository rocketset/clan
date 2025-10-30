import React from 'react';
import { Users, MapPin, Truck, Leaf } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "1985", label: "Fundação", icon: Users },
    { number: "40+", label: "Anos de experiência", icon: MapPin },
    { number: "500+", label: "Clientes satisfeitos", icon: Truck },
    { number: "100%", label: "Sustentável", icon: Leaf }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Conteúdo textual */}
          <div className="space-y-8">
            <div data-aos="fade-right">
              <span className="text-primary-600 font-medium text-lg">Nossa História</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold mt-4 mb-6">
                Tradição que se <span className="text-gradient">Renova</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg" data-aos="fade-up" data-aos-delay="100">
                Fundada em 1985 por uma família apaixonada pela tradição leiteira, 
                nossa empresa nasceu com o compromisso de levar às mesas brasileiras 
                produtos lácteos da mais alta qualidade.
              </p>
              
              <p data-aos="fade-up" data-aos-delay="200">
                Ao longo de mais de quatro décadas, mantivemos nossos valores familiares 
                enquanto investimos em tecnologia de ponta e práticas sustentáveis. 
                Cada produto que sai de nossa fazenda carrega o carinho e a dedicação 
                de gerações comprometidas com a excelência.
              </p>
              
              <p data-aos="fade-up" data-aos-delay="300">
                Hoje, somos reconhecidos como referência em laticínios premium, 
                atendendo famílias que valorizam sabor autêntico, qualidade superior 
                e responsabilidade ambiental.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
              <button className="btn-primary">
                Conheça nossa fazenda
              </button>
              <button className="btn-outline">
                Nossa sustentabilidade
              </button>
            </div>
          </div>

          {/* Visual e estatísticas */}
          <div className="space-y-8">
            
            {/* Placeholder para imagem - será substituído pelo layout real */}
            <div 
              className="aspect-video bg-gradient-to-br from-primary-100 to-dairy-cream rounded-2xl flex items-center justify-center relative overflow-hidden"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center shadow-lg">
                  <span className="text-3xl">🏭</span>
                </div>
                <div className="text-xl font-semibold text-gray-700">
                  Nossa Fazenda
                </div>
                <div className="text-gray-600">
                  Tradição e modernidade
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-dairy-butter rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-primary-300 rounded-full animate-bounce-gentle"></div>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index}
                    className="card-dairy p-6 text-center hover:scale-105 transition-transform duration-300"
                    data-aos="zoom-in"
                    data-aos-delay={300 + (index * 100)}
                  >
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;