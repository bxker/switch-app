import React, { Component } from 'react'
import "./Login.sass"
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom';
import {loginUser} from '../../redux/reducers/userReducer';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        const {username, password} = this.state;
        const {loginUser} = this.props;
        loginUser({username, password});
    }

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        if(this.props.user_id){
            return <Redirect to='/browse/live'/>
        }
        return (
            <div className="register-main">
                <section className="register-title">
                    <h1>Log In to <span className="switch-green"> Switch</span> </h1>
                </section>
                    <section className="green-box">
                        <Link to="/"><span id='cancel-x'>Cancel</span></Link>
                        <form>
                        <section className="section-1-register">
                            <div className="register-left">
                                <h2>Username</h2>
                                <input
                                    name="username"
                                    onChange={this.handleInput}
                                ></input>
                                <h2>Password</h2>
                                <input 
                                    type="password"
                                    name='password'
                                    onChange={this.handleInput}
                                ></input>
                            </div>
                        </section>
                        <section className="section-2-register section-2-login">
                            <button onClick={this.handleSubmit} onKeyPress={this.handleKeyPress}>Login</button>
                            <h1>Don't have an account? Sign up here: <a href="/#/register">Register</a></h1>
                        </section>
                        </form>
                    </section>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user_id: reduxState.userReducer.user_id
    }
}

export default connect(mapStateToProps, {
    loginUser
})(Login)