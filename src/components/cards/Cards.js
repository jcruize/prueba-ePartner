import React from "react";
import Card from "./Card";

import silla1 from "../../media/silla1.jpg";
import silla2 from "../../media/silla2.jpg";
import silla3 from "../../media/silla3.jpg";
import silla4 from "../../media/silla4.jpg";

const cards = [
  {
    id: 1,
    title: "Referencia 1",
    image: silla1,
    text: "Silla de ruedas Motorizada gris metalizada abatible M2000",
  },
  {
    id: 2,
    title: "Referencia 2",
    image: silla2,
  },
  {
    id: 3,
    title: "Referencia 3",
    image: silla3,
    text: "Silla de ruedas Motorizada gris metalizada abatible M2000",
  },
  {
    id: 4,
    title: "Referencia 4",
    image: silla4,
    text: "Silla de ruedas Motorizada en Aluminio Konfort Plus",
  },
];

const Cards = () => {
  return (
    <div className="container-fluid">
      <div className="cards-title">
        <h1>NUEVA COLECCION</h1>
      </div>

      <div className="row">
        {cards.map((card) => (
          <div className="col-md-3 key={card.id}">
            <Card title={card.title} image={card.image} text={card.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
