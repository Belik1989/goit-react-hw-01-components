import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { StatList } from './Statistics/Stat-list/StatList';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import data from '../data/data.json';
import user from '../data/user.json';
import friends from '../data//friends.json';
import items from '../data/transactions.json';

export const App = () => {
  return (
    <div className="App-container">
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats">
        <StatList stats={data} />
      </Statistics>
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </div>
  );
};
