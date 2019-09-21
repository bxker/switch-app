import React, { Component } from 'react';
import './Settings.sass';
import {connect} from 'react-redux';
import {} from '../../redux/reducers/userReducer';

class Settings extends Component {
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
                        <input></input>
                        <button>Submit</button>
                    </div>
                    <div className="div-2">
                        <h2>Change Stream Title:</h2>
                        <input></input>
                        <button>Submit</button>
                    </div>
                    <div className='div-3'>
                        <h2>Add Twitch Username:</h2>
                        <input></input>
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

export default connect(mapStateToProps, {})(Settings)