import expect from "expect";
import loginReducer from "../reducers/loginReducer";
import actionTypes from "../actions/actionTypes"

describe("loginReducer", () => {
    const initialState = {
        user: {},
        error: {}
    };

    
    it("should return initial state", () => {
        expect(
            loginReducer(undefined, {}),
        ).toEqual(initialState)
    });

    it("should handle login success", () => {
       const action = {
           type: actionTypes.LOGINSUCCESS,
       };
       expect(loginReducer({}, action)).toEqual({})
    });

    it("should handle login failure", () => {
        const action = {
            type: actionTypes.LOGINFAIL,
        };
        expect(loginReducer({}, action)).toEqual({})
     });

     it("should handle signup success", () => {
        const action = {
            type: actionTypes.SIGNUPSUCCESS,
        };
        expect(loginReducer({}, action)).toEqual({})
     });

     it("should handle signup failure", () => {
        const action = {
            type: actionTypes.SIGNUPFAIL,
        };
        expect(loginReducer({}, action)).toEqual({})
     });

     
})