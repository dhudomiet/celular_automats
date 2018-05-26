import React, {Component} from 'react';
import GameOfLife from "./game-of-life";
import Square from "../square";

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.gameOfLife = new GameOfLife(this.props.length);
        this.state = {
            grid: this.gameOfLife.initialize()
        };
        this.changeGridState = this.changeGridState.bind(this);
        this.clearGrid = this.clearGrid.bind(this);
    }

    render() {
        return (
            <div className=''>
                {this.renderGrid()}
                <div>
                    <button className='btn btn-success' onClick={this.changeGridState}>Change state</button>
                </div>
                <div>
                    <button className='btn btn-success' onClick={this.clearGrid}>Clear grid</button>
                </div>
            </div>
        );
    }

    renderGrid() {
        let rows = [];
        for (let i = 0; i < this.state.grid.length; i++) {
            rows.push(<div className='row'>{this.renderRow(i)}</div>)
        }
        return rows;
    }

    renderRow(number) {
        let rowShow = [];
        for (let i = 0; i < this.state.grid[number].length; i++) {
            rowShow.push(<Square value={this.state.grid[number][i]} onClick={() => this.onCLick(number, i)}/>);
        }
        return rowShow;
    }

    onCLick(i, j) {
        let grid = this.state.grid.slice();
        let cellValue = grid[i][j] === 0 ? 1 : 0;
        this.gameOfLife.setCell(i,j, cellValue);
        grid[i][j] = cellValue;
        this.setState({
            grid: grid
        })
    }

    changeGridState() {
        let grid = this.gameOfLife.calculateGrid();
        this.setState({
            grid: grid
        })
    }

    clearGrid() {
        this.setState({
            grid: this.gameOfLife.clear()
        });
    }
}