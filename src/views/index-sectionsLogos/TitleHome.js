import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

function Images() {
  return (
    <>
      <Container fluid style={{ padding: "3%", backgroundColor: "whitesmoke" }}>
        <Row>
          <Col className="ml-auto mr-auto text-center">
            <p
              style={{
                fontSize: "23px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              BIENVENUE SUR
              <h2>LOGOS</h2>
            </p>
            <h3
              style={{
                fontSize: "20px",
                textAlign: "center",
              }}
            >
              LOGOS - Organisation Non Gouvernementale (ONG) - <br /> Est Une
              assise Humaine , Où "penser" n'est pas un fait élitiste , Mais Un
              Droit De Citoyenneté Démocratiquement Fondé.
            </h3>
          </Col>
        </Row>
        ;
      </Container>
    </>
  );
}

export default Images;
