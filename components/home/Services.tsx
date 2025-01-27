"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  FaPlane, // Air Freight
  FaGlobe, // International & Domestic
  FaFileInvoice, // Customs Clearance
  FaShippingFast, // One-off Shipments
  FaTruck, // Door-to-Door Deliveries
} from "react-icons/fa";

import { HiOutlineTruck } from "react-icons/hi";

export default function Services() {
  const [visibleIcons, setVisibleIcons] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is in view
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      const interval = setInterval(() => {
        setVisibleIcons((prev) => (prev < icons.length ? prev + 1 : prev));
      }, 300); // Delay for each icon to appear
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const icons = [
    { component: <FaPlane size={48} />, label: "AIR FREIGHT" },
    { component: <HiOutlineTruck size={48} />, label: "SEA FREIGHT" },
    { component: <FaTruck size={48} />, label: "ROAD FREIGHT" },
    { component: <FaGlobe size={48} />, label: "INTERNATIONAL & DOMESTIC" },
    { component: <FaFileInvoice size={48} />, label: "CUSTOMS CLEARANCE" },
    { component: <FaShippingFast size={48} />, label: "ONE-OFF SHIPMENTS" },
  ];

  return (
    <section className="services">
      <div className="parallax-bg" id="services" ref={sectionRef}>
        <div className="blurred-overlay p-5">
          <div className="container text-center">
            {/* Section Title */}
            <h2 className="text-primary mb-3">SERVICES</h2>
            <p className="text-muted mb-4">FLEXIBLE TRANSPORT SOLUTIONS</p>
            <hr
              className="mx-auto"
              style={{ width: "80px", border: "1px solid #ddd" }}
            />

            {/* Services Icons */}
            <div className="d-flex justify-content-center align-items-center my-5">
              <div className="d-flex flex-wrap justify-content-center mx-3">
                {icons.map((icon, index) => (
                  <div
                    className={`service-item mx-4 ${
                      index < visibleIcons ? "visible" : "hidden"
                    }`}
                    key={index}
                  >
                    <div className="icon-container">{icon.component}</div>
                    <p className="mt-2">{icon.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <button className="btn btn-outline-primary mt-3">
              <Link href="/services">VIEW ALL SERVICES</Link>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services {
          position: relative;
          background-color: white;
        }

        /* Parallax Background */
        .parallax-bg {
          background-image: url("/images/container.jpg"); /* Replace with your image path */
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        /* Blurred Overlay */
        .blurred-overlay {
          background: rgba(255, 255, 255, 0.7); /* Semi-transparent white */
          backdrop-filter: blur(10px); /* Blur effect */
          border-radius: 12px; /* Rounded corners */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
          z-index: 2;
        }

        .services h2 {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
        }

        .services p {
          font-size: 1rem;
          color: #6c757d;
        }

        .service-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 100px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .service-item.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .icon-container {
          color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
          border: 2px solid #ddd;
          border-radius: 12px;
          transition: background-color 0.3s, transform 0.3s;
        }

        .icon-container:hover {
          transform: scale(1.1);
        }

        .icon {
          font-size: 24px;
          color: #6c757d;
        }

        .service-item p {
          margin-top: 8px;
          font-size: 0.9rem;
          color: #6c757d;
        }

        .btn {
          background-color: #fff;
          color: #007bff;
          border: 1px solid #007bff;
        }

        .btn:hover {
          background-color: #007bff;
          color: #fff;
        }
      `}</style>
    </section>
  );
}
