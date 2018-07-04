import React, {Component} from 'react';

export default class AmountEntry extends Component{

    state = {
        amount: "",
    };

    render(){
        return(
            <input
                type="number"
                placeholder="Amount"
                value = {this.state.amount}
                onChange={event => this.setState({amount: event.target.value})}
            />
        );
    };
}