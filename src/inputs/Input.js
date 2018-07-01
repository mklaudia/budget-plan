import React from 'react';
import Entry from './Entry';

class Input extends React.Component {

    state = {
        income: 0,
        spending: 0,
        grandTotal: 0
    }

    addIncome = (amount) => {
        let newValue = this.state.income + parseInt(amount);
        this.setState({ 
            income: newValue,
            grandTotal: newValue - this.state.spending
         });
    }

    addSpending = (amount) => {
        let newValue = this.state.spending + parseInt(amount)
        this.setState({ 
            spending: parseInt(this.state.spending) + parseInt(amount),
            grandTotal: this.state.income - newValue
        });
    }

    render(){
        return(
            <div>
                <Entry name="Income" processAmount={this.addIncome}/>
                <Entry name="Spending" processAmount={this.addSpending}/>
                {/* <input type="submit" value="Submit" /> */}
                <div>
                    You have:
                    <label>{this.state.grandTotal}</label>
                </div>
            </div>
        );
    }
}

export default Input;