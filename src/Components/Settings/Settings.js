import React, { Component } from 'react';
import './Settings.sass';
import {connect} from 'react-redux';
import {getSession, updateUsername, updateStreamTitle, updateTwitchUsername, updateFavoriteColor, deleteAccount} from '../../redux/reducers/userReducer';

class Settings extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            stream_title: '',
            twitch_username: '',
            favorite_color: ''
        }
    }
    componentDidMount(){
        this.props.getSession();
    }
    handleUpdateUsername = () => {
        const {username} = this.state;
        const {updateUsername} = this.props;
        updateUsername({username});
        alert(`Username Updated to ${username}`);
    }

    handleUpdateStreamTitle = () => {
        const {stream_title} = this.state;
        const {updateStreamTitle} = this.props;
        updateStreamTitle({stream_title});
        alert(`Stream title has been updated to: ${stream_title}`)
    }

    handleUpdateTwitchUsername = () => {
        const {twitch_username} = this.state;
        const {updateTwitchUsername} = this.props;
        updateTwitchUsername({twitch_username});
        alert(`Twitch username has been updated to: ${twitch_username}`);
    }

    handleUpdateFavoriteColor = () => {
        const {favorite_color} = this.state;
        const {updateFavoriteColor} = this.props;
        updateFavoriteColor({favorite_color});
        alert(`Favorite color has been updated to: ${favorite_color}`);
    }

    handleDeleteAccount = () => {
        const {deleteAccount} = this.props;
        let answer = prompt('Are you sure you want to delete your account? If so, type DELETE. If this was a mistake, type anything else and click ok.')
        if(answer.toUpperCase() === 'DELETE'){
            deleteAccount();
        }else{
            return;
        }
    }

    //handle input text
    handleChange = e => {
        console.log(e.target.value)
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className="settings-main">
                <section className="settings-section-1">
                    <h1>Settings</h1>
                    <h2>Welcome, <span className="username-color" style={{color: this.props.favorite_color}}>{this.props.username}</span>!</h2>
                </section>
                <section className="settings-section-2">
                    <div className="div-1">
                        <h2>Change Username:</h2>
                        <input
                            name="username"
                            onChange={this.handleChange}
                        ></input>
                        <button onClick={this.handleUpdateUsername}>Submit</button>
                    </div>
                    <div className="div-2">
                        <h2>Change Stream Title:</h2>
                        <input
                            name="stream_title"
                            onChange={this.handleChange}
                        ></input>
                        <button onClick={this.handleUpdateStreamTitle}>Submit</button>
                    </div>
                    <div className='div-3'>
                        <h2>Change Twitch Username:</h2>
                        <input
                            name="twitch_username"
                            onChange={this.handleChange}
                        ></input>
                        <button onClick={this.handleUpdateTwitchUsername}>Submit</button>
                    </div>
                    <div className="div-4">
                        <h2>Change Favorite Color:</h2>
                        <input
                            name="favorite_color"
                            onChange={this.handleChange}
                        ></input>
                        <button onClick={this.handleUpdateFavoriteColor}>Submit</button>
                    </div>
                    <div id="delete-container">
                        <h2>Delete Account:</h2>
                        <button onClick={this.handleDeleteAccount}>Delete</button>
                    </div>
                </section>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return{
        user_id: reduxState.userReducer.user_id,
        username: reduxState.userReducer.username,
        favorite_color: reduxState.userReducer.favorite_color,
        stream_title: reduxState.userReducer.stream_title,
        twitch_username: reduxState.userReducer.twitch_username
    }
}

export default connect(mapStateToProps, {
    updateUsername,
    getSession,
    updateStreamTitle,
    updateTwitchUsername,
    updateFavoriteColor,
    deleteAccount
})(Settings)