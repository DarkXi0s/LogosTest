import React, { useState } from "react";
import JsonData from "data/EVENT_DATA.json";
import ReactPaginate from "react-paginate";
//import { SortBy, Reverse } from "react-lodash";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import "assets/css/logosStyle.css";
import Images from "../index-sectionsLogos/Images";

//Event Component
import EventComp from "../index-sectionsLogos/EventComponent";
// core components
import ExamplesNavbar from "componentsLogos/Navbars/PublicationNavbar";
import LandingPageHeader from "componentsLogos/Headers/LandingPageHeader.js";
import DefaultFooter from "componentsLogos/Footers/DefaultFooter.js";
import TitlePage from "views/index-sectionsLogos/PageTitle";
import SearchField from "views/index-sectionsLogos/SearchField";
import ToTheTop from "views/index-sectionsLogos/ButtonToTop";
import RadioButton from "views/index-sectionsLogos/ButtonRadio";

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
  const [users, setUsers] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <Col md="4" style={{ dispplay: "flex" }}>
          <EventComp
            Img={require(`assets/img/${user.posterURL}`).default}
            title={user.title}
            description={user.description}
            link={user.link}
            date={user.date}
            lieu={user.lieu}
          />
        </Col>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
      <div className="App">
        <ExamplesNavbar />
        <div className="wrapper">
          <LandingPageHeader />
          <Images />
          <TitlePage title={"ÉVÉNEMENTS "} />
        </div>
        <div className="section section-team text-center">
          <SearchField placeholder="Vous Cherchez?" data={JsonData} />
          <RadioButton />
          <Container>
            <Row style={{ padding: "1%" }}>{displayUsers}</Row>
          </Container>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
      <ToTheTop />
      <DefaultFooter />
    </>
  );
}

export default LandingPage;
