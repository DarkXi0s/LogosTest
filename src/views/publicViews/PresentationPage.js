import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "componentsLogos/Navbars/PublicationNavbar";
import LandingPageHeader from "componentsLogos/Headers/LandingPageHeader.js";
import DefaultFooter from "componentsLogos/Footers/DefaultFooter";
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
        <div className="section section-about-us">
          <Container fluid>
            <Row>
              <Col md="2"> </Col>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Qui Sommes-Nous ?</h2>
                <h5 className="description">
                  LOGOS - Organisation Non Gouvernementale (ONG) - <br /> Est
                  Une assise Humaine , Où "penser" n'est pas un fait élitiste ,
                  Mais Un Droit De Citoyenneté Démocratiquement Fondé.
                </h5>
              </Col>
              <Col md="2"> </Col>
            </Row>

            <div className="section-story-overview">
              <Row>
                <Col md="1"> </Col>
                <Col md="5">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/LOGOS2.jpg").default + ")",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "justify",
                        width: "350px",
                        color: "darkblue",
                        fontSize: "16px ",
                        fontWeight: "bold",
                      }}
                      className="blockquote blockquote-info"
                    >
                      LOGOS Est Une Invitation Pour Penser Autrement Sur Notre
                      Société, Nos Espaces Et Notre Temps. Il Se Veut Un Club
                      Scientifique à Caractère Culturel Qui Privilégie L'esprit
                      De La Raison, De La Science Et Du Savoir. C'est Un Espace
                      De Rencontre De Toutes Les Idées Qui Se Confrontent Et Non
                      Qui S'affrontent.<br></br>
                      <br></br>
                      <small
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        - TARIQ AKDIM -{" "}
                      </small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/LOGOS.jpg").default + ")",
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/LOGOS3.jpg").default + ")",
                    }}
                  ></div>
                  <h3>Présentation :</h3>
                  <p style={{ textAlign: "justify" }}>
                    Le LOGOS est un nouveau club de pensée au Maroc situé à
                    Rabat, et constitué de jeunes chercheurs, universitaires qui
                    s’activent dans la vie associative, dans différents domaines
                    de pensée et de savoir. Ce sont des jeunes qui ne cessent de
                    réfléchir sur les questions de la société, de la science et
                    de la culture dans le monde et au Maroc d’une manière
                    particulière.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Il s’agit de discuter, débattre et interagir dans le cadre
                    d’un espace ouvert, multidisciplinaire et multiculturel
                    permettant une réflexion collective sur les différents
                    sujets qui font débat ou encore ceux qui ne sont pas
                    suffisamment discutés dans la sphère publique. Le LOGOS est
                    donc une association scientifique à caractère culturel qui
                    vise à produire un bassin de réflexion avec toutes les
                    composantes de la jeunesse et en interaction permanente avec
                    le monde académique en invitant d’éminentes personnalités
                    scientifiques, artistiques, et culturelles. Il est aussi
                    prévu de recevoir des membres d’honneur de l’association
                    afin de créer un échange intergénérationnel et interactif
                    permettant de produire des publications de qualité
                    scientifique indéniable autour d’un thème qui fera l’objet
                    de conférence suivi d’ateliers et de débats.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    L’idée du LOGOS trouve son origine dans son nom historique,
                    il s’agit de créer des agoras thématiques au sein de
                    l’université, les isntituts et dans les espaces de cultures
                    (Bibliothèque nationale, Villa des arts, etc.). L’objectif
                    phare est de cultiver le sens de partage de la culture en
                    permettant une parfaite connexion entre le monde virtuel et
                    le monde réel, entre la réflexion globale et l’action
                    locale. En bref, entre toutes les composantes de la société.
                    C’est dans ce sens où le LOGOS interviendra aussi en
                    favorisant la création de bassins régionaux de réflexion à
                    travers les différents établissements qu’elles soient
                    universitaires, culturels, privés et publics pour
                    accompagner la réflexion et les vœux de tous les jeunes du
                    Maroc qu’ils soient dans la capitale ou dans toutes les
                    régions du Royaume.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Il est également prévu dans le plan d’action de
                    l’association d’inviter chaque mois un auteur, un écrivain
                    ou un artiste pour présenter son œuvre devant un public
                    profane. Il est à noter que notre club de pensée est de tous
                    les âges et de toutes les catégories socioculturelles, de
                    toutes les sphères scientifiques, humaines et lettres,
                    sciences, technologies, médecines, économie, droit,
                    politique, culture et arts. Il ouvre ses portes à toutes les
                    créations et esprits qui cherchent un espace de débat et de
                    réflexion. Le LOGOS est placé sous le signe « penser
                    autrement… ».
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    En définitive, c’est un club ouvert sur son milieu et a pour
                    mission de défendre, d’agir, de questionner et de prospecter
                    les véritables acteurs de développement qui cogitent sur les
                    nouvelles pistes de mise en œuvre des projets où l’Homme est
                    le noyau de réflexion et d’action. Le LOGOS, et comme son
                    nom l’indique privilégie l’esprit de la raison et de la
                    logique pour créer un espace de savoir et de culture en
                    invitant tous les partenaires dont l’université à penser et
                    permettre un dialogue pluridisciplinaire afin de créer un
                    observatoire des dynamiques scientifiques.
                  </p>
                </Col>
                <Col md="1"></Col>
              </Row>
            </div>
          </Container>
        </div>
        <ToTheTop />
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
