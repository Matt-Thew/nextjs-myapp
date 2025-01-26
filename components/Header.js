"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaShip } from "react-icons/fa";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? "sticky" : ""}`}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
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
                <Link
                  href="#home"
                  className="nav-link text-white text-uppercase"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  href="#about"
                  className="nav-link text-white text-uppercase"
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  href="#services"
                  className="nav-link text-white text-uppercase"
                >
                  Service
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  href="#news"
                  className="nav-link text-white text-uppercase"
                >
                  News
                </Link>
              </li>
              <li className="nav-item px-3">
                <Link
                  href="#contact"
                  className="nav-link text-white text-uppercase"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        body,
        html {
          margin: 0;
          padding: 0;
        }

        .header {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1030;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }

        .header.sticky {
          background: rgba(
            0,
            51,
            102,
            0.95
          ); /* Navy blue tone with slight transparency */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
          color: white;
          transition: background-color 0.3s ease-in-out,
            box-shadow 0.3s ease-in-out;
        }
        .navbar {
          padding: 10px 0;
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
      `}</style>
    </header>
  );
};

export default Header;
