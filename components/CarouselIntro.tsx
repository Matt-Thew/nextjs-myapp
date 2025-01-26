"use client";

const CarouselIntro = () => {
  return (
    <section className="carousel" id="home">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/shipping2.webp"
              className="d-block w-100"
              alt="Shipping 2"
            />
            <div className="carousel-caption">
              <h1 className="text-white animate-text">
                JOIN US FOR THE <br />
                <span className="highlight">BETTER FUTURE</span>
              </h1>
              <p className="text-white description">
                We provide professional logistics services that include sea
                freight & airfreight management, containerization,
                consolidation, warehousing, customs clearance, and
                transportation.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/shipping3.webp"
              className="d-block w-100"
              alt="Shipping 3"
            />
            <div className="carousel-caption">
              <h1 className="text-white animate-text">
                JOIN US FOR THE <br />
                <span className="highlight">BETTER FUTURE</span>
              </h1>
              <p className="text-white description">
                We provide professional logistics services that include sea
                freight & airfreight management, containerization,
                consolidation, warehousing, customs clearance, and
                transportation.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <style jsx>{`
        .carousel-caption {
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
        .animate-text {
          animation: slideIn 1.5s ease-in-out forwards;
          font-size: 2.5rem;
          font-weight: bold;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
        }

        .highlight {
          color: #ffd700; /* Yellow color */
          font-size: 3rem;
          font-weight: bold;
          text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.7);
        }

        .description {
          font-size: 1rem; /* Adjust font size for readability */
          line-height: 1.6; /* Ensure proper spacing between lines */
          max-width: 600px; /* Restrict width for better line breaks */
          margin-top: 15px; /* Add spacing from other elements */
          word-wrap: break-word; /* Ensure words break if too long */
          text-align: center; /* Center-align the text */
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5); /* Add subtle shadow for readability */
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .animate-text {
            font-size: 1.8rem; /* Smaller for mobile */
            line-height: 1.1; /* Adjust line height */
          }
          .highlight {
            font-size: 2rem;
          }
          .description {
            font-size: 0.9rem;
            line-height: 1.3;
          }
        }

        @media (max-width: 480px) {
          .animate-text {
            font-size: 1.5rem;
            line-height: 1;
          }
          .highlight {
            font-size: 1.8rem;
          }
          .description {
            font-size: 0.8rem;
            line-height: 1.2;
          }
        }
      `}</style>
    </section>
  );
};

export default CarouselIntro;
