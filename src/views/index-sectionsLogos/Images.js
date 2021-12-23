import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import Carousel from "./CarouselMain";

function Images() {
  return (
    <>
      <div className="section section-images">
        <Container>
          <Row>
            <Col md="12">
              <div
                id="Nouveaté-section"
                style={{
                  marginTop: "-16.3vw",
                }}
              >
                <Carousel />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Images;
