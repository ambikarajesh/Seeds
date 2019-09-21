import React from 'react';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartBtn = (props) => {
    return (
        <div className='cart_btn' onClick = {props.toggleButtonHandler}>            
            <Link to = '/cart'> 
                <FontAwesomeIcon icon={faShoppingCart} size="1x" style = {{color:'#666'}}/> Cart
            </Link>
        </div>
    );
};

export default CartBtn;