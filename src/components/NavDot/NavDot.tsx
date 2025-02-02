// src/components/NavDots/NavDots.tsx
import React, { useState, useEffect } from "react";
import "./NavDot.scss"; 
interface NavDotsProps {
  sectionIds: string[];
}

const NavDots: React.FC<NavDotsProps> = ({ sectionIds }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

 
  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sectionIds.forEach((sectionId, index) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveIndex(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  const handleClick = (index: number) => {
    const section = document.getElementById(sectionIds[index]);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <ul id="nav-bullets">
      {sectionIds.map((sectionId, index) => (
        <li key={sectionId}>
          <button
            type="button"
            aria-label={`Go to section: ${sectionId}`}
            className={`nav-bullet ${index === activeIndex ? "current" : ""}`}
            onClick={() => handleClick(index)}
          />
        </li>
      ))}
    </ul>
  );
};

export default NavDots;
