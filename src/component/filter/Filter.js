import React, {Component} from 'react';

import FilterButton from './FilterButton';

export default class Filter extends Component{
    render(){
        return(
            <ul className="filters">
                <li>
                    <FilterButton filterName="all" className="none-filter button" value="All" href="/" />                           
                </li>
                <li>
                    <FilterButton filterName="income" className="income-filter button" value="Incomes" href="/incomes" /> 
                </li>
                <li>
                    <FilterButton filterName="spending" className="spending-filter button" value="Spendings" href="/spendings" /> 
                </li>
            </ul>
        );
    };
}