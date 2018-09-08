import React from 'react';
import { LinkList } from  './LinkList.js';
import "../styles/BookmarkGrid.css";

export class BookmarkGrid extends React.Component {
    render() {
        console.log("The cheesy props:", this.props);
        const listOfLists = this.props.bookmarkLists.map((list, index) =>
            <li><LinkList key={list.index} linkList={list.children} title={list.title} /></li>
        );
        return (  
            <div className="bookmark-grid">
                <ul>
                    {listOfLists}
                </ul>
            </div>
        );
    }
}