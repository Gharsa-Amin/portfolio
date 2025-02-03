import React, { useEffect, useState } from 'react';
import './TrackScrolling.scss'; // Assuming your Sass is compiled to CSS
import girl from "../../assets/images/pngtree-cute-cartoon-girl-with-big-eyes-looking-up-png-image_14149087.png"
const ScrollTriggerPopup: React.FC = () => {
  const [isBottom, setIsBottom] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight - 100) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="scroll-trigger-popup">
      {isBottom && (
        <div className={`popup ${isBottom ? 'show' : ''}`}>
          <img
            src={girl} // Replace with your actual image path or URL
            alt="A cute woman"
            className="popup-image"
          />
          <button onClick={() => alert("Let's chat!")}>Start Chat</button>
        </div>
      )}
    </div>
  );
};

export default ScrollTriggerPopup;
