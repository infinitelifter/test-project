import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import reducers from './redux';

ReactDOM.render(<App store={createStore(reducers)} />, document.getElementById('root'));
registerServiceWorker();
    