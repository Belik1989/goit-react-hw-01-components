import { Profile } from "./Profile/Profile";
import user from './Profile/user.json';

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
    </div>
  );
};
