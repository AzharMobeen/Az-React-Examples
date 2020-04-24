import React, { Component } from 'react';
import axios from 'axios'
class HttpPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }
    onChangeHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    onSubmitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <div>
                        <input type="text" value={userId} name="userId" onChange={this.onChangeHandler}/>
                    </div>
                    <div>
                        <input type="text" value={title} name="title" onChange={this.onChangeHandler}/>
                    </div>
                    <div>
                        <input type="text" value={body} name="body" onChange={this.onChangeHandler}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default HttpPost;