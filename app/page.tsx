import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSlider from '@/components/HeroSlider';
import TrustExperience from '@/components/TrustExperience';
import Services from '@/components/Services';
import ServiceBanner from '@/components/ServiceBanner';
import WhyChooseUs from '@/components/WhyChooseUs';
import FullServices from '@/components/FullServices';
import ProjectGallery from '@/components/ProjectGallery';
import RecentProjects from '@/components/RecentProjects';
import Process from '@/components/Process';
import MissionVision from '@/components/MissionVision';
import Testimonials from '@/components/Testimonials';
import LeadCapture from '@/components/LeadCapture';
import ServiceArea from '@/components/ServiceArea';
import TeamCulture from '@/components/TeamCulture';
import CommunityImpact from '@/components/CommunityImpact';
import FinalCTA from '@/components/FinalCTA';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <TrustExperience />
        <Services />
        <ServiceBanner />
        <TeamCulture />
        <WhyChooseUs />
        <FullServices />
        <CommunityImpact />
        <Process />
        <ProjectGallery />
        <ServiceArea />

        <LeadCapture />
        {/* <MissionVision /> */}
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
