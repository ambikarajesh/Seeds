import React from 'react';

const Sidebar = (props) => { 
    const assignClasses = props.showSidebar ? ['sidebar', 'showSidebar'] : ['sidebar', 'hideSidebar']
    return (
        <div className={assignClasses.join(' ')}> 
            
        </div>
    );    
}

export default Sidebar;