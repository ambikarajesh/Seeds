import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Login = () => {
    return (
        <div className='login'>
            <FontAwesomeIcon icon={faUser} size="1x" /> Login
        </div>
    );
};

export default Login;