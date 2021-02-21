import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Game from "./Game";

function Nav() {
  return (
    <Router>
      <Switch>
        <Route path="/room/:id" exact component={Game}></Route>
        <Route path="/" exact component={Homepage}></Route>
      </Switch>
    </Router>
  );
}

export default Nav;
