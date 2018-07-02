import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './component/App';
import entryStore from './store/entryStore';

const node = document.createElement('div');
document.body.appendChild(node);

ReactDOM.render(<Provider store={entryStore}><App/></Provider>, node);