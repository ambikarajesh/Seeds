import * as actionTypes from '../types';
import axios from 'axios';
import {SERVER} from '../../components/Utils/misc';
import Cookies from 'js-cookie';
export const regUser = (user) => {
    const req = axios.post(`${SERVER}/user/register`, user).then(res=> res.data).catch(err=> err);
    return {
        type:actionTypes.REG_USER,
        payload:req
    }
}

export const loginUser = (user) => {
    const req = axios.post(`${SERVER}/user/login`, user).then(res=> res.data).catch(err=> err);
    return {
        type:actionTypes.LOGIN_USER,
        payload:req
    }
}
export const setUserInfoSuccess = (userId, token) => {
    return {
        type:actionTypes.SET_USERINFO_SUCCESS,
        userId : userId,
        token:token
    }
}

export const setUserInfo = (userId, token) => {
    return dispatch => {
        dispatch(setUserInfoSuccess(userId, token))
    }
}


export const retainState = () => {
    return dispatch => {
        const token = Cookies.get('auth');
        if(token){
            const userId = Cookies.get('userId');
            dispatch(setUserInfoSuccess(userId, token));
        }         
    }
}

export const logout = ()=> {
    return dispatch => {
    axios.get(`${SERVER}/user/logout`).then(res=> {
        if(res.data.success === true){              
                dispatch({
                    type:actionTypes.LOGOUT
                })
            }
        })           
    }         
}

export const loginFBUser = (userId, accessToken) => {
    const req = axios.post(`${SERVER}/user/fb_login`, {userId:userId, accessToken:accessToken}).then(res=> res.data).catch(err=> err);
    return {
        type:actionTypes.LOGIN_FB_USER,
        payload:req
    }
}
export const loginGOOUser = (userId, idToken) => {
    const req = axios.post(`${SERVER}/user/goo_login`, {userId:userId, idToken:idToken}).then(res=> res.data).catch(err=> err);
    return {
        type:actionTypes.LOGIN_GOO_USER,
        payload:req
    }
}