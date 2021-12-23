/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// react ROUTER
import { NavLink } from "react-router-dom";
function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <NavLink to="/presentation-page">ÉVÉNEMENTS</NavLink>
            </li>
            <li>
              <NavLink to="/Projet-page">PROJETS</NavLink>
            </li>
            <li>
              <NavLink to="/Publication-page">Publications</NavLink>
            </li>
            <li>
              <NavLink to="/presentation-page">Media</NavLink>
            </li>
            <li>
              <NavLink to="/presentation-page">About Us</NavLink>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://www.invisionapp.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Invision
          </a>
          . Coded by{" "}
          <a
            href="https://www.creative-tim.com?ref=nukr-dark-footer"
            target="_blank"
          >
            Creative Tim
          </a>
          .
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
