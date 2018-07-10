import React, { Component } from "react";
import "./Sidebar.css";
import API from "../../utils/API";


class Sidebar extends Component {
    state = {
        categories: []
    };

    componentDidMount() {
        this.loadCategories();
    };

    loadCategories = () => {
        API.getCategories().then(res => {
            this.setState({ categories: res.data })
        }
        ).catch(error => {
            console.log("ERROR", error);
        })
    }

    render() {
        return (
            <div className="sidenav">
                {this.state.categories.map(category =>
                    { return <h1>{category.name} </h1>}
                )}
            </div>
        )
    }
}



export default Sidebar;
