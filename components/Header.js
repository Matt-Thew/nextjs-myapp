"use client";
import Link from 'next/link';
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    // Import Bootstrap's JavaScript for functionality like dropdowns
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <header>
      <div className="container-fluid p-0">

        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#008f7a' }}>
          <div className="container">
            <Link href="/" className="navbar-brand text-white">
                Malliance
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
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/" className="nav-link text-white">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className="nav-link text-white">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/team" className="nav-link text-white">
                    Team
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/portfolio" className="nav-link text-white">
                    Portfolio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/services" className="nav-link text-white">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/blog" className="nav-link text-white">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/pricing" className="nav-link text-white">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/contacts" className="nav-link text-white">
                    Contacts
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/shortcodes" className="nav-link text-white">
                    Shortcodes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <style jsx>{`
        .btn-buy-now {
          background-color: #4caf50;
          color: #fff;
          border: none;
        }
        .btn-buy-now:hover {
          background-color: #45a049;
        }
        .navbar-brand {
          font-weight: bold;
          font-size: 24px;
        }
      `}</style>
    </header>
  );
};

export default Header;
