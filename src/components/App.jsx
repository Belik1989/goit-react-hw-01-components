import { Profile } from "./Profile/Profile";
import user from './Profile/user.json';
import { Statistics } from "./Statistics/Statistics";
import { StatList } from "./Statistics/Stat-list/StatList";
import data from '../components/Statistics/data.json'
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
    </div>
    
  );
}
