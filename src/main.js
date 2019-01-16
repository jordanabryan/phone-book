import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers/rootReducer';

import App from './components/App';

import './scss/styles.scss';

const rootEl = document.getElementById('root');
const store = applyMiddleware(reduxThunk)(createStore)(rootReducer);

ReactDom.render(
	<Provider store={store}>
		<App />
	</Provider>, rootEl);