import React from 'react';

function NameListRendering(props) {
    const nameArray = ["Azhar", "Adeel", "Wasif", "Adil"]
    //const message = nameArray.map(name => <h4 key={name}>{name}</h4>)
    // In this way we can use index for rendering above code also fine but failed duplicate name
    const message = nameArray.map((name, index) => <h4 key={index}>{name}</h4>)
    return (
        <div>
            {
                message
            }
        </div>
    );
}

export default NameListRendering;