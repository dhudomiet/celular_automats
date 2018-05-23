import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Rules from "./rules/rule";
import GameOfLife from "./game-of-life/game-of-life";

export default class Main extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-lg-12' style={{margin: 'auto'}}>
                    <Route path='/rule30' render={() => <Rules length={50} stateZero={['111', '110', '101', '000']}/>}/>
                    <Route path='/rule60' render={() => <Rules length={50} stateZero={['111', '110', '001', '000']}/>}/>
                    <Route path='/rule90' render={() => <Rules length={50} stateZero={['111', '101', '010', '000']}/>}/>
                    <Route path='/gameOfLife' render={() => <GameOfLife length={10} />}/>
                </div>
            </div>
        );
    }
}