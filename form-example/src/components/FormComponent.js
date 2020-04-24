import React, { Component } from 'react';

class FormComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName : '',
            comments: '',
            topic: ''
        }
    }
    handleUserName = (event) => {
        this.setState({
            userName: event.target.value
        })
    }
    handleComments = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }
    handleFormSubmit = (event) => {
        alert(`username: ${this.state.userName}, comments: ${this.state.comments}, topic: ${this.state.topic}`)
        event.preventDefault()
    }
    render() {
        const {userName, comments, topic} = this.state
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                    <label>User Name:</label>        
                    <input type="text" value={userName} onChange={this.handleUserName}/>
                </div>

                <div>
                    <label>Comments:</label>        
                    <textarea type="text" value={comments} onChange={this.handleComments}/>
                </div>

                <div>
                    <label>Topic:</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>            
                    </select>                    
                </div>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default FormComponent;