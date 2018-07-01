import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

const node = document.createElement('div');
document.body.appendChild(node);

ReactDOM.render(<App/>, node);