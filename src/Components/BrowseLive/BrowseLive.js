import React, { Component } from 'react'
import { connect } from "react-redux";
import {getStreams} from "../../redux/reducers/streamsReducer";
import {Link} from 'react-router-dom';
import './BrowseLive.sass';
import Axios from 'axios';
import {client_id} from '../../secret';
// import Axios from 'axios';


class BrowseLive extends Component {
    componentDidMount(){
        this.props.getStreams();
    }

    render() {
        const streamsMapped = this.props.streams.map((stream, i) => {
            console.log(stream.twitch_id)
            const live = Axios.get(`https://api.twitch.tv/helix/streams?user_id=${stream.twitch_id}`, {
                headers: {
                    "Client-ID": client_id
                }
            }).then(res => {
                if(res.data.data[0]){
                    return(
                        <h1>Live</h1> 
                    )
                } 
            })
                
            return (
                <div key={i} className="streams">
                    <Link to={`/${stream.username}`} style={{textDecoration: 'none'}}>
                        {/* {live} */}
                        <h1>{stream.username}</h1>
                        <div id="color-box" style={{backgroundColor: `${stream.favorite_color}`}}><h2>{stream.stream_title}</h2></div>
                        
                    </Link>
                </div>
            )
        })
        return (
            <div className="browse-live-main">
                    <h3>Browse Profiles</h3>
                    <span id="streams-mapped">
                        {streamsMapped}
                    </span>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
    streams: reduxState.streamsReducer.streams
    };
  };

export default connect(
    mapStateToProps,
    {
        getStreams
    }
  )(BrowseLive);
