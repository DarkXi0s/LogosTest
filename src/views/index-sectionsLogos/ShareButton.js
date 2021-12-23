import React from "react";

// reactstrap components
import { Container, Row } from "reactstrap";

//ShareButton
import {
  FacebookShareButton,
  FacebookIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
const ShareButton = () => {
  const Siz = "45px";
  return (
    <Container fluid style={{ padding: "20px" }}>
      <h5 style={{ padding: "10px" }}>Partager Sur :</h5>
      <Row style={{ display: "flex", justifyContent: "center" }}>
        <EmailShareButton url={"http://localhost:3000/event-page-one"}>
          <EmailIcon round={true} size={Siz} />
        </EmailShareButton>
        <FacebookShareButton url={"http://localhost:3000/event-page-one"}>
          <FacebookIcon round={true} size={Siz} />
        </FacebookShareButton>
        <WhatsappShareButton url={"http://localhost:3000/event-page-one"}>
          <WhatsappIcon round={true} size={Siz} />
        </WhatsappShareButton>
        <LinkedinShareButton url={"http://localhost:3000/event-page-one"}>
          <LinkedinIcon round={true} size={Siz} />
        </LinkedinShareButton>
        <TelegramShareButton url={"http://localhost:3000/event-page-one"}>
          <TelegramIcon round={true} size={Siz} />
        </TelegramShareButton>
        <TwitterShareButton url={"http://localhost:3000/event-page-one"}>
          <TwitterIcon round={true} size={Siz} />
        </TwitterShareButton>

        <RedditShareButton url={"http://localhost:3000/event-page-one"}>
          <RedditIcon round={true} size="40px" />
        </RedditShareButton>
        <PinterestShareButton url={"http://localhost:3000/event-page-one"}>
          <PinterestIcon round={true} size="40px" />
        </PinterestShareButton>
      </Row>
    </Container>
  );
};

export default ShareButton;
