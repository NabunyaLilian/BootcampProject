import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import moxios from "moxios";
import actionTypes from "../actions/actionTypes"
import * as login_actions from "../actions/login"

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const Username = "Lia"
const Password = "L3mon6de"

describe("login action", () => {
   beforeEach(() => {
       moxios.install;
   });
   afterEach(()=>{
       moxios.uninstall;
   });

   it("should enable user login", () =>{
       const user = {
           "Access_token":"",
           "Message":"",
           "User":{}
       }
       moxios.wait(()=>{
           const req = moxios.requests.mostRecent();
           req.respondWith({
               status: 200,
               response: user,
           });
       });

       const expectedAction = [
        {
            type: actionTypes.LOGINSUCCESS,
            payload: user
        }
       ];
       const store = mockStore({});
       store.dispatch(login_actions.login(Username,Password)).then(() => {
           expect(store.getActions()).toEqual(expectedAction);
        });
   });

   
    it("should create an action for login success", ()=> {
        const user = {}
        const expectedAction = {
            type: actionTypes.LOGINSUCCESS,
            payload: user
        };
        expect(login_actions.loginsuccess(user)).toEqual(expectedAction)
    });

    it("should create an action for login fail", () => {
        const error = null ;
        const expectedAction = {
            type : actionTypes.LOGINFAIL,
            payload : error,
        };
        expect(login_actions.loginfail(error)).toEqual(expectedAction)
    });

});