"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function News() {
  const blogs = [
    {
      image: "/images/placeholder.svg",
      date: "February 3, 2014",
      comments: 0,
      title: "KATE & JULIA",
      description:
        "Aliquam nec congue lectus. Morbi scelerisque eros at eros adipiscing venenatis. Donec in pulvinar nunc. Ut nec erat vitae lorem tincidunt ...",
    },
    {
      image: "/images/placeholder.svg",
      date: "February 3, 2014",
      comments: 0,
      title: "CURABITUR ULLAMCORKPER",
      description:
        "Proin congue pellentesque volutpat. Curabitur volutpat diam quis neque hendrerit congue. Ut eros metus, euismod id consequat a, sagittis in ...",
    },
    {
      image: "/images/placeholder.svg",
      date: "February 3, 2014",
      comments: 2,
      title: "SUSPENDISSE A VELIT SED",
      description:
        "Aliquam nec congue lectus. Morbi scelerisque eros at eros adipiscing venenatis. Donec in pulvinar nunc. Ut nec erat vitae lorem tincidunt vi ...",
    },
  ];

  const [visibleCards, setVisibleCards] = useState<{ [key: number]: boolean }>(
    {}
  );
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = (entry.target as HTMLElement).dataset.index;
            setVisibleCards((prev) => ({
              ...prev,
              [Number(cardIndex)]: true,
            }));
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the card is visible
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="blog-section" id="news">
      <div className="blurred-overlay">
        <div className="container text-center py-5">
          {/* Section Title */}
          <h2 className="text-primary">LATEST FROM THE BLOG</h2>
          <p className="text-muted mb-4">
            KEEP ON TRACK OF LATEST NEWS AND UPDATES
          </p>
          <hr
            className="mx-auto"
            style={{ width: "80px", border: "1px solid #ddd" }}
          />

          {/* Blog Cards */}
          <div className="row">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className={`col-md-4 mb-4 card-wrapper ${
                  visibleCards[index] ? "visible" : ""
                }`}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-index={index}
              >
                <div className="card">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <small className="text-muted">{blog.date}</small>
                    <h5 className="mt-2 text-primary">{blog.title}</h5>
                    <p className="text-muted">{blog.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Posts Button */}
          <button className="btn btn-outline-primary mt-3">
            <Link href="/news">VIEW ALL POSTS</Link>
          </button>
        </div>
      </div>

      <style jsx>{`
        .blog-section {
          position: relative;
          background-image: url("/images/world-map-background.jpg");
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          min-height: 70vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .blurred-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(10px);
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .blog-section h2 {
          font-size: 2rem;
          font-weight: bold;
          color: #333;
        }

        .blog-section p {
          font-size: 1rem;
          color: #6c757d;
        }

        .card-wrapper {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .card-wrapper.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .card {
          background-color: #ffffff;
          border: none;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .card h5 {
          font-size: 1.2rem;
          font-weight: bold;
        }

        .card p {
          color: #6c757d;
        }

        .btn-outline-primary {
          border-color: #007bff;
          color: #007bff;
          font-weight: bold;
        }

        .btn-outline-primary:hover {
          background-color: #007bff;
          color: white;
        }
      `}</style>
    </section>
  );
}
