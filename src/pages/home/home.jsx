import React, { Component } from 'react';
import axios from 'axios'


export default class demo extends Component {
    constructor() {
        super()
        this.state = {
            getDataFromBase: ''
        }
        this.user = {
            phone: '',
            userName: '',
            passWord: ''
        }
    }
    componentDidMount() {
        axios.get('/').then((res) => {
            this.setState({
                getDataFromBase: res.data
			})
			console.log(res);
        })
    }
    render() {
        return (
            <div>
                <span>{this.state.getDataFromBase}</span>
                <div className='login'>
                    手机号：<input type="text" onChange={(e) => { this.user.phone = e.target.value }} />
                    账号：<input type="text" onChange={(e) => { this.user.userName = e.target.value }} />
                    密码：<input type="password" onChange={(e) => { this.user.passWord = e.target.value }} />
                    <button onClick={this.login}>登录</button>

                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}