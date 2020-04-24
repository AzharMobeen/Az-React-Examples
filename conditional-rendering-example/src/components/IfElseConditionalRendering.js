import React, { Component } from 'react';

class IfElseConditionalRendering extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isLoggedIn : true
        }
    }
    
    render() {
        if(this.state.isLoggedIn) {
            return (                
                    <div>Welcome Azhar</div>                
            );
        } else {
            return (                
                    <div>Welcome Guest</div>                    
            );
        }
        
    }
}

export default IfElseConditionalRendering;