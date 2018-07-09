import React, { Component } from "react";
import Tester from "../../components/Tester";
import API from "../../utils/API";

class testing extends Component {
    state = {
        categoryName: "",
        userId: "6e91a560-80a8-11e8-a8aa-71792012fa45"
    };

    handleChange = event => {
        this.setState({ categoryName: event.target.value })
    }

    handleSubmit = event => {
        var category = {
            UserUuid: this.state.userId,
            name: this.state.categoryName
        }
        API.saveCategory(category);
        alert("New category created")
        event.preventDefault()
    }

    handleDelete = event => {
        var category = {
            UserUuid: this.state.userId,
            name: this.state.categoryName,
        }
        API.deleteCategory(category);
        alert("Category deleted")
        event.preventDefault()
    }
    render() {

        return (
            <div>
                <Tester
                /////this code creates a new category/////
                    // value={this.state.categoryName}
                    // handleChange={this.handleChange.bind(this)}
                    // name="categoryName"
                    // handleSubmit={this.handleSubmit}

                /////this code deletes a category
                    value={this.state.categoryName}
                    handleChange={this.handleChange.bind(this)}
                    name="categoryName"
                    handleDelete={this.handleDelete}
                />
            </div>

        )
    }
}
export default testing;
