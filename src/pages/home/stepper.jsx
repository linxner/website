import React, { Component } from 'react';
import Stepper from './stepper'
import {Steps,Progress} from 'antd'
const Step = Steps.Step;
export default class Stepper extends Component {
    state={
        current:this.props.current
    }
    static defaultProps={
        current:1
    }
    handleClick=()=>{
        this.setState({
            current:this.state.current+1
        })
    }
  render() {
      const {current}=this.state;
    return (
      <div >
         	<Stepper>
				<Progress type='circle' percent={current}/>
          <Steps onClick={this.handleClick} current={current-1}>
            <Step title='first'/>
            <Step title='second'/>
            <Step title='third'/>
          </Steps>
				</Stepper>
      </div>
    )
  }
}
