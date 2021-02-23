import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Game from "./game/Game";
import Lobby from "./lobby/Lobby";

function Nav() {
  return (
    <Router>
      <Switch>
        <Route path="/room" exact component={Game}></Route>
        <Route path="/lobby" exact component={Lobby}></Route>
        <Route path="/" exact component={Homepage}></Route>
        <Route render={() => <Redirect to={{ pathname: "/" }} />} />
      </Switch>
    </Router>
  );
}

export default Nav;
