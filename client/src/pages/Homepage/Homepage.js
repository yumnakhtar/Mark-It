import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";

class Homepage extends Component {
    state = {
        categoryID: "",
        cookieValue: document.cookie.replace(/(?:(?:^|.*;\s*)user_uuid\s*\=\s*([^;]*).*$)|^.*$/, "$1")
    }

    handleClick = () => {
        console.log(this.state.cookieValue)
    }

    render() {
        let currUser = this.state.cookieValue;
        return (
            <div>
                <Navbar />
                <Sidebar
                    currUser={currUser}
                    handleClick={this.handleClick.bind(this)}
                >
                </Sidebar>
                <Card />
            </div>
        )
    }
}


export default Homepage;
