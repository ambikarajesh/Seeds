import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
class LoginBtn extends React.Component {
    render(){
        return (
            <div className='login_btn' onClick = {this.props.toggleButtonHandler}>            
                <FontAwesomeIcon icon={faUser} size="1x" style = {{color:'#666'}}/> 
                {!this.props.isAuthenticated ? <Link to="/login" >
                    Login
                </Link> :
                <Link to="/logout" >
                    Logout
                </Link>}
            </div>
        )
    }
};
const mapStateToProps = state => {
    return{
        isAuthenticated : state.userReducer.token !== null
    }
}
export default connect(mapStateToProps)(LoginBtn);