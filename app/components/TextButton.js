import React from 'react';
import "../styles/TextButton.css";

export class TextButton extends React.Component {
    render () {
        return (
            <button>{this.props.buttonText}</button>
        );
    }
}