import React, { Component } from 'react';

class EventBinding extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            message : "this is first message"
        }
        
        /* this.clickHandler = this.clickHandler.bind(this); */
    }
    
    clickHandler() {
        this.setState({
            message: "this is second message"
        })
    }

    /* 4th approch for event binding */
    
    clickHandler = () => {
        this.setState ({
            message: "this is second message"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>EventBinding</button> */}
                {/* <button onClick={() => this.clickHandler()}>EventBinding</button> */}
                <button onClick={this.clickHandler}>EventBinding</button>
            </div>
        );
    }
}

export default EventBinding;