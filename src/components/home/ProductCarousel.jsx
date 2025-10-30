import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Two-column section: left text, right carousel
const ProductCarousel = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  // Data: use assets under public/assets/produtos
  const products = [
    // Requeijões
    {
      id: 1,
      name: 'Requeijão cremoso Tradicional',
      weight: 'peso líquido 200g',
      image: '/assets/produtos/Requeijão tradicional - 200g - câmera 1.png',
    },
    {
      id: 2,
      name: 'Requeijão cremoso Tradicional',
      weight: 'peso líquido 400g',
      image: '/assets/produtos/Requeijão tradicional - 400g - câmera 1.png',
    },
    {
      id: 3,
      name: 'Requeijão Light',
      weight: 'peso líquido 200g',
      image: '/assets/produtos/Requeijão light - 200g - câmera 1.png',
    },
    {
      id: 4,
      name: 'Requeijão Light',
      weight: 'peso líquido 400g',
      image: '/assets/produtos/Requeijão light - 400g - câmera 1.png',
    },

    // Bebidas Lácteas
    {
      id: 5,
      name: 'Bebida Láctea',
      weight: 'sabor morango 900g',
      image: '/assets/produtos/BL Morango 900g - Mockup.png',
    },
    {
      id: 6,
      name: 'Bebida Láctea',
      weight: 'sabor ameixa',
      image: '/assets/produtos/BL Ameixa- Mockup.png',
    },
    {
      id: 7,
      name: 'Bebida Láctea',
      weight: 'sabor graviola',
      image: '/assets/produtos/BL Graviola- Mockup.png',
    },
    {
      id: 8,
      name: 'Bebida Láctea',
      weight: 'sabor mamão e laranja',
      image: '/assets/produtos/BL Mamão e Laranja - Mockup.png',
    },
    {
      id: 9,
      name: 'Bebida Láctea',
      weight: 'salada de frutas',
      image: '/assets/produtos/BL Salada de Frutas - Mockup.png',
    },
  ];

  return (
    <section className="section-padding bg-white mt-[-4rem]">
      <div className="w-full lg:w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="max-w-xl" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1063a8] leading-tight" style={{ fontFamily: "'Baloo 2', sans-serif" }}>
              Conheça nossos
              <br />
              produtos
            </h2>
            <p className="mt-6 text-[#1063a8] text-base lg:text-lg max-w-lg">
              Descubra nossa linha de produtos, desenvolvidos com dedicação e um toque de amor pensando em você.
            </p>
          </div>

          {/* Right: carousel */}
          <div className="relative" data-aos="fade-up" data-aos-delay="150">
            <Swiper
              modules={[Navigation]}
              onSwiper={setSwiperInstance}
              centeredSlides={true}
              slidesPerView={1}
              slidesPerGroup={1}
              spaceBetween={24}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1, centeredSlides: true },
                1024: { slidesPerView: 3, centeredSlides: true },
              }}
              className="product-swiper"
            >
              {products.map((p) => (
                <SwiperSlide key={p.id}>
                  <div className="flex flex-col items-center text-center px-6 py-4 transition-all duration-300">
                    <div className="w-48 h-64 sm:w-56 sm:h-72 flex items-center justify-center mb-5">
                      <img 
                        src={p.image} 
                        alt={p.name} 
                        className="w-full h-full object-contain drop-shadow-xl"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-[#1063a8] font-semibold">{p.name}</div>
                    <div className="text-[#1063a8] text-sm mt-1">{p.weight}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation arrows */}
            <button
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Anterior"
              className="absolute left-2 lg:left-0 top-1/2 -translate-y-1/2 lg:-translate-x-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#1063a8] text-white flex items-center justify-center shadow-lg hover:bg-[#0d5796] focus:outline-none transition-colors"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Próximo"
              className="absolute right-2 lg:right-0 top-1/2 -translate-y-1/2 lg:translate-x-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#1063a8] text-white flex items-center justify-center shadow-lg hover:bg-[#0d5796] focus:outline-none transition-colors"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Faixa azul decorativa */}
      <div className="w-full h-32 bg-[#1063a8] mt-12"></div>

      {/* Emphasize the center slide */}
      <style>{`
        .product-swiper .swiper-slide { opacity: 0.7; transform: scale(0.9); transition: all .3s ease; }
        .product-swiper .swiper-slide-active { opacity: 1; transform: scale(1.15); }
      `}</style>
    </section>
  );
};

export default ProductCarousel;
