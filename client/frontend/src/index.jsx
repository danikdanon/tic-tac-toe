import React from 'react';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import { App } from './App';

import ReactDOM from 'react-dom';
import *as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<Provider store={store}><App /></ Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
