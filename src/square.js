import React, {Component} from 'react';
import './square.css';

export default class Square extends Component {

    render() {
        return (
            <button className={this.props.value === 0 ? 'squareWhite' : 'squareBlack'} onClick={this.click} >

            </button>
        );
    }

    click = () => {
        this.props.onClick(this.props.row, this.props.col, this.props.value);
    }
}