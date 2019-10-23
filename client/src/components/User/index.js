import React, { Component } from 'react';

class User extends Component {
    render() {
        return (
            <div className='user'>
                {this.props.user.email}
            </div>
        );
    }
}

export default User;