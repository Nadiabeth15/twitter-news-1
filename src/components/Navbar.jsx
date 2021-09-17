import React, { Fragment } from "react";


function Navbar() {

    var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
    var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
    var f = new Date();
    var displayDate = `${diasSemana[f.getDay()]}${','} ${f.getDate() } ${'de'} ${meses[f.getMonth()]} ${'del'} ${ f.getFullYear()}`;

  return (
    <Fragment>
      <nav className="header navbar navbar-dark bg-navy">
        <div className="container">
              <h2 align="center"><b>Twitter News</b></h2>
              <h5><b>{displayDate}</b></h5> 
        </div>
      </nav>
      <nav className="header navbar navbar-expand navbar-dark bg-gray">
        <div className="container">
          <div className="collapse navbar-collapse order-5" id="navbarCollapse">
            {/* Left navbar links */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="index3.html" className="nav-link">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Salud
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Economía 
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Política 
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Deporte 
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Espectáculos 
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Entretenimiento 
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Otros 
                </a>
              </li>
            </ul>
            {/* SEARCH FORM */}
 </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
