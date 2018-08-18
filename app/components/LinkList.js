import React from 'react';
import { LinkBox } from  './LinkBox.js';
import "../styles/LinkList.css";

export class LinkList extends React.Component {
    render() {
        const listOfLinks = this.props.linkList.map((link, index) =>
            <LinkBox key={index} linkText={link.text} linkUrl={link.url} />
        );
        return (  
            <div className="link-list">
                <h2 className="list-title">{this.props.title}</h2>
                <ul>
                    {listOfLinks}
                </ul>
            </div>
        );
    }
}