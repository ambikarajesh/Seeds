import React from "react";
import { MDBBtn, MDBInput } from 'mdbreact';
import {Link} from 'react-router-dom';
import {updateInput, generateData, validateForm, clearInputs} from '../Utils/updateForm';
import * as actionCreators from '../../store/actions/';
// import * as actionCreators from '../../../store/actions';
import {connect} from 'react-redux';
class Register extends React.Component {
    state = {
        inputs:{ 
            firstname:{
                config:{
                    label:"Firstname", 
                    icon:"user", 
                    type:"text", 
                    name:'firstname'
                },                 
                value:'',
                validation:{
                    required:true,
                    firstname:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            },
            lastname:{
                config:{
                    label:"Lastname", 
                    icon:"user", 
                    type:"text", 
                    name:'lastname'
                },                 
                value:'',
                validation:{
                    required:true,
                    lastname:true
                },
                valid:false,
                touched:false,
                validationMsg:""
            },
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
            },
            confirmPassword:{
                config:{
                    label:"Confirm Password", 
                    icon:"lock", 
                    type:"password", 
                    name:'confirmPassword'
                },                 
                value:'',
                validation:{
                    required:true,
                    confirmpwd:true
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
    inputHandler = (element) =>{
        const updateInputs = updateInput(element, this.state.inputs);
        this.setState({inputs:updateInputs})
    }
    submitHandler = () => {
        const submitData = generateData(this.state.inputs);
        const validForm = validateForm(this.state.inputs);
        if(validForm){
            this.props.dispatch(actionCreators.regUser({
                firstname:submitData.firstname,
                lastname:submitData.lastname,
                email:submitData.email,
                password:submitData.password
            })).then(res=>{
                console.log('res=', res)
                if(res.payload.success === true){
                    this.setState({formValid:true, formSuccess:true, formValidErr:res.payload.message})
                    setTimeout(()=>{                        
                        this.props.history.push('/login')
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
            <div className='register_container'>
                <h6 className='page_title'>Register <span style={{float:'right', fontSize:'12px'}}>Already Registered?  <Link to='/login'>Login</Link></span></h6>
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
                        <div className='text_center'>
                            <MDBBtn className='button' color="danger" onClick = {this.submitHandler}>Register</MDBBtn>
                        </div>
                    </form>
            </div>
        );
    }
};

export default connect()(Register);