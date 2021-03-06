
import React from "react";
import { Redirect } from "react-router-dom";

import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import About from "./views/About";
import Add from "./views/Add";
import Leaflet from "./views/Leaflet";
import GetData from "./views/GetData";
import Choose from "./views/Choose";
import Atm from "./views/Atm";
import Analysis from "./views/Analysis";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/add",
    component: Add
  },
  {
    path: "/leaflet",
    component: Leaflet
  },
  {
    path: "/atm",
    component: Atm
  },
  {
    path: "/getdata",
    component: GetData
  },
  {
    path: "/analysis",
    component: Analysis
  },
  {
    path: "/choose",
    component: Choose
  }
]
