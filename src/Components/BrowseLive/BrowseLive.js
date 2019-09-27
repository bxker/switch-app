import React, { Component } from 'react'
import { connect } from "react-redux";
import {getStreams} from "../../redux/reducers/streamsReducer";
import {Link} from 'react-router-dom';
import './BrowseLive.sass';
// import Axios from 'axios';


class BrowseLive extends Component {

    componentDidMount(){
        this.props.getStreams();
    }

    render() {
        const streamsMapped = this.props.streams.map((stream, i) => {
            return (
                <div key={i} className="streams">
                    <Link to={`/${stream.username}`} style={{textDecoration: 'none'}}>
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
