import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
// import './datepicker.css';
import moment from 'moment';

import {actionToAddEntry, actionToEditEntry} from '../../action/entryActions';
import {connect} from "react-redux";

const emptyInputsState = {
    amount: "",
    date: moment(),
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
        this.props.dispatch(actionToAddEntry({...this.state, isIncome: false}));
    };

    clearInputs = () => {
        state = emptyInputsState
    }

    handleChange = (date) => {
        this.setState({
          startDate: date
        });
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
                <DatePicker
                    selected={this.state.date}
                    onChange={this.handleChange}
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