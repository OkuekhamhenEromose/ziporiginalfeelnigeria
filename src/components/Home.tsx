import HeroCarousel from "./HeroCarousel";
import TourBooking from "./TourBooking";
import TourismSection from "./TourismSection";
import TourGuideCallToAction from "./TourGuideCallToAction";
import ZipCashSection from "./ZipCashSection";
import OwambeSection from "./Owambe/OwambeUnplugged";
import EnrollmentSection from "./EnrollmentExchange";
import ServicesSection from "./ServiceSection";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <TourismSection />
      <ServicesSection />
      <OwambeSection />
      <EnrollmentSection />
      <ZipCashSection />
      <TourGuideCallToAction />
      <TourBooking />
    </>
  );
};

export default Home;
