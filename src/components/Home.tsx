import HeroCarousel from "./HeroCarousel";
import TourismSection from "./TourismSection";
import TourGuideCallToAction from "./TourGuideCallToAction";
import ZipCashSection from "./ZipCashSection";
import OwambeSection from "./Owambe/OwambeUnplugged";
import EnrollmentSection from "./EnrollmentExchange";
import ServicesSection from "./ServiceSection";
import MeetDateSection from "./MeetDate";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <ServicesSection />
      <TourismSection />
      <OwambeSection />
      <EnrollmentSection />
      <MeetDateSection />
      <ZipCashSection />
      <TourGuideCallToAction />
    </>
  );
};

export default Home;
