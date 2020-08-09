import React from 'react';
import {Route, Switch, BrowserRouter } from "react-router-dom";
import HomePage from "pages/HomePage";
import DetailPage from "pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/:id" component={DetailPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
