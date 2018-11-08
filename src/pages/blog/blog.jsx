import React from 'react';
import {Icon} from 'antd';
import './blog.less';
export default class Blog extends React.Component {
    render() {
        return (
            <div className="blog">
                <div className="userInfo">
                    <div className="avator">
                        <Icon style={{fontSize: 40}} type='user' className='' ></Icon>
                    </div>
                    <div className="userData">
                        <div className="fans">
                            <p>粉丝</p>
                            <p>12</p>
                        </div>
                        <div className="star">
                            <p>关注</p>
                            <p>12</p>
                        </div>
                        <div className="like">
                            <p>喜欢</p>
                            <p>12</p>
                        </div>
                    </div>
                </div>
                <div className='blogWrapper'>
                    <div className="title">标题</div>
                    <div className="title">描述</div>
                    <div className="title">描述</div>
                    <div className="title">描述</div>
                </div>
            </div>
        );
    }
}

