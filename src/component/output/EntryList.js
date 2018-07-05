import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Entry from './Entry';

const ALL = "ALL";
const INCOMES = "INCOMES";
const SPENDINGS = "SPENDINGS";
// const {ALL, INCOMES, SPENDINGS} = {"ALL", "INCOMES", "SPENDINGS"};

export default class EntryList extends Component{
    getFilteredEntries = (filter, entries) => {
        switch(filter){
            case ALL: return entries;
            case INCOMES: return entries.filter((entry) => (entry.isIncome));
            case SPENDINGS: return entries.filter((entry) => (!entry.isIncome));
            default: return entries;
        }
    }


    render(){
        const  {entries}  = this.props ;

        return(
            <div>
                <Router>
                    <div>
                        <Route exact path="/incomes" render={props => (
                                <div>These are all your incomes! :)</div>
                            )}
                        />

                        <Route exact path="/" render={props => 
                                this.getFilteredEntries(ALL, entries).map( 
                                    entry => <Entry key={entry.key} entry={entry}/> 
                                )
                            }
                        />

                        <Route exact path="/incomes" render={props => 
                                this.getFilteredEntries(INCOMES, entries).map( 
                                    entry => <Entry key={entry.key} entry={entry}/> 
                                )
                            }
                        />

                        <Route exact path="/spendings" render={props => 
                                this.getFilteredEntries(SPENDINGS, entries).map( 
                                    entry => <Entry key={entry.key} entry={entry}/> 
                                )
                            }
                        />
                    </div>
				</Router>
                {/* {entries.map(entry => <Entry key={entry.key} entry={entry}/>)} */}
            </div>
        );
    }
}