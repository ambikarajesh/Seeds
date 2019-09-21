import React from 'react';
import Cart from '../../Cart';
import Login from '../../Login';
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
                    <Cart/>
                    <Login/>
                </div>           
            </div>
        </React.Fragment>
        
    );    
}

export default Sidebar;