import React from 'react';
import { Router, Route, Link } from 'react-router-dom';

export default class Project extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidMount(){
		  
	}
	render() {
		return (
			<div className="project">
				<h1>Project</h1>
				<div className="container">
					<div className="row">
						{/*
						<div className="col-md-1 col-md-offset-1">
							<button type="button" className="btn btn-default">（默认样式）Default</button>
						</div>
						<div className="col-md-1 col-md-offset-1">
							<button type="button" className="btn btn-primary">（首选项）Primary</button>
						</div>
						<div className="col-md-1 col-md-offset-1">
							<button type="button" className="btn btn-success">（成功）Success</button>
						</div>
						<div className="col-md-1 col-md-offset-1">
							<button type="button" className="btn btn-info">（一般信息）Info</button>
						</div>
						<div className="col-md-1 col-md-offset-1">
							<button type="button" className="btn btn-warning">（警告）Warning</button>
						</div>
						<div className="col-md-1 col-md-offset-1">
							<button type="button" className="btn btn-danger">（危险）Danger</button>
						</div>
						*/}

						<div className="col-md-6">
							<button type="button" className="btn btn-default">（默认样式）Default</button>
						</div>
						<div className="col-md-3 col-md-offset-3">
							<button type="button" className="btn btn-primary">（首选项）Primary</button>
						</div>
						<div className="col-md-3 col-md-offset-3">
							<button type="button" className="btn btn-primary">（首选项）Primary</button>
						</div>
					</div>
				</div>
			</div>

		);
	}
}
