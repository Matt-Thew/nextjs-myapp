"use client";

import Header from "@/components/Header";
import Footer from "@/components/home/Footer";
import ParallaxEffect from "@/components/home/ParallaxEffect";
import {
  HiOutlineTruck,
  HiOutlineGlobeAlt,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineCube,
  HiOutlineExclamation,
} from "react-icons/hi";

export default function MaritimePage() {
  return (
    <>
      <Header />
      <ParallaxEffect />
      <main className="maritime-page">
        {/* Hero Section */}
        <section className="hero text-center py-5 text-dark bg-light">
          <h1>FLEXIBLE TRANSPORT SOLUTIONS</h1>
          <h2>WE COLLECT, WE STORE, WE SHIP, DOOR TO DOOR</h2>
          <p className="description">
            By working in close co-operation with their fellow WFN Members,
            Maritime Alliance provides first-class local service on a truly
            international scale.
          </p>
          <p className="description">
            Each of the 700+ overseas offices are managed by privately owned
            companies, so they can focus 100% on adapting and adjusting to
            specific requests, unlike many multinational transport companies who
            are restricted by rigid policies and procedures.
          </p>
          <p className="description">
            Maritime Alliance and their fellow WFN Members have created a strong
            partnership in order to provide not only unrivaled personal service,
            but at a very competitive price.
          </p>
        </section>

        {/* Services Section */}
        <section className="services text-center py-5 bg-light text-dark">
          <h3>WFN MEMBER SERVICES INCLUDE:</h3>
          <div className="additional-icons">
            <div className="icon">
              <HiOutlineGlobeAlt size={50} />
              <p>INTERNATIONAL & DOMESTIC</p>
            </div>
            <div className="icon">
              <HiOutlineDocumentText size={50} />
              <p>CUSTOMS CLEARANCE</p>
            </div>
            <div className="icon">
              <HiOutlineCube size={50} />
              <p>PROJECT CARGO</p>
            </div>
            <div className="icon">
              <HiOutlineExclamation size={50} />
              <p>DANGEROUS GOODS</p>
            </div>
            <div className="icon">
              <HiOutlineShieldCheck size={50} />
              <p>INSURANCE</p>
            </div>
          </div>

          <style jsx>{`
            .hero {
              background-color: #f8f9fa;
            }
            .hero h1,
            .hero h2 {
              margin-bottom: 15px;
            }
            .description {
              max-width: 800px;
              margin: 0 auto;
              font-size: 16px;
              line-height: 1.6;
            }

            .services .icons-container,
            .services .additional-icons {
              display: flex;
              justify-content: center;
              gap: 30px;
              margin-top: 30px;
            }
            .services .icon {
              text-align: center;
            }
            .divider {
              margin: 20px auto;
              width: 100px;
              border: 1px solid #007bff;
            }

            .qa-section h1,
            .qa-section h2 {
              margin-bottom: 10px;
            }

            .features {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 20px;
            }
            .feature {
              text-align: center;
            }
            .feature h3 {
              font-size: 36px;
            }
          `}</style>
        </section>
      </main>
      <section className="qa-section text-center py-5 bg-light text-dark">
        <div className="container">
          <div className="qa-row">
            <h1 className="qa-letter">Q</h1>
            <h2 className="qa-question">WHY USE MARITIME ALLIANCE?</h2>
          </div>
          <hr className="qa-divider" />
          <div className="qa-row">
            <h1 className="qa-letter">A</h1>
            <p className="qa-answer">= S.H.I.P</p>
          </div>
        </div>

        <style jsx>{`
          .qa-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .qa-row {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            margin: 20px 0;
          }

          .qa-letter {
            font-size: 4rem;
            font-weight: bold;
            margin: 0;
            color: #000;
          }

          .qa-question {
            font-size: 1.5rem;
            font-weight: bold;
            color: #555;
            margin: 0;
          }

          .qa-divider {
            width: 100px;
            height: 2px;
            background-color: #007bff;
            border: none;
            margin: 20px auto;
          }

          .qa-answer {
            font-size: 1.8rem;
            font-weight: 600;
            color: #555;
            margin: 0;
          }

          .container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
          }

          @media (max-width: 768px) {
            .qa-row {
              flex-direction: column;
            }

            .qa-letter {
              font-size: 3rem;
            }

            .qa-question,
            .qa-answer {
              font-size: 1.2rem;
            }
          }
        `}</style>
      </section>

      {/* Service Highlights Section */}
      <section className="feature-strength text-center py-5 bg-light text-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-6 feature">
              <h3>S</h3>
              <p className="feature-title">SPEED</p>
              <p className="feature-description">
                Maritime Alliance ensures accurate and timely submissions for
                clients' official documentation.
              </p>
            </div>
            <div className="col-md-3 col-6 feature">
              <h3>H</h3>
              <p className="feature-title">HANDLING</p>
              <p className="feature-description">
                Maritime Alliance provides full support for clients throughout
                all procedures.
              </p>
            </div>
            <div className="col-md-3 col-6 feature">
              <h3>I</h3>
              <p className="feature-title">INFORMATION</p>
              <p className="feature-description">
                Maritime Alliance ensures that clients are up-to-date with
                requirements and procedures.
              </p>
            </div>
            <div className="col-md-3 col-6 feature">
              <h3>P</h3>
              <p className="feature-title">PURCHASING POWER</p>
              <p className="feature-description">
                Dedicated professionals provide accuracy and cost-effective
                solutions.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .feature-strength {
            margin: 0 auto;
          }

          .feature {
            margin-bottom: 30px;
          }

          .feature h3 {
            font-size: 2.5rem;
            font-weight: bold;
            font-size: 3rem;
          }

          .feature-title {
            font-size: 1.2rem;
            font-weight: 600;
            margin: 10px 0;
            text-transform: uppercase;
          }

          .feature-description {
            font-size: 1rem;
            line-height: 1.6;
            color: #555;
            margin: 0 auto;
            max-width: 250px;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px; /* Add margin on left and right */
          }

          .row {
            justify-content: center; /* Center-align the features */
          }

          @media (max-width: 768px) {
            .feature h3 {
              font-size: 2rem;
            }

            .feature-title {
              font-size: 1rem;
            }

            .feature-description {
              font-size: 0.9rem;
            }
          }
        `}</style>
      </section>
      <section className="service-highlights py-5">
        <div className="container">
          {/* Air Freight */}
          <div className="row service-item align-items-center mb-4">
            <div className="col-md-4 text-end">
              <h3 className="service-title">AIR FREIGHT</h3>
            </div>
            <div className="col-md-8">
              <p className="service-description">
                With the world’s major commercial airlines, cargo carriers and
                charters at their disposal, Maritime Alliance provides a global
                infrastructure that links with every major trade route
                worldwide.
              </p>
            </div>
          </div>

          {/* Sea Freight */}
          <div className="row service-item align-items-center mb-4">
            <div className="col-md-4 text-end">
              <h3 className="service-title">SEA FREIGHT</h3>
            </div>
            <div className="col-md-8">
              <p className="service-description">
                With the world’s major commercial airlines, cargo carriers and
                charters at their disposal, Maritime Alliance provides a global
                infrastructure that links with every major trade route
                worldwide.
              </p>
            </div>
          </div>

          {/* Groupage Service */}
          <div className="row service-item align-items-center">
            <div className="col-md-4 text-end">
              <h3 className="service-title">GROUPAGE SERVICE</h3>
            </div>
            <div className="col-md-8">
              <p className="service-description">
                Over the years, Maritime Alliance has established a track record
                for the safe, reliable and cost-effective delivery of freight,
                based on flexible customer service, and offers clients the
                benefits of a package tailored to their individual needs and
                timescales.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .service-highlights {
            background-color: #ffffff;
            padding: 50px 0;
          }

          .service-item {
            margin-bottom: 30px;
          }

          .service-title {
            font-size: 1.5rem;
            font-weight: 700;
            text-transform: uppercase;
            color: #333;
          }

          .service-description {
            font-size: 1rem;
            line-height: 1.8;
            color: #666;
            margin: 0;
          }

          @media (max-width: 768px) {
            .service-item {
              flex-direction: column;
              align-items: flex-start;
            }

            .col-md-4 {
              text-align: left !important;
              margin-bottom: 10px;
            }

            .service-title {
              font-size: 1.3rem;
            }

            .service-description {
              font-size: 0.9rem;
            }
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
}
