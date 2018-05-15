import React, {Component} from 'react';
import './square.css';

export default class Square extends Component {

    render() {
        return (
            <button className={this.props.value === 0 ? 'squareWhite' : 'squareBlack'} >

            </button>
        );
    }
}