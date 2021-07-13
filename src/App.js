import React from 'react';

import User from './components/profile/Profile';
import user from './data/user.json';

import Statistics from './components/statistics/Statistics';
import statisticalData from './data/statistical-data.json';

import FriendList from './components/friendList/FriendList';
import friends from './data/friends.json';

import TransactionHistory from './components/transactionHistory/TransactionHistory';
import transactions from './data/transactions.json';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
