import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Home from "../../views/home/Home.view";
import ReduxInfo from "../../views/redux/ReduxInfo.view";
import ArtistDetailRouting from "./ArtistDetailRouting";

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

function AppRouter() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/redux">
          <ReduxInfo />
        </Route>

        <Route path="/artist-detail">
          <ArtistDetailRouting />
        </Route>
        
        <Route path="*">
          <Redirect to="/" />
        </Route>

      </Switch>
    </Router>
  );
}

export default AppRouter;