import React from 'react';
const ToggleButton = (props) => {
    return (
        <div className="toggle_button" onClick = {props.toggleButtonHandler}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default ToggleButton;