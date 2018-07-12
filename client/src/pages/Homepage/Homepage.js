import React, { Component } from "react";
// import { Col, Row, Container } from "../../components/Grid";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
import Card from "../../components/Card";
import API from "../../utils/API";

class Homepage extends Component {
    state = {
        userId: "6e91a560-80a8-11e8-a8aa-71792012fa45",
        categoryID: ""
    }

    // handleClick = () => {
    //     alert("click works");
    // }

    render() {
        return (
            <div>
                <Navbar/>
                <Sidebar 
                    // handleClick={this.handleClick.bind(this)}
                >
                </Sidebar>
                <Card />
        </div>
        )
    }
}


export default Homepage;
