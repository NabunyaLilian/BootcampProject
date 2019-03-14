import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect";
import moxios from "moxios";
import actionTypes from "../actions/actionTypes"
import * as product_actions from "../actions/productsAction"

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("login action", () => {
   beforeEach(() => {
       moxios.install;
   });
   afterEach(()=>{
       moxios.uninstall;
   });

   it("should enable user login", () =>{
       const products = {
          Products: []
       }
       moxios.wait(()=>{
           const req = moxios.requests.mostRecent();
           req.respondWith({
               status: 200,
               response: products,
           });
       });

       const expectedAction = [
        {
            type: actionTypes.FETCHPRODUCTSUCCESS,
            payload: products
        }
       ];
       const store = mockStore({});
       store.dispatch(product_actions.fetchProduct()).then(() => {
           expect(store.getActions()).toEqual(expectedAction);
        });
   });

   
    it("should create an action for fetch products success", ()=> {
        const products = []
        const expectedAction = {
            type: actionTypes.FETCHPRODUCTSUCCESS,
            payload: products
        };
        expect(product_actions.fetchProductSuccess(products)).toEqual(expectedAction)
    });

    it("should create an action for fetch products fail", () => {
        const error = null ;
        const expectedAction = {
            type : actionTypes.FETCHPRODUCTERROR,
            payload : error,
        };
        expect(product_actions.fetchProductError(error)).toEqual(expectedAction)
    });

});