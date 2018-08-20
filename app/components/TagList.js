import React from 'react';
import { Tag } from './Tag.js';
import "../styles/TagList.css";

export class TagList extends React.Component {
    render () {
        return(
        <ul className="tag-list">
            <li key="0"><Tag word="color" /></li>
            <li key="1"><Tag word="typography" /></li>
            <li key="2"><Tag word="third" /></li>
        </ul>
        );
    }
}