import React from 'react';

function Person(props) {
    const {person} = props
    return (
        <div>
            <h4> I'm {person.name} and have skill {person.skill}</h4>
        </div>
    );
}

export default Person;