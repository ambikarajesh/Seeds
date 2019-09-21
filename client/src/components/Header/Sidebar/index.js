import React from 'react';
import Cart from '../../Cart';
import Login from '../../Login';
const Sidebar = (props) => { 
    const assignClasses = props.showSidebar ? ['sidebar', 'show_sidebar'] : ['sidebar', 'hide_sidebar']
    return (
        <div className={assignClasses.join(' ')}>
            <div className='hide_sidebar_button' onClick = {props.toggleButtonHandler}>
                x
            </div>
            <div className='sidebar_profile_container'>
                <Cart/>
                <Login/>
            </div>           
        </div>
    );    
}

export default Sidebar;