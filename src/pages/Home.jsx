import React, { useState, useEffect, Fragment } from "react";
import Data from "./data.json";
function Home() {
  return (
    <Fragment>
      <div className="card card-success">
        <div className="card-body bg-white">
          <div className="row">
            <div className="col-xl-3">
              {/* NOTICIA 2*/}
              <div className="card mb-2" /*style={{borderStyle:"solid", borderWidth:"medium", borderColor:"gold"}}*/>
                <img
                  className="card-img-top"
                  src={Data["News"][1].img}
                  alt="Dist Photo 1"
                  // width="100"
                  height="333"
                />
                {/*Parte izquierda superior*/}
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-3 pr-3 pl-3"
                    style={{
                      color: "#000000",
                      backgroundColor: "#F4F6F6",
                      opacity: "0.8",
                      textAlign: "justify",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["News"][1].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["News"][1].title}</b> <br />
                      {Data["News"][1].date}
                    </p>
                  </div>
                </div>
              </div>
              {/* NOTICIA 4*/}
              <div className="card mb-2 bg-gradient-dark">
                <img
                  className="card-img-top"
                  src={Data["News"][3].img}
                  alt="Dist Photo 1"
                  // width="100"
                  height="333"
                />
                {/*Parte izquierda superior*/}
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-3 pr-3 pl-3"
                    style={{
                      color: "#000000",
                      backgroundColor: "#F4F6F6",
                      opacity: "0.8",
                      textAlign: "justify",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["News"][3].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["News"][3].title}</b> <br />
                      {Data["News"][3].date}
                    </p>
                  </div>
                </div>
              </div>
              {/* NOTICIA 6*/}
              {/* <div className="card mb-2 bg-gradient-dark">
                <img
                  className="card-img-top"
                  src="../dist/img/photo1.png"
                  alt="Dist Photo 1"
                  // width="100"
                  height="220"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div
                    className="card-text pt-3 pr-3 pl-3"
                    style={{
                      color: "#000000",
                      backgroundColor: "#F4F6F6",
                      opacity: "0.8",
                      textAlign: "justify",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["News"][1].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["News"][1].title}</b> <br />
                      {Data["News"][1].date}
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            {/* NOTICIA 1*/}
            <div className="col-md-12 col-lg-6 col-xl-6">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={Data["News"][0].img}
                  alt="Dist Photo 2"
                  height="675"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                  <div
                    className="card-text pt-3 pr-3 pl-3 "
                    style={{
                      color: "#000000",
                      backgroundColor: "#ABB2B9",
                      opacity: "0.8",
                      textAlign: "justify",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["News"][0].category}{" "}
                    </h5>
                    <h5 className="card-text">
                      <b>{Data["News"][0].title}</b>
                    </h5>
                    <p>{Data["News"][0].date}</p>
                    <a href="#" className="text-black">
                  Show more
                  </a>
                  </div>
                </div>
              </div>
            </div>
            {/* NOTICIA 3*/}
            <div className="col-md-12 col-lg-6 col-xl-3">
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={Data["News"][2].img}
                  alt="Dist Photo 3"
                  height="333"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-3 pr-3 pl-3"
                    style={{
                      color: "#000000",
                      backgroundColor: "#F4F6F6",
                      opacity: "0.8",
                      textAlign: "justify",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["News"][2].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["News"][2].title}</b> <br />
                      {Data["News"][2].date}
                    </p>
                  </div>
                </div>
              </div>
              {/* NOTICIA 5*/}
              <div className="card mb-2">
                <img
                  className="card-img-top"
                  src={Data["News"][4].img}
                  alt="Dist Photo 3"
                  height="333"
                />
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-3 pr-3 pl-3"
                    style={{
                      color: "#000000",
                      backgroundColor: "#F4F6F6",
                      opacity: "0.8",
                      textAlign: "justify",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["News"][4].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["News"][4].title}</b> <br />
                      {Data["News"][4].date}
                    </p>
                  </div>
                </div>
              </div>
              {/* NOTICIA 7*/}
              {/* <div className="card mb-2">
                <img
                  className="card-img-top"
                  src="../dist/img/photo3.jpg"
                  alt="Dist Photo 3"
                  height="220"
                />
                <div className="card-img-overlay">
                <div
                    className="card-text pt-3 pr-3 pl-3"
                    style={{
                      color: "#000000",
                      backgroundColor: "#F4F6F6",
                      opacity: "0.8",
                      textAlign: "justify",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["News"][1].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["News"][1].title}</b> <br />
                      {Data["News"][1].date}
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6">
              {/* NOTICIA 2*/}
              <div className="card mb-2 bg-gradient-dark">
                <img
                  className="card-img-top"
                  src={Data["News"][5].img}
                  alt="Dist Photo 1"
                  // width="100"
                  height="333"
                />
                {/*Parte izquierda superior*/}
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-3 pr-3 pl-3"
                    style={{
                      color: "#000000",
                      backgroundColor: "#F4F6F6",
                      opacity: "0.8",
                      textAlign: "justify",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["News"][5].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["News"][5].title}</b> <br />
                      {Data["News"][5].date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6">
              {/* NOTICIA 2*/}
              <div className="card mb-2 bg-gradient-dark">
                <img
                  className="card-img-top"
                  src={Data["News"][6].img}
                  alt="Dist Photo 1"
                  // width="100"
                  height="333"
                />
                {/*Parte izquierda superior*/}
                <div className="card-img-overlay d-flex flex-column justify-content-end">
                  <div
                    className="card-text pt-3 pr-3 pl-3"
                    style={{
                      color: "#000000",
                      backgroundColor: "#F4F6F6",
                      opacity: "0.8",
                      textAlign: "justify",
                    }}
                  >
                    <h5
                      className="card-title"
                      style={{ textTransform: "uppercase" }}
                    >
                      {Data["News"][6].category}
                    </h5>
                    <p className="card-text">
                      <b>{Data["News"][6].title}</b> <br />
                      {Data["News"][6].date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
