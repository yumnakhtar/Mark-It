import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import Sidebar from './pages/Sidebar';

const App = () => (
  <div>
    <Navbar />
  
    <Login />
    <Footer />
  </div>
);

export default App;
