import React, { useState, useEffect } from "react";
import { Button, Container, Row } from "reactstrap";
import { Link } from "react-scroll";
export const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToVisibleFrom = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    setHeight(winScroll);
    if (winScroll > heightToVisibleFrom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  return (
    <Container fluid>
      <Row>
        {isVisible && (
          <Button
            tag={Link}
            activeClass="active"
            to="Header-home"
            spy={true}
            smooth={true}
            duration={2000}
            className="btn-round"
            color="info"
            style={{
              color: "white",
              position: "fixed",
              bottom: "60px",
              right: "30px",
              backgroundColor: "#1AA5E1",
              borderColor: "transparent",
            }}
          >
            <icons className="now-ui-icons arrows-1_minimal-up" />
          </Button>
        )}
      </Row>
    </Container>
  );
};
export default ButtonToTop;
