import React, { Component } from "react";
import { connect } from "react-redux";
import { getSession } from "../../redux/reducers/userReducer";
// import {updateStreamTitle} from '../../redux/reducers/userReducer';

class Profile extends Component {
    componentDidMount() {
        this.props.getSession();
    }

    render() {
    return (
        <div>
            <h1>Profile</h1>
            <h1 style={{ color: "white" }}>{this.props.match.params.username}</h1>
            <iframe
                src={`https://player.twitch.tv/?channel=${this.props.twitch_username}`}
                height="600px"
                width="1100px"
                frameborder="none"
                scrolling="none"
                allowfullscreen="true"
                autoplay='true'
                muted="true"
                title={`${this.props.stream_title}`}
            ></iframe>
        </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    stream_title: reduxState.userReducer.stream_title,
    favorite_color: reduxState.userReducer.favorite_color,
    twitch_username: reduxState.userReducer.twitch_username
  };
};

export default connect(
  mapStateToProps,
  {
    getSession
  }
)(Profile);
