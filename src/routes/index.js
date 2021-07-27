import React from "react";

import { BrowserRouter, Switch } from "react-router-dom";

import DashRoute from "./DashRoute";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import Login from "../pages/Login";
import Catalog from "../pages/Web/Catalog";
import CarData from "../pages/Web/CarData";
import CarReview from "../pages/Web/CarReview";
import Review from "../pages/Web/CarReview/Review";
import Invoice from "../pages/Web/Invoice";
import Warranty from "../pages/Web/Warranty";
import Emplo from "../pages/employees/Emplo";
import Exert from "../pages/employees/Exert";
import NewClient from "../pages/employees/NewClient";
import NewSale from "../pages/employees/NewSale";
import Admin from "../pages/admin/Dash";
import NewCar from "../pages/admin/NewCar";
import NewEmplo from "../pages/admin/NewEmplo";
import Pay from "../pages/admin/Pay";
import Profit from "../pages/admin/Profit";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <DashRoute path="/" component={Catalog} exact />
        <DashRoute path="/car/:id" component={CarData} />
        <DashRoute path="/review" component={CarReview} />
        <DashRoute path="/485dfsd589" component={Review} />
        <DashRoute path="/invoice" component={Invoice} />
        <DashRoute path="/warranty" component={Warranty} />

        <PublicRoute path="/login" component={Login} />

        <PrivateRoute path="/emplo" component={Emplo} />
        <PrivateRoute path="/newclient" component={NewClient} />
        <PrivateRoute path="/newsale" component={NewSale} />
        <PrivateRoute path="/exert" component={Exert} />

        <AdminRoute path="/admin" component={Admin} exact />
        <AdminRoute path="/newcar" component={NewCar} />
        <AdminRoute path="/newemplo" component={NewEmplo} />
        <AdminRoute path="/pay" component={Pay} />
        <AdminRoute path="/profit" component={Profit} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
