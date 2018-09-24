import React, { Component } from 'react';
import {Router} from 'react-router-dom'
import RouterMap from './routerMap'
import history from '../untils/history'
import Head from '../components/head'

export default class App extends Component {
  constructor(){
    super();
    this.state={
        isRouter:false
    }
  }
  componentDidMount(){
   
  }

  render() {
    return (
      <Router history={history}> 
        <div className="main">
            <Head history={history}/>
            <RouterMap/>
        </div>
      </Router>
    );
  }
}
