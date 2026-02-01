import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import CTABanner from '@/components/CTABanner';

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-900 text-white py-20 md:py-28">
          <div className="container mx-auto px-4">
            <h1 className="text-executive-xl font-bold mb-6 text-white reveal-on-scroll">Frequently Asked Questions</h1>
            <p className="text-2xl text-gray-300 max-w-3xl leading-relaxed reveal-on-scroll" style={{ animationDelay: '0.2s' }}>
              Get answers to common questions about our construction and remodeling services
            </p>
          </div>
        </section>

        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
