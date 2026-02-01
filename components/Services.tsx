import Link from 'next/link';
import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  icon: string;
}

export default function Services() {
  const services: Service[] = [
    {
      id: 1,
      title: 'Residential Remodeling',
      description: 'Transform your home with expert remodeling services including kitchens, bathrooms, and whole-home renovations.',
      image: '/mainservice/Residential Remodeling.png',
      imageAlt: 'Residential home remodeling project',
      icon: '🏠',
    },
    {
      id: 2,
      title: 'Multi-Family Dwellings',
      description: 'Professional construction and renovation services for multi-family properties, apartments, and duplexes.',
      image: '/mainservice/Multi-Family Dwellings.png',
      imageAlt: 'Multi-family dwelling construction',
      icon: '🏢',
    },
    {
      id: 3,
      title: 'General Contracting',
      description: 'Full-service general contracting for remodeling projects, from planning to completion with quality results.',
      image: '/mainservice/General Contracting.png',
      imageAlt: 'General contracting construction services',
      icon: '🔨',
    },
    {
      id: 4,
      title: 'Home Renovations',
      description: 'Complete home renovation services to update and modernize your living space with expert craftsmanship.',
      image: '/mainservice/Home Renovations.png',
      imageAlt: 'Home renovation and remodeling project',
      icon: '🏡',
    },
    {
      id: 5,
      title: 'Basement Finishing',
      description: 'Transform your unfinished basement into a functional living space with professional finishing services.',
      image: '/mainservice/Basement Finishing.png',
      imageAlt: 'Finished basement with modern design',
      icon: '🏡',
    },
    {
      id: 6,
      title: 'Siding & Exterior',
      description: 'Enhance your home\'s curb appeal and protection with professional siding installation and exterior work.',
      image: '/mainservice/Siding & Exterior.png',
      imageAlt: 'Professional siding installation',
      icon: '🏛️',
    },
  ];

  return (
    <section className="section-premium bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-executive-lg font-bold text-gray-900 mb-4 md:mb-6">Our Services</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Specialized remodeling and multi-family construction services tailored to meet your unique project needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="card-cinematic bg-white overflow-hidden group layered-depth reveal-on-scroll"
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-200 image-cinematic">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  quality={90}
                  className="object-cover transform group-hover:scale-125 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed">{service.description}</p>
                <Link
                  href="/services"
                  className="btn-cinematic text-white px-5 md:px-6 py-2.5 md:py-3 font-bold inline-flex items-center text-sm md:text-base"
                >
                  Learn More
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 icon-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
