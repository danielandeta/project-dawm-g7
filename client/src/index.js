

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";

import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import News from "views/index-sections/News.js";
import SignUp from "views/index-sections/SignUp.js";
import Encuentranos from "views/index-sections/encuentranos.js";
import Catalogo from "views/index-sections/Catalogo.js";
import Formulario from "views/index-sections/Formulario.js";
import RecetaPrincipal from "views/index-sections/RecetaPrincipal.js";
import BrownieReceta from "views/index-sections/BrownieReceta.js";
import CheesecakeReceta from "views/index-sections/CheesecakeReceta.js";
import GalletasReceta from "views/index-sections/GalletasReceta.js";
import QuesoCremaReceta from "views/index-sections/QuesoCremaReceta.js";
import Mermelada from "views/index-sections/Mermelada";
import Desarrolladores from "views/index-sections/Desarrolladores.js"
import AdminLayout from "./layouts/Admin/Admin.js";
import Receta from "views/index-sections/Receta.js";
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

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
          path="/sign-up"
          render={(props) => <SignUp {...props} />}
        />
        <Route 
          path="/Catalogo/:id" 
          component={Mermelada} />
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
        <Route path="/BrownieReceta"
          component={BrownieReceta} exact/>

        <Route path="/CheesecakeReceta"
          component={CheesecakeReceta} exact/>

          <Route path="/QuesoCremaReceta"
          component={QuesoCremaReceta} exact/>

          <Route path="/GalletasReceta"
          component={GalletasReceta} exact/>  

        <Route
          exact path="/Formulario"
          component = {Formulario}
        />
        <Route
          path="/admin/dashboard"
          render={(props) => <AdminLayout {...props} />}
        />
        
        <Route
          path="/Desarrolladores"
          component = {Desarrolladores}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" /> 
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


