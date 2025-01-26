"use client";

export default function ContactUs() {
  return (
    <section className="contact-us py-5">
      <div className="container d-flex justify-content-center align-items-start">
        {/* Google Map Section */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15506.776581772661!2d100.44995216242677!3d13.676352801238725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29b3e3651078b%3A0xba12177e1cf9ea72!2sAdvance%20Rama%202%20Driving%20School!5e0!3m2!1sen!2sth!4v1737865118619!5m2!1sen!2sth"
            width="600"
            height="300"
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="contact-info ms-4">
          <h2 className="text-dark">CONTACT US</h2>
          <p>
            Please complete the Quick Quote form on the WFN website{" "}
            <a
              href="http://www.worldfreightnetwork.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.worldfreightnetwork.com
            </a>
            .
          </p>
          <hr className="my-3" />
          <address className="text-dark">
            56 Yada Bldg, 4th Floor, Room # 4 / 6-7, Silom Road, Bangrak
            District, Suriyawongse Sub-District, Bangkok 10500, Thailand
            <br />
            <strong>Tel:</strong> +662 632 98 98 <br />
            <strong>Fax:</strong> +662 632 98 80 <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:inter-trade@maliance.com">
              inter-trade@maliance.com
            </a>
            , <a href="mailto:sale@maliance.com">sale@maliance.com</a>
          </address>
        </div>
      </div>

      <style jsx>{`
        .contact-us {
          background-color: #ffffff;
        }

        .map-container {
          flex: 1;
          max-width: 50%;
        }

        .contact-info {
          flex: 1;
          max-width: 50%;
        }

        h2 {
          font-size: 2rem;
          font-weight: bold;
        }

        p {
          font-size: 1rem;
          color: #333;
        }

        address {
          font-style: normal;
          line-height: 1.6;
          font-size: 0.9rem;
        }

        a {
          color: #007bff;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        hr {
          border: 1px solid #ddd;
        }
      `}</style>
    </section>
  );
}
