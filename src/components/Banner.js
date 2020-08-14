import React, { useRef } from "react";
import gsap from "gsap";
import { useIntersection } from "react-use";

export default function Banner({ children, title, subtitle }) {
  const sectionRef = useRef(null);

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "20px",
    threshold: 1,
  });

  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: 10,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fromLeft = (element) => {
    gsap.fromTo(
      element,
      1,
      {
        opacity: 0,
        x: -500,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "slow",
      }
    );
  };
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -30,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 1
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");

  intersection && intersection.intersectionRatio < 1
    ? fadeOut(".fadeIn")
    : fromLeft(".fromLeft ");
  return (
    <div ref={sectionRef} className="banner">
      <h1 className="fromLeft title">{title}</h1>
      <div className="fadeIn line"></div>
      <p className="fadeIn subtitle">{subtitle}</p>
      <span className="fadeIn children">{children}</span>
    </div>
  );
}
