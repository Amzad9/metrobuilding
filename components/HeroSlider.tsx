'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import Link from 'next/link';

export default function HeroSlider() {
  const [animationKey, setAnimationKey] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const slides = [
    {
      id: 1,
      title: 'Transform Your Space with Expert Remodeling',
      subtitle: 'Metro Building Solutions',
      description: 'Licensed, insured, and trusted remodeling professionals serving North Ridgeville, Cleveland, and surrounding Ohio communities. From kitchen renovations to complete home transformations, we bring your vision to life.',
      image: '/hero/Hero1.png',
      imageAlt: 'Modern cityscape with glass towers and urban architecture',
    },
    {
      id: 2,
      title: 'Multi-Family Construction Excellence',
      subtitle: '6 Years of Proven Results',
      description: 'Specialized expertise in multi-family dwellings, apartment renovations, and duplex construction. Quality craftsmanship, transparent pricing, and reliable project management for property owners and investors.',
      image: '/hero/Hero2.png',
      imageAlt: 'Professional cityscape with modern buildings and cinematic lighting',
    },
    {
      id: 3,
      title: 'Your Trusted Construction Partner in Ohio',
      subtitle: 'Licensed & Insured',
      description: 'From basement finishing to exterior renovations, we deliver premium remodeling services with attention to detail, on-time completion, and guaranteed satisfaction. Call (216) 326-9759 for your free consultation.',
      image: '/hero/Hero3.png',
      imageAlt: 'Urban cityscape with glass towers and bokeh city lights',
    },
  ];

  const handleSlideChangeTransitionStart = () => {
    // Trigger new animation sequence on slide change
    setAnimationKey(prev => prev + 1);
  };

  return (
    <div className="relative h-[calc(100vh-80px)] md:h-[calc(100vh-100px)]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          enabled: true,
        }}
        pagination={{
          type: 'progressbar',
        }}
        loop={true}
        speed={1000}
        className="h-full"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
              <div className="relative h-full w-full overflow-hidden parallax-container">
              <div className="hero-bg-image absolute inset-0 parallax-element">
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority={slide.id === 1}
                  quality={90}
                  className="object-cover scale-110"
                  sizes="100vw"
                />
              </div>
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.75) 0%, rgba(31, 41, 55, 0.65) 50%, rgba(59, 130, 246, 0.3) 100%)',
                }}
              ></div>
              <div 
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 0%, rgba(17, 24, 39, 0.4) 100%)',
                }}
              ></div>
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 text-white">
                  <div className="max-w-2xl mx-auto text-center">
                    <p 
                      key={`subtitle-${animationKey}`}
                      className="text-[#3B82F6] text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 drop-shadow-lg hero-subtitle animate-fade-up-delay-1"
                    >
                      {slide.subtitle}
                    </p>
                    <h1 
                      key={`title-${animationKey}`}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight text-[#F9FAFB] drop-shadow-lg hero-title animate-fade-up px-2"
                    >
                      {slide.title}
                    </h1>
                    <p 
                      key={`description-${animationKey}`}
                      className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 drop-shadow-md hero-description animate-fade-up-delay-2 px-2 sm:px-4"
                    >
                      {slide.description}
                    </p>
                    <Link
                      key={`cta-${animationKey}`}
                      href="/contact"
                      className="btn-cinematic inline-block text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 font-bold text-sm sm:text-base md:text-lg hero-cta animate-scale-in-delay-3 relative z-20"
                    >
                      <span className="relative z-30">Get Started</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
