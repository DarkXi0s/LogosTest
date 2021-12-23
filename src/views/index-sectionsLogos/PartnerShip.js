import React from "react";
import { Container, Row, Col } from "reactstrap";

const PartnerShip = () => {
  return (
    <Container
      fluid
      style={{
        paddingTop: "3%",
        paddingBottom: "3%",
        backgroundColor: "whitesmoke",
      }}
    >
      <Row className="text-center">
        <Col>
          <p
            style={{
              fontSize: "18px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            NOS
            <h2>PARTENAIRES</h2>
          </p>
          <Col>
            <img
              width="10%"
              src={require("assets/img/01.png").default}
              alt="p1"
            />
            <img
              width="10%"
              src={require("assets/img/02.png").default}
              alt="p2"
            />
            <img
              width="10%"
              src={require("assets/img/03.png").default}
              alt="p3"
            />
            <img
              width="10%"
              src={require("assets/img/04.png").default}
              alt="p4"
            />
            <img
              width="10%"
              src={require("assets/img/05.png").default}
              alt="p5"
            />
            <img
              width="10%"
              src={require("assets/img/06.png").default}
              alt="p6"
            />
            <img
              width="10%"
              src={require("assets/img/07.png").default}
              alt="p7"
            />
            <img
              width="10%"
              src={require("assets/img/08.png").default}
              alt="p8"
            />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default PartnerShip;
