import React from 'react';
import { LinkBox } from  './LinkBox.js';
import { FolderBox } from './FolderBox.js';
import "../styles/LinkList.css";

export class LinkList extends React.Component {
    render() {
        // const listOfLinks = this.props.linkList.map((link, index) =>
        //     <LinkBox key={index} linkText={link.title ? link.title : "Untitled Link"} linkUrl={link.url} />
        // );
        var listOfLinks = [];
        for (let link of this.props.linkList) {
            if(link.children){
                listOfLinks.push(<FolderBox key={link.index} linkText={link.title ? link.title : "Untitled Folder"} />);
            }
            else {
                listOfLinks.push(<LinkBox key={link.index} linkText={link.title ? link.title : "Untitled Link"} linkUrl={link.url} />);
            }
        }
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