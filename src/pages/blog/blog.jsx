import React from 'react';

export default class Blog extends React.Component {
	render() {
		return (
			<div className="blog">
				<h1>Blog</h1>
				<div className='blogWrapper'>
					<div className='title'>
						微博标题
					</div>
					<div className='description'>
						内容描述
					</div>
					<div className='content'>
						我的博客内容
					</div>
					<div className='content'>
						我的博客内容
					</div>
				</div>
			</div>
		);
	}
}

