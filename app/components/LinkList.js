import React from 'react';
import { LinkBox } from  './LinkBox.js';
import { FolderBox } from './FolderBox.js';
import "../styles/LinkList.css";

export class LinkList extends React.Component {
    render() {
        // const listOfLinks = this.props.linkList.map((link, index) =>
        //     <LinkBox key={index} linkText={link.title ? link.title : "Untitled Link"} linkUrl={link.url} />
        // );
        console.log("cheezers", this.props.linkList);
        var listOfLinks = [];

        if(this.props.linkList){
            const folders = this.props.linkList.filter (link => link.hasOwnProperty('children'));
            console.log("THE LIST FOLDERS:", folders);
            const links = this.props.linkList.filter (link => !link.hasOwnProperty('children'));
            console.log("THE LIST LINKS:", links);


            const foldersList = folders.map((folder) =>
                <FolderBox 
                    key={folder.index} 
                    linkText={folder.title ? folder.title : "Untitled Folder"} 
                    id={folder.id}
                    parentId={folder.parentId}
                />
            );

            const linksList = links.map((link) =>
                <LinkBox 
                    key={link.index} 
                    linkText={link.title ? link.title : "Untitled Link"} 
                    linkUrl={link.url}
                    id={link.id}
                    parentId={link.parentId}
                />
            );

            // if(this.props.linkList){
            //     for (let link of this.props.linkList) {
            //         if(link.children){
            //             listOfLinks.push(<FolderBox 
            //                 key={link.index} 
            //                 linkText={link.title ? link.title : "Untitled Folder"} 
            //                 id={link.id}
            //                 parentId={link.parentId}
            //                 />);
            //         }
            //         else {
            //             listOfLinks.push(<LinkBox 
            //                 key={link.index} 
            //                 linkText={link.title ? link.title : "Untitled Link"} 
            //                 linkUrl={link.url}
            //                 id={link.id}
            //                 parentId={link.parentId}
            //                 />);
            //         }
            //     }

            // listOfLinks.concat(foldersList);
            // listOfLinks.concat(linksList);
            console.log("and our list of links is....", listOfLinks);
            return (  
                <div className="link-list">
                    <h2 className="list-title">{this.props.title}</h2>
                    <ul>
                        {foldersList}
                        {linksList}
                    </ul>
                </div>
            );
        }
        else {
            //do some kind of loading thing
            return (  
                <div className="link-list">
                    <h2 className="list-title">Loading</h2>
                </div>
            );
        }
        
    }
}