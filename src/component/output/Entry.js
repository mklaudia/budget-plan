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
            <tr>
            <DifferedEntries isIncome={entry.isIncome}>
              <td>
                    <input 
                        type="submit"
                        value = "X"
                        onClick={() => {this.onDelete()}}
                    />
                </td>

                <td>{entry.amount}</td>
                
                <td>{entry.date.toString()}</td>
               
                <td>{entry.info}</td>

            </DifferedEntries>
            </tr>
        );
    }
}



const DifferedEntries = styled.section`
    color: ${props => props.isIncome ? 'white' : '#7f8ff4'};
    background-color: rgb(71, 45, 13);
`;
// $input-bg-color: #fff;
// $input-text-color: #a3a3a3;
// $button-bg-color: #7f8ff4;
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