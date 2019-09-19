import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
const Logo = () => {
    return (
        <div>
           <FontAwesomeIcon icon={faSeedling} style = {{color:'green'}} size="2x" /> Seeds
        </div>
    );
};

export default Logo;