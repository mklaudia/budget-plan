import React, {Component} from 'react';
import Entry from './Entry';
import { consolidateStreamedStyles } from 'styled-components';

export default class EntryList extends Component{
    render(){
        console.log("props:", this.props.entries);
        const  {entries}  = this.props ;
        console.log("BBB ", entries );
        return(
            <div>
                {['a', 'b', 'c'].map(x => x.toUpperCase())}
                {console.log(entries.type)}
                {/* {entries.map(x => console.log(x))} */}
                {entries.map(x => x.info.toUpperCase())}
                {/* {entries.map((entry) => {console.log(entry);})} */}
                {entries.map(entry => <Entry key={entry.key} entry={entry}/>)}
            </div>
        );
    }
}