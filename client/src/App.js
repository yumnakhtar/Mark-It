import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import Tester from "./components/Tester";
import Cards from "./components/Cards"
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';

const App = () => (
  <Router>
  <div>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    <Footer />
  </div>
  </Router>
);

export default App;
