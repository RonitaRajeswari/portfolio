import React from 'react';

export default function ImageZoomReplacePreview() {
  // Points you want to annotate (percentage-based positions)
  const hotspots = [
    { id: 1, top: '30%', left: '25%', text: 'This is gill area' },
    { id: 2, top: '55%', left: '60%', text: 'Tail fin detail' },
    { id: 3, top: '40%', left: '75%', text: 'Eye or head section' },
  ];

  const imageSrc = "https://img.freepik.com/premium-vector/isometric-fish-farming-sea_563549-109.jpg?semt=ais_hybrid&w=740"; // Replace with your image URL

  return (
    <>
      <style>{`
        .container {
          max-width: 100%;
          height: 100vh;
          margin: 4rem auto;
          background: #ffffff;
          border-radius: 0.75rem;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 0.75rem;
          box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
          transition: box-shadow 0.3s ease;
          display: inline-block; /* Ensure it wraps content */
        }
        .image-wrapper:hover {
          box-shadow: 0 8px 32px rgb(0 0 0 / 0.15);
        }
        .preview-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          border-radius: 0.75rem;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          will-change: transform;
          display: block;
          user-select: none;
        }
        .image-wrapper:hover .preview-image {
          transform: scale(1.1);
        }
        .hotspot {
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: red;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          font-size: 12px;
          cursor: pointer;
          z-index: 10;
        }
        .hotspot:hover {
          background-color: darkred;
        }
        .hotspot-text {
          position: absolute;
          background-color: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px;
          border-radius: 4px;
          font-size: 14px;
          z-index: 20;
          display: none; /* Hidden by default */
          top: 25px; /* Position below the dot */
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap; /* Prevent text wrapping */
        }

        .hotspot:hover .hotspot-text {
          display: block; /* Show on hover */
        }
        .image-container {
          position: relative; /* Make this the positioning context for hotspots */
          display: inline-block; /* Adjust to content size */
        }
      `}</style>
      <div className="container" aria-label="Image with hotspots">
        <div className="image-wrapper">
          <div className="image-container">
            <img
              src={imageSrc}
              alt="Annotated Image"
              className="preview-image"
              draggable="false"
            />
            {hotspots.map((hotspot) => (
              <div
                key={hotspot.id}
                className="hotspot"
                style={{ top: hotspot.top, left: hotspot.left }}
              >
                {hotspot.id}
                <span className="hotspot-text">{hotspot.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
