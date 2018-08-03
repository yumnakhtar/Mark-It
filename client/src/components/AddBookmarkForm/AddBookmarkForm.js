import React from "react";
// import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import './AddBookmarkForm.css';
import icon from './icon.png';
import API from "../../utils/API";


class AddBookmarkForm extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false,
            bookmarkName: "",
            url: "",
            description: ""
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true }); 
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.bookmarkName && this.state.url) {
          API.saveBookmark({
            bookmarkName: this.state.bookmarkName,
            url: this.state.url,
            description: this.state.description,
            UserUuid: this.props.UserUuid,
            CategoryId: this.props.currCategory
            // SubcategoryId: 1
          })
            // .catch(err => console.log(err))
        }
        setTimeout(() => {
            this.props.loadCards;
        }, 100);
      };

    render() {
        return (
            <div>
                <div id="modal-button" onClick={this.handleOpenModal}>
                    <img id="add-icon" src={icon} alt="add icon" />
                </div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                <h3>Add new bookmark</h3>
                    <form>
                        <div className="form-group">
                            <input 
                            className="form-control"
                            name="bookmarkName" 
                            value={this.state.bookmarkName}
                            onChange={this.handleInputChange} 
                            type="text" 
                            id={"category-name"}  
                            placeholder="Bookmark Name" />
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                            name="url"
                            value={this.state.url}
                            onChange={this.handleInputChange} 
                            type="url"  
                            id="category-url" 
                            placeholder="Bookmark URL" />
                        </div>
                        <div className="form-group">
                            <textarea 
                            className="form-control" 
                            name="description"
                            value={this.state.description}
                            onChange={this.handleInputChange}
                            id="category-description" 
                            rows="3" 
                            placeholder="Enter a brief description about the bookmark"></textarea>
                        </div>
                        <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={this.handleFormSubmit}>Submit</button>
                    </form>
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
            </div>
        );
    }
}

export default AddBookmarkForm;
