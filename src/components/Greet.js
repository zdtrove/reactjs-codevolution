import React from 'react'

// function Greet() {
//     return <h1>Hello there</h1>
// }

const Greet = props => {
    return <h1>Hello {props.name} - {props.children}</h1>
}

export default Greet