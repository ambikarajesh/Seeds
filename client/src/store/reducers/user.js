import * as actionTypes from '../types';

const initialState = {   
  userId :null,
  token:null
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_USERINFO_SUCCESS:          
                                    return {
                                      ...state,
                                      userId:action.userId,
                                      token:action.token
                                    }
        case actionTypes.LOGIN_USER:
                                    return {
                                      ...state,
                                      payload:action.payload
                                    }
        case actionTypes.REG_USER:
                                    return {
                                      ...state,
                                      payload:action.payload
                                    }
        case actionTypes.LOGOUT:
                                    return{
                                      ...state,
                                      userId:null,
                                      token:null
                                    }
        default:
            return state;
    }
}

export default reducer;