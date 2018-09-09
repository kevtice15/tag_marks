import React from 'react';
import { SearchBar } from  './SearchBar.js';
import { FolderSelector } from  './FolderSelector.js';
import "../styles/TitleBar.css";

export class TitleBar extends React.Component {
    render() {
        return (
            <div className="title-bar">
                <div className="top-row">
                    <h1 className="app-title">TagMarks</h1>
                    <SearchBar />
                </div>
                <div className="bottom-row">
                    {/* <FolderSelector options={this.props.options}/> */}
                    <FolderSelector selectedFolder={this.props.selectedFolder} />
                </div>
            </div>
        );
    }
}