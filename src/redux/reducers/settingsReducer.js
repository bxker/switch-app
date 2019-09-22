import axios from 'axios';

//initial state
const initialState = {
    stream_title: '',
    twitch_username: ''
}

export const UPDATE_USERNAME = 'UPDATE_USERNAME';
export const UPDATE_STREAM_TITLE = 'UPDATE_STREAM_TITLE';
export const UPDATE_TWITCH_USERNAME = 'UPDATE_TWITCH_USERNAME';
export const UPDATE_FAVORITE_COLOR = 'UPDATE_FAVORITE_COLOR';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

export function updateUsername(user){
    return{
        type: UPDATE_USERNAME,
        payload: axios.put('/auth/settings/user', user)
        
    }
}
export function updateStreamTitle(){

}
export function updateTwitchUsername(){

}
export function updateFavoriteColor(){

}
export function deleteAccount(){

}

export default function reducer(state = initialState, action){
    const {type, payload} = action;
    switch(type){
        case `${UPDATE_USERNAME}_FULFILLED`:
            console.log(payload.data)
            return{
                ...state,
                username: payload.data.username
            }
        default: return state
    }
}