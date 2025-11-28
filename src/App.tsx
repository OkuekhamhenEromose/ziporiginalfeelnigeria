import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import BackToTop from "./components/BackToTop";
import About from "./components/About";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Home from "./components/Home";
// import Subscribe from "./components/Subscribe";
import Blog from "./components/Blog";
import Package from "./components/Packages/Package";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import RegistrationForm from "./components/RegistrationForm";
import TourGuideRegistrationForm from "./components/TourGuideRegistrationForm";
import LoginForm from "./components/LoginForm";
import TravelSearch from "./components/Sabre/TravelSearch";
import FestivalsPage from "./components/Festival/FestivalsPage";
import ZipCashOnboarding from "./components/ZipCashFunding/ZipCashOnboarding";
import LegalNotice from "./components/Bindings/LegalNotice";
import PrivacyPolicy from "./components/Bindings/PrivacyPolicy";
import TermsAndConditions from "./components/Bindings/TermsAndConditions";
import CookiePolicy from "./components/Bindings/CookiePolicy";
import ApplicationLayout from "./components/Layout/ApplicationLayout";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import ZipCashLanding from "./components/ZipCashFunding/ZipCashLanding";
import BvnCheck from "./components/ZipCashFunding/BvnCheck";
import CardApplication from "./components/ZipCashFunding/CardApplication";
import AccountNumberEntry from "./components/ZipCashFunding/AccountNumberEntry";
import CardRequest from "./components/ZipCashFunding/CardRequest";
import CardApplicationSuccess from "./components/ZipCashFunding/CardApplicationSuccess";
// import AccountSetup from "./components/ZipCashFunding/AccountSetup";
// import OTPVerification from "./components/ZipCashFunding/OTPVerification";
// import CardConsent from "./components/ZipCashFunding/CardConsent";
// import CardSuccess from "./components/ZipCashFunding/CardSuccess";
// import InsufficientFunds from "./components/ZipCashFunding/InsufficientFunds";
import SoulOfNigeria from "./components/SoulofNigeria";
import Dashboard from "./components/feelnigeriatourismexch/Dashboard";
import Stage1 from "./components/feelnigeriatourismexch/Stage1";
import Stage2 from "./components/feelnigeriatourismexch/Stage2";
import Stage3 from "./components/feelnigeriatourismexch/Stage3";
import TourBooking from "./components/TourBooking";
import MeetHome from "./components/meetconnect/MeetHome";
import BioLocationPage from "./components/meetconnect/BiosLocation";
import RelationshipIntegrityPage from "./components/meetconnect/RelationshipIntegrity";
import MeetDashboard from "./components/meetconnect/Dashboard";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "Tourism", href: "/soulofnigeria" },
  { title: "Reality Show", href: "/realityshow" },
  { title: "Lets Connect U", href: "/connect" },
  { title: "Payment", href: "/payment" },
];

const App: React.FC = () => {
  const [selectedNavLink, setSelectedNavLink] = useState("Home");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.title = "Feel Nigeria";
  }, []);

  return (
    <>
      <Navbar
        onSelectNavLink={(title) => setSelectedNavLink(title)}
        selectedNavLink={selectedNavLink}
        navLinks={navLinks}
        isMobileView={isMobileView}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services standalone={true} />} />
        <Route path="/packages" element={<Package standalone={true} />} />
        {/* In your App.tsx, update the festivals route: */}
        <Route path="/festivals" element={<FestivalsPage />} />
        <Route path="/blog" element={<Blog standAlone={true} />} />
        <Route path="/booking" element={<TravelSearch />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/register-tour-guide"
          element={<TourGuideRegistrationForm />}
        />
        <Route path="/biodata" element={<ZipCashOnboarding />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/zipcash" element={<ZipCashLanding />} />
        <Route path="/bvn-check" element={<BvnCheck />} />
        <Route path="/card-application" element={<CardApplication />} />
        <Route path="/account-number-entry" element={<AccountNumberEntry />} />
        <Route path="/card-request" element={<CardRequest />} />
        <Route
          path="/card-application-success"
          element={<CardApplicationSuccess />}
        />
        <Route path="/soulofnigeria" element={<SoulOfNigeria />} />
        <Route path="/realityshow" element={<Dashboard />} />
        <Route path="/meethome" element={<MeetHome />} />
        {/* FIXED: Use BioLocationPage instead of BiosLocation */}
        <Route path="/bioslocation" element={<BioLocationPage />} />
        <Route
          path="/relationshipintegrity"
          element={<RelationshipIntegrityPage />}
        />
        <Route path="/meetdashboard" element={<MeetDashboard />} />
        {/* // In your App.tsx, update the routes section: */}
        
        <Route
          path="/connect/stage2"
          element={
            <Stage2 onNext={() => {}} onBack={() => window.history.back()} />
          }
        />
        <Route
          path="/connect/stage3"
          element={
            <Stage3 email="sample-email" onBack={() => window.history.back()} />
          }
        />
        <Route
          path="/connect"
          element={
            <Stage1
              onNext={(id: string, email: string) => {
                console.log("Next clicked", id, email);
                // Navigation is now handled within Stage1
              }}
              onBack={() => window.history.back()}
            />
          }
        />
        {/* ✅ FIXED: Application Route */}
        <Route
          path="/application"
          element={
            <ApplicationLayout>
              <ApplicationForm />
            </ApplicationLayout>
          }
        />
        <Route path="/tour-booking" element={<TourBooking />} />
      </Routes>

      {/* <Subscribe /> */}
      <Footer />
      <Copyright />
      {showBackToTop && <BackToTop />}
    </>
  );
};

export default App;
