import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "Routes/Home";
import Search from "Routes/Search";
import TV from "Routes/TV";

// HashRouter을 사용하는 이유: 간단함, 페이지의 Hash를 사용한다. 앱에 주로 사용
// BrowserRouter은 HTML history API를 사용한다. 웹에 주로 사용

export default () => (
  <Router>
    <>
      <Route path="/" exact component={Home} />
      <Route path="/tv" component={TV} />
      <Route path="/search" component={Search} />
    </>
  </Router>
);
