import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import Card from "../../components/Card";
// import API from "../../utils/API";

class Homepage extends Component {
    state = {
        categoryID: "",
        cookieValue: document.cookie.replace(/(?:(?:^|.*;\s*)user_uuid\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
        cards: []
    }

    getCards = () => {
        console.log("getting cards for: ", this.state.categoryID)
    }

    handleClick = (val) => {
        this.setState({
            categoryID: val
        })
        console.log("call next fun");
        let time = setTimeout(() => {
            this.getCards();
           }, 100); 
    }

    render() {
        console.log(this.state.categoryID)
        let currUser = this.state.cookieValue;
        let currCategory = this.state.categoryID
        return (
            <div>
                
                <Navbar/>
                <Sidebar 
                    currUser= {currUser}
                    handleClick={this.handleClick.bind(this)}
                >
                </Sidebar>
                <Card 
                    currCategory = {currCategory}
                />
        </div>
        )
    }
}


export default Homepage;
