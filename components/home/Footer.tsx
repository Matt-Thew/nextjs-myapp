"use client";
import Link from "next/link";
import { FaShip } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row text-center text-md-left">
          {/* Navigation Links */}
          <div className="col-md-4 mb-3 mb-md-0">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link href="#home" className="text-white text-uppercase small">
                  Home
                </Link>
              </li>
              <li className="list-inline-item mx-3">
                <Link href="#about" className="text-white text-uppercase small">
                  About Us
                </Link>
              </li>
              <li className="list-inline-item mx-3">
                <Link
                  href="#services"
                  className="text-white text-uppercase small"
                >
                  Service
                </Link>
              </li>
              <li className="list-inline-item mx-3">
                <Link href="#news" className="text-white text-uppercase small">
                  News
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  href="#contact"
                  className="text-white text-uppercase small"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo Section */}
          <div className="col-md-4 d-flex align-items-center justify-content-center">
            <FaShip className="text-white me-2" size={30} />
            <span className="font-weight-bold small">
              MARITIME <span className="text-primary">ALLIANCE</span>
            </span>
          </div>

          {/* Rights Reserved */}
          <div className="col-md-4 text-center text-md-right small opacity-75 mt-3 mt-md-0">
            All Rights Reserved
          </div>
        </div>
      </div>

      <style jsx>{`
        ul {
          padding: 0;
          margin: 0;
          list-style: none;
        }

        ul li a:hover {
          color: #6dc2ff; /* Highlight color on hover */
        }
      `}</style>
    </footer>
  );
}
