import React, {Component} from 'react';
import Square from "../square";
import '../square.css';
import './rules.css';
import Rule from './ruless';

export default class Rules extends Component {

    constructor(props) {
        super(props);
        this.rule = new Rule(this.props.length, this.props.stateZero);
    }

    render() {
        this.rule.initialize();
        const grid = this.rule.calculateGrid();
        return (
            <div>
                {this.renderGrid(grid)}
            </div>
        );
    }

    renderGrid(grid) {
        let showGrid = [];
        for (let i = 0; i < grid.length; i++) {
            showGrid.push(<div className='row'>{this.renderRow(grid[i])}</div>);
        }
        return showGrid;
    }

    renderRow(item) {
        let row = [];
        for (let i = 0; i < item.length; i++) {
            row.push(<Square value={item[i]}/>);
        }
        return row;
    }
}
