import React, {Component} from 'react';
import Grid from "../grid";
import ReactInterval from 'react-interval';
import {connect} from 'react-redux'
import {clearGrid, setCell, updateGrid} from './game-of-life-redux';

const getState = (state) => {
    return {
        grid: state.gridReducer.grid
    }
};

class GameOfLife extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: false
        };
    }

    render() {
        const {grid} = this.props;
        return (
            <div>
                <ReactInterval timeout={100} enabled={this.state.start} callback={this.updateGrid}/>
                <div>
                    <button className='btn btn-sm btn-success' onClick={this.startInterval}>start</button>
                    <button className='btn btn-sm btn-success' onClick={this.stopInterval}>stop</button>
                    <button className='btn btn-sm btn-success' onClick={this.clear}>clear</button>
                </div>
                <Grid grid={grid} onClick={this.setCell}/>
            </div>
        )
    }

    updateGrid = () => {
        this.props.updateGrid();
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
        this.props.clearGrid();
    };

    setCell = (i, j, value) => {
        value = value === 0 ? 1 : 0;
        this.props.setCell(i, j, value);
    };

}

export default connect(getState, {updateGrid, clearGrid, setCell})(GameOfLife)