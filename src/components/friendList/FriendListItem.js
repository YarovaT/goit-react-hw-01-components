import React from "react";
import defaultAvatar from "../default.svg";
import PropTypes from "prop-types";

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <div>
      <span class="status">{isOnline}</span>
      <img class="avatar" src={avatar} alt={name} width="48" />
      <p class="name">{name}</p>
    </div>
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
