import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "../../Components/Home/index.jsx";
import CreateProduct from "../../Components/Product/create.jsx";

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/crear-producto' component={CreateProduct}/>
      </Switch>
    </main>
);

export default Main;
