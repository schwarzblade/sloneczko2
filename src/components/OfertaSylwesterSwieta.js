import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import swieta from "../images/swieta24.jpg"
import sylwester from "../images/sylwester24.jpg"
import sylwesterbaner from "../images/banerSylwester(2).jpg"
import bnbaner from "../images/banerBN(2).jpg"
import { Link } from "react-router-dom";


export default function OfertaSylwesterSwieta() {
  return (
     <div className="containerSylSwieta">
      <div className="innercontainerSylSwieta">  
      <img src={bnbaner} className="imageStyle" alt="oferta boze narodzenie" />
      <Link to="/swieta" className="btnStyleSylSwieta">
        SPRAWDŹ
      </Link>
      </div>
      <div className="innercontainerSylSwieta">  
      <img src={sylwesterbaner} className="imageStyle" alt="oferta Sylwestrowa"/>
      <Link to="/sylwester" className="btnStyleSylSwieta">
        SPRAWDŹ
      </Link>
      </div>
      </div>
  );
}