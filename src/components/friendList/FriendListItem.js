import React from 'react';
import defaultAvatar from '../default.svg';
import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <span className={s[isOnline]}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultAvatar,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]).isRequired,
};

export default FriendListItem;
