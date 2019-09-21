import React from 'react';
import './Header.sass';
export default function Header() {
    return (
        <div className="header-main">
            <section className="section-1">
                <img src="https://i.imgur.com/5s6hSmS.png" alt="logo"></img>
            </section>
            <section className="section-2">
                <button>Login</button>
                <button>Sign Up</button>
            </section>

        </div>
    )
}
