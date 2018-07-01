import React, {Component} from 'react';

export default class Entry extends Component{

    state = {
        amount: ""
    ,   total: 0
    };

    onKeyDown = event => {
		if (event.key === 'Enter') {
            this.setState({ total: parseInt(this.state.total) + parseInt(this.state.amount)});
            this.props.processAmount(parseInt(this.state.amount));
            this.setState({amount: ""});
		}
    };

    render(){
        return(
            <div>
                <input
                    type="number"
                    placeholder={this.props.name}
                    value = {this.state.amount}
                    onKeyDown={this.onKeyDown}
                    onChange={event => this.setState({amount: event.target.value})}
                    />
                <div>
                    The total so far is:
                    <label>{this.state.total}</label>
                </div>
            </div>
        );
    }
}