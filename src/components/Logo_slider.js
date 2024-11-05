import React, { useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const LogoSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "scroller-logo-1.webp.png" }) {
        publicURL
      }
      img2: file(relativePath: { eq: "scroller-logo-2.webp.png" }) {
        publicURL
      }
      img3: file(relativePath: { eq: "scroller-logo-3.webp.png" }) {
        publicURL
      }
      img4: file(relativePath: { eq: "scroller-logo-4.webp.png" }) {
        publicURL
      }
      img5: file(relativePath: { eq: "scroller-logo-5.webp.png" }) {
        publicURL
      }
      img6: file(relativePath: { eq: "scroller-logo-6.webp.png" }) {
        publicURL
      }
      img7: file(relativePath: { eq: "scroller-logo-7.webp.png" }) {
        publicURL
      }
      img8: file(relativePath: { eq: "scroller-logo-8.webp.png" }) {
        publicURL
      }
      img9: file(relativePath: { eq: "scroller-logo-9.webp.png" }) {
        publicURL
      }
    }
  `);

  useEffect(() => {
    const logosContainer = document.querySelector('.logos');
    const logos = Array.from(logosContainer.children);
    
    const duplicatesNeeded = 5; // Number of times to duplicate logos

    // Duplicate the logos
    for (let i = 0; i < duplicatesNeeded; i++) {
      logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        logosContainer.appendChild(clone);
      });
    }

    const totalItems = logos.length * duplicatesNeeded;
    const slideWidth = 100 / totalItems; // Each logo takes equal width

    const styleSheet = document.styleSheets[0];
    const keyframes = `
      @keyframes slide {
        0% { transform: translateX(${slideWidth * totalItems}%); }
        100% { transform: translateX(0); }
      }
    `;

    styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    logosContainer.style.animation = `slide 20s linear infinite`;
  }, []);

  return (
    <div className="logo-slider">
      <div className="logos">
        {Object.values(data).map((img, index) => (
          <div className="logo-slide" key={index}>
            <img src={img.publicURL} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
