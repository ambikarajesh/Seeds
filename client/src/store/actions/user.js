import * as actionTypes from '../types';
import axios from 'axios';
import {SERVER} from '../../components/Utils/misc';
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
        type:actionTypes.REG_USER,
        payload:req
    }
}
export const setUserIdSuccess = (userId) => {
    return {
        type:actionTypes.SET_USERID_SUCCESS,
        userId : userId
    }
}

export const setUserId = (userId) => {
    return dispatch => {
        dispatch(setUserIdSuccess(userId))
    }
}