import React from 'react';

const Backdrop = (props) => {
    return (
       props.showSidebar ? <div className='backdrop' onClick={props.toggleButtonHandler}></div> : null 
    );
};

export default Backdrop;