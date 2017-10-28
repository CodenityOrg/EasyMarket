import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "../../Components/Home/index.jsx";
import Roster from "../../Components/Roster/index.jsx";

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/roster' component={Roster}/>
      </Switch>
    </main>
);

export default Main;
