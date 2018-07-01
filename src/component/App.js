import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header';
import Input from './inputs/Input';
import uuid from 'uuid';

const createEntry = (isIncome, amount, date, label) => ({
    uuid: uuid(), isIncome, amount, date, label
});

let today = new Date();
let initialEntries = [
    createEntry(true, 234, (today.setDate( today.getDate -10 )).toString(), "Income 1"),
    createEntry(true, 24, (today.setDate( today.getDate -6 )).toString(), "Income 2"),
    createEntry(true, 72, (today.setDate( today.getDate -2 )).toString(), "Income 3"),
    createEntry(true, 12, (today.setDate( today.getDate -12 )).toString(), "Spending 1"),
    createEntry(true, 2, (today.setDate( today.getDate -5 )).toString(), "Spending 2"),
    createEntry(true, 31, (today.setDate( today.getDate -4 )).toString(), "Spending 3"),
    createEntry(true, 122, (today.setDate( today.getDate -2 )).toString(), "Spending 4"),
]

export default class App extends Component {
    state = {
        entries: initialEntries,
        grandTotal : 0
    }

    componentDidMount(){
        this.setState({grandTotal: this.getGrandTotal()});
    }
    
    getGrandTotal = () => {
        let total = 0;
        this.state.entries.forEach(element => {
            let multiplier = element.isIncome ? 1 : -1;
            total += multiplier * element.amount;
        });
        return total;
    }

    render () {
        return (
        <div>
            <Header />
            <Input />
        </div>);
    };
}