import React, { Component } from 'react'
import Axios from 'axios';
import {client_id} from '../../../secret';



export default class BrowseLiveComp extends Component {
    constructor(){
        super();
        this.state = {
            liveStatus: false
        }
    }

    componentDidMount(){
        Axios.get(`https://api.twitch.tv/helix/streams?user_id=${this.props.stream.twitch_id}`, {
                headers: {
                    "Client-ID": client_id
                }
            }).then(res => {
                if(res.data.data[0]){
                    // return(
                    //     <h1>Live</h1> 
                    // )
                    console.log(` is live`)
                    this.setState({liveStatus: true}) 
                }else{
                    console.log(` is not live`)
                    this.setState({liveStatus: false}) 
                }
            })
    }

    render() {
        return (
            <div>
                {!this.state.liveStatus ? <h2>Not Live</h2> : <h2>Live</h2>}
                <h1>{this.props.stream.username}</h1>
                <div id="color-box" style={{backgroundColor: `${this.props.stream.favorite_color}`}}><h2>{this.props.stream.stream_title}</h2></div>
            </div>
        )
    }
}
