import React from "react";
import "./Footer.css";
import pagos from "../../media/metodos-pago.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row footer-container">
        <div className="col-md-3 footer-menus">
          <h3>SOBRE NOSOTROS</h3>
          <a href="https://impormedical.com.co/">¿Quienes somos?</a> <br />
          <a href="https://impormedical.com.co/">Nuestra historia</a> <br />
          <a href="https://impormedical.com.co/">Nuestra información</a>
        </div>

        <div className="col-md-3 footer-menus">
          <h3>CATEGORÍAS DESTACADAS</h3>
          <a href="https://impormedical.com.co/">
            Profesionales de la salud
          </a>{" "}
          <br />
          <a href="https://impormedical.com.co/">Protección e higiene</a> <br />
          <a href="https://impormedical.com.co/">Control y prevención</a> <br />
          <a href="https://impormedical.com.co/">Movilidad</a> <br />
          <a href="https://impormedical.com.co/">
            Independencia y cuidado en el hogar
          </a>{" "}
          <br />
          <a href="https://impormedical.com.co/">Terapia respiratoria</a> <br />
          <a href="https://impormedical.com.co/">Confort</a>
        </div>

        <div className="col-md-3 footer-menus">
          <h3>SERVICIO AL CLIENTE</h3>
          <a href="https://impormedical.com.co/">Política de entregas</a> <br />
          <a href="https://impormedical.com.co/">
            Políticas de devoluciones
          </a>{" "}
          <br />
          <a href="https://impormedical.com.co/">Política de garantías</a>{" "}
          <br />
          <a href="https://impormedical.com.co/">
            Política de cancelación
          </a>{" "}
          <br />
          <a href="https://impormedical.com.co/">Whatsapp 123 123 3434</a>{" "}
          <br />
          <a href="https://impormedical.com.co/">PBX 01 8000 123 3456</a> <br />
          <a href="https://impormedical.com.co/">
            e-Mail: info@impormedical.com
          </a>{" "}
          <br />
        </div>

        <div className="col-md-3 footer-menus">
          <h3>SUSCRÍBASE A NUESTRO NEWSLETTER</h3>

          <form className="form-inline">
            <input className="form-control" type="text" />
          </form>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              Aceptación de términos y condiciones de manejo de datos
            </label>
          </div>

          <div className="mt-4">
            <a href="https://impormedical.com.co/">Nuestros métodos de pagos</a>
            <img src={pagos} alt={"Métodos de pago"} />
          </div>
        </div>
      </div>

      <hr className="custom" />
      <div className="footer-sns container">
        <div className="designed-by">Designed by Juan Camilo Ruiz</div>
        <div className="sns-links container">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
