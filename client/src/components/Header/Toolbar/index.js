import React, { Component } from 'react';
import ToggleButton from './ToggleButton';
import Logo from './Logo';
import Search from './Search';
import CartBtn from '../CartBtn';
import LoginBtn from '../LoginBtn';
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
                    <CartBtn toggleButtonHandler = {this.props.toggleButtonHandler}/>
                    <LoginBtn toggleButtonHandler = {this.props.toggleButtonHandler}/>
                </div>                                
            </div>
        );
    }
}

export default Toolbar;