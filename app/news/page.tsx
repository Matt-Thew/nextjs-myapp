"use client";

export default function BlogPost() {
  return (
    <section className="blog-post py-5">
      <div className="container text-center">
        {/* Post Image */}
        <div className="post-image mb-4">
          <img
            src="/images/placeholder.svg"
            alt="Post with Image"
            className="img-fluid rounded"
          />
        </div>

        {/* Post Details */}
        <div className="post-details text-left">
          <p className="text-muted">December 24, 2013 | in Images | by Alex</p>
          <h3 className="text-primary">Post with Image</h3>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ut lacus at velit consequat sodales. Ut posuere neque
            in molestie gravida. Integer feugiat neque, elementum posuere purus.
          </p>
          <button className="btn btn-outline-primary">READ MORE</button>
        </div>
      </div>

      <style jsx>{`
        .blog-post {
          background-color: #ffffff;
          color: #000000;
        }

        .post-image img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .post-details {
          max-width: 600px;
          margin: 0 auto;
        }

        .post-details p {
          font-size: 14px;
          color: #6c757d;
        }

        .post-details h3 {
          font-size: 24px;
          margin: 20px 0;
        }

        .btn-outline-primary {
          padding: 10px 20px;
          border: 1px solid #007bff;
          border-radius: 4px;
          color: #007bff;
          background-color: transparent;
          transition: background-color 0.3s, color 0.3s;
        }

        .btn-outline-primary:hover {
          background-color: #007bff;
          color: #ffffff;
        }
      `}</style>
    </section>
  );
}
