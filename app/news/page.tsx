"use client";

import Header from "@/components/Header";
import Footer from "@/components/Home/Footer";
import ParallaxEffect from "@/components/Home/ParallaxEffect";

export default function BlogPosts() {
  const blogs = [
    {
      image: "/images/placeholder.svg",
      date: "December 24, 2013",
      category: "Images",
      author: "Alex",
      title: "Post with Image 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut lacus at velit consequat sodales.",
    },
    {
      image: "/images/placeholder.svg",
      date: "December 25, 2013",
      category: "Design",
      author: "Sophia",
      title: "Post with Image 2",
      description:
        "Integer feugiat neque, elementum posuere purus. Nam vitae convallis ipsum. Maecenas a vulputate ipsum.",
    },
    {
      image: "/images/placeholder.svg",
      date: "December 26, 2013",
      category: "Development",
      author: "John",
      title: "Post with Image 3",
      description:
        "Ut posuere neque in molestie gravida. Integer eu feugiat neque, elementum posuere purus.",
    },
    {
      image: "/images/placeholder.svg",
      date: "December 26, 2013",
      category: "Development",
      author: "John",
      title: "Post with Image 3",
      description:
        "Ut posuere neque in molestie gravida. Integer eu feugiat neque, elementum posuere purus.",
    },
    {
      image: "/images/placeholder.svg",
      date: "December 26, 2013",
      category: "Development",
      author: "John",
      title: "Post with Image 3",
      description:
        "Ut posuere neque in molestie gravida. Integer eu feugiat neque, elementum posuere purus.",
    },
    {
      image: "/images/placeholder.svg",
      date: "December 26, 2013",
      category: "Development",
      author: "John",
      title: "Post with Image 3",
      description:
        "Ut posuere neque in molestie gravida. Integer eu feugiat neque, elementum posuere purus.",
    },
  ];

  return (
    <>
      <Header />
      <ParallaxEffect />
      <section className="blog-posts py-5">
        <div className="container text-center">
          {/* Section Header */}
          <h2 className="text-primary mb-4">LATEST NEWS</h2>
          <p className="text-muted mb-5">
            Stay updated with our latest news and blogs.
          </p>

          {/* News Blog Cards */}
          <div className="row">
            {blogs.map((blog, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card shadow-sm border-0 h-100">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="text-muted small mb-1">
                      {blog.date} | in {blog.category} | by {blog.author}
                    </p>
                    <h5 className="card-title text-primary">{blog.title}</h5>
                    <p className="card-text text-muted">{blog.description}</p>
                    <button className="btn btn-outline-primary">
                      READ MORE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .blog-posts {
            background-color: #ffffff;
          }

          .card {
            border-radius: 8px;
            overflow: hidden;
            transition: transform 0.3s, box-shadow 0.3s;
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
          }

          .card-title {
            font-size: 18px;
            margin: 15px 0;
          }

          .btn-outline-primary {
            font-weight: bold;
            border-radius: 4px;
          }

          .btn-outline-primary:hover {
            background-color: #007bff;
            color: white;
          }
        `}</style>
      </section>
      <Footer />
    </>
  );
}
