import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
import streamsReducer from './reducers/streamsReducer';


const rootReducer = combineReducers({
    userReducer,
    streamsReducer
});

export default createStore(rootReducer, applyMiddleware(promise))