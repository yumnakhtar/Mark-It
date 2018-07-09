import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Cards from "./components/Cards"
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Test from './pages/Test';
import ErrorPage from "./pages/ErrorPage"
import Homepage from './pages/Homepage';


const App = () => (
  <Router>
  <div>
    {/* <Navbar /> */}
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
      <ErrorPage />
    <Footer />
  </div>
  </Router>
);

export default App;
