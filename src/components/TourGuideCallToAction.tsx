import { useNavigate } from "react-router-dom";

const TourGuideCallToAction = () => {
  const navigate = useNavigate();
  const handleRegisterClick = () => {
    navigate("/register-tour-guide");
  };

  return (
    <div className="w-100 my-4">
      <div
        className="card shadow-lg p-4 border-0 rounded-0"
        style={{ width: "100%" }}
      >
        <h2 className="text-center mb-4" style={{color: "#2b2e32" }}>
          Be a Tour Guide in Your City
        </h2>
        <p className="text-secondary mb-4">
          Are you passionate about your city and eager to share its hidden gems
          with the world? Feel Nigeria is building a network of local experts to
          provide authentic, unforgettable experiences for our visitors.
        </p>
        <div className="mb-3">
          <strong>Our Process:</strong>
          <ol className="mt-2 ps-3">
            <li className="mb-2">
              <b>Register:</b> Fill out the form above to express your interest.
            </li>
            <li className="mb-2">
              <b>Review:</b> Our team will review your application and
              qualifications.
            </li>
            <li className="mb-2">
              <b>Training:</b> Successful applicants will undergo a specialized
              training program covering safety, hospitality, cultural
              sensitivity, and Feel Nigeria standards.
            </li>
            <li className="mb-2">
              <b>Certification:</b> Upon completion, you'll be certified as an
              official Feel Nigeria Tour Guide.
            </li>
            <li className="mb-2">
              <b>Connect:</b> We'll connect you with tourists and diaspora
              members seeking unique local experiences in your city!
            </li>
          </ol>
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-success btn-lg"
            onClick={handleRegisterClick}
          >
            Register to be a Tour Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default TourGuideCallToAction;
