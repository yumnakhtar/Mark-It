import React, { Component } from "react";
import logo from './transperant-logo.png';
import "./Navbar.css";


class Navbar extends Component {

  handlelogout() {
    fetch("/logout", {
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
    })
      .then(data => { return data.json() })
      .then(json => {
        window.location.href = "/login";
      })
      .catch(err => console.log("err", err))
  }

  render() {
    return (
      <nav className="navbar navbar-light color justify-content-between">
        <a className="navbar-brand"> <img src={logo} alt="logo" height="40px" width="120px" /></a>
        <button onClick={this.handlelogout.bind(this)}>logout</button>
      </nav>

    )
  }
}

export default Navbar;