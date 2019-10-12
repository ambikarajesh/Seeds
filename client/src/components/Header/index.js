import React from 'react';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
class Header extends React.Component{
    state = {
        showSidebar:false
    }
    toggleButtonHandler = () => {
        this.setState(state=>({
            showSidebar : !state.showSidebar
        }))
    }
    render(){
        return (
            <header>
                <Toolbar toggleButtonHandler = {this.toggleButtonHandler}/>
                <Sidebar showSidebar = {this.state.showSidebar} toggleButtonHandler = {this.toggleButtonHandler}/>
            </header>
        );
    }
}

export default Header;