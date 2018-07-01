import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './header/Header';
import Input from './inputs/Input';

class App extends Component {
    

    render () {
        return (
        <div>
            <Header />
            <Input />
        </div>);
    };
}

export default App;