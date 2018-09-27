import React from 'react';

export default class Blog extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="journal">
				<h1>Journal</h1>
				<div className='journalTitle'>
					日志标题
				</div>
				<div className='journalContent'>
					日志内容
				</div>
				<div className='journalDescription'>
					日志描述
				</div>
			</div>
		);
	}
}
