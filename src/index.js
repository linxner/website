import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';

// import {browserHistory , Router,Route} from 'react-router-dom'
// import createBrowserHistory from 'history/createBrowserHistory'
import './assets/css/layout.less'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/normalize.css'


// const newHistory = createBrowserHistory();
ReactDOM.render(
	<Router>
		<Route path="/" component={App}></Route>
	</Router>
, document.getElementById('root'));
