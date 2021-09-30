import React from "react";
import "./Cover.css";
import coverImage from "../../media/cover.jpg";

const Cover = () => {
  return (
    <div className="cover-container">
      <img
        className="imagen-container"
        src={coverImage}
        alt="Silla de ruedas"
      />

      <div className="container">
        <div className="row">
          <div className="col-md-3 cover-title">
            <h1 className="cover-title">
              <span style={{ color: "yellow" }}>MÁS</span> DE 800 MIL FAMILIAS
              HABILITADAS
            </h1>


            <button type="button" class="btn btn-primary btn-lg btn-font-size:35px">
            <span className="cover-button-font">VER PRODUCTOS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
