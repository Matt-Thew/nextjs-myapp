"use client";

export default function Intro() {
  return (
    <section className="py-5 bg-white text-dark" id="about">
      <div className="container text-center">
        {/* Title */}
        <h2 className="display-4 fw-bold mb-4">ABOUT US</h2>

        {/* Big Quote Section */}
        <div className="d-flex justify-content-center align-items-center mb-5">
          <span className="display-1 text-muted me-3">&ldquo;</span>
          <p
            className="lead fw-bold text-dark mx-2"
            style={{ fontSize: "1.5rem", lineHeight: "2rem" }}
          >
            THE WORLD FREIGHT NETWORK IS AN INTERNATIONAL ASSOCIATION OF OVER
            <br />
            230 INDEPENDENT FORWARDERS IN MORE THAN 100 COUNTRIES.
          </p>
          <span className="display-1 text-muted ms-3">&rdquo;</span>
        </div>

        {/* Grid Description */}
        <div className="row text-start">
          <div className="col-lg-3 col-md-6 mb-4">
            <p className="text-muted">
              Being connected to a worldwide network means that just one call is
              all that is needed to move cargo from any point in the world by
              air or sea – clients can leave the rest to Maritime Alliance and
              their strong network of WFN Members.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <p className="text-muted">
              The staff at Maritime Alliance devote their time to ensure that
              clients receive not only personal attention but to enable them to
              meet their deadlines. They have the infrastructure in place to
              deal with clients’ requirements quickly, efficiently, and
              professionally.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <p className="text-muted">
              Maritime Alliance has passed strict entry procedures and has been
              awarded WFN membership. This means that they are connected to more
              than 700 offices, each of whom has extensive knowledge of their
              local market.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <p className="text-muted">
              Belonging to WFN provides Maritime Alliance with the expertise
              necessary to meet the demanding requirements of the world’s top
              importers and exporters.
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-5">
          <hr
            className="mx-auto"
            style={{ width: "80px", borderTop: "3px solid #007bff" }}
          />
        </div>
      </div>

      <style jsx>{`
        h2 {
          font-size: 2.5rem;
        }

        p {
          font-size: 1rem;
          line-height: 1.8;
        }

        .lead {
          font-size: 1.5rem;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2rem;
          }

          .lead {
            font-size: 1.2rem;
            line-height: 1.5;
          }

          .display-1 {
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
}
