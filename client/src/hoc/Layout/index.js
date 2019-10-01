import React, { Component } from 'react';
import Header from '../../components/Header';
// import Footer from '../../components/Footer';
class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <Header/>
                <main>{this.props.children}</main>
                {/* <Footer/> */}
            </React.Fragment>
        );
    }
}

export default Layout;