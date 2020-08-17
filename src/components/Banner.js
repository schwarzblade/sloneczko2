import React, { useRef } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";

export default function Banner({ children, title, subtitle }) {
  const sectionRef = useRef(null);

  const widthThreshold = window.innerWidth > 600 ? 1 : 0.3;
  console.log(widthThreshold);
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: widthThreshold,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 0,
      ease: "power4.out",
      delay: 2,
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -30,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < widthThreshold
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  return (
    <div ref={sectionRef} className="banner">
      <h1 className="fadeIn title">{title}</h1>
      <div className="fadeIn line"></div>
      <p className="fadeIn subtitle">{subtitle}</p>
      <span className="fadeIn children">{children}</span>
    </div>
  );
}
