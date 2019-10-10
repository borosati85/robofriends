import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers.js';
import thunkMiddleware from 'redux-thunk';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'tachyons';

const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(<Provider store={store} >
					<App/>
				</Provider>,document.getElementById('root'));

serviceWorker.unregister();
