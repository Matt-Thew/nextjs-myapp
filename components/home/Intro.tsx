"use client";
export default function Intro() {
  return (
    <section className="container my-5">
      <div className="row align-items-center">
        {/* Left Section: Image */}
        <div className="col-md-6 text-center">
          <img
            src="/images/devices.png"
            alt="Responsive Devices"
            className="img-fluid"
          />
        </div>

        {/* Right Section: Content */}
        <div className="col-md-6">
          <h2 className="text-light">
            To Make Your Life Easier – Is Our Top Priority
          </h2>
          <p className="text-muted">
            We are driving crazy with each and every web-miracle we work on.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ut lacus at velit consequat sodales.
          </p>

          <ul className="list-unstyled">
            <li className="mb-2">
              <i className="bi bi-arrow-right-circle-fill text-primary"></i>
              <span className="ms-2 text-light">Stunning Parallax Effects</span>
            </li>
            <li className="mb-2">
              <i className="bi bi-arrow-right-circle-fill text-primary"></i>
              <span className="ms-2 text-light">
                Totally Responsive & Unbelievably Clean
              </span>
            </li>
            <li className="mb-2">
              <i className="bi bi-arrow-right-circle-fill text-primary"></i>
              <span className="ms-2 text-light">Multiple CSS3 Animations</span>
            </li>
            <li className="mb-2">
              <i className="bi bi-arrow-right-circle-fill text-primary"></i>
              <span className="ms-2 text-light">
                SEO-Optimized & Valid Code
              </span>
            </li>
            <li>
              <i className="bi bi-arrow-right-circle-fill text-primary"></i>
              <span className="ms-2 text-light">
                Parallax Video Background Effect
              </span>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        section {
          background-color: #111; /* Dark background */
          padding: 60px 20px;
        }
        h2 {
          font-weight: 300;
          font-size: 2rem;
          margin-bottom: 20px;
        }
        p {
          font-size: 1rem;
          margin-bottom: 30px;
        }
        .list-unstyled li {
          font-size: 1rem;
        }
      `}</style>
    </section>
  );
}
