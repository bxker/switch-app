import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {updateStreamTitle} from '../../redux/reducers/userReducer';

class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <h1 style={{color: 'white'}}>{this.props.stream_title}</h1>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return{
        stream_title: reduxState.userReducer.stream_title
    }
}


export default connect(mapStateToProps, {
})(Profile)