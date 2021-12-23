import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "componentsLogos/Navbars/ExtraNavbar";
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
                <h2 className="title">
                  2020-2030: Penser les ruptures dans les prospectives de la
                  société (1)
                </h2>
                <p style={{ padding: "3%" }} className="category text-info">
                  Tariq AKDIM <br /> Socio-économiste, chercheur et chroniqueur,
                  président du LOGOS{" "}
                </p>
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
                        width: "500px",
                        height: "300px",
                        backgroundImage:
                          "url(" +
                          require("assets/img/LOGOS4.jpg").default +
                          ")",
                        backgroundSize: "100% ",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="blockquote blockquote-info"
                    ></p>
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
                  <h3>
                    2020-2030: Penser les ruptures dans les prospectives de la
                    société (1)
                  </h3>
                  <p style={{ textAlign: "justify" }}>
                    Quand on se donne du temps pour comprendre ce qui se passe
                    autour de nous, on est régulièrement confronté à se poser
                    des questions qui, à une échelle donnée ou à un moment
                    donné, se répercutent sur notre manière d’agir dans les
                    faits et par ricochet- puisque réalité oblige- nous conduit
                    à imaginer d’autres temps possibles de réflexion. Mais,
                    au-delà de cette vision réflexive, très importante pour
                    continuer à interroger les paradigmes dans ces temps de
                    ruptures, il faut se donner les moyens pour agir afin de
                    préparer les changements. Mais tout d’abord une
                    problématique s’impose : Que peut apporter cet acte de
                    penser à la citoyenneté dans un temps d’incertitude, comme
                    celui du contexte Covidien ? Cette chronique est une
                    invitation à réfléchir ensemble sur ce qui, dans l’urgence
                    du contexte, et doit faire sa place pour nous préparer aux
                    mieux, à ce qui semblera pour demain, comme rupture.
                  </p>
                  <h4>Cette démocratie du mal nécessaire</h4>
                  <p style={{ textAlign: "justify" }}>
                    Nous avons cru un moment donné dans cette pandémie qu’il
                    était possible de changer ; que nos habitudes et
                    comportements dans la vie publique et privée allaient se
                    transformer, et depuis le dé-confinement, rien n’a changé.
                    D’où l’intérêt d’agir en pensée, d’où l’indispensable
                    changement par la pensée, et si ce mal ne nous a pas donné
                    l’opportunité de créer un changement citoyen, ceci prédit
                    une autre rupture. Ceci nous invite tout simplement à
                    rechercher d’autres modes opératoires où le citoyen n’est
                    plus considéré comme un récepteur de ces « pouvoirs »
                    (Médias, Collectivités locales, Société civile, etc.) de
                    sensibilisation au danger d’un virus, mais comme un vrai
                    acteur qui crée le changement. C’est peut être un autre mode
                    de démocratie qui peut apporter du sens pour en finir avec
                    les diagnostics..
                  </p>
                  <h4>Pour en finir avec les diagnostics</h4>
                  <p style={{ textAlign: "justify" }}>
                    Pour chaque étude, chaque programme ou encore politique
                    publique sectorielle, la première marche pour répondre aux
                    besoins d’un secteur c’est d’abord de dissocier ce qui est
                    de l’analyse interne et externe, entre forces et faiblesses
                    et puis entre opportunités et menaces. Cette vision des
                    choses est aujourd’hui dépassée, voir même obsolète pas
                    seulement au caractère nouveau des programmes de
                    développement, mais aussi à l’efficacité de ces diagnostics.
                    Au final, nous savons tous ce qui ne marche pas, et nous
                    avons la conviction que le changement appartient à celles et
                    à ceux qui, de par leurs positions économiques et politiques
                    peuvent changer les paradigmes. Maintenant, techniquement la
                    réponse peut sembler difficile puisque l’exercice est de
                    chercher une autre méthodologie de faire, une méthode où les
                    analyses premières ne sont pas produites d’une approche
                    horizontale mais transversale en s’appuyant sur d’autres
                    dimensions de développement. Bref, il est temps de dépasser
                    cette question et d’aller voir comment faire des menaces des
                    opportunités de changement et de faire de ses faiblesses une
                    force d’appropriation de nos territoires de sens.
                  </p>
                  <h4>Le règne du non -sens</h4>
                  <p style={{ textAlign: "justify" }}>
                    C’est à priori là où il faut agir par la critique
                    constructive. Le non-sens règne partout, dans nos modes de
                    voir la crise, dans nos objections, nos attitudes envers les
                    autres, dans nos liens qui se déciment, dans nos agitations
                    pour la recherche des banalités du quotidien, dans tout
                    simplement nos échelles de consciences pour créer des
                    changements. Et c’est là où il faut agir par des petites
                    gouttes, c’est la force du groupe, c’est que la contagion
                    doit nous apporter d’autres manières de vivre la diversité,
                    de vivre la citoyenneté qui pense, qui régule ce qui va mal,
                    qui cherche à résoudre les causes des problèmes, qui au fil
                    des temps, deviennent des phénomènes difficiles à résoudre.
                    C’est assurément la source des problèmes qui doit être
                    pensée, et non la conséquence de ces politiques de
                    développement, et là encore au temps des impostures, il faut
                    se mettre d’accord, en premier temps sur les référentiels à
                    adopter.
                  </p>
                  <h4>Des référentiels aussi…</h4>
                  <p style={{ textAlign: "justify" }}>
                    Tout le monde serait d’accord de dire que les référentiels
                    sont connus et admis par tous les citoyens marocains, mais
                    en réalité ce n’est pas là la question. Encore une fois, il
                    est temps d’agir à partir de nos référentiels, de ce qui
                    fait de nous un Etat de droit et de la collectivité et que
                    dans les pays modernes, la constitution représente le
                    référentiel auquel on se réfère pour répondre aux grands
                    enjeux de la société. En ces temps incertains, que j’ai
                    intitulé dans une autre chronique « rupture », il faut
                    tenter d’imaginer des futurs souhaitables en se basant sur
                    ce qui est perçu comme valeur pour certains et coutume pour
                    d’autres. Le droit a un mot à dire, il a surtout la
                    légitimité de cesser de se contredire et de nous apporter un
                    regard nouveau sur la question du changement.
                  </p>
                  <h4>Changer les regards pour mieux comprendre</h4>
                  <p style={{ textAlign: "justify" }}>
                    Un seul regard porté sur une analyse unidimensionnelle ne
                    permet en aucun cas de répondre à la complexité des
                    problématiques auquel un pays fait face. Il faut donc user
                    d’une intelligence collective, rompre avec le modèle de
                    pensée unique, et chercher à fédérer les acteurs autour d’un
                    référentiel commun pour notre bien commun qui est celui
                    d’aller ensemble vers des projets qui répondent aux besoins
                    spécifiques de nos territoires du vécu. Il ne faut plus se
                    contenter de la vision d’un géographe, ni celle d’un
                    économiste ou spécialiste de la communication publique, il
                    faut admettre une vraie tentative de ce qui peut paraitre
                    comme une promesse du changement non plus par le bas ni le
                    haut des échelles de gouvernance, mais de rentrer
                    simultanément dans la pensée complexe, philosophe Morin
                    revisité.
                  </p>
                  <h4>La rareté comme question</h4>
                  <p style={{ textAlign: "justify" }}>
                    Faut-il le rappeler, ces temps de ruptures conjuguent deux
                    sortes de réflexions, d’abord c’est qu’il ne faut pas perdre
                    le sens des priorités. Or, dans ces priorités, la santé et
                    l’éducation ne se traduisent que dans des politiques
                    structurelles de développement qui nécessitent une remise en
                    cause des systèmes de conduite de changement et de
                    gouvernance multi-échelle. Et là, il y a paradoxe, faire
                    preuve d’intelligence et répondre aux questions de
                    pérennisation des réformes pédagogiques et nécessité de
                    répondre aux problématiques urgentes de gestion technique
                    des problèmes de l’éducation. C’est alors pareil pour le
                    système de santé. Ensuite, de se donner le temps de
                    reconstruire, après rupture par de nouvelles visions avec de
                    nouveaux acteurs, et c’est là où la rareté est interrogée.
                    Au-delà qu’elle soit une donnée majeure pour les
                    problématiques de l’eau ou celle des économies, elle est
                    aussi une question d’acteurs, comment chercher à créer une
                    nouvelle génération d’acteurs de développement, qui sont en
                    mesure de répondre aux enjeux de leurs territoires.
                  </p>
                  <h4>Déconstruire pour reconstruire</h4>
                  <p style={{ textAlign: "justify" }}>
                    Voici une autre épreuve à laquelle tous les paradigmes qui,
                    actuellement sont remis en question; si nous souhaitons
                    créer le changement, il faut déconstruire les paradigmes du
                    capitalisme, lui-même générateur de l’économie de rente
                    notamment dans les pays du sud, la dette importée, et la
                    géopolitique des guerres, etc.. Il nous faut des résiliences
                    certes, mais pas devant des paradigmes qui, sont sensés
                    chuter, d’inviter ces « nouveaux acteurs » à penser et
                    repenser à ces questions, de déconstruire devant les faits
                    qui se répètent ou qui se suivent et non pas seulement dans
                    l’économie, c’est pratiquement dans tous les autres domaines
                    de la pensée humaine et sociale. Reconstruire nécessite une
                    véritable guerre contre les impostures..
                  </p>
                  <h4>Pour une géographie des opportunités</h4>
                  <p style={{ textAlign: "justify" }}>
                    Ce que je viens de dire, qui se traduit dans mes pensées,
                    comme dans la votre, chères lectrices et lecteurs n’est
                    autre qu’un désir de penser au-delà des frontières
                    auxquelles la géographie physique sait bien répondre. Il
                    nous faut là encore tenter d’autres chemins de pensées,
                    chercher d’autres alternatives de changement. Oui,
                    changement était le maitre mot en lisant cette chronique,
                    pour la simple raison qu’il n’est pas une donnée, il est une
                    variable humaine qui dépend de ce que nous voudrions lui
                    donner comme sens. Je ne suis pas là pour donner des leçons
                    aux acteurs actuels, mais simplement de rappeler, que la
                    pensée ne se limite pas à celles et ceux qui la réalisent,
                    elle est aussi l’acte de celles et ceux qui la lisent,
                    puisque lire est aussi un acte de résistance, par extension,
                    un acte de changement. Le changement est probable, il n’est
                    jamais une action constante, il demande de la prudence, mais
                    aussi de l’espoir. Il demande de le décentraliser, de donner
                    opportunité à la marge. La marge dans son sens le plus
                    général et global, la marge qui se crée à l’intérieur de
                    nous-mêmes mais aussi celle qui voit loin, dans nos
                    territoires du cœur. Il faut lui donner sens, puisqu’il a le
                    mérite d’exister !
                  </p>
                  <p>
                    <h6 style={{ textAlign: "justify" }}>
                      Tariq AKDIM <br /> Socio-Économiste, Chercheur Et
                      Chroniqueur, Président Du LOGOS
                    </h6>
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
