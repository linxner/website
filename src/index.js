import React from 'react';
import ReactDOM from 'react-dom';
import App from './route/index';

// import {browserHistory , Router,Route} from 'react-router-dom'
// import createBrowserHistory from 'history/createBrowserHistory'
import './assets/css/layout.less'
import './assets/css/normalize.css'


// const newHistory = createBrowserHistory();
ReactDOM.render(
		<App/>
, document.getElementById('root'));
