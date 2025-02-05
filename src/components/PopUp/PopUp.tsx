// WelcomePopUp.tsx
import React, { useEffect, useState } from 'react';
import './WelcomePopUp.scss'; 

interface WelcomePopUpProps {
  imageUrl: string;
}

const WelcomePopUp: React.FC<WelcomePopUpProps> = ({ imageUrl }) => {
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false); 
    }, 10000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className={`popup-container ${visible ? 'show' : 'hide'}`}>
      <div className="popup-content">
        <img src={imageUrl} alt="Welcome" className="popup-image" />
        <p className="initial-popUp">Welcome!</p>
      </div>
    </div>
  );
};

export default WelcomePopUp;
