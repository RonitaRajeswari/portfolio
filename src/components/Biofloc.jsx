import React from 'react'

const Biofloc = () => {
  const hotspots = [
    { id: 1, top: '30%', left: '20%', text: 'Increasing feed and energy costs. Environmental threats. Production inefficiencies.' },
    { id: 2, top: '35%', left: '40%', text: 'Increasing feed and energy costs. Environmental threats. Production inefficiencies.' },
    { id: 3, top: '30%', left: '60%', text: 'Increasing feed and energy costs. Environmental threats. Production inefficiencies.' },
    { id: 4, top: '50%', left: '75%', text: 'Increasing feed and energy costs. Environmental threats. Production inefficiencies.' },
  ];
  const imageSrc = "/biofloc_products_png-removebg-preview.png"

  return (
    <>
      <style>{`
        .container {
          max-width: 100%;
          height: 100vh;
          // margin: 4rem auto;
          background: #fffff;
          border-radius: 0.75rem;
          // box-shadow: 0 8px 24px rgba(0,0,0,0.1);
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        // .image-wrapper {
        //   position: relative;
        //   // overflow: hidden;
        //   border-radius: 0.75rem;
        //   // box-shadow: 0 4px 12px rgb(0 0 0 / 0.1);
        //   transition: box-shadow 0.3s ease;
        //   display: inline-block; /* Ensure it wraps content */
        // }
        // .image-wrapper:hover {
        //   box-shadow: 0 8px 32px rgb(0 0 0 / 0.15);
        // }
        .preview-image {
          width: 100vw;
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
          width: 30px;
          height: 30px;
          background-color: #990000;
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
          // white-space: nowrap; /* Prevent text wrapping */
          max-width: 500px;
          width:400px;
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

export default Biofloc