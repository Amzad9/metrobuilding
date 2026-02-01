import { MessageCircle, DraftingCompass, Hammer, CheckCircle } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Free Consultation',
      description:
        'We start with a detailed consultation to understand your vision, budget, and timeline. Our experts assess your space and provide professional recommendations.',
      icon: MessageCircle,
    },
    {
      number: '02',
      title: 'Planning & Design',
      description:
        'Our team creates detailed plans, 3D renderings, and material selections. We handle all permits and approvals, ensuring everything is ready before construction begins.',
      icon: DraftingCompass,
    },
    {
      number: '03',
      title: 'Construction Phase',
      description:
        'With clear communication and regular updates, our skilled craftsmen bring your project to life. We maintain a clean worksite and respect your home throughout the process.',
      icon: Hammer,
    },
    {
      number: '04',
      title: 'Final Walkthrough',
      description:
        'We conduct a thorough final inspection with you, address any concerns, and ensure every detail meets our high standards. Your complete satisfaction is our priority.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="section-premium bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-executive-lg font-bold text-gray-900 mb-4 md:mb-6 px-4">How We Work</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Our proven process ensures smooth execution from initial consultation to final walkthrough
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative reveal-on-scroll" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="card-cinematic bg-white p-6 md:p-8 h-full group layered-depth">
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className="bg-linear-to-br from-[#8BC34A]/20 to-[#7CB342]/10 p-4 md:p-5 group-hover:from-[#8BC34A]/30 group-hover:to-[#7CB342]/20 transition-all duration-500 icon-metallic shrink-0">
                    <step.icon className="w-6 h-6 md:w-8 md:h-8 text-[#8BC34A] transform group-hover:scale-110 transition-transform duration-500" strokeWidth={2} />
                  </div>
                  <div className="text-3xl md:text-5xl font-bold text-[#8BC34A] opacity-10 transform group-hover:scale-110 transition-transform duration-500">{step.number}</div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight text-cinematic-glow">{step.title}</h3>
                <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="bg-white p-2 border-2 border-[#8BC34A]">
                    <svg className="w-6 h-6 text-[#8BC34A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
