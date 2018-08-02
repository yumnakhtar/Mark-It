import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Card from "../../components/Card";
import AddBookmarkForm from "../../components/AddBookmarkForm";
import API from "../../utils/API";
import "./style.css";


class Homepage extends Component {
    state = {
        categoryID: "",
        cookieValue: document.cookie.replace(/(?:(?:^|.*;\s*)user_uuid\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
        cards: []
    }

    getCards = () => {
        console.log("getting cards for: ", this.state.categoryID)
        var category = {
            UserUuid: this.state.cookieValue,
            CategoryId: this.state.categoryID
        }
        API.getBookmarks(category).then(res => {
            this.setState({ cards: res.data })
            console.log(this.state.cards)

        })
            .catch(error => {
                console.log("ERROR", error);
            })
    }

    handleAdd = (val) => {
        this.setState({
            categoryID: val,
            cards: []
        })
        console.log("call next fun");
        let time = setTimeout(() => {
            this.getCards();
        }, 100);
    }

    render() {
        console.log(this.state.categoryID)
        let currUser = this.state.cookieValue;
        let currCategory = this.state.categoryID;
        let allCards = this.state.cards
        return (
            <div>
                <Navbar />
                <div className="row">
                <div className="col-md-2">
                <Sidebar
                    currUser={currUser}
                    handleClick={this.handleAdd.bind(this)}
                >
                </Sidebar>
                </div>
                <div className="col-md-10">
                <h2>Bookmarks</h2>
                <Card 
                    currCategory = {currCategory}
                    allCards = {allCards}
                />
                <AddBookmarkForm 
                     currCategory = {currCategory}
                     loadCards = {this.getCards}
                     UserUuid = {this.state.cookieValue}
                />
                </div>
                </div>
        </div>

        )
    }
}


export default Homepage;
