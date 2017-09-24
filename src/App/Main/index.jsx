import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "../../Components/Home/index.jsx";

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </main>
);

export default Main;
