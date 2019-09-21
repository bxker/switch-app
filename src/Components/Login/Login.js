import React, { Component } from 'react'
import "./Login.sass"

export default class Login extends Component {
    render() {
        return (
            <div className="register-main">
                <section className="register-title">
                    <h1>Log In to <span className="switch-green"> Switch</span> </h1>
                </section>
                <section className="green-box">
                    <section className="section-1-register">
                        <div className="register-left">
                            <h2>Username</h2>
                            <input></input>
                            <h2>Password</h2>
                            <input type="password"></input>
                        </div>
                    </section>
                    <section className="section-2-register section-2-login">
                        <button>Login</button>
                        <h1>Don't have an account? Sign up here: <a href="/#/register">Register</a></h1>
                    </section>
                </section>
            </div>
        )
    }
}
