import { combineReducers } from 'redux';
import loginReducer from '../components/auth/reducers/loginReducer'
import productsReducer from '../components/products/reducers/productsReducer'

export default combineReducers({
    loginReducer,
    productsReducer,
});
