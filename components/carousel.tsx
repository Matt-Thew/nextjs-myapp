"use client";

export default function Carousel() {
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
              alt="..."
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
              alt="..."
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
          font-size: 3rem; /* Make BETTER FUTURE larger */
          font-weight: bold;
          text-shadow: 3px 3px 15px rgba(0, 0, 0, 0.7);
        }

        .description {
          font-size: 1rem;
          margin-top: 15px;
          line-height: 1.6;
          max-width: 800px;
          text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
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
            font-size: 2rem;
          }
          .highlight {
            font-size: 10rem;
          }
          .description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
}
