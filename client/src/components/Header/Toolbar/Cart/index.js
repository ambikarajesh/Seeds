import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Cart = () => {
    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart} style = {{color:'green'}} size="2x" /> Cart
        </div>
    );
};

export default Cart;