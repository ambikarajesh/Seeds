import React from 'react';
import Toolbar from '../Toolbar';
import Sidebar from '../Sidebar';
const Header = () => {
    return (
        <React.Fragment>
            <Toolbar/>
            <Sidebar/>
        </React.Fragment>
    );
};

export default Header;