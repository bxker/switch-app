import React, { Component } from 'react';
import './Register.sass';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {registerUser} from '../../redux/reducers/userReducer';

class Register extends Component {
    constructor(){
        super();
        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            password: '',
            favorite_color: ''
        }
    }

    handleSubmit = () => {
        const {first_name, last_name, username, email, password, favorite_color} = this.state;
        const {registerUser} = this.props;
        registerUser({first_name, last_name, username, email, password, favorite_color});
    }

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        console.log(this.props.user_id)
        if(this.props.user_id){
            return <Redirect to="/browse/live"/>
        }

        return (
            <div className="register-main">
                <section className="register-title">
                    <h1>Sign up for <span className="switch-green"> Switch</span> </h1>
                </section>
                <section className="green-box">
                    <section className="section-1-register">
                        <div className="register-left">
                            <h2>First Name</h2>
                            <input
                                name='first_name'
                                onChange={this.handleInput} 
                            ></input>
                            <h2>Last Name</h2>
                            <input
                                name='last_name'
                                onChange={this.handleInput} 
                            ></input>
                            <h2>Username</h2>
                            <input
                                name='username'
                                onChange={this.handleInput} 
                            ></input>
                        </div>
                        <div className="register-right">
                            <h2>Email</h2>
                            <input
                                name='email'
                                onChange={this.handleInput} 
                            ></input>
                            <h2>Password</h2>
                            <input 
                                type="password"
                                name='password'
                                onChange={this.handleInput} 
                            ></input>
                            <h2>Favorite Color</h2>
                            <input
                                name='favorite_color'
                                onChange={this.handleInput} 
                            ></input>
                        </div>
                    </section>
                    <section className="section-2-register">
                        <button onClick={this.handleSubmit}>Sign Up</button>
                        <h1>Already have an account? <a href="/#/login">Login</a></h1>
                    </section>
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
    registerUser
})(Register)