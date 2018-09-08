import { EventEmitter } from "events";
import dispatcher from "../dispatcher.js";

class BookmarkStore extends EventEmitter {
    constructor() {
        super();
        this.bookmarkTree = undefined;
    }

    getAllBookmarks() {
        return this.bookmarkTree;
    }

    receiveBookmarks(bookmarkTree){
        this.bookmarkTree = bookmarkTree;
        console.log("WHOA IT WORKED:", this.bookmarkTree);
        this.emit("initialBookmarksReceived");
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
        }
    }
}

const bookmarkStore = new BookmarkStore;
dispatcher.register(bookmarkStore.handleActions.bind(bookmarkStore));
export default bookmarkStore;