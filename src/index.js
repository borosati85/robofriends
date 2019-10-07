import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { searchRobots } from './reducers.js';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'tachyons';

const store = createStore(searchRobots);

ReactDOM.render(<Provider store={store} >
					<App/>
				</Provider>,document.getElementById('root'));

serviceWorker.unregister();
