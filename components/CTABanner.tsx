import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-[#8BC34A]">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss your construction needs and bring your vision to life. Contact us today for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#8BC34A] px-8 py-3  font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
