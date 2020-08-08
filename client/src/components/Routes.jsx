import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./sessions/Login";
import Logout from "./sessions/Logout";

import Register from "./users/Register";

import Trailers from "./trailers/Index";
import NewTrailer from "./trailers/New";
import EditTrailer from "./trailers/Edit";

function Routes({ user, setUser }) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route
        exact
        path="/login"
        render={(renderProps) => <Login {...renderProps} setUser={setUser} />}
      />
      <Route
        exact
        path="/logout"
        render={(renderProps) => <Logout {...renderProps} setUser={setUser} />}
      />
      <Route
        exact
        path="/register"
        render={(renderProps) => (
          <Register {...renderProps} setUser={setUser} />
        )}
      />
      <Route
        exact
        path="/trailers"
        render={(renderProps) => <Trailers {...renderProps} user={user} />}
      />
      <Route exact path="/trailers/new" component={NewTrailer} />
      <Route exact path="/trailers/edit" component={EditTrailer} />
    </Switch>
  );
}
export default Routes;
