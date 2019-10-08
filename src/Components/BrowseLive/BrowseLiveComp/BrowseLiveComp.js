import React, { Component } from 'react'
import Axios from 'axios';
import {client_id} from '../../../secret';
import './BrowseLiveComp.sass';



export default class BrowseLiveComp extends Component {
    constructor(){
        super();
        this.state = {
            liveStatus: false
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.stream.twitch_id !== this.props.stream.twitch_id){
            Axios.get(`https://api.twitch.tv/helix/streams?user_id=${this.props.stream.twitch_id}`, {
                    headers: {
                        "Client-ID": client_id
                    }
                }).then(res => {
                    if(res.data.data[0]){
                        this.setState({liveStatus: true}) 
                    }else{
                        this.setState({liveStatus: false}) 
                    }
                })
        }
    }

    render() {
        return (
            <div className='stream-box'>
                {!this.state.liveStatus ? <h2 id="not-live-status">Not Live</h2> : <h2 id='live-status'> <span>&#9673;</span>Live</h2>}
                <h1>{this.props.stream.username}</h1>
                <div id="color-box" style={{backgroundColor: `${this.props.stream.favorite_color}`}}><h2>{this.props.stream.stream_title}</h2></div>
            </div>
        )
    }
}
