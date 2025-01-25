import Header from "@/components/Header";
import Intro from "@/components/home/Intro";
import Team from "@/components/home/team";

export default function Home() {
  return (
    <>
      <Header />
      {/* Carousel Section */}
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
              <div className="carousel-caption d-none d-md-block">
                <h1 className="text-white">AND DO WHAT WE LOVE!</h1>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/images/sample2.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h1 className="text-white">CREATE BEAUTIFUL MOMENTS!</h1>
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
      </section>
      <Intro />
      <Team />
    </>
  );
}
