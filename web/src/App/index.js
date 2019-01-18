import React, { useState } from "react";
import { Router } from "@reach/router";

import Navigation from "components/Navigation";
import Header from "components/Header";
import Footer from "components/Footer";

import Login from "pages/Login";
import Home from "pages/Home";
import Domains from "pages/Domains";
import Accounts from "pages/Accounts";
import Aliases from "pages/Aliases";
import TlsPolicies from "pages/TlsPolicies";

import { app, appLogin, notFound } from "./App.module.scss";

const NotFound = () => (
  <div className={notFound}>
    <h1>Not Found | 404</h1>
  </div>
);

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  if (!loggedIn)
    return (
      <div className={appLogin}>
        <Navigation />
        <Router>
          <Login path="/login" />
          <NotFound default />
        </Router>
        <Footer />
      </div>
    );

  return (
    <div className={app}>
      <Navigation />
      <Header />
      <main>
        <Router>
          <Home path="/" exact />
          <Domains path="/domains" />
          <Accounts path="/accounts/:domain" />
          <Accounts path="/accounts" />
          <Aliases path="/aliases/:email" />
          <Aliases path="/aliases" />
          <TlsPolicies path="/tlspolicies" />
          <NotFound default />
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default App;