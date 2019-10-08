import React, { Component } from 'react'
import { connect } from "react-redux";
import {getStreams} from "../../redux/reducers/streamsReducer";
import './BrowseLive.sass';
import BrowseLiveComp from './BrowseLiveComp/BrowseLiveComp'
import {Link} from 'react-router-dom';

// import Axios from 'axios';


class BrowseLive extends Component {
    componentDidMount(){
        this.props.getStreams();
    }
    
    

    render() {
        const streamsMapped = this.props.streams.map((stream, i) => {
            return (
                <div key={i} className="streams">
                    <Link to={`/${stream.username}`} style={{textDecoration: 'none', height: '100%'}}>
                        <BrowseLiveComp stream={stream}/>
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
