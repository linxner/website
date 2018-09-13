import React from 'react';
import {
	Router,
	Route,
	Link
} from 'react-router-dom';
import $ from 'jquery'

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pathname: '/',
			style: 'none',
			show: true
		}
	}
	componentDidMount() {}
	componentWillUpdate(nextProps, nextState) {
		if (this.state.pathname !== nextProps.location.pathname) {
			$('.box').stop(true, true).hide()
		} else {
			$('.box').fadeIn(2000)
		}
	}
	handleChange = () => {
		var show = this.state.show
		if (show) {
			$('.box2').stop(true,true)
			$('.box1').fadeOut(300, function() {
				$('.box2').fadeIn(300)
			})
		} else {
			$('.box1').stop(true,true)
			$('.box2').fadeOut(300, function() {
					$('.box1').fadeIn(300)
			})
		}
		this.setState({
			show: !this.state.show
		})
	}
	render() {
		var boxWrapper = {
			width: 400,
			height: 400,
			position: 'absolute',
			top: 100,
			left: 100
		}
		var boxStyle1 = {
			width: 200,
			height: 200,
			backgroundColor: 'red',
			position: 'absolute',
			top: 0,
			display: 'none'
		}
		var boxStyle2 = {
			width: 200,
			height: 200,
			backgroundColor: 'green',
			position: 'absolute',
			top: 0,
			left: 200,
			display: 'none'
		}
		return (
			<div className="home">
		          	<div className="mask">
			          	<div className="boxwrapper" style={boxWrapper} onClick={this.handleChange}>
							<div className="box1" style={boxStyle1}>
								div.
							</div>
			          		<div className="box2" style={boxStyle2}></div>
			          	</div>
		          	</div>
		          	 <div className="des">
                  <h1>The Infinity Imagination</h1>
              </div>
		        </div>
		);
	}
}