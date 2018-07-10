import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

class Homepage extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Navbar/>
                <Sidebar />
                <Card />
                
        </div>
        )
    }
}


export default Homepage;
