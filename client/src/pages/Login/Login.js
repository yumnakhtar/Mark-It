import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";

class Login extends Component {
  state = {
    isLoggedIn: false
  }

  componentWillMount() {
    this.checkAuth();
  }

  checkAuth() {
    fetch("http://localhost:8000/user", {
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
      fetch("http://localhost:8000/signup", {
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
        })
        .catch(err => console.log("err", err));
    } else if (selectedButton === "Signin") {
      fetch("http://localhost:8000/signin", {
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
          console.log("signin", json);
          console.log(json);
          this.setState({
            isLoggedIn: json
          })
        })
        .catch(err => console.log("err", err));
    }
  }

  handlelogout() {
    fetch("http://localhost:3000/logout", {
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
    if (this.state.isLoggedIn) {
      return (<button onClick={this.handlelogout.bind(this)}>logout</button>)
    } else {
      return (
        <Container>
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" id="user-email" placeholder="Enter email" />

            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" id="user-pw" placeholder="Password" />
            </div>
            <button onClick={this.handleLoginSubmit.bind(this)} className="btn btn-primary">Signup</button>
            &nbsp;
            <button onClick={this.handleLoginSubmit.bind(this)} className="btn btn-primary">Signin</button>
          </form>
        </Container>
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
