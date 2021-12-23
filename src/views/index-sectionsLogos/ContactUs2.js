import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// GoogleMap
import GoogleMap from "./GoogleMap/Map";

//React Icons
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaAt,
  FaFacebookF,
  FaWhatsappSquare,
} from "react-icons/fa";

import { AiFillInstagram } from "react-icons/ai";
function Download() {
  function changecolor(e) {
    e.target.style.color = "#25D366";
  }
  function changecolor2(e) {
    e.target.style.color = " #1877f2";
  }

  function changecolor4(e) {
    e.target.style.color = "#c32aa3";
  }
  function DefaultC(e) {
    e.target.style.color = "#001b41";
  }
  return (
    <>
      <div
        style={{
          paddingBottom: "3%",
          paddingTop: "3%",
        }}
      >
        <Container fluid>
          <Row className=" text-center">
            <Col md="1"></Col>
            <Col md="4">
              <p
                style={{
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                POUR NOUS
                <h2>Contacter</h2>
              </p>

              <Row>
                <h4>
                  <FaMapMarkerAlt size="18px" />
                  {" - "}
                  Address :
                </h4>
                <ul style={{ marginTop: "3px" }}>
                  <li style={{ marginLeft: "23px" }}>
                    <h5>
                      29 Rue Jabal Oukaïmeden
                      <br />
                      Rabat,Maroc{" "}
                    </h5>
                  </li>
                </ul>
              </Row>
              <Row style={{ marginTop: "15px" }}>
                <h4>
                  <FaPhoneAlt size="18px" />
                  {" - "}
                  Téléphone :
                </h4>

                <ul style={{ marginTop: "2px" }}>
                  <li>
                    <h5>+212.653.70.82.43</h5>
                  </li>
                </ul>
              </Row>
              <Row style={{ marginTop: "35px" }}>
                <h4>
                  <FaAt size="18px" />
                  {" - "}
                  E-Mail :
                </h4>
                <ul style={{ marginTop: "2px", marginLeft: "37px" }}>
                  <li>
                    <h5>Logos.Bureau@gmail.com</h5>
                  </li>
                  <li>
                    <h5> AkdimTariq@gmail.com</h5>
                  </li>
                </ul>
              </Row>
            </Col>
            <Col md="1"></Col>
            <Col className="text-center" md="5">
              <p
                style={{
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                LOCALISATION DE
                <h2>LOGOS</h2>
              </p>
              <GoogleMap />
            </Col>
            <Col md="1"></Col>
          </Row>
          <Row style={{ paddingTop: "3%" }} className=" text-center">
            <Col>
              <p
                style={{
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Retrouvez-Nous Sur
                <h2>Les Réseaux Sociaux</h2>
              </p>

              <Col>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "transparent",
                    borderColor: "transparent",
                  }}
                >
                  <FaWhatsappSquare
                    onMouseOut={DefaultC}
                    onMouseOver={changecolor}
                    color="#001b41"
                    size="50px"
                    onClick={() => {
                      window.open("https://youtube.com/");
                      return null;
                    }}
                  />
                </button>
                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "transparent",
                    borderColor: "transparent",
                  }}
                >
                  <FaFacebookF
                    onMouseOut={DefaultC}
                    onMouseOver={changecolor2}
                    color="#001b41"
                    size="50px"
                    onClick={() => {
                      window.open(
                        "https://www.facebook.com/logos.ma.officiel/"
                      );
                      return null;
                    }}
                  />
                </button>

                <button
                  style={{
                    backgroundColor: "transparent",
                    color: "transparent",
                    borderColor: "transparent",
                  }}
                >
                  <AiFillInstagram
                    onMouseOut={DefaultC}
                    onMouseOver={changecolor4}
                    color="#001b41"
                    size="50px"
                    onClick={() => {
                      window.open("https:/Instagram.com");
                      return null;
                    }}
                  />
                </button>
              </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Download;
