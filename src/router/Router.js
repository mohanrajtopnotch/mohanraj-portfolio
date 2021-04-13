import React from "react";
import { Route, Switch } from "react-router-dom";
import {Home,About,CountryHen,Contact,Skills,Projects,Kncetians,Vimarza,Quiz,ProjectSamples} from "../views/index"
import CarAnimation from "../views/CarAnimation"
export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Skills" component={Skills} />
      <Route path="/Projects" component={Projects} />
      <Route path="/Kncetians" component={Kncetians} />
      <Route path="/Vimarza" component={Vimarza} />
      <Route path="/Quiz" component={Quiz} />
      <Route path="/CountryHen" component={CountryHen} /> 
      <Route path="/ProjectSamples" component={ProjectSamples} />
      <Route path="/CarAnimation" component={CarAnimation} />
    </Switch>
);
}
