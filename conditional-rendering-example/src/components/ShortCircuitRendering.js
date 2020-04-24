import React, { Component } from 'react';

class ShortCircuitRendering extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : true
        }
    }
    
    render() {
        let message = this.state.isLoggedIn && "Welcome Azhar"
        return <div>{message}</div>
    }
}

export default ShortCircuitRendering;