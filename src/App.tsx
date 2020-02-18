import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import { Cart } from "./components/Cart";

function App() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/" component={ProductList}/>
        <Route path="/details" component={Details}/>
        <Route path="/store" component={Cart}/>
        <Route component={Default}/>
      </Switch>
    </>
  );
}

export default App;
