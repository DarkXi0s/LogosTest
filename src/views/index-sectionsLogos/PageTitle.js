import React from "react";
import { Container, Row, Col } from "reactstrap";
const PageTitle = (props) => {
  return (
    <Container fluid>
      <Row
        className="section section-team text-center"
        style={{ padding: "2%", backgroundColor: "whitesmoke" }}
      >
        <Col>
          <p
            style={{
              fontSize: "1.7vw",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {props.title} DE
            <h2>LOGOS</h2>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default PageTitle;
