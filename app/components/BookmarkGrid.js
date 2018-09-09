import React from 'react';
import { LinkList } from  './LinkList.js';
import { LinkBox } from './LinkBox.js';
import "../styles/BookmarkGrid.css";

export class BookmarkGrid extends React.Component {
    render() {
        // var generalList = [];
        // var listOfLists = [];
        // console.log("The cheesy props:", this.props);
        // for(let list of this.props.bookmarkLists) {
        //     if(list.chidren) {
        //         listOfLists.push(
        //         <li>
        //         <LinkList 
        //             key={list.index} 
        //             linkList={list.children} 
        //             title={list.title} 
        //         />
        //         </li>);
        //     }
        //     else {
        //         generalList.push(<LinkBox 
        //             key={list.index} 
        //             linkText={list.title ? list.title : "Untitled Link"} 
        //             linkUrl={list.url}
        //             id={list.id}
        //             parentId={list.parentId}
        //             />);
        //     }
        // }

        const folders = this.props.bookmarkLists.filter (link => link.hasOwnProperty('children'));
        console.log("THE FOLDERS:", folders);
        const links = this.props.bookmarkLists.filter (link => !link.hasOwnProperty('children'));
        console.log("THE LINKS:", links);

        const listOfLists = folders.map((list) =>
            <li><LinkList key={list.index} linkList={list.children} title={list.title} /></li>
        );

        const generalList = links.map((link) =>
            <LinkBox 
                key={link.index} 
                linkText={link.title ? link.title : "Untitled Link"} 
                linkUrl={link.url}
                id={link.id}
                parentId={link.parentId}
            />
        );

        // const listOfLists = this.props.bookmarkLists.map((list) =>
        //     <li><LinkList key={list.index} linkList={list.children} title={list.title} /></li>
        // );
        if (generalList.length > 0){
            return (  
                <div className="bookmark-grid">
                    <ul>
                        <li><LinkList key="0" linkList={generalList} title="General" /></li>
                        {listOfLists}
                    </ul>
                </div>
            );
        }
        else {
            return (  
                <div className="bookmark-grid">
                    <ul>
                        {listOfLists}
                    </ul>
                </div>
            );
        }
    }
}