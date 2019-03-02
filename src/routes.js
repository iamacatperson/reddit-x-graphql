import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./modules/home/Home";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact component={Home} path="/" />
      </Switch>
    );
  }
}

export default Routes;