import React, { Component } from 'react';
import ToggleButton from './ToggleButton';
import Logo from './Logo';
import Search from './Search';
import Cart from '../../Cart';
import Login from '../../Login';
class Toolbar extends Component {
    render() {
        return (
            <div className="toolbar">
                <div>
                    <ToggleButton toggleButtonHandler = {this.props.toggleButtonHandler}/>
                    <Logo/>
                </div>                
                <Search/>
                <div className='toolbar_profile_container'>
                    <Cart/>
                    <Login/>
                </div>                                
            </div>
        );
    }
}

export default Toolbar;