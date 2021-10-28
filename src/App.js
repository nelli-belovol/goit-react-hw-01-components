import './App.css';
import { Profile } from './components/Profile/Profile.js';
import user from './components/Profile/Profile.json';

console.log(user);
function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
}

export default App;
