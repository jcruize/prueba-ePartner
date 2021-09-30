import React, {useState} from "react";

import "./Cards.css";

const Card = ({ title, image, text }) => {

    const [isShowing, setIsShowing] = useState(false);


  return (
    <div className="card text-center" 
    onMouseEnter={() => setIsShowing(true)}
    onMouseLeave={() => setIsShowing(false)}    
    >

      <div className="overflow">
        <img src={image} alt={"Silla 1"} className="card-img-top" />
      </div>

      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "No se encuentra una descripción disponible en este momento"}
        </p>

            {
                isShowing ? <a href="#!" className="btn btn-outline-primary  ">
                AÑADIR AL CARRITO
              </a> : null
            }

        
      </div>
    </div>
  );
};

export default Card;
