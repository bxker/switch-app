import React, { Component } from "react";
import { connect } from "react-redux";
import { getSession } from "../../redux/reducers/userReducer";
import Axios from "axios";
import './Profile.sass';
// import {updateStreamTitle} from '../../redux/reducers/userReducer';

class Profile extends Component {
    constructor(){
      super();
      this.state = {
        streams: [],
        currentStream: ''
      }
    }
    componentDidMount() {
      this.props.getSession();
      Axios.get(`/api/stream/${this.props.match.params.username}`)
      .then(res => {
        this.setState({
          currentStream: res.data.twitch_username
        })
      })
    }

    componentDidUpdate(prevProps){
      let updatedParam = this.props.match.params.username
      if(this.props.match.params === this.state.currentStream){
        return;
      }else if(prevProps.match.params.username !== this.props.match.params.username){
        Axios.get(`/api/stream/${this.props.match.params.username}`, updatedParam)
        .then(res => {
          this.setState({
            currentStream: res.data.twitch_username
          })
        })
        .catch(err => console.log(err))
      }
    }
    
    render() {
      
      return (
        <div className="profile-main">
          <div className="profile-section-1">
            <section>
              <img src='https://image.flaticon.com/icons/svg/17/17004.svg' alt='user_logo'/>
              <h1>{this.props.match.params.username}</h1>
            </section>
            {this.state.currentStream[0] ?
              <iframe
                  className="twitch-player"
                  src={`https://player.twitch.tv/?channel=${this.state.currentStream}`}
                  frameborder="none"
                  scrolling="none"
                  allowfullscreen="true"
                  autoplay='true'
                  muted="true"
                  title={`${this.props.stream_title}`}
              ></iframe>
            : <h1>Stream failed to load, please reload the page. No </h1>
            }
          </div>
        </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    stream_title: reduxState.userReducer.stream_title,
    favorite_color: reduxState.userReducer.favorite_color,
    twitch_username: reduxState.userReducer.twitch_username,
    username: reduxState.userReducer.username
  };
};

export default connect(
  mapStateToProps,
  {
    getSession
  }
)(Profile);
