import React from "react";

export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
      <h1 className="title">{title}</h1>
      <div className="line"></div>
      <p className="subtitle">{subtitle}</p>
      <span className="children">{children}</span>
    </div>
  );
}
