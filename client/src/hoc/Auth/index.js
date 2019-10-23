import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions';
import CircularProgress from '@material-ui/core/CircularProgress';

const Auth = (AuthCheckComponent) => {
   class AuthCheck extends Component {
       state = {
           loading:true
       }
       componentDidMount(){
        this.props.dispatch(actionCreators.authData()).then(res=>{
            let user = this.props.user.payload;
            if(!user.isAuth){
                this.props.history.push('/login');
            }
             this.setState({loading:false})
        })
       }
        render() {
            if(this.state.loading){
                return (
                <div className='progress'>
                    <CircularProgress />
                </div>
                )
            }
            return (               
                    <AuthCheckComponent {...this.props} user = {this.props.user.payload}/>               
            );
        }
    }

    const mapStateToProps = state => {
        return{
            user:state.userReducer
        }
    }

    return connect(mapStateToProps)(AuthCheck)
}


export default Auth;