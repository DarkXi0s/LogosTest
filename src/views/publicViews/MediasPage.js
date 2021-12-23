import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import Images from "../index-sectionsLogos/Images";

//MUI design
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import { Divider } from "antd";

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
        <TitlePage title={" Media"} />
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
          <Divider
            style={{
              fontSize: "1.7vw",
            }}
          >
            Albums
          </Divider>
          <Row style={{ padding: "1%" }}>
            <Col md="2"></Col>
            <Col>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/avatar.jpg").default}
                ></img>
                <h4 className="title">Titre De L'événements</h4>
                <p className="category text-info">Événement</p>
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
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  Plus d'information
                </Button>
              </div>
            </Col>
            <Col>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/avatar.jpg").default}
                ></img>
                <h4 className="title">Titre De Projets</h4>
                <p className="category text-info">Projets</p>
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
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  Plus d'information
                </Button>
              </div>
            </Col>
            <Col>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/avatar.jpg").default}
                ></img>
                <h4 className="title">Titre De Projets</h4>
                <p className="category text-info">Projets</p>
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
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  Plus d'information
                </Button>
              </div>
            </Col>
            <Col md="2"></Col>
          </Row>

          <Row style={{ paddingBottom: "2%" }}>
            <Divider
              style={{
                paddingBottom: "2%",
                fontSize: "1.7vw",
              }}
            >
              Videos
            </Divider>
            <Col md="2"></Col>
            <Col>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/avatar.jpg").default}
                ></img>
                <h4 className="title">Titre De Projets</h4>
                <p className="category text-info">Projets</p>
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
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  Plus d'information
                </Button>
              </div>
            </Col>
            <Col>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/avatar.jpg").default}
                ></img>
                <h4 className="title">Titre De Projets</h4>
                <p className="category text-info">Projets</p>
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
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  Plus d'information
                </Button>
              </div>
            </Col>
            <Col>
              <div className="team-player">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  src={require("assets/img/avatar.jpg").default}
                ></img>
                <h4 className="title">Titre De Projets</h4>
                <p className="category text-info">Projets</p>
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
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  size="lg"
                >
                  Plus d'information
                </Button>
              </div>
            </Col>
            <Col md="2"></Col>
          </Row>
        </Container>
      </div>
      <ToTheTop />
      <DefaultFooter />
    </>
  );
}

export default LandingPage;
