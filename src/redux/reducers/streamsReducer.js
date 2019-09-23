import axios from 'axios';

//initial state
const initialState = {
    streams: [],
    current_stream: []
}

//const strings
const GET_STREAMS = 'GET_STREAMS';
const GET_CURRENT_STREAM = 'GET_CURRENT_STREAM';

//functions
export function getStreams(){
    return{

    }
}

export function getCurrentStream(){
    return{

    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        default: return state;
    }
}