import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
const Logo = () => {
    return (
        <div className="Logo">
           <FontAwesomeIcon icon={faSeedling} style = {{color:'#55A663'}} size="2x" /><span>Seeds</span>
        </div>
    );
};

export default Logo;