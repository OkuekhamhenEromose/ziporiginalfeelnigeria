import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="container-fluid footer py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">Get In Touch</h4>
              <a href="" className="text-decoration-none">
                <i className="fas fa-home me-2"></i> 20, Ajasa Street off King
                George IV, Onikan Lagos Nigeria
              </a>
              <a href="" className="text-decoration-none">
                <i className="fas fa-envelope me-2"></i> info@feelnigeria.com
              </a>
              <a href="" className="text-decoration-none">
                <i className="fas fa-phone me-2"></i> +234 803 475 1038
              </a>
              {/* <a href="" className="mb-3 text-decoration-none">
                <i className="fas fa-print me-2"></i> +234 802 892 4008
              </a> */}
              <div className="d-flex align-items-center">
                <i className="fas fa-share fa-2x text-white me-2"></i>
                <a
                  className="btn-square btn btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn-square btn btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn-square btn btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  className="btn-square btn btn-primary rounded-circle mx-1"
                  href=""
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">Company</h4>
              <a href="" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> About
              </a>
              <a href="" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Careers
              </a>
              <a href="" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Blog
              </a>
              <a href="" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Press
              </a>
              <a href="" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Gift Cards
              </a>
              <a href="" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Magazine
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column">
              <h4 className="mb-4 text-white">Support</h4>
              <a href="" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Contact
              </a>
              <a href="/legal-notice" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Legal Notice
              </a>
              <a href="/privacy-policy" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Privacy Policy
              </a>
              <a href="/terms-and-conditions" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Terms and Conditions
              </a>
              <a href="" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Sitemap
              </a>
              <a href="/cookie-policy" className="text-decoration-none">
                <i className="fas fa-angle-right me-2"></i> Cookie policy
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item">
              <div className="row gy-3 gx-2 mb-4">
                <div className="col-xl-6">
                  <form>
                    <div className="form-floating">
                      <select
                        className="form-select bg-dark border text-secondary"
                        id="select2"
                      >
                        <option value="1">Arabic</option>
                        <option value="2">German</option>
                        <option value="3">Greek</option>
                        <option value="3">New York</option>
                      </select>
                      <label htmlFor="select1">English</label>
                    </div>
                  </form>
                </div>
                <div className="col-xl-6">
                  <form>
                    <div className="form-floating">
                      <select
                        className="form-select bg-dark border text-secondary"
                        id="select1"
                      >
                        <option value="1">USD</option>
                        <option value="2">EUR</option>
                        <option value="3">INR</option>
                        <option value="3">GBP</option>
                      </select>
                      <label htmlFor="select1">$</label>
                    </div>
                  </form>
                </div>
              </div>
              <h4 className="text-white mb-3">Payments</h4>
              <div className="footer-bank-card">
                <a href="#" className="text-white me-2">
                  <i className="fab fa-cc-amex fa-2x"></i>
                </a>
                <a href="#" className="text-white me-2">
                  <i className="fab fa-cc-visa fa-2x"></i>
                </a>
                <a href="#" className="text-white me-2">
                  <i className="fas fa-credit-card fa-2x"></i>
                </a>
                <a href="#" className="text-white me-2">
                  <i className="fab fa-cc-mastercard fa-2x"></i>
                </a>
                <a href="#" className="text-white me-2">
                  <i className="fab fa-cc-paypal fa-2x"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="fab fa-cc-discover fa-2x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
