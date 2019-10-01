import axios from 'axios';

//initial state
const initialState = {
    streams: [],
    twitch_id: null,
    is_live: false
}

//const strings
const GET_STREAMS = 'GET_STREAMS';


//functions
export function getStreams(){
    return{
        type: GET_STREAMS,
        payload: axios.get('/api/streams')
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case `${GET_STREAMS}_FULFILLED`:
            return{
                ...state,
                streams: payload.data,
                twitch_id: payload.data.twitch_id
            }
        default: return state;
    }
}