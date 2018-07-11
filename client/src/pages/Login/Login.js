import React, { Component } from "react";
import { Container } from "../../components/Grid";
import "./login.css";
// import bg_img from './canva-photo-editor.png';


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
          console.log(json);

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
          console.log("signin", json);
          console.log(json);
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
        // <div className="login-wrapper">
        <Container>
          <form className="login__form-group">
            <div className="form-group" id="emailinpt">
              <label className="login__form-label">Email :</label>
              <input type="email" id="user-email" />

            </div>
            <div className="form-group login__form-group" id="passwordinpt">
              <label className="login login__form-label">Password :    </label>
              <input type="password" id="user-pw" />
            </div>
            <button onClick={this.handleLoginSubmit.bind(this)} className="btn btn-primary sign-up">Signup</button>
            &nbsp;
            <button onClick={this.handleLoginSubmit.bind(this)} className="btn btn-primary sign-in">Signin</button>
          </form>
        </Container>
        // </div>
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
