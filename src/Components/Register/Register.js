import React, { Component } from 'react'
import './Register.sass';

export default class Register extends Component {
    render() {
        return (
            <div className="register-main">
                <section className="register-title">
                    <h1>Sign up for <span className="switch-green"> Switch</span> </h1>
                </section>
                <section className="green-box">
                    <section className="section-1-register">
                        <div className="register-left">
                            <h2>First Name</h2>
                            <input></input>
                            <h2>Last Name</h2>
                            <input></input>
                            <h2>Username</h2>
                            <input></input>
                        </div>
                        <div className="register-right">
                            <h2>Email</h2>
                            <input></input>
                            <h2>Password</h2>
                            <input type="password"></input>
                            <h2>Favorite Color</h2>
                            <input></input>
                        </div>
                    </section>
                    <section className="section-2-register">
                        <button>Sign Up</button>
                        <h1>Already have an account? <a href="/#/login">Login</a></h1>
                    </section>
                </section>
            </div>
        )
    }
}
