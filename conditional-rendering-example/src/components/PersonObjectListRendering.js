import React from 'react';
import Person from './Person';

function PersonObjectListRendering(props) {
    const personList = [
        {
            id: 1,
            name: "Azhar",
            age : 32,
            skill: "SSE"
        },
        {
            id: 2,
            name: "Adeel",
            age : 32,
            skill: "Financial Advisor"
        },
        {
            id: 3,
            name: "Wasif",
            age : 30,
            skill: "Vaila"
        },
        {
            id: 4,
            name: "Adil",
            age : 31,
            skill: "Accountant"
        }
    ]
    const personDetail = personList.map(person => <Person key={person.id} person={person}/>) 
    return (
            <div>
                {personDetail}
            </div>
    );
}

export default PersonObjectListRendering;