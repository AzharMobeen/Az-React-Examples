import React,{ useState } from 'react';
import {buyCake} from '../redux'
import {connect} from 'react-redux'
function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h2>Number of cakes: {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    );
}
// Here component props will have an other proper and set from Redux-Store
const mapStateToProps = (state) => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
// Here component props will have 2nd additional props property from Redux dispatch for dispatching 
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake: (number) => dispatch(buyCake(number))    
    }    
}
export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer);