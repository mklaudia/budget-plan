import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import uuid from 'uuid';
import {connect} from "react-redux";
import moment from 'moment';

import Header from './header/Header';
import Form from './input/Form';
import EntryList from './output/EntryList';

import {actionToInitEntries, actionToAddEntry, actionToEditEntry} from '../action/entryActions';
import entryStore from '../store/entryStore';

const createEntry = (isIncome, amount, date, info) => ({
    key: uuid(), isIncome, amount, date, info
});

let today1 = new Date();
const getPastDate1 = (daysBefore) => {
    let date = new Date();
    date.setDate(date.getDate()-daysBefore);
    return date;
}

const getPastDate = (daysBefore) => {
    let date = moment();
    date.subtract(daysBefore);
    return date;
}


let initialEntries = [
    createEntry(true, 234,  getPastDate(2),     "Income 1"),
    createEntry(false, 12,  getPastDate(12),    "Spending 1"),
    createEntry(true, 24,   getPastDate(6),     "Income 2"),
    createEntry(true, 72,   getPastDate(0),     "Income 3"),
    createEntry(false, 2,    getPastDate(5),     "Spending 2"),
    createEntry(false, 31,   getPastDate(4),     "Spending 3"),
    createEntry(false, 122,  getPastDate(2),     "Spending 4"),
    {key: uuid(), isIncome: true,  date: getPastDate(5)},
]

class App extends Component {
    // state = {
    //     entries: initialEntries,
    //     grandTotal : 0
    // }

    componentWillMount(){
        console.log("will mount");
        this.props.dispatch(actionToInitEntries(initialEntries));

        // this.setState({grandTotal: this.getGrandTotal()});
    }

    
    // getGrandTotal = () => {
    //     let total = 0;
    //     this.state.entries.forEach(element => {
    //         let multiplier = element.isIncome ? 1 : -1;
    //         total += multiplier * element.amount;
    //     });
    //     return total;
    // }

    render () {
        return (
        <div>
            <Header />
            <Form />
            <EntryList entries={this.props.entries}/>
        </div>);
    };
}

const mapStateToProps = state =>  ({
    entries: entryStore.getState()
});

export default connect(mapStateToProps)(App);