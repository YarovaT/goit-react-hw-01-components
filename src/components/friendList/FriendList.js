import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

const FriendList = ({ items }) => (
  <ul class="friend-list">
    {items.map(({ id, isOnline, avatar, name }) => (
      <li class="item" key={id}>
        <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
