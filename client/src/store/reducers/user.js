import * as actionTypes from '../types';

const initialState = {   
  userId :null 
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SET_USERID_SUCCESS:          
                                    return {
                                      ...state,
                                      userId:action.userId
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
        default:
            return state;
    }
}

export default reducer;