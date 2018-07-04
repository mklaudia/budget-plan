import React, {Component} from 'react';

export default class InfoEntry extends Component{
    state = {
        info: ""
    }
    
    render(){
        return(
            <input
                // type="number"
                placeholder="Info"
                value = {this.state.info}
                onChange={event => this.setState({info: event.target.value})}
            />
        );
    }
}