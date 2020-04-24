import React, {Component} from 'react';

class Welcome extends React.Component {

    render () {
        return ( 
            <div>
                <h1>Hello {this.props.name} From Simple class Component</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome;