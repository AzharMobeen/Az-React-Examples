import React from 'react'

// We can destructure only the one which we need to use.

// Destructuring in ES6
/* const GreetES6 = props => {
    const {name, email} = props   
    return <h1>Hello {name}, {email} From Functional Component</h1>
} */

// 2nd way of Destructuring
const GreetES6 = ({name, email}) => {
    
    return <h1>Hello {name}, {email} From Functional Component</h1>
}

// default export, we have to remove export from above line and umcomment bellow line
export default GreetES6