import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
import "antd/dist/antd.css";
// Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// pages for this kit
import Index from "views/index";

import MediaPage from "views/publicViews/MediasPage";
import PresentationPage from "views/publicViews/PresentationPage";
import EvenementPage from "views/publicViews/EvenementPage";
import PublicationPage from "views/publicViews/PublicationPage";
import ProjetPage from "views/publicViews/ProjetPage";

// Temp Publication
import PublicationOne from "views/publicViews/PublicationsPages/autre_temps_du_changement_Que_peut_on_espérer_de_cette_rentrée";
import PublicationTwo from "views/publicViews/PublicationsPages/A_l’ère_des_temps_qui_coulent";
import PublicationThree from "views/publicViews/PublicationsPages/2020_2030_Penser_les_ruptures_dans_les_prospectives_de_la_société";
import PublicationFour from "views/publicViews/PublicationsPages/acte_de_penser _au_temps_des_impostures";
import PublicationFive from "views/publicViews/PublicationsPages/Pourquoi_faut_il_relire_Camus";
import PublicationSex from "views/publicViews/PublicationsPages/Au_temps_des ruptures_quels_sens_pour_nos_territoires";

//Temp Evenement
import EventOne from "views/publicViews/EvenementsPages/01_écriture_entre_parole_et _silence";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />

        <Route
          path="/media-page"
          render={(props) => <MediaPage {...props} />}
        />
        <Route
          path="/presentation-page"
          render={(props) => <PresentationPage {...props} />}
        />
        <Route
          path="/publication-page"
          render={(props) => <PublicationPage {...props} />}
        />
        <Route
          path="/evenement-page"
          render={(props) => <EvenementPage {...props} />}
        />
        <Route
          path="/projet-page"
          render={(props) => <ProjetPage {...props} />}
        />
        <Route
          path="/publication-page-Pub-One"
          render={(props) => <PublicationOne {...props} />}
        />
        <Route
          path="/publication-page-Pub-Two"
          render={(props) => <PublicationTwo {...props} />}
        />
        <Route
          path="/publication-page-Pub-Three"
          render={(props) => <PublicationThree {...props} />}
        />
        <Route
          path="/publication-page-Pub-Four"
          render={(props) => <PublicationFour {...props} />}
        />
        <Route
          path="/publication-page-Pub-Five"
          render={(props) => <PublicationFive {...props} />}
        />
        <Route
          path="/publication-page-Pub-Sex"
          render={(props) => <PublicationSex {...props} />}
        />

        <Route path="/event" render={(props) => <EventOne {...props} />} />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
