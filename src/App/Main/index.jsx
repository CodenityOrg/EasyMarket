import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "../../Components/Home/index.jsx";
import CreateProduct from "../../Components/Product/create.jsx";
import Login from "../../Components/Login/index.jsx"
const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/crear-producto' component={CreateProduct}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </main>
);

export default Main;
