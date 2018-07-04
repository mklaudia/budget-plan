import React, {Component} from 'react';

import {actionToAddEntry, actionToEditEntry} from '../../action/entryActions';
import {connect} from "react-redux";

export class Form extends Component {
    state = {
        amount: "",
        date: new Date(),
        info: ""
    };

    onClickOnAddIncome = (event) => {
        console.log("Income", event);
        this.props.dispatch(actionToAddEntry(this.state));
		// if (event.key === 'Enter') {
            // this.setState({ total: parseInt(this.state.total) + parseInt(this.state.amount)});
            // this.props.processAmount(parseInt(this.state.amount));
            // this.setState({amount: ""});
        
		// }
    };

    onClickOnAddSpending = (event) => {
        console.log("Spending", event);
		// if (event.key === 'Enter') {
            // this.setState({ total: parseInt(this.state.total) + parseInt(this.state.amount)});
            // this.props.processAmount(parseInt(this.state.amount));
            // this.setState({amount: ""});
        
		// }
    };

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
                    // type="number"
                    placeholder="Date"
                    value = {this.state.date}
                    onChange={event => this.setState({date: event.target.value})}
                />
                <input
                    // type="number"
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