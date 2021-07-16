
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import News from "views/index-sections/News.js";
import Encuentranos from "views/index-sections/encuentranos.js";
import Catalogo from "views/index-sections/Catalogo.js";
import Formulario from "views/index-sections/Formulario.js";
import RecetaPrincipal from "views/index-sections/RecetaPrincipal.js";
import BrownieReceta from "views/index-sections/BrownieReceta";
import CheesecakeReceta from "views/index-sections/CheesecakeReceta";
import GalletasReceta from "views/index-sections/GalletasReceta";
import QuesoCremaReceta from "views/index-sections/QuesoCremaReceta";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={(props) => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={(props) => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={(props) => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={(props) => <ProfilePage {...props} />}
        />
        <Route
          path="/login-page"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/news"
          render={(nutiTips) => <News {...nutiTips} />}
          />
        <Route
          path="/Catalogo"
          render={(props)=> <Catalogo {...props}/>}
        />
        <Route
          path="/encuentranos"
          render={(props) => <Encuentranos {...props} />}
        />
        <Route
          path="/RecetaPrincipal"
           render={(props) => <RecetaPrincipal {...props} />}
           
        />
        <Route path="/RecetaPrincipal/BrownieReceta"
          component={BrownieReceta} exact/>

        <Route path="/RecetaPrincipal/CheesecakeReceta"
          component={CheesecakeReceta} exact/>

          <Route path="/RecetaPrincipal/QuesoCremaReceta"
          component={QuesoCremaReceta} exact/>

          <Route path="/RecetaPrincipal/GalletasReceta"
          component={GalletasReceta} exact/>  

        <Route
          exact path="/Formulario"
          component = {Formulario}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" /> 
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


