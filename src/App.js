// System Import
import React, { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
// Container Import
import HeaderContainer from "./container/layout/HeaderContainer";
import LnbContainer from "./container/layout/LnbContainer";
// Component Import
import Main from "./page/main/Main";
import AddList from "./page/addList/AddList";
import View from "./page/view/View";
import Login from "./page/member/Login";

const GlobalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />

      {/* Header Container */}
      <HeaderContainer />
      {/* //Header Container */}

      {/* Lnb Container */}
      <LnbContainer />
      {/* //Lnb Container */}

      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/add" component={AddList} />
        <Route path="/view/:name" component={View} />
        <Route path="/login" component={Login} />
      </Switch>
    </Fragment>
  );
}

export default App;
