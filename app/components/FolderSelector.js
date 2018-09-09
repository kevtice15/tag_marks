import React from 'react';
import "../styles/FolderSelector.css";

export class FolderSelector extends React.Component {
    render() {
        // const optionsList = this.props.options.map((option, index) =>
        //     <option key={option.id} value={option.title}>{option.title}</option>
        // );
        // console.log(optionsList);
        return (
            <div>
                <h2>Selected Bookmark Folder:</h2>
                <p>{this.props.selectedFolder.title}</p>
                {/* <select>
                    {optionsList}
                </select> */}
            </div>
        );
        
    }
}

