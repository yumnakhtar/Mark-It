import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import Tester from "./components/Tester";
import Cards from "./components/Cards"
// import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Sidebar from './pages/Sidebar';

const App = () => (
  // <div>
  //   <Navbar />
  
    // <Login />
  //   <Footer />
  // </div>
  <Router>
 <div>
   <Navbar />
   <Switch>
       {/* <Route exact path="/" component={Tester} /> */}
       {/* <Route exact path=“/books” component={Books} /> */}
       {/* <Route exact path=“/books/:id” component={Detail} /> */}
       {/* <Route component={NoMatch} /> */}
     </Switch>
   {/* <Login /> */}
   {/* <Tester /> */}

  <Cards />
   <Footer />
 </div>
 </Router>
);

export default App;
