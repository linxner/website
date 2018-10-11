import React from 'react';

export default class Blog extends React.Component {
	componentDidMount(){
		const ary = (fn, n) => (...args) =>
			// console.log(...args)
			fn(...args.slice(0, n));
		
		const firstTwoMax = ary(Math.max, 2);
		[[2, 6, 'a'], [8, 4, 6], [10]].map(x =>console.log(firstTwoMax(...x)));
	}
	render() {
		return (
			<div className="journal">
				<h1>Journal</h1>
			</div>
		);
	}
}
