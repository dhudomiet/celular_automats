import React, {Component} from 'react';
import GameOfLifeApi from "./game-of-life-api";
import Grid from "../grid";

export default class GameOfLife extends Component {
    constructor(props) {
        super(props);
        this.gameOfLifeApi = new GameOfLifeApi(this.props.length);
        this.state = {
            grid: this.gameOfLifeApi.grid,
            start: false
        }
        this.onClick = this.onClick.bind(this);
        this.clear = this.clear.bind(this);
    }

    render() {
        return (
            <div>
                <Grid grid={this.state.grid} onClick={this.onClick} />
                <div>
                    <button className='btn btn-sm btn-success' onClick={() => this.setState({grid: this.gameOfLifeApi.calculate()})}>click</button>
                    <button className='btn btn-sm btn-success' onClick={this.clear}>clear</button>
                </div>
            </div>
        )
    }

    clear() {
        this.gameOfLifeApi.initialize();
        this.setState({
            grid: this.gameOfLifeApi.grid
        })
    }

    onClick(i, j, value) {
        value = value === 0 ? 1 : 0;
        this.gameOfLifeApi.setCellState(i,j,value);
        this.setState({
            grid: this.gameOfLifeApi.grid
        })
    }


}