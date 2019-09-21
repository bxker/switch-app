import React, { Component } from 'react';
import './Settings.sass';

class Settings extends Component {
    render() {
        return (
            <div className="settings-main">
                <section className="settings-section-1">
                    <h1>Settings</h1>
                    <h2>Welcome, </h2>
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

export default Settings