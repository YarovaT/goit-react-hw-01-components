import React from 'react';
import defaultAvatar from '../default.svg';
import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultAvatar,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
