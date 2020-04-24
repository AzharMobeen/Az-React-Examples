import React from 'react';

function ChildComponent(props) {
    console.log(props)
    const {greetParentHandler, greetChildHandler} = props
    return (
        <div>
            <button onClick={greetParentHandler}>Greet Parent</button>
            <button onClick={() => greetChildHandler('Child')}>Greet Child by passing value from child</button>
        </div>
    );
}

export default ChildComponent;