import React, { Component } from "react";
import logo from './transperant-logo.png';


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

  render(){
    return(
    //   <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    //   <a className="navbar-brand" href="/">
    //     <img src={logo} alt="logo" height="40px" width="120px" />
    //   </a>
    //   <button onClick={this.handlelogout.bind(this)}>logout</button>
    // </nav>


<nav class="navbar navbar-light bg-light justify-content-between">
  <a class="navbar-brand"> <img src={logo} alt="logo" height="40px" width="120px" /></a>
  <button onClick={this.handlelogout.bind(this)}>logout</button>
</nav>

    )
  }
}



export default Navbar;