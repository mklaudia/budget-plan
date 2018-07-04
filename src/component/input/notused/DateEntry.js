import React, {Component} from 'react';

export default class DateEntry extends Component{
    state = {
        date: new Date()
    };

    render(){
        return (
            <input
                // type="number"
                placeholder="Date"
                value = {this.state.date}
                onChange={event => this.setState({date: event.target.value})}
            />
        );
    };
}