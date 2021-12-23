import React from "react";
import Zoom from "react-reveal/Zoom";

// core components
import IndexNavbar from "componentsLogos/Navbars/IndexNavbar.js";
import IndexHeader from "componentsLogos/Headers/IndexHeader.js";
import DarkFooter from "componentsLogos/Footers/TransparentFooter";

// sections for this page
import Images from "./index-sectionsLogos/Images";
import Event from "./index-sectionsLogos/Events";
import Project from "./index-sectionsLogos/Projects";
import Title from "./index-sectionsLogos/TitleHome";
import Media from "./index-sectionsLogos/Media";

//Component
import Publication from "./index-sectionsLogos/Publication";
import Download from "./index-sectionsLogos/ContactUs2.js";
import ContactUs from "./index-sectionsLogos/ContactUs";
import ToTheTop from "views/index-sectionsLogos/ButtonToTop";
import Partners from "views/index-sectionsLogos/PartnerShip";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    //test
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <Zoom>
            <Images />
            <Title />
            <Event />
            <Project />
            <Publication />
            <Media />
            <ContactUs />
            <Partners />
          </Zoom>
          <Download />
        </div>
        <ToTheTop />
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
