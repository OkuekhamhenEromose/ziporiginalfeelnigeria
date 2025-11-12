import React, { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";
import BackToTop from "./components/BackToTop";
import About from "./components/About";
import Home from "./components/Home";
import Subscribe from "./components/Subscribe";
import Blog from "./components/Blog";
import Package from "./components/Packages/Package";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import RegistrationForm from "./components/RegistrationForm";
import TourGuideRegistrationForm from "./components/TourGuideRegistrationForm";
import LoginForm from "./components/LoginForm";
import TravelSearch from "./components/Sabre/TravelSearch";
import FestivalGrid from "./components/Festival/FestivalGrid";
import ZipCashOnboarding from "./components/ZipCashFunding/ZipCashOnboarding";
import LegalNotice from "./components/Bindings/LegalNotice";
import PrivacyPolicy from "./components/Bindings/PrivacyPolicy";
import TermsAndConditions from "./components/Bindings/TermsAndConditions";
import CookiePolicy from "./components/Bindings/CookiePolicy";
import ApplicationLayout from "./components/Layout/ApplicationLayout";
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import ZipCashLanding from "./components/ZipCashFunding/ZipCashLanding";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Packages", href: "/packages" },
  { title: "Contact", href: "/contact" },
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
        <Route path="/festivals" element={<FestivalGrid standalone={true} />} />
        <Route path="/blog" element={<Blog standAlone={true} />} />
        <Route path="/booking" element={<TravelSearch />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register-tour-guide" element={<TourGuideRegistrationForm />} />
        <Route path="/biodata" element={<ZipCashOnboarding />} />
        <Route path="/legal-notice" element={<LegalNotice />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/zipcash" element={<ZipCashLanding />} />


        {/* ✅ FIXED: Application Route */}
        <Route
          path="/application"
          element={
            <ApplicationLayout>
              <ApplicationForm />
            </ApplicationLayout>
          }
        />
      </Routes>

      <Subscribe />
      <Footer />
      <Copyright />
      {showBackToTop && <BackToTop />}
    </>
  );
};

export default App;
