import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { StatList } from "./Statistics/Stat-list/StatList";
import {FriendList} from './FriendList/FriendList';

import data from '../components/Statistics/data.json';
import user from './Profile/user.json';
import friends from '../components/FriendList/friends.json'

export const App = () => {
  return (
    <div className="App-container">
      <Profile key={user.username} 
              avatar = {user.avatar}
              username= {user.username}
              tag = {user.tag}
              location = {user.location}
              stats = {user.stats}
          />
      <Statistics title = "Upload stats">
        <StatList
              key = {data.id}
              stats = {data}
        />
      </Statistics>
      <FriendList key = {friends.id} friends={friends} />;
    </div>
    
  );
}
