import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import styles from './Form.less';
import moment from 'moment';

import {actionToAddEntry, actionToEditEntry} from '../../action/entryActions';
import {connect} from "react-redux";

const maxWaitSec = 8;

const emptyInputsState = {
    amount: "",
    date: moment(),
    info: ""
};

export class Form extends Component {
    state = emptyInputsState;

    getRandWaitTime = () => {
        return (Math.floor(Math.random() * maxWaitSec) + 1) * 1000; 
    }
    
    onClickOnAddIncome = () => {
        this.addEntry("Income", true);
    };

    onClickOnAddSpending = () => {
        this.addEntry("Spending", false);
    };

    addEntry = (name, isIncome) => {
        const time = this.getRandWaitTime();
        console.log(name ,"... wait ", time / 1000, "s");
        setTimeout(() => {
            this.props.dispatch(actionToAddEntry({...this.state, isIncome: isIncome}))
        }, time)
    }

    clearInputs = () => {
        state = emptyInputsState
    }

    handleChange = (date) => {
        this.setState({
          date: date
        });
    }

    render(){
        return(
            
            <table className="table">
            <tbody>
                <tr>
                <th className="left-div3">
                    <input className="btn"
                        type="submit"
                        value = "Add Income"
                        onClick={() => {this.onClickOnAddIncome()}}
                    />
                </th>
    
                <th className="mid-div">        
                    <input className="form__field narrow"
                        type="number"
                        placeholder="Amount"
                        value = {this.state.amount}
                        onChange={event => this.setState({amount: event.target.value})}
                    />
                    <DatePicker className="form__field narrow"
                        selected={this.state.date}
                        onChange={this.handleChange}
                    />
                    <input className="form__field wide"
                        type="text"
                        placeholder="Info"
                        value = {this.state.info}
                        onChange={event => this.setState({info: event.target.value})}
                    />
                </th>

                <th className="right-div">
                    <input className="btn"
                        type="submit"
                        value = "Add Spending"
                        onClick={() => {this.onClickOnAddSpending()}}
                    />
                </th>
                </tr>
            </tbody> 
            </table>
        );
    }
}


const mapStateToProps = state =>  ({
    entries: state.entries
});

export default connect(mapStateToProps)(Form);