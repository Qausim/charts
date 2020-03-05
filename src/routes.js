import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Recharts from "./modules/recharts";
import VictoryCharts from "./modules/victory";

const Routes = () => {
  return (
    <BrowserRouter>
      <h1 style={{ textAlign: "center" }}>Charts</h1>
      <Switch>
        <Route exact path="/" component={Recharts} />
        <Route path="/recharts" component={Recharts} />
        <Route path="/victory" component={VictoryCharts} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
