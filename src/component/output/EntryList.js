import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Entry from './Entry';

export default class EntryList extends Component{
    render(){
        const  {entries}  = this.props ;
        
        const getAllEntries = () => {
            return entries;
        }

        return(
            <div>
                <Router>
                    <div>
                    <Route exact path="/" render={props => {
                            console.log(props)
                            return(
                            <div>Hello You

                                 {entries.map(entry => <Entry key={entry.key} entry={entry}/>)}
                            </div>);
                            // {entries.map(entry => <Entry key={entry.key} entry={entry}/>)}
                        }} 
                    />

                    </div>
				</Router>
                {/* {entries.map(entry => <Entry key={entry.key} entry={entry}/>)} */}
            </div>
        );
    }
}