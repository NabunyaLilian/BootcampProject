import expect from "expect";
import productsReducer from "../reducers/productsReducer"
import actionTypes from "../actions/actionTypes"

describe("loginReducer", () => {
    const initialState = {
        products: [],
        error: null,
    };

    
    it("should return initial state", () => {
        expect(
            productsReducer(undefined, []),
        ).toEqual(initialState)
    });

    it("should handle fetch success", () => {
       const action = {
           type: actionTypes.FETCHPRODUCTSUCCESS,
       };
       expect(productsReducer({}, action)).toEqual({})
    });

    it("should handle fetch failure", () => {
        const action = {
            type: actionTypes.FETCHPRODUCTERROR,
        };
        expect(productsReducer({}, action)).toEqual({})
     });
     
})