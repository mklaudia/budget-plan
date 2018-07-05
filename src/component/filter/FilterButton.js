import React, {Component} from "react";


export default class FilterButton extends Component{

    render(){
        let p = this.props;
        return <a className={p.className} href={p.href}>{p.value}</a>;
    }
}