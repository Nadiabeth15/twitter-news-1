import React, { Fragment } from "react";

function News() {
  return (
    <Fragment>
      <div className="card card-success">
        <div className="card-body">
          <div className="row">
            <div className="col-xl-3">
              <div className="card mb-2 bg-gradient-dark">
                <img
                  className="card-img-top"
                  src="../dist/img/photo1.png"
                  alt="Dist Photo 1"
                  // width="100"
                  height="220"
                />
                {/*Parte izquierda superior*/}
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="card-title text-primary text-white">
                    Noticia 2
                  </h5>
                  <p className="card-text text-white pb-2 pt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod tempor.
                  </p>
                  <a href="#" className="text-white">
                    Last update 2 mins ago
                  </a>
                </div>
              </div>
              <div className="card mb-2 bg-gradient-dark">
                <img
                  className="card-img-top"
                  src="../dist/img/photo1.png"
                  alt="Dist Photo 1"
                  // width="100"
                  height="220"
                />
                {/*Parte izquierda superior*/}
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="card-title text-primary text-white">
                  Noticia 4
                  </h5>
                  <p className="card-text text-white pb-2 pt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod tempor.
                  </p>
                  <a href="#" className="text-white">
                    Last update 2 mins ago
                  </a>
                </div>
              </div>
              <div className="card mb-2 bg-gradient-dark">
                <img
                  className="card-img-top"
                  src="../dist/img/photo1.png"
                  alt="Dist Photo 1"
                  // width="100"
                  height="220"
                />
                {/*Parte izquierda superior*/}
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <h5 className="card-title text-primary text-white">
                  Noticia 6
                  </h5>
                  <p className="card-text text-white pb-2 pt-1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                    do eiusmod tempor.
                  </p>
                  <a href="#" className="text-white">
                    Last update 2 mins ago
                  </a>
                </div>
              </div>                                    
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src="../dist/img/photo2.png"
                  alt="Dist Photo 2"
                  height="676"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <h5 className="card-title text-white mt-5 pt-2">
                    NOTICIA 1
                  </h5>
                  <p className="card-text pb-2 pt-1 text-white">
                    Lorem ipsum dolor sit amet, <br />
                    consectetur adipisicing elit <br />
                    sed do eiusmod tempor.
                  </p>
                  <a href="#" className="text-white">
                    Last update 15 hours ago
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-3">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src="../dist/img/photo3.jpg"
                  alt="Dist Photo 3"
                  height="220"
                />
                <div className="card-img-overlay">
                  <h5 className="card-title text-primary">Noticia 3</h5>
                  <p className="card-text pb-1 pt-1 text-white">
                    Lorem ipsum dolor <br />
                    sit amet, consectetur <br />
                    adipisicing elit sed <br />
                    do eiusmod tempor.{" "}
                  </p>
                  <a href="#" className="text-primary">
                    Last update 3 days ago
                  </a>
                </div>
              </div>
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src="../dist/img/photo3.jpg"
                  alt="Dist Photo 3"
                  height="220"
                />
                <div className="card-img-overlay">
                  <h5 className="card-title text-primary">Noticia 5</h5>
                  <p className="card-text pb-1 pt-1 text-white">
                    Lorem ipsum dolor <br />
                    sit amet, consectetur <br />
                    adipisicing elit sed <br />
                    do eiusmod tempor.{" "}
                  </p>
                  <a href="#" className="text-primary">
                    Last update 3 days ago
                  </a>
                </div>
              </div>                        
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src="../dist/img/photo3.jpg"
                  alt="Dist Photo 3"
                  height="220"
                />
                <div className="card-img-overlay">
                  <h5 className="card-title text-primary">Noticia 7</h5>
                  <p className="card-text pb-1 pt-1 text-white">
                    Lorem ipsum dolor <br />
                    sit amet, consectetur <br />
                    adipisicing elit sed <br />
                    do eiusmod tempor.{" "}
                  </p>
                  <a href="#" className="text-primary">
                    Last update 3 days ago
                  </a>
                </div>
              </div>                        
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default News;
