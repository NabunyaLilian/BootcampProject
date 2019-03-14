import actionTypes from "../actions/actionTypes"

export const initialState = {
    user: {},
    error: {},
};

const loginReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOGINSUCCESS:
        return{
            ...state,
            user: action.payload,
        };
        case actionTypes.LOGINFAIL:
           return{
               ...state,
               error: action.payload,
           };
        
        case actionTypes.SIGNUPSUCCESS:
        return{
            ...state,
            user: action.payload,
        };
        case actionTypes.SIGNUPFAIL:
            return{
                ...state,
                error: action.payload,
            };
                 
        default:
            return state;
    }
};

export default loginReducer;
