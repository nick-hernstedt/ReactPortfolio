import React from "react";
import { Switch } from "react-router-dom";
import LandingPage from "./landingpage";
import About from "./aboutme";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/" component={LandingPage} />
  </Switch>
);

export default Main;
