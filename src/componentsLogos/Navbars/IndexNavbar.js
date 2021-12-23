import React from "react";

import { Link } from "react-router-dom";

import { Link as LinkScroll } from "react-scroll";
// reactstrap components

import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");

  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={" fixed-top " + navbarColor} expand="lg" color="white">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand tag={Link} to={"/index"} id="navbar-brand">
              <div>
                <img
                  style={{
                    width: "20px",
                  }}
                  alt="..."
                  src={require("assets/img/Logos.png").default}
                ></img>
              </div>
            </NavbarBrand>
            <UncontrolledTooltip target="#navbar-brand">
              LOGOS
              <br /> PENSER AUTREMENT
            </UncontrolledTooltip>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar style={{ fontSize: "15px" }}>
              <NavItem>
                <NavLink
                  tag={LinkScroll}
                  activeClass="active"
                  to="Nouveaté-section"
                  spy={true}
                  smooth={true}
                  duration={1500}
                >
                  <h5>
                    <icons className="now-ui-icons business_bulb-63" />{" "}
                    Nouveauté
                  </h5>
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  style={{ color: "#001b41" }}
                  to="/presentation-page"
                  tag={Link}
                >
                  <h5>
                    <icons className="now-ui-icons business_badge" />{" "}
                    Presentation
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={LinkScroll}
                  activeClass="active"
                  to="Events-section"
                  spy={true}
                  smooth={true}
                  duration={1500}
                >
                  <h5>
                    <icons className="now-ui-icons ui-1_email-85" /> Événements
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={LinkScroll}
                  activeClass="active"
                  to="Projects-section"
                  spy={true}
                  smooth={true}
                  duration={1500}
                >
                  <h5>
                    <icons className="now-ui-icons education_paper" /> Projets
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={LinkScroll}
                  activeClass="active"
                  to="Publication-section"
                  spy={true}
                  smooth={true}
                  duration={1500}
                >
                  <h5>
                    <icons className="now-ui-icons location_bookmark" />{" "}
                    Publications
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={LinkScroll}
                  activeClass="active"
                  to="Media-section"
                  spy={true}
                  smooth={true}
                  duration={1500}
                >
                  <h5>
                    <icons className="now-ui-icons media-1_camera-compact" />{" "}
                    Media
                  </h5>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={LinkScroll}
                  activeClass="active"
                  to="ContactUs-section"
                  spy={true}
                  smooth={true}
                  duration={1500}
                >
                  <h5>
                    <icons className="now-ui-icons objects_globe" />{" "}
                    Contactez-nous
                  </h5>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
