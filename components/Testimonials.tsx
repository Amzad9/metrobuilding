'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Jennifer Martinez',
      role: 'Homeowner',
      company: 'North Ridgeville, OH',
      content:
        'MetroBuilding completely transformed our kitchen! The team was professional, on-time, and the quality is outstanding. We love our new space and highly recommend them to anyone in the area.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Robert Thompson',
      role: 'Homeowner',
      company: 'Cleveland, OH',
      content:
        'We did a full bathroom remodel and couldn\'t be happier. The attention to detail, communication, and final result exceeded our expectations. MetroBuilding is now our go-to contractor for all future projects.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Lisa Anderson',
      role: 'Homeowner',
      company: 'Westlake, OH',
      content:
        'The deck and patio they built for us is absolutely beautiful. The team was clean, respectful of our property, and finished ahead of schedule. Professional service from start to finish!',
      rating: 5,
    },
    {
      id: 4,
      name: 'David Wilson',
      role: 'Homeowner',
      company: 'Avon, OH',
      content:
        'We added a second story to our home and MetroBuilding made the process smooth and stress-free. Their expertise with local codes and quality craftsmanship is unmatched. Worth every penny!',
      rating: 5,
    },
    {
      id: 5,
      name: 'Michelle Brown',
      role: 'Homeowner',
      company: 'Elyria, OH',
      content:
        'After a bad experience with another contractor, MetroBuilding restored our faith. They fixed everything properly, were transparent about costs, and delivered exactly what they promised. True professionals!',
      rating: 5,
    },
    {
      id: 6,
      name: 'James Taylor',
      role: 'Property Investor',
      company: 'Lorain, OH',
      content:
        'I\'ve used MetroBuilding for multiple home flips. Their work is consistently high-quality, they understand timelines, and their pricing is fair. They\'re an essential part of my investment strategy.',
      rating: 5,
    },
  ];

  return (
    <section className="section-premium bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-executive-lg font-bold text-gray-900 mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
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
          pagination={{ clickable: true }}
          loop={true}
          speed={600}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="card-cinematic bg-white p-8 h-full layered-depth">
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-400 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-8 italic text-lg leading-relaxed">&quot;{testimonial.content}&quot;</p>
                <div className="border-t-2 border-gray-100 pt-6">
                  <p className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</p>
                  <p className="text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
