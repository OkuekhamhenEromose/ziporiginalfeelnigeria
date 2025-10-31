import HeroCarousel from "./HeroCarousel";
import TourBooking from "./TourBooking";
import PopularDestination from "./Destination/PopularDestination";
import TourismSection from "./TourismSection";
import FestivalGrid from "./Festival/FestivalGrid";
import TourGuideCallToAction from "./TourGuideCallToAction";
import ZipCashSection from "./ZipCashSection";
import OwambeSection from "./Owambe/OwambeUnplugged";
import EnrollmentSection from "./EnrollmentExchange";

const Home = () => {
  return (
    <>
      <HeroCarousel />
      <TourismSection />
      <EnrollmentSection />
      <PopularDestination />
      <ZipCashSection />
      <FestivalGrid />
      <OwambeSection />
      <TourGuideCallToAction />
      <TourBooking />
    </>
  );
};

export default Home;
