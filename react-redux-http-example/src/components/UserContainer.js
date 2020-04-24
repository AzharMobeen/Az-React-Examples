import React, {useEffect} from 'react';
import {fetchUsers} from '../redux'
import {connect} from 'react-redux'

function UserContainer({userData, fetchUsers}) {
    //const  = props;
    useEffect(() => {
        fetchUsers();
    }, [])
    return userData.loading ? 
        (<h2>Loading Data</h2>): 
            userData.error ? 
            (<div>{userData.error}</div>) :
            (
                <div>
                    <h2>User List:</h2>
                    {
                        userData && userData.users && userData.users.map(user => <p>{user.name}</p>)
                    }
                </div>
            );
}
// Here component props will have an other proper and set from Redux-Store
const mapStateToProps = (state) => {
    return {
        userData: state.user
    }
}
// Here component props will have 2nd additional props property from Redux dispatch for dispatching 
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())    
    }    
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer);
