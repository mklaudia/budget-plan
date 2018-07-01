import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import Header from './header/Header';
// import Input from './inputs/Input';

class App extends Component {
	state = {
		value: 'sg'
	}

    render () {
        return (
        <div>
            {/* <Header /> */}
            <h1>Hello React</h1>
            {this.state.value}
            {/* <Input /> */}
        </div>);
    };
}

export default App;