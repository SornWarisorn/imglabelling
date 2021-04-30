import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
  BrowserRouter as Router,
  useHistory,
  Route,
  Link,
  Switch,
  BrowserRouter,
} from "react-router-dom";

let routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/labelling">
        <About />
      </Route>
      <Route path="/class">
        <About />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default routes;
