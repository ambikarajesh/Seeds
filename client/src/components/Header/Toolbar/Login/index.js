import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
const Login = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faUser} style = {{color:'green'}} size="2x" /> Login
        </div>
    );
};

export default Login;