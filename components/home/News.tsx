"use client";

import Link from "next/link";

export default function BlogSection() {
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

  return (
    <section className="blog-section py-5">
      <div className="container text-center">
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
            <div key={index} className="col-md-4 mb-4">
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

      <style jsx>{`
        .blog-section {
          background-color: #ffffff;
        }

        .blog-section h2 {
          font-size: 2rem;
          font-weight: bold;
        }

        .blog-section p {
          font-size: 1rem;
          color: #6c757d;
        }

        .card {
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
