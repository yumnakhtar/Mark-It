import React, { Component } from "react";
import "./login.css";
import bg_img from './abstract.jpg';
import logo from './logo.png';


class Login extends Component {
  state = {
    isLoggedIn: false
  }

  componentWillMount() {
    this.checkAuth();
  }

  checkAuth() {
    fetch("/user", {
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
    })
      .then(data => { return data.json() })
      .then(json => {
        this.setState({
          isLoggedIn: json
        })
      })
      .catch(err => console.log("err", err));
  }

  handleLoginSubmit(e) {
    e.preventDefault();
    var selectedButton = e.target.textContent;
    var user = {
      email: document.getElementById("user-email").value,
      local_pw: document.getElementById("user-pw").value
    }
    if (selectedButton === "Sign up") {
      fetch("/signup", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(user),
        credentials: 'include',
        mode: 'cors'
      })
        .then(data => { return data.json() })
        .then(json => {
          this.setState({
            isLoggedIn: json
          })
          window.location.href = "/";

        })
        .catch(err => console.log("err", err));
    } else if (selectedButton === "Sign in") {
      fetch("/signin", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(user),
        credentials: 'include',
        mode: 'cors'
      })
        .then(data => { return data.json() })
        .then(json => {
          this.setState({
            isLoggedIn: json
          })
          window.location.href = "/";
        })
        .catch(err => console.log("err", err));
    }
  }

  handlelogout() {
    fetch("/logout", {
      method: 'GET',
      credentials: 'include',
      mode: 'cors'
    })
      .then(data => { return data.json() })
      .then(json => {
        this.setState({
          isLoggedIn: json
        })
      })
      .catch(err => console.log("err", err))

  }
  renderLoginForm() {
    if (this.state.isLoggedIn) {
      return (<button onClick={this.handlelogout.bind(this)}>logout</button>)
    } else {
      return (
        <div className="container-fluid container-login">
          <div className="row row-no-margin">
            <div className="col-md-3">
              <img alt="abstract" className="abstract" src={bg_img} width="350px" />
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-center align-items-center box-login">
                  <div>
                    <form className="text-center">
                      <div className="form-group">
                        <img alt="logo" className="logo img-fluid" src={logo} />
                      </div>
                      <div className="form-group">
                        <input type="email" id="user-email" placeholder="Your email address" />
                      </div>
                      <div className="form-group">
                        <input type="password" id="user-pw" placeholder="Password" />
                      </div>
                      <button onClick={this.handleLoginSubmit.bind(this)} className="btn btn-primary sign-up">Sign up</button>
                      &nbsp;
              <button onClick={this.handleLoginSubmit.bind(this)} className="btn btn-primary sign-in">Sign in</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      this.renderLoginForm()
    )
  }
}


export default Login;
