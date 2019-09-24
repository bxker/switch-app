import React, { Component } from 'react'
import { connect } from "react-redux";
import {getStreams} from "../../redux/reducers/streamsReducer";
import {Link} from 'react-router-dom';

class BrowseLive extends Component {
    componentDidMount(){
        this.props.getStreams();
    }

    render() {
        console.log(this.props.streams)
        const streamsMapped = this.props.streams.map((stream, i) => {
            return (
                <div key={i} className="streams">
                    <Link to={`/${stream.username}`}>
                        <h1>Username: {stream.username}</h1>
                        <h1>Title: {stream.stream_title}</h1>
                    </Link>
                </div>
            )
        })
        return (
            <div>
                <h1>Browse Profiles</h1>
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
