"use client";

export default function Carousel() {
  return (
    <section className="carousel">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/shipping.webp"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h1 className="text-white animate-text">AND DO WHAT WE LOVE!</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="/images/shipping2.webp"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h1 className="text-white animate-text">
                CREATE BEAUTIFUL MOMENTS!
              </h1>
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
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .animate-text {
          animation: slideIn 1.5s ease-in-out forwards;
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

        h1 {
          font-size: 2.5rem;
          font-weight: bold;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
        }
      `}</style>
    </section>
  );
}
