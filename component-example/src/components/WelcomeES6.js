import React, {Component} from 'react';

class WelcomeES6 extends React.Component {
// We can destructure only the one which we need to use.
    constructor(params) {
        super()
        this.state = {
            msg: 'state'
        }
    }
    render () {
        const {name} = this.props
        const {msg} = this.state
    return <h1>Destructuring in class component for {name} and {msg}</h1>
    }
}

export default WelcomeES6;