import React from 'react';
import { LinkList } from  './LinkList.js';
import "../styles/BookmarkGrid.css";

export class BookmarkGrid extends React.Component {
    render() {
        const listOfLists = this.props.bookmarkLists.map((list, index) =>
            <li><LinkList key={index} linkList={list.links} title={list.listTitle} /></li>
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