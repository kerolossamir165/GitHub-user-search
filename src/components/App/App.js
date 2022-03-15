import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "../../pages/Home";
import DataProvider from "../../context/contextProvider";
import Profile from "../Profile/index";

function App() {
  return (
    <DataProvider>
      <Router>
        <Switch>
          <Route exact path="/search" component={Home} />
          <Route exact path="/:username" component={Profile} />
          <Redirect to="/search" />
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
