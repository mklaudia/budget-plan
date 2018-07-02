import React, {Component} from 'react';
import styled from 'styled-components';

export default class Entry extends Component{
    render(){
        const entry = this.props.entry;
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return(
            <DifferedEntries isIncome={entry.isIncome}>
                <label>{entry.amount}</label>
                <span> - </span>
                <label>{entry.date.toLocaleDateString("en-US", options)}</label>
            </DifferedEntries>
        );
    }
}

const DifferedEntries = styled.section`
    color: ${props => props.isIncome ? 'green' : 'red'}
`;