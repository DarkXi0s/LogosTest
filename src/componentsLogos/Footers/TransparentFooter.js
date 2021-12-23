/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// react ROUTER
import { NavLink } from "react-router-dom";

function TransparentFooter() {
  return (
    <footer className="footer" style={{ backgroundColor: "whitesmoke" }}>
      <Container>
        <Row>
          <Col md="6">
            <nav>
              <ul>
                <ul>
                  <li>
                    <NavLink to="/evenement-page">ÉVÉNEMENTS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/projet-page">PROJETS</NavLink>
                  </li>
                  <li>
                    <NavLink to="/publication-page">Publications</NavLink>
                  </li>
                  <li>
                    <NavLink to="/media-page">Media</NavLink>
                  </li>
                  <li>
                    <NavLink to="/presentation-page">About Us</NavLink>
                  </li>
                </ul>
              </ul>
            </nav>
          </Col>

          <Col md="6">
            <div className="copyright" id="copyright">
              © {new Date().getFullYear()} LOGOS Tous Droits Réservés , Désigner{" "}
              {" & "} Coder Par{" "}
              <a
                href="https://www.linkedin.com/in/marouane-shaimi-555782150/"
                target="_blank"
                style={{ color: "blue" }}
              >
                Marouane Shaimi
              </a>
              .
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
