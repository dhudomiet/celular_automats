import React, {Component} from 'react';
import GameOfLifeApi from "./game-of-life-api";
import Grid from "../grid";
import ReactInterval from 'react-interval';

export default class GameOfLife extends Component {
    constructor(props) {
        super(props);
        this.gameOfLifeApi = new GameOfLifeApi(this.props.length);
        this.state = {
            grid: this.gameOfLifeApi.grid,
            start: false
        };
    }

    render() {
        return (
            <div>
                <ReactInterval timeout={100} enabled={this.state.start} callback={this.updateGrid} />
                <div>
                    <button className='btn btn-sm btn-success' onClick={this.startInterval} >start</button>
                    <button className='btn btn-sm btn-success' onClick={this.stopInterval} >stop</button>
                    <button className='btn btn-sm btn-success' onClick={this.clear}>clear</button>
                </div>
                <Grid grid={this.state.grid} onClick={this.setCell} />
            </div>
        )
    }

    updateGrid = () => {
        this.setState({
            grid: this.gameOfLifeApi.calculate()
        })
    };

    stopInterval = () => {
        this.setState({
            start: false
        });
    };

    startInterval = () => {
        this.setState({
            start: true
        });
    };

    clear = () => {
        this.gameOfLifeApi.initialize();
        this.setState({
            grid: this.gameOfLifeApi.grid
        })
    };

    setCell = (i, j, value) => {
        value = value === 0 ? 1 : 0;
        this.gameOfLifeApi.setCellState(i,j,value);
        this.setState({
            grid: this.gameOfLifeApi.grid
        })
    };

}