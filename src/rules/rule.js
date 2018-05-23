import React, {Component} from 'react';
import RuleApi from "./rules-api";
import Grid from "../grid";

export default class Rules extends Component {
    constructor(props) {
        super(props);
        this.rules = new RuleApi(this.props.length, this.props.stateZero);
        this.rules.initialize();
    }

    render() {
        return (
            <Grid grid={this.rules.calculateGrid()} />
        )
    }

}
