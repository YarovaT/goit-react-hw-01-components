import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(({ id, isOnline, avatar, name }) => (
      <li className="item" key={id}>
        <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
