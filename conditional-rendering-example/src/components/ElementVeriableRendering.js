import React, { Component } from 'react';

class ElementVeriableRendering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false
        }
    }
    
    render() {
        let message
        if(this.state.isLoggedIn) {
            message = "Welcome Azhar"             
        } else {
            message = "Welcome Guest"                
        }   
    return <div>{message}</div>
    }
}

export default ElementVeriableRendering;