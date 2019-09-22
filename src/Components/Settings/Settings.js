import React, { Component } from 'react';
import './Settings.sass';
import {connect} from 'react-redux';
import {updateUsername} from '../../redux/reducers/settingsReducer';
import {getSession} from '../../redux/reducers/userReducer';

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
        const {username} = this.state
        const {updateUsername} = this.props
        updateUsername({username})
        alert(`Username Updated to ${this.state.username}`)
    }

    handleChange = e => {
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
                        <button>Submit</button>
                    </div>
                    <div className='div-3'>
                        <h2>Add Twitch Username:</h2>
                        <input
                            name="twitch_username"
                            onChange={this.handleChange}
                        ></input>
                        <button>Submit</button>
                    </div>
                    <div className="div-4">
                        <h2>Change Favorite Color:</h2>
                        <input
                            name="favorite_color"
                            onChange={this.handleChange}
                        ></input>
                        <button>Submit</button>
                    </div>
                    <div id="delete-container">
                        <h2>Delete Account:</h2>
                        <button>Delete</button>
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
        favorite_color: reduxState.userReducer.favorite_color
    }
}

export default connect(mapStateToProps, {
    updateUsername,
    getSession
})(Settings)