"use client";
import Link from "next/link";
import { useEffect } from "react";
import { FaShip } from "react-icons/fa";

const Header = () => {
  useEffect(() => {
    // Import Bootstrap's JavaScript for functionality like dropdowns
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <header>
      <div className="container-fluid p-0">
        {/* Navbar */}
        <nav
          className="navbar navbar-expand-lg navbar-light bg-transparent"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 10,
            backgroundColor: "transparent",
          }}
        >
          <div className="container">
            {/* Logo */}
            <Link href="/" className="navbar-brand d-flex align-items-center">
              <FaShip className="text-white" size={30} />
              <span className="text-white fw-bold">
                MARITIME <span className="text-primary">ALLIANCE</span>
              </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item px-3">
                  <Link href="/" className="nav-link text-white text-uppercase">
                    Home
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link
                    href="/about"
                    className="nav-link text-white text-uppercase"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link
                    href="/services"
                    className="nav-link text-white text-uppercase"
                  >
                    Service
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link
                    href="/news"
                    className="nav-link text-white text-uppercase"
                  >
                    News
                  </Link>
                </li>
                <li className="nav-item px-3">
                  <Link
                    href="/contact"
                    className="nav-link text-white text-uppercase"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .navbar {
          padding: 10px 0;
          background: transparent !important;
        }
        .navbar-brand span {
          font-size: 18px;
          letter-spacing: 1px;
        }
        .nav-link {
          font-size: 14px;
          letter-spacing: 1px;
          transition: color 0.3s ease;
        }
        .nav-link:hover {
          color: #bac8e0;
        }
        .btn-language {
          background-color: #3b82f6;
          color: white;
          border-radius: 50%;
          border: none;
          width: 40px;
          height: 40px;
          font-size: 14px;
          font-weight: bold;
        }
        .btn-language:hover {
          background-color: #2563eb;
        }
      `}</style>
    </header>
  );
};

export default Header;
