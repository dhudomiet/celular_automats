import React, {Component} from 'react';
import Square from "./square";

export default class Row extends Component {
    render() {
        return (
            <div className='row'>
                {this.renderSquares()}
            </div>
        )
    }

    renderSquares() {
        let squares = [];
        for (let i = 0; i < this.props.squares.length; i++) {
            squares.push(<Square row={this.props.rowNumber} col={i} value={this.props.squares[i]} onClick={this.props.onClick}/>);
        }
        return squares;
    }

}

