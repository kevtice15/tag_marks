import dispatcher from "../dispatcher.js";

export function getBookmarksFromChrome() {
    dispatcher.dispatch({ type: "FETCH_BOOKMARKS" });
    chrome.bookmarks.getTree(function(bookmarks){
        console.log("Initial bkmk tree", bookmarks);
        dispatcher.dispatch({
            type: "RECEIVED_BOOKMARKS",
            bookmarkTree: bookmarks
        })
    });
}

export function dispatchChangeFolderSelection(id, parentId) {
    dispatcher.dispatch({type: "FETCH_SUBTREE"});
    chrome.bookmarks.getSubTree(id, function(bookmarks){
        console.log("Getting sub tree:", bookmarks);
        dispatcher.dispatch({
            type:"RECEIVED_SUBTREE",
            subTree: bookmarks
        })
    });
}