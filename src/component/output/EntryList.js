import React, {Component} from 'react';
import Entry from './Entry';
import { consolidateStreamedStyles } from 'styled-components';

export default class EntryList extends Component{
    render(){
        const { entries } = this.props;
        return(
            <div>
                {entries.map(entry => <Entry key={entry.key} entry={entry}/>)}
            </div>
        );
    }
}