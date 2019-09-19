import React, { Component } from 'react';
import ToggleButton from './ToggleButton';
import Logo from './Logo';
import Search from './Search';
import Cart from './Cart';
import Login from './Login';
import Logout from './Logout';
class Toolbar extends Component {
    render() {
        return (
            <div className="Toolbar">
                <ToggleButton/>
                <Logo/>
                <Search/>
                <Cart/>
                <Login/>
                <Logout/>                
            </div>
        );
    }
}

export default Toolbar;