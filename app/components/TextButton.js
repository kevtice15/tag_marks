import React from 'react';
import "../styles/TextButton.css";

export class TextButton extends React.Component {
    render () {
        return (
            <button className="text-button" onClick={this.props.clickAction}>{this.props.buttonText}</button>
        );
    }
}