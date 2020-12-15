import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";
import TopInfoBar from "./components/TopInfoBar";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={TopInfoBar} />

          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
