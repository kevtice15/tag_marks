import React from 'react';
import { TagList } from './TagList.js';
import { TextButton } from './TextButton.js';
import "../styles/LinkBox.css";

export class LinkBox extends React.Component {
    render () {
        return (
            <li className="link-box">
                <h3 className="link-text">{this.props.linkText}</h3>
                <p className="link-wrapper"><a className="link-url" href={this.props.linkUrl}>{this.props.linkUrl}</a></p>
                <TagList />
            </li>
        );
    }
}