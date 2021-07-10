import React from "react";

import User from "./components/profile/Profile";
import user from "./components/profile/user.json";

import Statistics from "./components/statistics/Statistics";
import statisticalData from "./components/statistics/statistical-data.json";

import FriendList from "./components/friendList/FriendList";
import friends from "./components/friendList/friends.json";

import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import transactions from "./components/transactionHistory/transactions.json";

const App = () => {
  return (
    <>
      <User
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
