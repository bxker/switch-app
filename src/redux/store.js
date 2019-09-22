import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import settingsReducer from './reducers/settingsReducer';


const rootReducer = combineReducers({
    userReducer,
    settingsReducer
});

export default createStore(rootReducer, applyMiddleware(promise))