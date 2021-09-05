import React, { Fragment } from "react";

function Navbar() {
  return (
    <Fragment>
      <nav className="header navbar navbar-dark bg-navy">
        <div className="container">
          <a href="" className="navbar-brand">
            <span className="brand-text font-weight-bold">UNSAAC - NEWS</span>
          </a>
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
            <form className="form-inline ml-0 ml-md-3">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Navbar;
