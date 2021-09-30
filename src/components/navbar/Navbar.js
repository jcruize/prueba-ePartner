import React from "react";
import "./Navbar.css";
import logo from "../../media/logo.png";

const Navbar = ({ isScrolling }) => {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //   <div className="container">

    //     <div className="collapse navbar-collapse flex-column align-items-end" id="navbarCollapse">

    //     <div className="navbar-nav mb-lg-0">
    //     <a className="navbar-brand" href="#!">
    //         Logo
    //       </a>

    //       <form className="form-inline">
    //         <input className="form-control" type="text" placeholder="Buscar" />
    //         <button className="btn btn-outline-info">Buscar</button>
    //       </form>
    //         </div>

    //       <button
    //         className="navbar-toggler"
    //         data-toggle="collapse"
    //         data-target="#navbarNav"
    //       >
    //         <span className="navbar-toggler-icon"></span>
    //       </button>

    //       <div className="collapse navbar-collapse" id="navbarNav">
    //         <ul className="navbar-nav mt-0">
    //           <li className="nav-item">
    //             <a className="nav-link" href="#!">
    //               MOVILIDAD
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#!">
    //               CUIDADO EN EL HOGAR
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#!">
    //               PROFESIONALES DE LA SALUD
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="#!">
    //               TAPABOCAS Y DESINFECCIÓN
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </div>
    // </nav>

    //nav2
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#!">
          <img src={logo} width="140" height="70" alt="Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse flex-column align-items-start"
          id="navbarCollapse"
        >
          <div className="navbar-nav search-width">
            <div className="container">
              <div className="row height d-flex justify-content-center align-items-center">
                <div className="col-lg-12">
                  <div className="search">
                    {" "}
                    <i className="fa fa-search"></i>{" "}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUÍ..."
                    />{" "}
                    <button type="button" class="btn btn-primary">
                      Buscar
                    </button>
                  </div>
                </div>
              </div>
            </div>        
            <div className="navbar-nav mt-3 mispedidos"><p>MIS PEDIDOS</p></div> 
          </div>

               




          

          <ul className="navbar-nav mt-4">
            <li className="nav-item active">
              <a className="nav-link" href="#!">
                MOVILIDAD <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                CUIDADO EN EL HOGAR
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                PROFESIONALES DE LA SALUD
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                TAPABOCAS Y DESINFECCIÓN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <nav className={`navbar ${isScrolling>20 ? "scrolling": null}`}>
    //   <div className="navbar-logo">your name</div>
    // </nav>
  );
};

export default Navbar;
