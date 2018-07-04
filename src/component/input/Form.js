import React, {Component} from 'react';

import {actionToAddEntry, actionToEditEntry} from '../../action/entryActions';
import {connect} from "react-redux";

const emptyInputsState = {
    amount: "",
    date: new Date(),
    info: ""
};

export class Form extends Component {
    state = emptyInputsState;

    onClickOnAddIncome = (event) => {
        console.log("Income", event);
        this.props.dispatch(actionToAddEntry({...this.state, isIncome: true}));
    };

    onClickOnAddSpending = (event) => {
        console.log("Spending", event);
        this.props.dispatch(actionToAddEntry(this.state));
    };

    clearInputs = () => {
        state = emptyInputsState
    }

    render(){
        return(
            <div>
                <input
                    type="submit"
                    value = "Add Income"
                    onClick={() => {this.onClickOnAddIncome()}}
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value = {this.state.amount}
                    onChange={event => this.setState({amount: event.target.value})}
                />
                <input
                    type="date"
                    placeholder="Date"
                    value = {this.state.date}
                    onChange={event => this.setState({date: event.target.valuecurr.toISOString().substr(0,10)})}
                />
                <input
                    type="text"
                    placeholder="Info"
                    value = {this.state.info}
                    onChange={event => this.setState({info: event.target.value})}
                />
                <input
                    type="submit"
                    value = "Add Spending"
                    onClick={() => {this.onClickOnAddSpending()}}
                />
            </div>
        );
    }
}


const mapStateToProps = state =>  ({
    entries: state.entries
});

export default connect(mapStateToProps)(Form);