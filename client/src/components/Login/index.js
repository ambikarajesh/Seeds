import React from "react";
import { MDBBtn, MDBInput } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateInput, generateData, validateForm, clearInputs} from '../Utils/updateForm';
import * as actionCreators from '../../store/actions';
import { OldSocialLogin as SocialLogin } from 'react-social-login'
 


class Login extends React.Component {
  state = {
        inputs:{            
            email:{
                config:{
                    label:"Email", 
                    icon:"envelope", 
                    type:"email", 
                    name:'email'
                },                 
                value:'',
                validation:{
                    required:true,
                    email:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            },
            password:{
                config:{
                    label:"Password", 
                    icon:"lock", 
                    type:"password", 
                    name:'password'
                },                 
                value:'',
                validation:{
                    required:true,
                    password:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            }
        },
        formValid:true,
        formValidErr:false,
        formSuccess:false
    }

    handleFacebookLogin = (user, err) => {
        this.props.dispatch(actionCreators.loginFBUser(user._profile.id, user._token.accessToken)).then(res=>{
            if(res.payload.success === true){
                this.setState({formValid:true, formSuccess:true, formValidErr:res.payload.message})
                setTimeout(()=>{  
                    this.props.dispatch(actionCreators.setUserInfo(res.payload.user._id, res.payload.user.token))                     
                    this.props.history.push('/')
                }, 1000)
            }else{
                this.setState({formValid:false, formValidErr:res.payload.response.data.message})
            } 
        }).catch(err=> {                        
                this.setState({formValid:false, formValidErr:'Invalid Inputs'})
        })            
    }

    handleGoogleLogin = (user, err) => {
        console.log(user)
        this.props.dispatch(actionCreators.loginGOOUser(user._profile.id, user._token.idToken)).then(res=>{
            if(res.payload.success === true){
                this.setState({formValid:true, formSuccess:true, formValidErr:res.payload.message})
                setTimeout(()=>{  
                    this.props.dispatch(actionCreators.setUserInfo(res.payload.user._id, res.payload.user.token))                     
                    this.props.history.push('/')
                }, 1000)
            }else{
                this.setState({formValid:false, formValidErr:res.payload.response.data.message})
            } 
        }).catch(err=> {                        
                this.setState({formValid:false, formValidErr:'Invalid Inputs'})
        })            
    }


    inputHandler = (element) =>{
        const updateInputs = updateInput(element, this.state.inputs);
        this.setState({inputs:updateInputs})
    }
    submitHandler = () => {
        const submitData = generateData(this.state.inputs);
        const validForm = validateForm(this.state.inputs);
        if(validForm){
            this.props.dispatch(actionCreators.loginUser(submitData)).then(res=>{
                if(res.payload.success === true){
                    this.setState({formValid:true, formSuccess:true, formValidErr:res.payload.message})
                    setTimeout(()=>{  
                        this.props.dispatch(actionCreators.setUserInfo(res.payload.user._id, res.payload.user.token))                     
                        this.props.history.push('/')
                    }, 1000)
                }else{
                    this.setState({formValid:false, formValidErr:res.payload.response.data.message})
                } 
            }).catch(err=> {                        
                    this.setState({formValid:false, formValidErr:'Invalid Inputs'})
            })            
        }else{
            this.setState({formValid:false, formValidErr:'Invalid Inputs'}) 
        }

    }
    handleClose = () => {        
        const inputs = clearInputs(this.state.inputs); 
        this.setState({inputs:inputs, formValidErr:false, formValid:true, formSuccess:false});
    };
    render(){  
        const showError = (errMessage, errorValid, position) => {
            let errorMsg = null;
            if(!errorValid){
                errorMsg = (
                    <div className={position === 'center' ? 'center_error_alert' : 'right_error_alert'}>
                        {errMessage}
                    </div>
                )
            }else{
                errorMsg = (
                    <div className={position === 'center' ? 'center_success_alert' : null}>
                        {errMessage}
                    </div>
                )
            }
            return errorMsg;
        }      
        return (
            <div className='login_container'>
                <h6 className='page_title'>Login</h6>
                <div className='login_types'>
                    <div className='login_normal'>
                        <form className='form_wrapper'>
                            {!this.state.formValid ?showError(this.state.formValidErr, this.state.formValid, 'center'): showError(this.state.formValidErr, this.state.formValid, 'center')}
                            <div className="grey-text">
                                {Object.keys(this.state.inputs).map((input, index)=>{
                                    return (<div key={index}>
                                                <MDBInput
                                                    label={this.state.inputs[input].config.label}
                                                    icon={this.state.inputs[input].config.icon}
                                                    type={this.state.inputs[input].config.type}
                                                    row={this.state.inputs[input].config.row}
                                                    value={this.state.inputs[input].value}
                                                    onBlur={(event)=>this.inputHandler({event, name:this.state.inputs[input].config.name, blur:true})}
                                                    onChange={(event)=>this.inputHandler({event, name:this.state.inputs[input].config.name})}
                                                    key={index}
                                                    style={{color:'#666', paddingTop:'15px'}}
                                                />
                                                {showError(this.state.inputs[input].validationMsg, this.state.inputs[input].valid, "right")}
                                            </div>)
                                })}                    
                            </div>
                            <Link to='/pwdreset' className='pwd_href'>Forgot Password?</Link>
                            <div className='text_center'>
                                <MDBBtn className='button' color="danger" onClick = {this.submitHandler}>Login</MDBBtn>
                                <div>Don’t have an account yet?  <Link to='/register'>Register</Link></div>            
                            </div>
                        </form>
                    </div>
                    <div className='middle_or'>
                        (or)
                    </div>
                    <div className='login_fb_goo_btn'>
                        <h6>Login Using</h6>
                        <SocialLogin
                            provider='facebook'
                            appId='939521323091074'
                            callback={this.handleFacebookLogin}
                            >
                                <MDBBtn  color="primary" className='button'>
                                    <FontAwesomeIcon icon={faFacebookF} size="1x" style = {{color:'#fff'}}/> Facebook
                                </MDBBtn>  
                        </SocialLogin> 
                        <SocialLogin
                            provider='google'
                            appId='48626095239-issv8mfrtg1ou228bquj0vubtngeq4sa.apps.googleusercontent.com'
                            callback={this.handleGoogleLogin}
                            >
                        <MDBBtn  color="danger" className='button'>
                            <FontAwesomeIcon icon={faGoogle} size="1x" style = {{color:'#fff'}}/> Google
                        </MDBBtn>  
                        </SocialLogin>
                    </div>
                </div>
            </div>
        );
    }
};

export default connect()(Login);