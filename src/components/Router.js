import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

export default () => (
  <Router>
    <>
      <Route ath="/" exact component={Home} />
      <Route ath="/tv" exact component={TV} />
      <Route ath="/search" exact component={Search} />
    </>
  </Router>
);
