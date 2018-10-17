import React, { Component } from 'react';


function Example1() {
    return (
        <div className='hover-underline-animation'>Hover this text to see the effect!</div>
    )
}
function Example2() {
    return (
        <div className="donut"></div>
    )
}
function Example3() {
    return (
        <ul className="css-not-selector-shortcut">
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
            <li>Four</li>
        </ul>
    )
}
const Example = [<Example1 />, <Example2 />, <Example3 />]

export default Example