import React from 'react';
import "../styles/SearchBar.css";

export class SearchBar extends React.Component {
    render() {
        return (  
            <input type="text" id="search-bar" name="search-bar"/>
        );
    }
}