import React, { Component } from 'react';
import axios from 'axios'


export default class demo extends Component {
    constructor() {
        super()
        this.state = {
            getDataFromBase: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:8080').then((res) => {
            this.setState({
                getDataFromBase: res.data
			})
			console.log(res)
        })
    }
    render() {
        return (
            <div>
                <span>{this.state.getDataFromBase}</span>
            </div>
        )
    }
}