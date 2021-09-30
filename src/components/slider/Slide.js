import React from "react";
import "./Slider.css";
import silla from "../../media/silla.png";
import mascara from "../../media/mascara.png";
import Tapabocas from "../../media/Tapabocas.jpg";
import sillaR from "../../media/sillaR.jpg";
import seguridad from "../../media/seguridad.jpg";
import ayuda from "../../media/ayuda.jpg";

const slidesInfo = [
  {
    src: Tapabocas,
    over: mascara,
    alt: "Tapabocas",
    desc: "Tapabocas",
  },
  {
    src: sillaR,
    over: silla,
    alt: "Sillas de ruedas",
    desc: "Sillas de ruedas",
  },
  {
    src: seguridad,
    over: mascara,
    alt: "Seguridad en el baño",
    desc: "Seguridad en el baño",
  },
  {
    src: ayuda,
    over: mascara,
    alt: "Ayudas para la marcha",
    desc: "Ayudas para la marcha",
  },
  {
    src: ayuda,
    over: mascara,
    alt: "Ayudas para la marcha",
    desc: "Ayudas para la marcha",
  },
  {
    src: ayuda,
    over: mascara,
    alt: "Ayudas para la marcha",
    desc: "Ayudas para la marcha",
  },
];

const Slide = slidesInfo.map((slide) => (
  //   <div className="slide-container">
  //       <img src={slide.src}  alt={slide.alt}  />
  //       <div className="slide-desc">
  //           <span>{slide.desc}</span>
  //       </div>
  //   </div>

  <div className="slide-container">
    <div className="box">
      <img src={slide.src} alt={slide.alt} />
      <div className="box-content">
        <img src={slide.over} alt={slide.alt} />
      </div>
    </div>
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default Slide;
