'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';

export default function RecentProjects() {
  const projects = [
    {
      id: 1,
      title: 'Modern Kitchen Remodel',
      location: 'North Ridgeville, OH',
      description: 'Complete kitchen transformation with custom cabinets and quartz countertops',
      image: 'https://images.unsplash.com/photo-1556912172-45b7ddc0ef47?w=1200&q=90',
      imageAlt: 'Modern kitchen remodel with custom cabinets',
    },
    {
      id: 2,
      title: 'Luxury Master Bathroom',
      location: 'Cleveland, OH',
      description: 'Spa-like bathroom renovation with walk-in shower and freestanding tub',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=90',
      imageAlt: 'Luxury master bathroom renovation',
    },
    {
      id: 3,
      title: 'Custom Deck & Patio',
      location: 'Westlake, OH',
      description: 'Outdoor living space with composite decking and stone patio',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90',
      imageAlt: 'Custom deck and patio construction',
    },
    {
      id: 4,
      title: 'Home Addition Project',
      location: 'Avon, OH',
      description: 'Seamless second-story addition with master suite',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90',
      imageAlt: 'Home addition construction project',
    },
    {
      id: 5,
      title: 'Full Home Renovation',
      location: 'Elyria, OH',
      description: 'Complete home flip with modern finishes throughout',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90',
      imageAlt: 'Full home renovation project',
    },
    {
      id: 6,
      title: 'Roofing Replacement',
      location: 'Lorain, OH',
      description: 'Professional roof replacement with energy-efficient materials',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=90',
      imageAlt: 'Professional roofing replacement',
    },
  ];

  return (
    <section className="section-premium bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-executive-lg font-bold text-gray-900 mb-6">Recent Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See our latest work transforming homes across North Ridgeville, Cleveland, and surrounding Ohio areas
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
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
              <div className="card-cinematic bg-white overflow-hidden layered-depth">
                <div className="relative h-72 overflow-hidden image-cinematic">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    quality={90}
                    className="object-cover transform group-hover:scale-125 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                    <p className="text-sm text-white/90 mb-2 font-semibold">{project.location}</p>
                    <h3 className="text-2xl font-bold drop-shadow-lg">{project.title}</h3>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12 reveal-on-scroll">
          <Link
            href="/projects"
            className="btn-cinematic inline-block text-white px-12 py-5 font-bold shadow-lg text-lg"
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
