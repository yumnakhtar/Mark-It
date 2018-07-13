import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Login from './pages/Login';
import Footer from './components/Footer';
import AddBookmarkForm from './components/AddBookmarkForm';
// import Navbar from './components/Navbar';
import ErrorPage from "./pages/ErrorPage"
import Homepage from './pages/Homepage';

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route component={ErrorPage} />
      </Switch>
      <AddBookmarkForm />
      <Footer />
    </div>
  </Router>
);

export default App;
