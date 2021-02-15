import React from 'react';
import PropTypes from 'prop-types';
import { userReducer } from '../reducers/user';

export class User extends React.Component {
  render() {
    const {name} = this.props;
    return (
      <div>
        <p>Привет, {name}!</p>
      </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired
};