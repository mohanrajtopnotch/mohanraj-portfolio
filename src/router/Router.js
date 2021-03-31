import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../views/About";
import Contact from "../views/Contact";
import Home from "../views/Home";
import Projects from "../views/Projects";
import Skills from "../views/Skills";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Skills" component={Skills} />
      <Route exact path="/Projects" component={Projects} />
    </Switch>
  );
}
