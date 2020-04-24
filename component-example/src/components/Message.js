import React, {Component} from 'react';

class Message extends React.Component {
    constructor() {
        super()
        this.state = {
            msg: 'This is my messages'
        }
    }
    /* First approch 
    changeMessage() {
        this.setState ({
            msg: 'Thank you for change my messages'
        })
    } */
    changeMessage = () => {
        this.setState ({
            msg: 'Thank you for change my messages'
        })
    }
    render () {
        return (
            <div>
                <h1>{this.state.msg}</h1>
                {/* For first approch 
                <button onClick={() => this.changeMessage()}>Change above messages</button> */}
                 <button onClick={this.changeMessage}>Change above messages</button>
            </div>
        )
    }
}

export default Message;