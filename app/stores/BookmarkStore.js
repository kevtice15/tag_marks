import { EventEmitter } from "events";
import dispatcher from "../dispatcher.js";

class BookmarkStore extends EventEmitter {
    constructor() {
        super();
        this.bookmarkTree = undefined;
        this.currentlySelectedFolder = undefined;
    }

    getAllBookmarks() {
        return this.bookmarkTree;
    }

    receiveBookmarks(bookmarkTree){
        this.bookmarkTree = bookmarkTree;
        this.currentlySelectedFolder = bookmarkTree[0].id;
        console.log("WHOA IT WORKED:", this.bookmarkTree);
        this.emit("initialBookmarksReceived");
    }

    receiveSubTree(subTree){
        this.bookmarkTree = subTree;
        this.currentlySelectedFolder = subTree[0].id;
        console.log("SUBTREE WORKED:", this.bookmarkTree);
        this.emit("newSubTreeReceived");
    }
     
    handleActions(action) {
        switch(action.type) {
            case "TOGGLE_SUBMENU": {
                // console.log("received toggle submenu action", action);
                this.toggleSubMenu(action.id);
                break;
            }
            case "RECEIVED_BOOKMARKS": {
                this.receiveBookmarks(action.bookmarkTree);
                break;   
            }
            case "RECEIVED_SUBTREE": {
                this.receiveSubTree(action.subTree);
                break;
            }
        }
    }
}

const bookmarkStore = new BookmarkStore;
dispatcher.register(bookmarkStore.handleActions.bind(bookmarkStore));
export default bookmarkStore;