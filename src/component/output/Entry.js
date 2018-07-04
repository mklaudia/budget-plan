import React, {Component} from 'react';
import styled from 'styled-components';
import {formatDate} from '../formatter/DateFormatter'

export default class Entry extends Component{
    render(){
        const entry = this.props.entry;
        return(
            <DifferedEntries isIncome={entry.isIncome}>
                <label>{entry.amount}</label>
                <span> - </span>
                <label>{formatDate(entry.date)}</label>
            </DifferedEntries>
        );
    }
}

const DifferedEntries = styled.section`
    color: ${props => props.isIncome ? 'green' : 'red'}
`;