import React from 'react'

/*function Great(props) {
    return <h1>Hello {props.name} From Functional Component</h1>
}*/
// Name export
//export const Greet = (props) => <h1>Hello {props.name} From Functional Component</h1>
const Greet = props => {    
    return  <div>
                <h1>Hello {props.name} From Simple Functional Component</h1>
                {props.children}
            </div>
}
// default export, we have to remove export from above line and umcomment bellow line
export default Greet