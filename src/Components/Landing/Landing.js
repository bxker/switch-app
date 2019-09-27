import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';
import './Landing.sass';

export default class Landing extends Component {
    render() {
        return (
            <>
                <div id="landing-main">
                    <section className="section-1-landing">
                        <h1 className="welcome">Welcome</h1>
                        <h1 className="to-switch">To<span className='switch-color'> Switch</span></h1>
                    </section>
                    <section className="section-2-landing">
                        <Link to="/register"><button>Sign Up</button></Link>
                        <Link to="/login"><button id="login-button">Log In</button></Link>
                    </section>
                </div>
                <Footer />
            </>
        )
    }
}
