import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class Entry extends Component{
    render(){
        {console.log(this.props)}
        const entry = this.props.entry;
        return(
            <DifferedEntries isIncome={entry.isIncome}>
                <label>{entry.amount}</label>
                <span> - </span>
                <label>{entry.date.toString()}</label>
                <span> - </span>
                <label>{entry.info}</label>
            </DifferedEntries>
        );
    }
}

const DifferedEntries = styled.section`
    color: ${props => props.isIncome ? 'green' : 'red'}
`;

Entry.defaultProps = {
    entry:{
        isIncome: true,
        amount: 23432456356,
        key: new Date(),
        info: "No text",
        date: moment()
    }
}

Entry.propTypes = {
    entry: PropTypes.shape({
        isIncome: PropTypes.bool,
        key: PropTypes.string,
        info: PropTypes.string,
        date: PropTypes.object
    })
}