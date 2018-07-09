import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Test from './pages/Test';
import ErrorPage from "./pages/ErrorPage"

const App = () => (
  <Router>
  <div>
    <Navbar />
    <Switch>
        <Route exact path="/homepage" component={Test} />
        <Route exact path="/login" component={Login} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
      <ErrorPage />
    <Footer />
  </div>
  </Router>
);

export default App;
