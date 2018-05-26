import React, {Component} from 'react';
import './rules/rules.css';
import Row from "./row";

export default class Grid extends Component {

    render() {
        return (
            <div>
                {this.renderGrid()}
            </div>
        );
    }

    renderGrid() {
        let showGrid = [];
        for (let i = 0; i < this.props.grid.length; i++) {
            showGrid.push(<Row rowNumber={i} squares={this.props.grid[i]} onClick={this.props.onClick}/>);
        }
        return showGrid;
    }
}
