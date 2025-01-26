"use client";

export default function ParallaxEffect() {
  return (
    <div>
      {/* Parallax Section */}
      <div className="parallax"></div>

      <style jsx>{`
        /* Parallax Section */
        .parallax {
          background-image: url("/images/ocean.jpg"); /* Replace with your image */
          height: 400px;
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        /* Content Section */
        .content-section {
          padding: 50px;
          background-color: #ffffff;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          margin: 20px 0;
        }

        .content-section h2 {
          font-size: 24px;
          color: #333;
        }

        .content-section p {
          font-size: 16px;
          color: #666;
        }
      `}</style>
    </div>
  );
}
