import React, { Component, Image } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./login.css";


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
    document.body.style.background = `url("https://images.unsplash.com/photo-1501349800519-48093d60bde0?ixlib=rb-0.3.5&s=c42f57ee27eaef62a8b49335d1f13ab5&auto=format&fit=crop&w=1500&q=80") no-repeat`;
    if (this.state.isLoggedIn) {
      return (<button onClick={this.handlelogout.bind(this)}>logout</button>)
    } else {
      return (
        <Container>
          <form>
            <div className="form-group">
              <label>Email address:</label>
              <input type="email"  id="user-email" />

            </div>
            <div className="form-group">
              <label>Password:    </label>
              <input type="password"  id="user-pw" />
            </div>
            <button onClick={this.handleLoginSubmit.bind(this)} className="btn btn-primary sign-up">Signup</button>
            &nbsp;
            <button onClick={this.handleLoginSubmit.bind(this)} className="btn btn-primary sign-in">Signin</button>
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
