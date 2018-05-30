import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {combineReducers, createStore} from 'redux';
import {gameOfLifeReducer} from './game-of-life/game-of-life-redux';
import {Provider} from 'react-redux';

const reducers = combineReducers({
    gridReducer: gameOfLifeReducer
});
const store = createStore(reducers);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'));
