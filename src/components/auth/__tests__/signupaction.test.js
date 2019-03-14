import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import moxios from "moxios";
import actionTypes from "../actions/actionTypes"
import * as signup_actions from "../actions/signup"

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const Username = "Lia"
const Password = "L3mon6de"
const FirstName = "Lilian"
const isAdmin = "true"

describe("signup action", () => {
   beforeEach(() => {
       moxios.install;
   });
   afterEach(()=>{
       moxios.uninstall;
   });

   it("should enable user login", () =>{
       const user = {
           "Message":"",
           "User":{}
       }
       moxios.wait(()=>{
           const req = moxios.requests.mostRecent();
           req.respondWith({
               status: 201,
               response: user,
           });
       });

       const expectedAction = [
        {
            type: actionTypes.SIGNUPSUCCESS,
            payload: user
        }
       ];
       const store = mockStore({});
       store.dispatch(signup_actions.signup(Username,Password,FirstName,isAdmin)).then(() => {
           expect(store.getActions()).toEqual(expectedAction);
        });
   });

   
    it("should create an action for signup success", ()=> {
        const user = {}
        const expectedAction = {
            type: actionTypes.SIGNUPSUCCESS,
            payload: user
        };
        expect(signup_actions.signupsuccess(user)).toEqual(expectedAction)
    });

    it("should create an action for l fail", () => {
        const error = null ;
        const expectedAction = {
            type : actionTypes.SIGNUPFAIL,
            payload : error,
        };
        expect(signup_actions.signupfail(error)).toEqual(expectedAction)
    });

});