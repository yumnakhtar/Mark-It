import React from "react";
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import './AddBookmarkForm.css';
import icon from './icon.png';


class AddBookmarkForm extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
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

    render() {
        return (
            <div>
                <div id="modal-button" onClick={this.handleOpenModal}><img id="add-icon" src={icon} alt="add icon" /></div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                <h3>Add new bookmark</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control" id="category-name"  placeholder="Bookmark Name" />
                        </div>
                        <div class="form-group">
                            <input type="url" class="form-control" id="category-url" placeholder="Bookmark URL" />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="category-description" rows="3" placeholder="Enter a brief description about the bookmark"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
            </div>
        );
    }
}

export default AddBookmarkForm;
