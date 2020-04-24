import React, { Component } from 'react';

class ClassEventClick extends Component {

    clickHandler() {
        console.log("clickHandler called from class component")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me Class Component</button>
            </div>
        );
    }
}

export default ClassEventClick;