import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
    state = {

    };

    render() {
        return (
            <div class="sidenav">
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#clients">Clients</a>
                <a href="#contact">Contact</a>
            </div>
        );
    }
}


const Footer = () => (
    <div class="sidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
    </div>
)


export default Sidebar;
