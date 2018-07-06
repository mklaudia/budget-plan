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

    getTotal = (entries) => {
        let total = 0;
        if(Array.isArray(entries) && entries.length>0){
            total = entries.reduce((a, b) => {
                const m = b.isIncome ? 1 : -1;
                return +a + ( m * +b.amount );
            }, 0
            );
        }
        return total;
    }

    render(){
        return(
            <Router>
            <div>
              
                 
                        <Route exact path="/incomes" render={props => (
                                <div>These are all your incomes! :)</div>
                            )}
                        />
                 <table>
                     <tbody>
                        <Route exact path="/" render={props => 
                                this.getFilteredEntries(ALL, this.props.entries).map( 
                                    entry => <Entry key={entry.key} entry={entry}/> 
                                )
                            }
                        />

                        <Route exact path="/incomes" render={props => 
                                this.getFilteredEntries(INCOMES, this.props.entries).map( 
                                    entry => <Entry key={entry.key} entry={entry}/> 
                                )
                            }
                        />

                        <Route exact path="/spendings" render={props => 
                                this.getFilteredEntries(SPENDINGS, this.props.entries).map( 
                                    entry => <Entry key={entry.key} entry={entry}/> 
                                )
                            }
                        />
                    </tbody>
                    </table> 
			
                    <div>
                        The total is: {this.getTotal(this.props.entries)}
                    </div>
            </div>
            </Router>
        );
    }
}