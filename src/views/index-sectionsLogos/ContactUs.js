import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Modal,
  ModalBody,
} from "reactstrap";

function LandingPage() {
  const [modal2, setModal2] = React.useState(false);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
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
      <div className="wrapper">
        <div
          id="ContactUs-section"
          className="section section-contact-us text-center"
        >
          <Container fluid>
            <Row>
              <Col className="text-center ml-auto mr-auto" md="5">
                <p
                  style={{
                    fontSize: "25px",
                  }}
                >
                  <h2>Contactez-Nous</h2>
                </p>
                <h4
                  style={{
                    paddingBottom: "3%",
                  }}
                  className="description"
                >
                  Vos Avis, Vos Idées, Sont Importants Pour Nous
                </h4>
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nom Complet..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    typeof="email"
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Votre Message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="send-button">
                  <Button
                    style={{ width: "30%" }}
                    className="btn-round"
                    size="lg"
                    color="info"
                    href="#pablo"
                    onClick={() => setModal2(true)}
                  >
                    Envoyer Le Messages
                  </Button>
                  <Modal
                    modalClassName="modal-mini modal-info"
                    toggle={() => setModal2(false)}
                    isOpen={modal2}
                  >
                    <div className="modal-header justify-content-center">
                      <div className="modal-profile">
                        <i className="now-ui-icons ui-1_email-85"></i>
                      </div>
                    </div>
                    <ModalBody>
                      <p>Le Message A bien été Envoyé</p>
                      <p> Merci !</p>
                    </ModalBody>
                    <div style={{ textAlign: "center" }}>
                      <Button
                        className="btn-neutral"
                        color="link"
                        type="button"
                        onClick={() => setModal2(false)}
                      >
                        <h5 style={{ color: "white" }}>Fermer</h5>
                      </Button>
                    </div>
                  </Modal>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
