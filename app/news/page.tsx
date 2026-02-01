import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CTABanner from '@/components/CTABanner';
import Link from 'next/link';

export default function News() {
  const newsItems = [
    {
      id: 1,
      title: 'MetroBuilding Wins Award for Sustainable Construction',
      date: 'March 15, 2024',
      category: 'Awards',
      excerpt:
        'We are proud to announce that MetroBuilding has been recognized for excellence in sustainable construction practices.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    },
    {
      id: 2,
      title: 'New Commercial Project Breaks Ground',
      date: 'March 10, 2024',
      category: 'Projects',
      excerpt:
        'Construction begins on the new downtown office complex, set to become a landmark in sustainable commercial development.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    },
    {
      id: 3,
      title: 'Innovation in Construction Technology',
      date: 'March 5, 2024',
      category: 'Technology',
      excerpt:
        'MetroBuilding adopts cutting-edge construction technology to improve efficiency and reduce environmental impact.',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    },
    {
      id: 4,
      title: 'Community Partnership Program Launched',
      date: 'February 28, 2024',
      category: 'Community',
      excerpt:
        'We are excited to launch our new community partnership program, supporting local initiatives and workforce development.',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    },
    {
      id: 5,
      title: 'Residential Project Completion Celebration',
      date: 'February 20, 2024',
      category: 'Projects',
      excerpt:
        'Join us in celebrating the successful completion of our latest residential development project.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    },
    {
      id: 6,
      title: 'Safety Excellence Recognition',
      date: 'February 15, 2024',
      category: 'Safety',
      excerpt:
        'MetroBuilding receives recognition for outstanding safety record and commitment to workplace safety standards.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Page Header */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Updates</h1>
            <p className="text-xl text-gray-300">Stay informed about our latest projects and company news</p>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item) => (
                <article
                  key={item.id}
                  className="bg-white  shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <div
                      className="w-full h-full bg-cover bg-center transform hover:scale-110 transition-transform duration-300"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#8BC34A] text-white px-3 py-1  text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    <Link
                      href="#"
                      className="text-[#8BC34A] font-semibold hover:text-[#7CB342] transition-colors inline-flex items-center"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
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
