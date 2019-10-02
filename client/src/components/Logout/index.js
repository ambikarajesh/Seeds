import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions';
class Logout extends React.Component{
    componentDidMount(){
        this.props.dispatch(actionCreators.logout());
    }
    render(){
        return <Redirect to='/'/>
    }
}
export default connect()(Logout);