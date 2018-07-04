import React, {Component} from 'react';
import Entry from './Entry';

export default class EntryList extends Component{
    render(){
        const  {entries}  = this.props ;
        return(
            <div>
                {entries.map(entry => <Entry key={entry.key} entry={entry}/>)}
            </div>
        );
    }
}