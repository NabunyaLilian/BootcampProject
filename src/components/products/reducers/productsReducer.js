import actionTypes from "../actions/actionTypes"

export const initialState = {
    products: [],
    error: null,
};

const productsReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCHPRODUCTSUCCESS:
        return{
            ...state,
            products: action.payload,
        };
        case actionTypes.FETCHPRODUCTERROR:
           return{
               ...state,
               error: action.payload,
           };

        default:
            return state;
    }
};

export default productsReducer;
