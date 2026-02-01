import { Clock, Award, DollarSign, Shield, MapPin, Handshake } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'We respect your time and schedule. Every project is completed on schedule with clear communication throughout.',
    },
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'Premium materials and expert workmanship ensure your project stands the test of time and exceeds expectations.',
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprises. We provide detailed quotes upfront and stick to our pricing throughout the project.',
    },
    {
      icon: Shield,
      title: 'Comprehensive Warranty',
      description: 'All our work comes with a solid warranty. We stand behind our craftsmanship and materials for your peace of mind.',
    },
    {
      icon: MapPin,
      title: 'Local Ohio Experts',
      description: 'Deep knowledge of Ohio building codes, climate considerations, and local suppliers ensures optimal results.',
    },
    {
      icon: Handshake,
      title: 'Personalized Service',
      description: 'Every project is unique. We work closely with you to understand your vision and deliver exactly what you want.',
    },
  ];

  return (
    <section className="section-premium bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-executive-lg font-bold text-gray-900 mb-4 md:mb-6 px-4">Why Choose MetroBuilding?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Experience the difference that quality craftsmanship, personalized service, and dedicated attention make
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-cinematic bg-white p-6 md:p-8 group layered-depth reveal-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start sm:items-center mb-4 md:mb-6">
                <div className="bg-linear-to-br from-[#8BC34A]/20 to-[#7CB342]/10 p-4 md:p-5 mr-4 md:mr-5 group-hover:from-[#8BC34A]/30 group-hover:to-[#7CB342]/20 transition-all duration-500 icon-metallic shrink-0">
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-[#8BC34A] transform group-hover:scale-110 transition-transform duration-500" strokeWidth={2} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight text-cinematic-glow">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
