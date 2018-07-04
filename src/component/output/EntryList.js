import React, {Component} from 'react';
import Entry from './Entry';

export default class EntryList extends Component{
    render(){
        console.log("props:", this.props.entries);
        const  {entries}  = this.props ;
        console.log("BBB ", entries );
        return(
            <div>
                {entries.map(entry => <Entry key={entry.key} entry={entry}/>)}
            </div>
        );
    }
}