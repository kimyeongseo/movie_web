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
      <Route path="/tv/popular" render={() => <h1>Popular</h1>} />
      <Route path="/search" component={Search} />
    </>
  </Router>
);

// 사용자가 어떤 곳을 클릭하면 "/tv/popular"로 이동한다고 가정해봤을 때,
// 뒤에 component를 사용하는 대신 render를 사용할 수 있다.
// 위에 코드에서 render을 이용해 두 개의 component가 모두 render된 것을 확인할 수 있다.
// 따라서 composition을 가지고 많을 일을 해야 하는 경우에 render을 이용할 수 있다.
