import React, { Component } from 'react';

class TernanyConditionalOperatorRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false
        }
    }
    
    render() {
        let message = this.state.isLoggedIn ? "Welcome Azhar" : "Welcome Guest"
        return <div>{message}</div>
    }
}

export default TernanyConditionalOperatorRendering;