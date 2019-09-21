import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
const LoginBtn = (props) => {
    return (
        <div className='login_btn' onClick = {props.toggleButtonHandler}>            
            <Link to="/login" >
                <FontAwesomeIcon icon={faUser} size="1x" style = {{color:'#666'}}/> Login
            </Link>
        </div>
    );
};

export default LoginBtn;