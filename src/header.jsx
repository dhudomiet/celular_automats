import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <ul className='list-inline'>
                        <li className='list-inline-item' key='rule30'><Link to='/rule30'>Rule 30 |</Link></li>
                        <li  className='list-inline-item' key='rule60'><Link to='/rule60'>Rule 60 |</Link></li>
                        <li  className='list-inline-item' key='rule90'><Link to='/rule90'>Rule 90</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}