import React from 'react';
import {Button} from 'antd'
import {createStore} from 'redux'
import counter from '../../reducer/index'

const store =createStore(counter)
export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pathname: '/',
			style: 'none',
			show: true
		}
	}
	handleChange = () => {
		this.setState({
			show: !this.state.show
		})
	}
	render() {
		return (
			<div className="home">
				<div className="mask">
					<div className="boxwrapper" onClick={this.handleChange}>
						<Button onClick={this.inc=()=>{store.dispatch({type:'INCREMENT'})}}>+</Button>
						<Button onClick={this.dec=()=>{store.dispatch({type:'DECREMENT'})}}>-</Button>
						<p>{store.getState()}</p>
					</div>
				</div>
				<div className="des">
					<h1>The Infinity Imagination</h1>
				</div>
		    </div>
		);
	}
}