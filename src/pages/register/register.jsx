import React, { Component } from 'react'

export default class register extends Component {
  render() {
    return (
      <div>
        <form action="http://localhost:8808/register" method="POST">
            userName:<input type="text" name="userName"/>
            passWord:<input type="password" name="passWord"/>
            <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}
