'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function ProjectGallery() {
  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Transformation',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=800&fit=crop&q=90',
      imageAlt: 'Modern kitchen remodel with custom cabinets and quartz countertops',
    },
    {
      id: 2,
      title: 'Luxury Master Bathroom',
      category: 'Bathroom',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&h=800&fit=crop&q=90',
      imageAlt: 'Luxury master bathroom renovation with walk-in shower',
    },
    {
      id: 3,
      title: 'Complete Home Exterior Renovation',
      category: 'Exterior',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop&q=90',
      imageAlt: 'Complete home exterior renovation with new siding',
    },
    {
      id: 4,
      title: 'Full Home Remodel',
      category: 'Full Remodel',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=90',
      imageAlt: 'Complete home renovation and remodel project',
    },
    {
      id: 5,
      title: 'Custom Deck & Outdoor Living',
      category: 'Exterior',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop&q=90',
      imageAlt: 'Custom deck and outdoor living space construction',
    },
    {
      id: 6,
      title: 'Gourmet Kitchen Upgrade',
      category: 'Kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&h=800&fit=crop&q=90',
      imageAlt: 'Gourmet kitchen upgrade with premium appliances',
    },
    {
      id: 7,
      title: 'Spa-Inspired Bathroom',
      category: 'Bathroom',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&h=800&fit=crop&q=90',
      imageAlt: 'Spa-inspired bathroom renovation',
    },
    {
      id: 8,
      title: 'Whole House Renovation',
      category: 'Full Remodel',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop&q=90',
      imageAlt: 'Complete whole house renovation project',
    },
  ];

  return (
    <section className="section-premium bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-executive-lg font-bold text-gray-900 mb-6">Our Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of our best construction and remodeling work
          </p>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            speed={600}
            className="pb-12"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gray-200 group cursor-pointer image-cinematic layered-depth">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    quality={90}
                    className="object-cover transform group-hover:scale-125 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  
                  {/* Cinematic Gradient Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-linear-to-br from-[#8BC34A]/0 via-transparent to-[#3B82F6]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#8BC34A] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 drop-shadow-lg">
                        {project.title}
                      </h3>
                      <Link
                        href="/projects"
                        className="btn-cinematic inline-flex items-center text-white px-8 py-4 font-bold shadow-lg"
                      >
                        View Project
                        <svg className="w-5 h-5 ml-2 icon-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                    
                    {/* Always visible title (hidden on hover) */}
                    <div className="group-hover:opacity-0 transition-opacity duration-500">
                      <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-lg">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="text-center mt-12 reveal-on-scroll">
          <Link
            href="/projects"
            className="btn-cinematic inline-block text-white px-12 py-5 font-bold shadow-lg text-lg"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
