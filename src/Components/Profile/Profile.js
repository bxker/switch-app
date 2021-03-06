import React, { Component } from "react";
import { connect } from "react-redux";
import { getSession } from "../../redux/reducers/userReducer";
import Axios from "axios";
import './Profile.sass';
import Chat from './Chat/Chat';
// import {updateStreamTitle} from '../../redux/reducers/userReducer';

class Profile extends Component {
    constructor(){
      super();
      this.state = {
        currentStream: []
      }
    }
    componentDidMount() {
      this.props.getSession('null');
      Axios.get(`/api/stream/${this.props.match.params.username}`)
      .then(res => {
        this.setState({
          currentStream: res.data
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
            currentStream: res.data
          })
        })
        .catch(err => console.log(err))
      }
    }
    
    render() {
      return (
        <div className="profile-main">
          <div className="profile-section-1">
            <div className="flex-row">
              <section className="username-logo">
                <img src='https://image.flaticon.com/icons/svg/17/17004.svg' alt='user_logo'/>
                <h1>{this.props.match.params.username}</h1>
              </section>
              <section>
                <h2>{this.state.currentStream.stream_title}</h2>
              </section>
            </div>

            {this.state.currentStream.twitch_username ?
              <iframe
                  className="twitch-player"
                  src={`https://player.twitch.tv/?channel=${this.state.currentStream.twitch_username}`}
                  frameborder="none"
                  scrolling="none"
                  allowfullscreen="true"
                  autoplay='true'
                  muted="true"
                  title={`${this.props.stream_title}`}
              ></iframe>
            : <h1 style={{fontSize: '2rem'}}>This user has not set a Twitch username.</h1>
            }
          </div>
          <div className="chat-section">
            
            <Chat favorite_color={this.props.favorite_color} profile={this.props.match.params.username} username={this.props.username}/>
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
