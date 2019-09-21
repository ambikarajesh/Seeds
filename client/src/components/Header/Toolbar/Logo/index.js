import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
const Logo = () => {
    return (
        <div className="logo">
          <Link to='/'><FontAwesomeIcon icon={faSeedling} style = {{color:'#55A663'}} size="2x" /><span>Seeds</span></Link>
        </div>
    );
};

export default Logo;