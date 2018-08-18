import React from 'react';
import "../styles/Tag.css";
import CloseIcon from "../icons/close-outline.svg";
import CloseIconHover from "../icons/close-solid.svg";

export class Tag extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        const closeIcon = new Image();
        closeIcon.src = CloseIcon;
        return(
            <div className="tag-container">
                <span><p className="tag-text">{this.props.word}</p></span><span><img src={closeIcon.src} className="tag-close"/></span>
            </div>
        );
    }
}