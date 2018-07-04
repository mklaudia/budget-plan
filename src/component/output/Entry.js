import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import {connect} from "react-redux";

import {actionToEditEntry, actionToDeleteEntry} from '../../action/entryActions';

const defaultEntry =  {
    isIncome: true,
    amount: 0,
    key: new Date(),
    info: "No text, this is a default valued entry",
    date: moment()
};

class Entry extends Component{
    onDelete = () => {
        console.log("del", this.props);
        this.props.dispatch(actionToDeleteEntry(this.props.entry));
    }

    render(){
        {console.log(this.props)}
        const entry = {...defaultEntry, ...this.props.entry};
        return(
            <DifferedEntries isIncome={entry.isIncome}>
                <label>{entry.amount}</label>
                <span> - </span>
                <label>{entry.date.toString()}</label>
                <span> - </span>
                <label>{entry.info}</label>
                <input 
                    type="submit"
                    value = "X"
                    onClick={() => {this.onDelete()}}
                />
            </DifferedEntries>
        );
    }
}



const DifferedEntries = styled.section`
    color: ${props => props.isIncome ? 'green' : 'red'}
`;

// not working on object for me, only on primitive types, one level
// Entry.defaultProps = {
//     entry:  {
//         isIncome: true,
//         amount: 23432456356,
//         key: new Date(),
//         info: "No text",
//         date: moment()
//     }
// };

Entry.propTypes = {
    entry: PropTypes.shape({
        isIncome: PropTypes.bool,
        amount: PropTypes.number,
        key: PropTypes.string,
        info: PropTypes.string,
        date: PropTypes.object
    })
}

const mapStateToProps = state =>  ({
    entries: state.entries
});

export default connect(mapStateToProps)(Entry);