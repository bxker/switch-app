import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './reducers/userReducer';
// import postsReducer from './reducers/postsReducer';

const rootReducer = combineReducers({
    userReducer
});

export default createStore(rootReducer, applyMiddleware(promise))