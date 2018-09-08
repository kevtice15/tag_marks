import React from 'react';
import { TextButton } from './TextButton.js';
import "../styles/LinkBox.css";

export class FolderBox extends React.Component {
    render () {
        return (
            <li className="link-box folder-box">
                <h3 className="link-text">{this.props.linkText}</h3>
                <TextButton buttonText="Open Folder" />
            </li>
        );
    }
}