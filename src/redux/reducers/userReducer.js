import axios from 'axios';

//initial state
const initialState = {
    user_id: null,
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    favorite_color: ''
}

export const GET_SESSION = 'GET_SESSION';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';


export function getSession() {
    return {
        type: GET_SESSION,
        payload: axios.get('/auth/user')
    }
 }
 
 export function registerUser(newUser) {
     console.log(newUser)
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', newUser)
    }
 }
 
 export function loginUser(user) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', user)
    }
 }
 
 export function logoutUser() {
    console.log('hit')
    axios.post('/auth/logout')
    return {
        type: LOGOUT_USER
    }
 }

export default function reducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case `${GET_SESSION}_FULFILLED`:
            return{
                ...state,
                user_id: payload.data.user_id,
                username: payload.data.username,
                first_name: payload.data.first_name,
                last_name: payload.data.last_name,
                email: payload.data.email,
                favorite_color: payload.data.favorite_color,
                stream_title: payload.data.stream_title,
                twitch_username: payload.data.twitch_username
            }
        case `${REGISTER_USER}_FULFILLED`:
            return {
                ...state,
                user_id: payload.data.user_id,
                username: payload.data.username,
                first_name: payload.data.first_name,
                last_name: payload.data.last_name,
                email: payload.data.email,
                favorite_color: payload.data.favorite_color,
                stream_title: payload.data.stream_title,
                twitch_username: payload.data.twitch_username
            }
        case `${LOGIN_USER}_FULFILLED`:
            return{
                ...state,
                user_id: payload.data.user_id,
                username: payload.data.username,
                first_name: payload.data.first_name,
                last_name: payload.data.last_name,
                email: payload.data.email,
                favorite_color: payload.data.favorite_color,
                stream_title: payload.data.stream_title,
                twitch_username: payload.data.twitch_username
            }
        case LOGOUT_USER:
            return{
                user_id: null,
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                favorite_color: '',
                stream_title: '',
                twitch_username: ''
            }
        default: return state;
    }
}