import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.sass';
import {connect} from 'react-redux';
import {logoutUser} from '../../redux/reducers/userReducer';

class Header extends Component {
    handleSubmit = () => {
        this.props.logoutUser();
    }

    render(){
        return (
            <div className="header-main">
                <section className="section-1">
                    <Link to="/"><img src="https://i.imgur.com/5s6hSmS.png" alt="logo"></img></Link>
                </section>
                <section className="section-2">
                    {this.props.user_id ?
                        <Link to="/browse"><button>Browse</button></Link> : null}
                    {this.props.user_id ?
                        <Link to='/user/settings'><button>Settings</button></Link> : null}
                    {this.props.user_id ? 
                        <Link to='/'><button id="logout-button" onClick={this.handleSubmit}>Logout</button></Link> : null}
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
    logoutUser
})(Header);