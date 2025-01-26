"use client";

import Link from "next/link";
import {
  FaPlane, // Air Freight
  FaShip, // Sea Freight
  FaGlobe, // International & Domestic
  FaFileInvoice, // Customs Clearance
  FaShippingFast, // One-off Shipments
  FaBoxOpen, // Project Cargo
  FaSkullCrossbones, // Dangerous Goods
  FaTruck, // Door-to-Door Deliveries
  FaWarehouse, // Warehouse
  FaShieldAlt, // Insurance
} from "react-icons/fa";

import {
  HiOutlinePaperAirplane,
  HiOutlineTruck,
  HiOutlineGlobeAlt,
  HiOutlineDocumentText,
  HiOutlineInboxArrowDown,
  HiOutlineCube,
  HiOutlineExclamation,
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
  HiOutlineShieldCheck,
} from "react-icons/hi";

export default function Services() {
  const services = [
    { icon: FaPlane, label: "AIR FREIGHT" },
    { icon: FaShip, label: "SEA FREIGHT" },
    { icon: FaTruck, label: "ROAD FREIGHT" },
    { icon: FaGlobe, label: "INTERNATIONAL & DOMESTIC" },
    { icon: FaFileInvoice, label: "CUSTOMS CLEARANCE" },
    { icon: FaShippingFast, label: "ONE-OFF SHIPMENTS" },
    { icon: FaBoxOpen, label: "PROJECT CARGO" },
    { icon: FaSkullCrossbones, label: "DANGEROUS GOODS" },
    { icon: FaTruck, label: "DOOR-TO-DOOR DELIVERIES" },
    { icon: FaWarehouse, label: "WAREHOUSE" },
    { icon: FaShieldAlt, label: "INSURANCE" },
  ];
  return (
    <section className="services py-5" id="services">
      <div className="container text-center position-relative">
        {/* Section Title */}
        <h2 className="text-primary mb-3">SERVICES</h2>
        <p className="text-muted mb-4">FLEXIBLE TRANSPORT SOLUTIONS</p>
        <hr
          className="mx-auto"
          style={{ width: "80px", border: "1px solid #ddd" }}
        />

        {/* Services Icons */}
        <div className="d-flex justify-content-center align-items-center my-5">
          {/* Service Items */}
          <div className="d-flex flex-wrap justify-content-center mx-3">
            <div className="service-item mx-4">
              <div className="icon-container">
                <FaPlane className="icon" size={48} />
              </div>
              <p className="mt-2">AIR FREIGHT</p>
            </div>
            <div className="service-item mx-4">
              <div className="icon-container">
                <HiOutlineTruck className="icon" size={48} />
              </div>
              <p className="mt-2">SEA FREIGHT</p>
            </div>
            <div className="service-item mx-4">
              <div className="icon-container">
                <FaTruck className="icon" size={48} />
              </div>
              <p className="mt-2">ROAD FREIGHT</p>
            </div>
            <div className="service-item mx-4">
              <div className="icon-container">
                <FaGlobe className="icon" size={48} />
              </div>
              <p className="mt-2">INTERNATIONAL & DOMESTIC</p>
            </div>
            <div className="service-item mx-4">
              <div className="icon-container">
                <FaFileInvoice className="icon" size={48} />
              </div>
              <p className="mt-2">CUSTOMS CLEARANCE</p>
            </div>
            <div className="service-item mx-4">
              <div className="icon-container">
                <FaShippingFast className="icon" size={48} />
              </div>
              <p className="mt-2">ONE-OFF SHIPMENTS</p>
            </div>
          </div>
        </div>
        <button className="btn btn-outline-primary mt-3">
          <Link href="/services">VIEW ALL SERVICES</Link>
        </button>
      </div>

      <style jsx>{`
        .services {
          background-color: #ffffff;
        }

        .services h2 {
          font-size: 2rem;
          font-weight: bold;
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

        .icon-container.selected {
          background-color: #008f7a;
          color: #fff;
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

        .btn-arrow {
          position: absolute;
          color: #6c757d;
          top: 50%;
          transform: translateY(-50%);
          background-color: #ffffff;
          border: 1px solid #ddd;
          padding: 10px 15px;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .btn-arrow:hover {
          background-color: #e9ecef;
        }

        .arrow-icon {
          font-size: 20px;
          transition: color 0.3s;
        }

        .btn-left {
          left: 5%;
        }

        .btn-right {
          right: 5%;
        }
      `}</style>
    </section>
  );
}
