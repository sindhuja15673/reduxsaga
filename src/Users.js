import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GET_USERS } from './actions';

const Users = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const userArray = Array.isArray(users) ? users : [];

  return (
    <div className="container">
      {userArray.map((user, index) => (
        <div className="row" key={index}>
          <div className="col">{user.name}</div>
          <div className="col">
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch({ type: GET_USERS }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
