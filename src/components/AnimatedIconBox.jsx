// components/AnimatedIconBox.js

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import AOS from "aos";
import Vivus from "vivus";
import "aos/dist/aos.css";

const ContactBox = styled.div`
  display: flex;
  align-items: center;
  background: white;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 0 0 transparent;
  transition: box-shadow 0.3s ease-in-out;
  margin-bottom: 20px;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  width: 100px;
  height: 64px;
  margin-right: 20px;

  svg path {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    stroke: black;
    stroke-width: 2;
    fill: none;
  }
`;

const InfoText = styled.div`
  h4 {
    margin: 0;
    font-size: 18px;
    font-weight: bold;
  }
  p {
    margin: 4px 0 0;
    font-size: 14px;
  }
`;

const AnimatedIconBox = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const vivus = new Vivus(svgRef.current, {
      type: "delayed",
      duration: 100,
      start: "manual",
    });

    const wrapper = svgRef.current?.parentElement;
    wrapper?.addEventListener("mouseenter", () => {
      vivus.stop().reset().play();
    });

    return () => {
      wrapper?.removeEventListener("mouseenter", () => {});
    };
  }, []);

  return (
    <ContactBox data-aos="fade-up">
      <IconWrapper>
        <svg
          ref={svgRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 29.6"
          width="64"
          height="64"
        >
          <path
            d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24
       11.36 11.36 0 003.58.57 1 1 0 011 1v3.61a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.61a1 1 0 011 1
       11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.05l-2.2 2.2z"
          />
        </svg>


      </IconWrapper>
      <InfoText>
        <h4>Our Office</h4>
        <p>#202, Vision Ultima, Gachibowli, Hyderabad</p>
      </InfoText>
    </ContactBox>
  );
};

export default AnimatedIconBox;
