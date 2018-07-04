import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/"
import Footer from "./components/Footer"
import Login from "./pages/Login"
// import LoginForm from "./components/LoginForm"

const App = () => (
  <div>
    <Navbar />
    <Footer />
    <Login />
    
  </div>
)

export default App;