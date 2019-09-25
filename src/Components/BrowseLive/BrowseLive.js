import React, { Component } from 'react'
import { connect } from "react-redux";
import {getStreams} from "../../redux/reducers/streamsReducer";
import {Link} from 'react-router-dom';
import './BrowseLive.sass';
// import Axios from 'axios';


class BrowseLive extends Component {

    componentDidMount(){
        this.props.getStreams();
        // this.props.streams.map(stream => {
        //     return(
        //         Axios.get(`https://api.twitch.tv/helix/users?login=${stream.username}`, {
        //             headers: {
        //                 "Client_ID": client_id
        //             }
        //         })
        //         .then(res => {
        //             console.log(res.data)
        //             this.setState({
        //                 twitch_id: res.data.data.id
        //             })
        //         })
        //         .catch(err => console.log(err))
        //     )
        // })
    }

    render() {
        const streamsMapped = this.props.streams.map((stream, i) => {
            return (
                <div key={i} className="streams">
                    <Link to={`/${stream.username}`} style={{textDecoration: 'none'}}>
                        <div id="color-box" style={{backgroundColor: `${stream.favorite}`}}></div>
                        <h1>{stream.username}</h1>
                        <h2>{stream.stream_title}</h2>
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
