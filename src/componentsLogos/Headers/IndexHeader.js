/*eslint-disable*/
import React from "react";

import { Link } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div id="Header-home" className="page-header clear-filter">
        <div
          className="page-header-image"
          style={{
            opacity: "0.7",
            backgroundImage:
              "url(" + require("assets/img/HASSSAN.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <img
              alt="..."
              src={require("assets/img/Logos.png").default}
              style={{ width: "25%" }}
            ></img>
          </div>
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
