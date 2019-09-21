import React from 'react';
import Toolbar from './Toolbar';
import Sidebar from './Sidebar';
class Header extends React.Component{
    state = {
        showSidebar:false
    }
    toggleButtonHandler = () => {
        console.log('click')
        this.setState(state=>({
            showSidebar : !state.showSidebar
        }))
    }
    render(){
        return (
            <React.Fragment>
                <Toolbar toggleButtonHandler = {this.toggleButtonHandler}/>
                <Sidebar showSidebar = {this.state.showSidebar} toggleButtonHandler = {this.toggleButtonHandler}/>
            </React.Fragment>
        );
    }
}

export default Header;