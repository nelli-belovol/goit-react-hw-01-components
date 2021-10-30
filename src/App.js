import './App.css';

import { Profile } from './components/Profile/Profile.js';
import user from './components/Profile/Profile.json';

import { Statistics } from './components/Statistics/Statistics.js';
import statisticalData from './components/Statistics/statistical-data.json';

import { FriendsList } from './components/FriendsList/FriendsList.js';
import friends from './components/FriendsList/friends.json';

import { TransactionHistory } from './components/TransactionHistory/TransactionHistory.js';
import transactions from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <>
      <h1>Homework 1</h1>
      <h2>Task 1</h2>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Task 2</h2>
      <Statistics title="Upload stats" stats={statisticalData} />
      <h2>Task 3</h2>
      <FriendsList friends={friends} />
      <h2>Task 4</h2>
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
