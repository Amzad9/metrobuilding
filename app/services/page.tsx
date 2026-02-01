import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Residential Remodeling',
      description:
        'Transform your home with expert residential remodeling services. From kitchen and bathroom renovations to whole-home makeovers, we deliver quality results.',
      features: [
        'Kitchen remodeling',
        'Bathroom renovations',
        'Whole-home remodels',
        'Home additions & extensions',
      ],
      image: '/mainservice/Residential Remodeling.png',
      imageAlt: 'Residential home remodeling project',
      icon: '🏠',
    },
    {
      id: 2,
      title: 'Multi-Family Dwellings',
      description:
        'Professional construction and renovation services for multi-family properties including apartments, duplexes, and townhomes. Quality work for property investors and owners.',
      features: [
        'Apartment renovations',
        'Duplex construction & remodeling',
        'Townhome improvements',
        'Multi-unit property upgrades',
      ],
      image: '/mainservice/Multi-Family Dwellings.png',
      imageAlt: 'Multi-family dwelling construction',
      icon: '🏢',
    },
    {
      id: 3,
      title: 'General Contracting',
      description:
        'Full-service general contracting for remodeling projects. We coordinate all aspects of your project from planning to completion with quality craftsmanship.',
      features: [
        'Project coordination',
        'Subcontractor management',
        'Permit handling',
        'Quality control',
      ],
      image: '/mainservice/General Contracting.png',
      imageAlt: 'General contracting services',
      icon: '🔨',
    },
    {
      id: 4,
      title: 'Kitchen Remodeling',
      description:
        'Complete kitchen transformations with modern designs, quality cabinets, and premium fixtures. We create functional, beautiful kitchens that enhance your home.',
      features: [
        'Custom cabinet installation',
        'Countertop & backsplash',
        'Appliance installation',
        'Lighting & electrical',
      ],
      image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=500&fit=crop&q=90',
      imageAlt: 'Kitchen remodeling project',
      icon: '🍳',
    },
    {
      id: 5,
      title: 'Bathroom Remodeling',
      description:
        'Luxury bathroom renovations with premium fixtures, elegant tile work, and modern designs. Transform your bathroom into a relaxing retreat.',
      features: [
        'Shower & tub installation',
        'Vanity & fixture upgrades',
        'Tile & flooring',
        'Plumbing & electrical',
      ],
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=90',
      imageAlt: 'Bathroom remodeling project',
      icon: '🚿',
    },
    {
      id: 6,
      title: 'Home Additions',
      description:
        'Expand your living space with seamless home additions that match your existing home. We handle everything from design to completion.',
      features: [
        'Room additions',
        'Second story additions',
        'Sunroom & enclosed porches',
        'Garage additions',
      ],
      image: '/mainservice/Home Renovations.png',
      imageAlt: 'Home addition construction',
      icon: '🏗️',
    },
    {
      id: 7,
      title: 'Basement Finishing',
      description:
        'Transform your unfinished basement into a functional living space. We handle everything from framing and drywall to flooring and lighting.',
      features: [
        'Basement framing & drywall',
        'Flooring installation',
        'Lighting & electrical',
        'Custom design solutions',
      ],
      image: '/mainservice/Basement Finishing.png',
      imageAlt: 'Finished basement with modern design',
      icon: '🏡',
    },
    {
      id: 8,
      title: 'Siding & Exterior',
      description:
        'Enhance your home\'s curb appeal and protection with professional siding installation, exterior painting, and exterior renovation services.',
      features: [
        'Vinyl & fiber cement siding',
        'Exterior painting & staining',
        'Trim & soffit installation',
        'Exterior renovation',
      ],
      image: '/mainservice/Siding & Exterior.png',
      imageAlt: 'Professional siding installation',
      icon: '🏛️',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-900 text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h1 className="text-executive-xl font-bold mb-6 text-white reveal-on-scroll">Our Services</h1>
            <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed reveal-on-scroll" style={{ animationDelay: '0.2s' }}>Specialized remodeling and multi-family construction services in North Ridgeville</p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-premium bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="card-cinematic bg-white overflow-hidden layered-depth reveal-on-scroll"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-74 overflow-hidden image-cinematic">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      quality={90}
                      className="object-cover transform group-hover:scale-125 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                    <Link
                      href="/contact"
                      className="btn-cinematic inline-flex items-center text-white px-6 py-3 font-bold"
                    >
                      Get Quote
                      <svg className="w-5 h-5 ml-2 icon-metallic" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
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
