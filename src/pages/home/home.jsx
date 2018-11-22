import React, {Component} from 'react';
import axios from 'axios';
import './home.less';


export default class demo extends Component {
    constructor(props) {
        super(props)
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
            <div className='home'>
                <h1 className='title'>Create</h1>
                <h1 className='title'>Create</h1>
                <h1 className='title'>Create</h1>
            </div>
        )
    }
}