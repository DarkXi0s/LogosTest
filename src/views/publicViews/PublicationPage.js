import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

//React Router
import { Link } from "react-router-dom";

import Images from "../index-sectionsLogos/Images";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";
//MUI design

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// core components
import ExamplesNavbar from "componentsLogos/Navbars/PublicationNavbar";
import LandingPageHeader from "componentsLogos/Headers/LandingPageHeader.js";
import DefaultFooter from "componentsLogos/Footers/DefaultFooter.js";
import TitlePage from "views/index-sectionsLogos/PageTitle";
import SearchField from "views/index-sectionsLogos/SearchField";
import ToTheTop from "views/index-sectionsLogos/ButtonToTop";

function LandingPage() {
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <Images />
        <TitlePage title={" PUBLICATIONS "} />
      </div>
      <div className="section section-team text-center">
        <SearchField />
        <Container fluid>
          <Row style={{ padding: "2%" }}>
            <Col md="2"></Col>
            <Col md="8">
              <FormControl component="fieldset">
                <FormLabel component="legend">Sort By :</FormLabel>
                <RadioGroup
                  row
                  aria-label="Sort By"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="dates"
                    control={<Radio />}
                    label="dates"
                  />
                  <FormControlLabel
                    value="popularity"
                    control={<Radio />}
                    label="popularity"
                  />

                  <FormControlLabel
                    value="A-Z"
                    control={<Radio />}
                    label="A-Z"
                  />
                </RadioGroup>
              </FormControl>
            </Col>
            <Col md="2"></Col>
          </Row>

          <Row style={{ padding: "1%" }}>
            <Col md="2"></Col>
            <Col>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/tariq.jpg").default}
                ></img>
                <h4
                  style={{ maxHeight: "130px", minHeight: "130px" }}
                  className="title"
                >
                  L’autre temps du changement. Que peut-on espérer de cette
                  rentrée ?
                </h4>
                <p className="category text-info">Tariq Akdim</p>
                <p
                  className="description"
                  style={{ textAlign: "justify", padding: "2%" }}
                >
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some{" "}
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    links
                  </a>{" "}
                  for people to be able to follow them outside the site.
                </p>
                <Button
                  block
                  className="btn-round"
                  color="info"
                  tag={Link}
                  to="/publication-page-Pub-One"
                  size="lg"
                >
                  Plus d'information
                </Button>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "3%",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <FaClock size="14px" />
                    <h6> LE 24-08-2021</h6>
                  </div>
                  <div style={{ display: "flex" }}>
                    <FaMapMarkerAlt size="14px" />
                    <h6> RABAT</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/tariq.jpg").default}
                ></img>
                <h4
                  style={{
                    maxHeight: "130px",
                    minHeight: "130px",
                  }}
                  className="title"
                >
                  A l’ère des temps qui coulent…
                </h4>
                <p className="category text-info">Tariq Akdim</p>
                <p
                  className="description"
                  style={{ textAlign: "justify", padding: "2%" }}
                >
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some{" "}
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    links
                  </a>{" "}
                  for people to be able to follow them outside the site.
                </p>
                <Button
                  block
                  className="btn-round"
                  color="info"
                  tag={Link}
                  to="/publication-page-Pub-Two"
                  size="lg"
                >
                  Plus d'information
                </Button>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "3%",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <FaClock size="14px" />
                    <h6> LE 07-04-2021</h6>
                  </div>
                  <div style={{ display: "flex" }}>
                    <FaMapMarkerAlt size="14px" />
                    <h6> RABAT</h6>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/tariq.jpg").default}
                ></img>
                <h4
                  style={{
                    maxHeight: "130px",
                    minHeight: "130px",
                  }}
                  className="title"
                >
                  2020-2030: Penser les ruptures dans les prospectives de la
                  société (1)
                </h4>
                <p className="category text-info">Tariq Akdim</p>
                <p
                  className="description"
                  style={{ textAlign: "justify", padding: "2%" }}
                >
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some{" "}
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    links
                  </a>{" "}
                  for people to be able to follow them outside the site.
                </p>
                <Button
                  block
                  className="btn-round"
                  color="info"
                  tag={Link}
                  to="/publication-page-Pub-Three"
                  size="lg"
                >
                  Plus d'information
                </Button>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "3%",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <FaClock size="14px" />
                    <h6> LE 02-01-2021</h6>
                  </div>
                  <div style={{ display: "flex" }}>
                    <FaMapMarkerAlt size="14px" />
                    <h6> RABAT</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="2"></Col>
          </Row>

          <Row style={{ padding: "2%" }}>
            <Col md="2"></Col>
            <Col>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/tariq.jpg").default}
                ></img>
                <h4
                  style={{
                    maxHeight: "130px",
                    minHeight: "130px",
                  }}
                  className="title"
                >
                  L’acte de penser au temps des impostures…
                </h4>
                <p className="category text-info">Tariq Akdim</p>
                <p
                  className="description"
                  style={{ textAlign: "justify", padding: "2%" }}
                >
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some{" "}
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    links
                  </a>{" "}
                  for people to be able to follow them outside the site.
                </p>
                <Button
                  block
                  className="btn-round"
                  color="info"
                  tag={Link}
                  to="/publication-page-Pub-Four"
                  size="lg"
                >
                  Plus d'information
                </Button>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "3%",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <FaClock size="14px" />
                    <h6> LE 27-11-2020</h6>
                  </div>
                  <div style={{ display: "flex" }}>
                    <FaMapMarkerAlt size="14px" />
                    <h6> RABAT</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/tariq.jpg").default}
                ></img>
                <h4
                  style={{
                    maxHeight: "130px",
                    minHeight: "130px",
                  }}
                  className="title"
                >
                  Pourquoi faut-il relire Camus?
                </h4>
                <p className="category text-info">Tariq Akdim</p>
                <p
                  className="description"
                  style={{ textAlign: "justify", padding: "2%" }}
                >
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some{" "}
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    links
                  </a>{" "}
                  for people to be able to follow them outside the site.
                </p>
                <Button
                  block
                  className="btn-round"
                  color="info"
                  tag={Link}
                  to="/publication-page-Pub-Five"
                  size="lg"
                >
                  Plus d'information
                </Button>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "3%",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <FaClock size="14px" />
                    <h6> LE 22-03-2020</h6>
                  </div>
                  <div style={{ display: "flex" }}>
                    <FaMapMarkerAlt size="14px" />
                    <h6> RABAT</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/tariq.jpg").default}
                ></img>
                <h4
                  style={{ maxHeight: "130px", minHeight: "130px" }}
                  className="title"
                >
                  Au temps des ruptures, quels sens pour nos territoires?
                </h4>
                <p className="category text-info">Tariq Akdim</p>
                <p
                  className="description"
                  style={{ textAlign: "justify", padding: "2%" }}
                >
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some{" "}
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    links
                  </a>{" "}
                  for people to be able to follow them outside the site.
                </p>
                <Button
                  block
                  className="btn-round"
                  color="info"
                  tag={Link}
                  to="/publication-page-Pub-Sex"
                  size="lg"
                >
                  Plus d'information
                </Button>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "3%",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <FaClock size="14px" />
                    <h6> LE 30-09-2020</h6>
                  </div>
                  <div style={{ display: "flex" }}>
                    <FaMapMarkerAlt size="14px" />
                    <h6> RABAT</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="2"></Col>
          </Row>
          <Row>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <Pagination
                className="pagination pagination-info"
                listClassName="pagination-info"
              >
                <PaginationItem className="active">
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    4
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    5
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </Col>
          </Row>
        </Container>
      </div>

      <ToTheTop />
      <DefaultFooter />
    </>
  );
}

export default LandingPage;
