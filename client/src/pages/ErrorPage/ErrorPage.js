import React, { Component } from "react";
import Navbar from "../../components/Navbar";

import "./ErrorPage.css";



class ErrorPage extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <Navbar/>
                <div className="error">
                </div>
                <div className="errorbtn">
                    <a href="/" className="btn btn-primary">Go Home</a>
                </div>
           </div>
        );
    }
}


export default ErrorPage