import React from "react";
import { Route } from "react-router-dom";
import Destinations from "./components/Destinations/Destinations";
import Home from "./components/Home/Home";

const Routes = (props) => {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/destinations" component={Destinations} />
    </>
  );
};

export default Routes;
