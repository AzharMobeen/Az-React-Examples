import React from 'react';

function FunctionClick(props) {

    function clickHandler() {
        console.log("clickHandler called from functional component")
    }

    return (
        <div>
            <button onClick={clickHandler}>Click Me From functional Component</button>
        </div>
    );
}

export default FunctionClick;