import React from 'react';
import BookmarkStore from "../stores/BookmarkStore.js";
import * as BookmarkActions from "../actions/BookmarkActions.js";
import { TitleBar } from './TitleBar.js';
import { BookmarkGrid } from './BookmarkGrid.js';
import { FolderSelector } from './FolderSelector.js';
import { SearchBar } from './SearchBar.js';
import "../styles/App.css";


export class App extends React.Component{
    constructor(props) {
        super(props);
        //Get the bookmark tree when the app is first being created
        BookmarkActions.getBookmarksFromChrome();
        this.state = {
            bookmarkTree: BookmarkStore.getAllBookmarks(),
            currentlySelectedFolder: {id:"woop", title: "woop woop"}
        }
        this.updateBookmarkTree = this.updateBookmarkTree.bind(this);
        this.updateBreadcrumbs = this.updateBreadcrumbs.bind(this);
    }

    componentWillMount() {
        BookmarkStore.on("initialBookmarksReceived", this.updateBookmarkTree);
        BookmarkStore.on("initialBookmarksReceived", this.updateBreadcrumbs);
        BookmarkStore.on("newSubTreeReceived", this.updateBookmarkTree);
    }

    componentWillUnmount() {
        BookmarkStore.removeListener("initialBookmarksReceived", this.updateBookmarkTree);
        BookmarkStore.removeListener("initialBookmarksReceived", this.updateBreadcrumbs);
        BookmarkStore.removeListener("newSubTreeReceived", this.updateBookmarkTree);
    }

    updateBookmarkTree() {
        this.setState({
            bookmarkTree: BookmarkStore.getAllBookmarks()
        })
        console.log("Updated bkmk tree", this.state.bookmarkTree);
    }

    updateBreadcrumbs() {
        this.setState({
            currentlySelectedFolder: {
                id: this.state.bookmarkTree[0].id, 
                title: this.state.bookmarkTree[0].title
            }
        })
    }
    
    render() {
        // const optionList = this.state.bookmarkTree[0].children.map(function(bookmarkNode){
        //     var nodeForOptions = {id: bookmarkNode.id, title: bookmarkNode.title}
        //     console.log(nodeForOptions);
        //     return nodeForOptions;
        // });
        console.log("bookmark tree app", this.state.bookmarkTree);
        //console.log("option list", optionList);
        console.log("what is it then:", this.state.bookmarkTree);
        if(this.state.bookmarkTree) {
            return (
                <div className="app-container">
                    <TitleBar selectedFolder={this.state.currentlySelectedFolder.title == "" ? "Untitled Folder" : this.state.currentlySelectedFolder.title}/>
                    <BookmarkGrid bookmarkLists={this.state.bookmarkTree[0].children} />
                </div>
            );
        }
        else {
            return (
                <div className="app-container">
                    <p>Sorry, error.</p>
                </div>
            )
        }
    }
}