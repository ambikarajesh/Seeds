import React from 'react';
import CartBtn from '../CartBtn';
import LoginBtn from '../LoginBtn';
import Backdrop from '../../UI/Backdrop';
const Sidebar = (props) => { 
    const assignClasses = props.showSidebar ? ['sidebar', 'show_sidebar'] : ['sidebar', 'hide_sidebar']
    return (
        <React.Fragment>
            <Backdrop showSidebar = {props.showSidebar} toggleButtonHandler = {props.toggleButtonHandler}/>            
            <div className={assignClasses.join(' ')}>            
                <div className='hide_sidebar_button' onClick = {props.toggleButtonHandler}>
                    x
                </div>
                <div className='sidebar_profile_container'>
                    <CartBtn toggleButtonHandler = {props.toggleButtonHandler}/>
                    <LoginBtn toggleButtonHandler = {props.toggleButtonHandler}/>
                </div>           
            </div>
        </React.Fragment>
        
    );    
}

export default Sidebar;