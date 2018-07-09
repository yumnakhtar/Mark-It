import React, { Component } from "react";
import "./ErrorPage.css";



class ErrorPage extends Component {
    state = {

    }

    render() {
        return (
            <div>
                <div className="error">
                    {/* <div class="errorbtn">
                    <a href="#" class="btn btn-primary">Go Home</a>
                    </div> */}
                </div>
                <div className="errorbtn">
                    <a href="#" className="btn btn-primary">Go Home</a>
                </div>
           </div>
        );
    }
}


export default ErrorPage