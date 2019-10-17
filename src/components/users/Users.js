import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

class Users extends Component {

    static defaultProps = {
        isLoading: false,
        users: []
    };

    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        users: PropTypes.array.isRequired,
    }

    render() {
        const { isLoading, users } = this.props;
        if (isLoading) {
            return <Spinner />;
        } else {
            return (
                <div style={userStyle}>
                    {users.map(user => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>
            )
        }
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
};

export default Users
