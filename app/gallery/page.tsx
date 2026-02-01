'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Modern Office Complex',
      category: 'Commercial',
      description: 'A state-of-the-art office building with sustainable design features.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=90',
      imageAlt: 'Modern office complex building',
    },
    {
      id: 2,
      title: 'Luxury Residential Tower',
      category: 'Residential',
      description: 'High-end residential development with premium amenities.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200&q=90',
      imageAlt: 'Luxury residential tower',
    },
    {
      id: 3,
      title: 'Industrial Warehouse',
      category: 'Industrial',
      description: 'Large-scale distribution center with advanced logistics systems.',
      image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=1200&q=90',
      imageAlt: 'Industrial warehouse facility',
    },
    {
      id: 4,
      title: 'Shopping Mall Renovation',
      category: 'Commercial',
      description: 'Complete renovation of a major shopping center.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=90',
      imageAlt: 'Shopping mall renovation project',
    },
    {
      id: 5,
      title: 'Custom Home Design',
      category: 'Residential',
      description: 'Beautiful custom home with modern architecture.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200&q=90',
      imageAlt: 'Custom home design',
    },
    {
      id: 6,
      title: 'Manufacturing Facility',
      category: 'Industrial',
      description: 'Advanced manufacturing plant with cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=90',
      imageAlt: 'Manufacturing facility',
    },
    {
      id: 7,
      title: 'Kitchen Remodel Project',
      category: 'Residential',
      description: 'Complete kitchen transformation with modern design.',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200&q=90',
      imageAlt: 'Kitchen remodel project',
    },
    {
      id: 8,
      title: 'Bathroom Renovation',
      category: 'Residential',
      description: 'Luxury bathroom renovation with premium fixtures.',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=90',
      imageAlt: 'Bathroom renovation project',
    },
    {
      id: 9,
      title: 'Deck & Patio Construction',
      category: 'Residential',
      description: 'Custom outdoor living space with composite decking.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200&q=90',
      imageAlt: 'Deck and patio construction',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-900 text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h1 className="text-executive-xl font-bold mb-6 text-white">Our Gallery</h1>
            <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed">Showcasing our portfolio of successful construction projects</p>
          </div>
        </section>

           {/* Gallery Images Section */}
        <section className="section-premium bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-executive-lg font-bold text-gray-900 mb-6">Project Gallery</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Browse through our collection of completed remodeling and construction projects
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {[
                {
                  id: 1,
                  title: 'Modern Kitchen Remodel',
                  image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop&q=90',
                  alt: 'Modern kitchen remodeling project',
                },
                {
                  id: 2,
                  title: 'Luxury Bathroom',
                  image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&h=600&fit=crop&q=90',
                  alt: 'Luxury bathroom renovation',
                },
                {
                  id: 3,
                  title: 'Exterior Renovation',
                  image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=90',
                  alt: 'Home exterior renovation',
                },
                {
                  id: 4,
                  title: 'Complete Home Remodel',
                  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=90',
                  alt: 'Complete home remodel',
                },
                {
                  id: 5,
                  title: 'Custom Deck & Patio',
                  image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop&q=90',
                  alt: 'Custom deck construction',
                },
                {
                  id: 6,
                  title: 'Gourmet Kitchen',
                  image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&h=600&fit=crop&q=90',
                  alt: 'Gourmet kitchen upgrade',
                },
                {
                  id: 7,
                  title: 'Home Renovation',
                  image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop&q=90',
                  alt: 'Home renovation project',
                },
                {
                  id: 8,
                  title: 'Roofing & Exterior',
                  image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop&q=90',
                  alt: 'Roofing and exterior work',
                },
                {
                  id: 9,
                  title: 'Construction Work',
                  image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=90',
                  alt: 'Construction site work',
                },
                {
                  id: 10,
                  title: 'Basement Finishing',
                  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&q=90',
                  alt: 'Basement finishing project',
                },
                {
                  id: 11,
                  title: 'Interior Remodeling',
                  image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&q=90',
                  alt: 'Interior remodeling work',
                },
                {
                  id: 12,
                  title: 'Home Addition',
                  image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&q=90',
                  alt: 'Home addition construction',
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="relative h-64 md:h-80 overflow-hidden bg-gray-200 group cursor-pointer image-cinematic layered-depth reveal-on-scroll"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    quality={90}
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Project Name Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <h4 className="text-lg md:text-xl font-bold text-white drop-shadow-lg mb-1">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Gallery with Swiper */}
        <section className="section-premium bg-gray-100">
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
                pagination={{ clickable: true }}
                loop={true}
                className="pb-12"
              >
                {projects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-gray-200 group cursor-pointer">
                      <Image
                        src={project.image}
                        alt={project.imageAlt}
                        fill
                        quality={90}
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
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
                          <p className="text-white mb-4 drop-shadow-md text-sm md:text-base">
                            {project.description}
                          </p>
                          <Link
                            href="/projects"
                            className="inline-flex items-center bg-[#8BC34A] text-white px-6 py-3 font-semibold hover:bg-[#7CB342] transition-colors shadow-lg"
                          >
                            View Project
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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
          </div>
        </section>

        {/* Project Grid */}
        <section className="section-premium bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-executive-lg font-bold text-gray-900 mb-16 text-center">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="card-premium bg-white overflow-hidden group"
                >
                  <div className="relative h-72 overflow-hidden bg-gray-200">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      quality={90}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-6 left-6 z-10">
                      <span className="bg-[#8BC34A] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{project.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
