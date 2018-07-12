import React, { Component } from "react";
import { Container } from "../../components/Grid";
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
        console.log(json);
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
    if (selectedButton === "Signup") {
      console.log("inside signup");
      fetch("/signup", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          // "Content-Type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify(user),
        credentials: 'include',
        mode: 'cors'
      })
        .then(data => { return data.json() })
        .then(json => {
          console.log("signup", json);
          this.setState({
            isLoggedIn: json
          })
          window.location.href = "/";

        })
        .catch(err => console.log("err", err));
    } else if (selectedButton === "Signin") {
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
          return
          console.log("signinsignin:", json);
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
        console.log(json);
        this.setState({
          isLoggedIn: json
        })
      })
      .catch(err => console.log("err", err))

  }
  renderLoginForm() {
    // document.body.style.background = `url(${bg_img}) no-repeat`;
    if (this.state.isLoggedIn) {
      return (<button onClick={this.handlelogout.bind(this)}>logout</button>)
    } else {
      return (
        // <Container>
        <div className="row">
          <div className="col-md-3">
            <img className="abstract" src={bg_img} width="350px" />
          </div>
          <div className="col-md-9">
            <div className="row">
              <form>
              <div className="form-group">
              <img className="logo" src={logo} />
              </div>
                <div className="form-group">
                  <input type="email" id="user-email" placeholder="Your email address" />
                </div>
                <div className="form-group">
                  <input type="password" id="user-pw" placeholder="Password" />
                </div>
                <button onClick={this.handleLoginSubmit.bind(this)} className="btn btn-primary sign-up">Signup</button>
                &nbsp;
            <button onClick={this.handleLoginSubmit.bind(this)} className="btn btn-primary sign-in">Signin</button>
              </form>
            </div>
          </div>
        </div>
        // </Container>
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
