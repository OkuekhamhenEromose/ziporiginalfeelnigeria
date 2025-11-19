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
      <style>
        {`
          .booking .form-control,
          .booking .form-select {
            background-color: rgba(0, 0, 0, 0.3) !important;
            backdrop-filter: blur(5px);
          }
          
          .booking .form-control::placeholder {
            color: rgba(255, 255, 255, 0.7);
          }
          
          .booking .form-control:focus,
          .booking .form-select:focus {
            background-color: rgba(0, 0, 0, 0.3) !important;
            border-color: #2d7a4f !important;
            box-shadow: 0 0 0 0.25rem rgba(45, 122, 79, 0.25) !important;
            color: white !important;
          }
          
          .booking .form-select {
            color: white !important;
          }
          
          .booking .form-select option {
            background-color: #2d7a4f !important;
            color: white !important;
            padding: 10px;
          }
          
          .booking .form-select option:hover {
            background-color: transparent !important;
            color: #2d7a4f !important;
          }
          
          .booking .form-floating > .form-control:focus ~ label,
          .booking .form-floating > .form-control:not(:placeholder-shown) ~ label,
          .booking .form-floating > .form-select ~ label {
            color: rgba(255, 255, 255, 0.9) !important;
            background-color: transparent !important;
          }
          
          .booking .form-floating > label {
            background-color: transparent !important;
          }
          
          .booking input[type="date"]::-webkit-calendar-picker-indicator {
            filter: invert(1);
            cursor: pointer;
          }
          
          .booking .form-select {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e") !important;
          }
          
          .booking input:-webkit-autofill,
          .booking input:-webkit-autofill:hover,
          .booking input:-webkit-autofill:focus,
          .booking input:-webkit-autofill:active {
            -webkit-box-shadow: 0 0 0 30px rgba(0, 0, 0, 0.3) inset !important;
            -webkit-text-fill-color: white !important;
          }
        `}
      </style>
      <div className="container py-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h2 className="section-booking-title pe-3" style={{ color: 'white' }}>Booking</h2>
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
                      className="form-control bg-transparent border-2 text-white"
                      id="name"
                      placeholder="Your Name"
                    />
                    <label htmlFor="name" className="text-white">Your Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control bg-transparent border-2 text-white"
                      id="email"
                      placeholder="Your Email"
                    />
                    <label htmlFor="email" className="text-white">Your Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="date"
                      className="form-control bg-transparent text-white border-2"
                      id="datetime"
                      placeholder="Date & Time"
                    />
                    <label htmlFor="datetime" className="text-white">Date & Time</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select
                      className="form-select bg-transparent border-2 text-white"
                      id="select1"
                    >
                      <option value="1">Lagos City Tour</option>
                      <option value="2">Abuja Cultural Experience</option>
                      <option value="3">Calabar Carnival</option>
                      <option value="4">Yankari Game Reserve</option>
                    </select>
                    <label htmlFor="select1" className="text-white">Destination</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select
                      className="form-select bg-transparent border-2 text-white"
                      id="SelectPerson"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5">5+ Persons</option>
                    </select>
                    <label htmlFor="SelectPerson" className="text-white">Persons</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <select
                      className="form-select bg-transparent border-2 text-white"
                      id="CategoriesSelect"
                    >
                      <option value="1">Adventure</option>
                      <option value="2">Cultural</option>
                      <option value="3">Beach</option>
                      <option value="4">Wildlife</option>
                      <option value="5">City Tour</option>
                    </select>
                    <label htmlFor="CategoriesSelect" className="text-white">Tour Category</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control bg-transparent border-2 text-white"
                      placeholder="Special Request"
                      id="message"
                      style={{ height: "100px" }}
                      defaultValue=""
                    />
                    <label htmlFor="message" className="text-white">Special Request</label>
                  </div>
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-light text-white py-3 px-4"
                    type="submit"
                    style={{ 
                      backgroundColor: '#2d7a4f', 
                      borderColor: 'white', 
                      color: '#2d7a4f',
                      fontWeight: '600',
                      fontSize: '1.1rem'
                    }}
                  >
                    Submit
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