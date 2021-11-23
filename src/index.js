import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import personReducer from './redux/person.reducer';

const store = createStore(personReducer)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root'));
