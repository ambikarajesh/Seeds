import React from "react";
import { MDBBtn, MDBInput } from 'mdbreact';
import {updateInput, generateData, validateForm, clearInputs} from '../Utils/updateForm';
import * as actionCreators from '../../store/actions';
import {connect} from 'react-redux';
class NewPwdSet extends React.Component {
    state = {
        inputs:{ 
            newPassword:{
                config:{
                    label:"New Password", 
                    icon:"lock", 
                    type:"password", 
                    name:'newPassword'
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
                    label:"Confirm New Password", 
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
            this.props.dispatch(actionCreators.newPwdSet(submitData.newPassword, this.props.match.params.token)).then(res=>{
                console.log(res)
                // if(res.payload.success === true){
                //     this.setState({formValid:true, formSuccess:true, formValidErr:res.payload.message})
                //         setTimeout(()=>{                        
                //             this.props.history.push('/login')
                //         }, 1000)
                // }else{
                //     this.setState({formValid:false, formValidErr:res.payload.response.data.message})
                // } 
            }).catch(err=>{
                this.setState({formValid:false, formValidErr:'Invalid Input'})
            })
                    
        }else{
            this.setState({formValid:false, formValidErr:'Invalid Input'}) 
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
            <div className='forgotpwd_container'>
                <h6 className='page_title'>Forgot Password? </h6>
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
                            <MDBBtn className='button' color="danger" onClick = {this.submitHandler}>Change</MDBBtn>
                        </div>
                    </form>
            </div>
        );
    }
};

export default connect()(NewPwdSet);