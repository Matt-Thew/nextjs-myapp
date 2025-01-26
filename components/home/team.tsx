"use client";
export default function Team() {
  return (
    <section className="team-section py-5 bg-light">
      <div className="container text-center">
        {/* Section Heading */}
        <h2 className="text-primary mb-3">MEET OUR TEAM</h2>
        <p className="text-muted mb-5">
          WE ARE A GREAT TEAM IN A STREAM OF WEB DESIGN
        </p>

        {/* Team Members */}
        <div className="row">
          {/* Team Member 1 */}
          <div className="col-md-3">
            <div className="team-card position-relative">
              <img
                src="/images/jack.jpg"
                alt="Ann Nagell"
                className="img-fluid"
              />
              <div className="team-overlay d-flex align-items-center justify-content-center">
                <i className="bi bi-plus-circle-fill text-white fs-2"></i>
              </div>
              <div className="team-info text-center">
                <h5 className="mt-3">ANN NAGELL</h5>
                <p className="text-muted">Web Designer</p>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-3">
            <div className="team-card position-relative">
              <img
                src="/images/jack.jpg"
                alt="Jack Nagell"
                className="img-fluid"
              />
              <div className="team-overlay d-flex align-items-center justify-content-center">
                <i className="bi bi-plus-circle-fill text-white fs-2"></i>
              </div>
              <div className="team-info text-center">
                <h5 className="mt-3">JACK NAGELL</h5>
                <p className="text-muted">Web Designer</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="team-card position-relative">
              <img
                src="/images/jack.jpg"
                alt="Jack Nagell"
                className="img-fluid"
              />
              <div className="team-overlay d-flex align-items-center justify-content-center">
                <i className="bi bi-plus-circle-fill text-white fs-2"></i>
              </div>
              <div className="team-info text-center">
                <h5 className="mt-3">JACK NAGELL</h5>
                <p className="text-muted">Web Designer</p>
              </div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="col-md-3">
            <div className="team-card position-relative">
              <img
                src="/images/jack.jpg"
                alt="Mike Rains"
                className="img-fluid"
              />
              <div className="team-overlay d-flex align-items-center justify-content-center">
                <i className="bi bi-plus-circle-fill text-white fs-2"></i>
              </div>
              <div className="team-info text-center">
                <h5 className="mt-3">MIKE RAINS</h5>
                <p className="text-muted">Web Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .team-card {
          overflow: hidden;
          border: 1px solid #ddd;
          border-radius: 5px;
          transition: all 0.3s ease-in-out;
          background-color: white;
          position: relative;
        }

        .team-card img {
          width: 100%;
          height: auto;
          transition: transform 0.3s ease;
        }

        .team-card:hover img {
          transform: scale(1.1);
        }

        .team-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 143, 122, 0.9); /* Green overlay */
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          z-index: 1;
        }

        .team-card:hover .team-overlay {
          opacity: 1;
        }

        .team-info {
          background-color: white;
          padding: 15px;
          z-index: 2;
          position: relative;
          color: black;
        }

        .team-card:hover .team-info {
          background-color: #008f7a; /* Green background on hover */
          color: white;
        }

        .team-info h5 {
          font-size: 1.1rem;
          margin-top: 15px;
          margin-bottom: 5px;
          transition: color 0.3s;
        }

        .team-info p {
          font-size: 0.9rem;
          color: #6c757d; /* Default muted text */
          transition: color 0.3s;
        }

        .team-card:hover .team-info h5,
        .team-card:hover .team-info p {
          color: white;
        }
      `}</style>
    </section>
  );
}
