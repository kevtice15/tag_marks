import React from 'react';
import { TextButton } from './TextButton.js';
import * as BookmarkActions from "../actions/BookmarkActions.js";
import "../styles/LinkBox.css";

export class FolderBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleFolderSelection = this.handleFolderSelection.bind(this);
    }
    handleFolderSelection(e) {
        e.preventDefault();
        BookmarkActions.dispatchChangeFolderSelection(this.props.id, this.props.parentId);
        console.log("New folder selection:", e);
    }

    render () {
        return (
            <li className="link-box folder-box">
                <h3 className="link-text">{this.props.linkText}</h3>
                <TextButton buttonText="Open Folder" clickAction={this.handleFolderSelection}/>
            </li>
        );
    }
}