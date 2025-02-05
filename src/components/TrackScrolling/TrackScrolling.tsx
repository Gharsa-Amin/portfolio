import React, { useEffect, useState } from 'react';
import './TrackScrolling.scss'; 
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
            src={girl} 
            alt="A cute woman"
            className="popup-image"
          />
          <a href="https://docs.google.com/document/d/1HsrdbQeJgicNc61FJUidokFT_3hioFf66TAG9DE2vAo/edit?usp=sharing">
          <button className="my-resume"  onClick={() => alert("Resume Page will open!")}>My Resume</button> </a>
       
        </div>
      )}
    </div>
  );
};

export default ScrollTriggerPopup;
