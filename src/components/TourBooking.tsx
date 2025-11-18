import Button from "./Button";
import tourbooking from "../assets/img/tourismpics1.webp";

const TourBooking = () => {
  return (
    <div 
      className="container-fluid booking py-5" 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${tourbooking})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        minHeight: '600px'
      }}
    >
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h5 className="section-booking-title pe-3" style={{ color: '#FEA116' }}>Booking</h5>
            <h1 className="text-white mb-4">Online Booking</h1>
            <p className="text-white mb-4">
              At Feel Nigeria, we make it effortless to plan and book your
              perfect Nigerian travel experience. Our seamless online booking
              system allows you to explore, customize, and secure your journey
              with ease.
            </p>
            <p className="text-white mb-4">
              Please make use of the Online Booking Portal to complete your
              booking details.
            </p>
            <Button href="/booking" child="Book Now" />
          </div>
          <div className="col-lg-6">
            <h1 className="text-white mb-3">Book A Tour Deals</h1>
            <p className="text-white mb-4">
              Get <span className="text-warning">5% Off</span> On Your First
              Adventure Trip With Feel Nigeria. Get More Deal Offers Here.
            </p>
            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-white border-0"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control bg-white border-0"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="date"
                      className="form-control bg-white border-0"
                      id="datetime"
                      placeholder="Date & Time"
                    />
                    <label htmlFor="datetime">Date & Time</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select
                      className="form-select bg-white border-0"
                      id="select1"
                    >
                      <option value="1">Lagos City Tour</option>
                      <option value="2">Abuja Cultural Experience</option>
                      <option value="3">Calabar Carnival</option>
                      <option value="4">Yankari Game Reserve</option>
                    </select>
                    <label htmlFor="select1">Destination</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select
                      className="form-select bg-white border-0"
                      id="SelectPerson"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5">5+ Persons</option>
                    </select>
                    <label htmlFor="SelectPerson">Persons</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select
                      className="form-select bg-white border-0"
                      id="CategoriesSelect"
                    >
                      <option value="1">Adventure</option>
                      <option value="2">Cultural</option>
                      <option value="3">Beach</option>
                      <option value="4">Wildlife</option>
                      <option value="5">City Tour</option>
                    </select>
                    <label htmlFor="CategoriesSelect">Tour Category</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control bg-white border-0"
                      placeholder="Special Request"
                      id="message"
                      style={{ height: "100px" }}
                      defaultValue=""
                    />
                    <label htmlFor="message">Special Request</label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-light text-success w-100 py-3"
                    type="submit"
                    style={{ 
                      backgroundColor: '#FEA116', 
                      borderColor: '#FEA116', 
                      color: 'white',
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourBooking;